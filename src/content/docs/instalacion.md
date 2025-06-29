---
title: Instalación de Quetzal
description: Guía completa para instalar el Lenguaje Quetzal en tu sistema
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Instalación del Lenguaje Quetzal

¡Instalar Quetzal es increíblemente sencillo! Con solo **56KB** de espacio y en menos de 30 segundos tendrás todo listo para programar.

## 📋 Requisitos del Sistema

### Sistemas Compatibles
<div class="notificacion info">
  <strong>Versión Actual:</strong> v0.0.1 - Solo compatible con Windows
</div>

- **Sistema Operativo**: Windows 10/11 (64-bit)
- **Espacio en disco**: 56KB mínimo
- **RAM**: 256MB mínimo
- **Procesador**: Cualquier procesador x64

### Próximas Versiones
Las siguientes plataformas están planificadas para futuras versiones:
- 🚧 Linux (Ubuntu, Fedora, Arch)
- 🚧 macOS (Intel y Apple Silicon)
- 🚧 FreeBSD

## 🚀 Instalación Rápida

### Paso 1: Descargar el Ejecutable

<div class="flex gap-4 mb-6">
  <a href="https://github.com/AntaresGT/lenguaje-quetzal/releases/latest" class="boton-quetzal">
    📥 Descargar Quetzal v0.0.1
  </a>
</div>

1. Ve al repositorio oficial en GitHub
2. Dirígete a la sección **Releases**
3. Descarga `quetzal-v0.0.1-windows.exe` (56KB)

### Paso 2: Configurar el Entorno

#### Opción A: Instalación Automática (Recomendada)
```powershell
# Ejecuta el instalador
.\quetzal-v0.0.1-windows.exe --install

# Verifica la instalación
quetzal --version
```

#### Opción B: Instalación Manual
```powershell
# Crea el directorio de Quetzal
mkdir C:\Quetzal
mkdir C:\Quetzal\bin

# Copia el ejecutable
copy quetzal-v0.0.1-windows.exe C:\Quetzal\bin\quetzal.exe

# Añade al PATH del sistema
# Windows + R -> sysdm.cpl -> Variables de entorno
# Agregar C:\Quetzal\bin al PATH
```

### Paso 3: Verificar la Instalación

```powershell
# Verifica que Quetzal esté correctamente instalado
quetzal --version
# Salida esperada: Quetzal v0.0.1

# Prueba un programa simple
echo 'imprimir_exito("¡Hola Quetzal!")' > hola.qz
quetzal ejecutar hola.qz
```

## 🔧 Configuración del Editor

### Extensión para Visual Studio Code (Recomendada)

<div class="tarjeta-caracteristica">
  <h3>🎯 Funciones de la Extensión</h3>
  <ul>
    <li>✅ Resaltado de sintaxis completo</li>
    <li>✅ Autocompletado inteligente</li>
    <li>✅ Detección de errores en tiempo real</li>
    <li>✅ Snippets de código</li>
    <li>✅ Formateo automático</li>
    <li>✅ Debugging integrado</li>
  </ul>
</div>

#### Instalación de la Extensión

**Método 1: Desde VS Code Marketplace**
1. Abre Visual Studio Code
2. Ve a Extensions (Ctrl+Shift+X)
3. Busca "Lenguaje Quetzal"
4. Instala la extensión oficial de AntaresGT

**Método 2: Desde el enlace directo**
<a href="https://marketplace.visualstudio.com/items?itemName=AntaresGT.lenguaje-quetzal-vscode-extension" class="boton-quetzal">
  🔧 Instalar Extensión VS Code
</a>

**Método 3: Desde la línea de comandos**
```bash
code --install-extension AntaresGT.lenguaje-quetzal-vscode-extension
```

### Configuración Inicial de VS Code

Después de instalar la extensión, configura VS Code para Quetzal:

```json
// settings.json
{
  "quetzal.interprete.ruta": "C:\\Quetzal\\bin\\quetzal.exe",
  "quetzal.autocompletado.habilitado": true,
  "quetzal.formato.automatico": true,
  "quetzal.debug.habilitado": true,
  "files.associations": {
    "*.qz": "quetzal"
  }
}
```

## 🎮 Primer Programa

Vamos a crear tu primer programa en Quetzal para verificar que todo funciona:

### 1. Crear el archivo

```javascript
// archivo: mi_primer_programa.qz
imprimir_exito("===========================")
imprimir_exito("  ¡BIENVENIDO A QUETZAL!   ")
imprimir_exito("===========================")

cadena nombre = "Programador"
imprimir("Hola " + nombre + ", ya tienes Quetzal funcionando.")

// Demostrar algunas características
entero año_actual = 2025
número version = 0.1
bool esta_funcionando = verdadero

imprimir_informacion("Información del sistema:")
imprimir("📅 Año: " + año_actual.cadena())
imprimir("🔢 Versión: " + version.cadena())
imprimir("✅ Estado: " + esta_funcionando.cadena())

// Función simple
número calcular_cuadrado(número numero) {
    retornar numero * numero
}

número resultado = calcular_cuadrado(5)
imprimir_exito("El cuadrado de 5 es: " + resultado.cadena())
```

### 2. Ejecutar el programa

```powershell
# Ejecuta tu primer programa
quetzal ejecutar mi_primer_programa.qz
```

### 3. Salida esperada

<div class="consola-ejemplo">
<div class="prompt">quetzal@terminal:~$</div> quetzal ejecutar mi_primer_programa.qz
<div class="success">===========================</div>
<div class="success">  ¡BIENVENIDO A QUETZAL!   </div>
<div class="success">===========================</div>
<div class="output">Hola Programador, ya tienes Quetzal funcionando.</div>
<div class="warning">📊 Información del sistema:</div>
<div class="output">📅 Año: 2025</div>
<div class="output">🔢 Versión: 0.1</div>
<div class="output">✅ Estado: verdadero</div>
<div class="success">El cuadrado de 5 es: 25</div>
<div class="prompt">quetzal@terminal:~$</div>
</div>

## 🛠️ Solución de Problemas

### Errores Comunes

<CardGrid>
  <Card title="'quetzal' no se reconoce" icon="error">
    **Causa**: El PATH no está configurado correctamente<br>
    **Solución**: Verificar que `C:\Quetzal\bin` esté en las variables de entorno
  </Card>
  
  <Card title="Archivo no encontrado" icon="warning">
    **Causa**: El archivo .qz no existe o ruta incorrecta<br>
    **Solución**: Verificar la ruta del archivo y que tenga extensión `.qz`
  </Card>
  
  <Card title="Error de permisos" icon="forbidden">
    **Causa**: Windows está bloqueando el ejecutable<br>
    **Solución**: Ejecutar como administrador la primera vez
  </Card>
  
  <Card title="Extensión VS Code no funciona" icon="puzzle">
    **Causa**: Extensión no instalada o VS Code desactualizado<br>
    **Solución**: Actualizar VS Code y reinstalar la extensión
  </Card>
</CardGrid>

### Verificar la Instalación

Ejecuta estos comandos para diagnosticar problemas:

```powershell
# Verificar versión
quetzal --version

# Verificar configuración
quetzal --info

# Ejecutar diagnósticos
quetzal --diagnostico

# Mostrar ayuda
quetzal --ayuda
```

## 📚 Comandos Útiles

### Comandos Básicos
```powershell
# Ejecutar un programa
quetzal ejecutar archivo.qz

# Verificar sintaxis sin ejecutar
quetzal verificar archivo.qz

# Compilar a bytecode (futuro)
quetzal compilar archivo.qz

# Modo interactivo
quetzal repl

# Mostrar ayuda
quetzal --ayuda
```

### Opciones Avanzadas
```powershell
# Ejecutar con debugging
quetzal ejecutar archivo.qz --debug

# Mostrar tiempo de ejecución
quetzal ejecutar archivo.qz --tiempo

# Verificar memoria utilizada
quetzal ejecutar archivo.qz --memoria

# Modo verboso
quetzal ejecutar archivo.qz --verboso
```

## 🔄 Actualizar Quetzal

Para futuras actualizaciones:

```powershell
# Verificar si hay actualizaciones
quetzal --actualizar-verificar

# Descargar e instalar actualización
quetzal --actualizar

# Mostrar historial de versiones
quetzal --versiones
```

## 🎯 Próximos Pasos

Una vez que tengas Quetzal instalado y funcionando:

1. **[Primeros pasos](/primeros-pasos/)** - Aprende los conceptos básicos
2. **[Sintaxis fundamental](/fundamentos/sintaxis-basica/)** - Domina la sintaxis
3. **[Ejemplos prácticos](/ejemplos/basicos/)** - Practica con código real
4. **[Configurar VS Code](/herramientas/vscode/)** - Optimiza tu entorno de desarrollo

---

<div class="notificacion success">
  <strong>🎉 ¡Felicitaciones!</strong><br>
  Ya tienes Quetzal instalado y listo para usar. ¡Es hora de comenzar a programar en español!
</div>
