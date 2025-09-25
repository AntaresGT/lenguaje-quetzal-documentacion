"""Script para generar archivos de otros idiomas reutilizando el contenido en español."""
import os
import time
from pathlib import Path
import yaml
import requests
from requests import RequestException

BASE_DOCS = Path('src/content/docs')
IDIOMAS = {
    'en': {
        'codigo': 'en',
        'mensaje': 'Translation in progress. The following content is temporarily shown in Spanish.',
    },
    'id': {
        'codigo': 'id',
        'mensaje': 'Terjemahan sedang dalam proses. Konten berikut ditampilkan sementara dalam bahasa Spanyol.',
    },
    'ja': {
        'codigo': 'ja',
        'mensaje': '翻訳は進行中です。完成までの間、以下のコンテンツはスペイン語版を表示しています。',
    },
}


def cargar_frontmatter(ruta: Path) -> dict:
    """Extrae el frontmatter YAML de un archivo MDX."""
    contenido = ruta.read_text(encoding='utf-8')
    partes = contenido.split('---', 2)
    if len(partes) < 3:
        raise ValueError(f'El archivo {ruta} no contiene un frontmatter válido')
    return yaml.safe_load(partes[1])


def crear_archivo_idioma(ruta_es: Path, idioma: str, datos_front: dict, mensaje: str) -> None:
    """Genera un archivo MDX para un idioma específico reutilizando el contenido original."""
    destino = BASE_DOCS / idioma / ruta_es.relative_to(BASE_DOCS)
    destino.parent.mkdir(parents=True, exist_ok=True)
    ruta_relativa = Path(
        os.path.relpath(ruta_es, destino.parent)
    ).as_posix()

    yaml_dump = yaml.safe_dump(datos_front, sort_keys=False, allow_unicode=True).strip()

    contenido = (
        f"---\n{yaml_dump}\n---\n\n"
        "import { Aside } from '@astrojs/starlight/components';\n"
        f"import ContenidoOriginal from '{ruta_relativa}';\n\n"
        "<Aside type=\"note\">\n"
        f"  <p>{mensaje}</p>\n"
        "</Aside>\n\n"
        "<ContenidoOriginal />\n"
    )
    destino.write_text(contenido, encoding='utf-8')


def traducir_texto(texto: str, codigo_idioma: str, nombre_idioma: str) -> str:
    """Intenta traducir un texto con la API pública de Google Translate."""
    if not texto:
        return texto

    url = 'https://translate.googleapis.com/translate_a/single'
    params = {'client': 'gtx', 'sl': 'es', 'tl': codigo_idioma, 'dt': 't', 'q': texto}

    for _ in range(5):
        try:
            respuesta = requests.get(url, params=params, timeout=10)
            respuesta.raise_for_status()
            datos = respuesta.json()
            return ''.join(segmento[0] for segmento in datos[0])
        except (RequestException, ValueError):
            time.sleep(1)

    print(f"Aviso: no se pudo traducir '{texto}' al idioma {nombre_idioma}. Se conservará el original.")
    return texto


def main() -> None:
    archivos = [
        ruta
        for ruta in BASE_DOCS.rglob('*.mdx')
        if 'en/' not in ruta.as_posix()
        and 'id/' not in ruta.as_posix()
        and 'ja/' not in ruta.as_posix()
        and ruta.name != 'index.mdx'
    ]

    for ruta in archivos:
        front = cargar_frontmatter(ruta)
        titulo_es = front.get('title', '')
        descripcion_es = front.get('description')

        for idioma, config in IDIOMAS.items():
            print(f"Traduciendo {ruta.relative_to(BASE_DOCS)} -> {idioma}")
            titulo = traducir_texto(titulo_es, config['codigo'], idioma) if titulo_es else ''
            front_idioma: dict[str, object] = {}
            if titulo:
                front_idioma['title'] = titulo
            if descripcion_es:
                front_idioma['description'] = traducir_texto(descripcion_es, config['codigo'], idioma)

            crear_archivo_idioma(ruta, idioma, front_idioma, config['mensaje'])


if __name__ == '__main__':
    main()
