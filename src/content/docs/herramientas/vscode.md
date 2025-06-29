---
title: Extensión de VS Code para Quetzal
description: Guía completa de la extensión oficial de Quetzal para Visual Studio Code
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Extensión de VS Code para Quetzal

La extensión oficial de Quetzal para Visual Studio Code proporciona una experiencia de desarrollo completa y optimizada para programar en el Lenguaje Quetzal.

## 📦 Instalación

### Instalación desde VS Code Marketplace

<div class="flex gap-4 mb-6">
  <a href="https://marketplace.visualstudio.com/items?itemName=AntaresGT.lenguaje-quetzal-vscode-extension" class="boton-quetzal">
    🔧 Instalar desde Marketplace
  </a>
</div>

**Método 1: Interfaz Gráfica**
1. Abre Visual Studio Code
2. Presiona `Ctrl+Shift+X` (o `Cmd+Shift+X` en Mac)
3. Busca "Lenguaje Quetzal"
4. Haz clic en "Instalar" en la extensión de AntaresGT

**Método 2: Línea de Comandos**
```bash
code --install-extension AntaresGT.lenguaje-quetzal-vscode-extension
```

**Método 3: Quick Open**
1. Presiona `Ctrl+P` (o `Cmd+P` en Mac)
2. Escribe `ext install AntaresGT.lenguaje-quetzal-vscode-extension`
3. Presiona Enter

## ✨ Características Principales

<CardGrid>
  <Card title="🎨 Resaltado de Sintaxis" icon="pencil">
    Coloreado completo de palabras clave, tipos, funciones y comentarios en Quetzal.
  </Card>
  
  <Card title="🧠 Autocompletado Inteligente" icon="puzzle">
    Sugerencias automáticas de palabras clave, funciones y variables mientras escribes.
  </Card>
  
  <Card title="🔍 Detección de Errores" icon="warning">
    Identificación en tiempo real de errores de sintaxis y tipado.
  </Card>
  
  <Card title="📋 Snippets de Código" icon="document">
    Plantillas predefinidas para estructuras comunes de Quetzal.
  </Card>
  
  <Card title="🔧 Formateo Automático" icon="setting">
    Formateo inteligente del código según las convenciones de Quetzal.
  </Card>
  
  <Card title="🐛 Debugging Integrado" icon="bug">
    Herramientas de depuración directamente en VS Code.
  </Card>
</CardGrid>

## 🎨 Resaltado de Sintaxis

La extensión incluye un esquema de colores específicamente diseñado para Quetzal:

```javascript
// Ejemplo de resaltado de sintaxis
imprimir_exito("=== EJEMPLO DE RESALTADO ===")

// Tipos de datos con colores específicos
entero edad = 25                    // Palabra clave 'entero' en azul
cadena nombre = "María"             // Palabra clave 'cadena' en azul
número precio = 19.99               // Palabra clave 'número' en azul
bool activo = verdadero             // Palabras clave en azul

// Funciones con resaltado
número calcular_total(número base, número impuesto) {
    // Palabra clave 'retornar' resaltada
    retornar base + (base * impuesto)
}

// Estructuras de control resaltadas
si (edad >= 18) {                   // 'si' resaltado en púrpura
    imprimir_exito("Mayor de edad") // Función resaltada en verde
} sino {                            // 'sino' resaltado en púrpura
    imprimir_advertencia("Menor")   // Función resaltada en amarillo
}

// Objetos y clases
objeto Persona {                    // 'objeto' resaltado
    cadena nombre
    entero edad
    
    Persona(cadena n, entero e) {   // Constructor resaltado
        ambiente.nombre = n         // 'ambiente' resaltado
        ambiente.edad = e
    }
}
```

### Esquema de Colores

| Elemento | Color | Descripción |
|----------|-------|-------------|
| Palabras clave de tipos | `#569CD6` | `entero`, `cadena`, `número`, `bool` |
| Estructuras de control | `#C586C0` | `si`, `sino`, `mientras`, `para` |
| Funciones del sistema | `#4EC9B0` | `imprimir`, `imprimir_exito`, etc. |
| Literales de cadena | `#CE9178` | `"texto entre comillas"` |
| Números | `#B5CEA8` | `42`, `3.14`, etc. |
| Comentarios | `#6A9955` | `// comentarios` y `/* bloques */` |
| Operadores | `#D4D4D4` | `+`, `-`, `==`, `!=`, etc. |

## 🧠 Autocompletado Inteligente

### Sugerencias de Palabras Clave

Mientras escribes, la extensión sugiere automáticamente:

```javascript
// Escribir 'en' activa sugerencias:
// - entero
// - en (palabra reservada)

// Escribir 'imp' sugiere:
// - imprimir
// - imprimir_exito
// - imprimir_error
// - imprimir_advertencia
// - imprimir_informacion
```

### Autocompletado de Funciones

```javascript
// Al escribir 'función' se genera automáticamente:
tipo nombre_funcion(parametros) {
    // código aquí
    retornar valor
}

// Al escribir 'si' se expande a:
si (condicion) {
    // código
}

// Al escribir 'para' se expande a:
para (entero i = 0; i < limite; i++) {
    // código
}
```

### Sugerencias Contextuales

La extensión analiza el contexto y sugiere:

- **Variables disponibles** en el scope actual
- **Métodos de objetos** cuando usas el operador `.`
- **Propiedades JSON** cuando trabajas con objetos `jsn`
- **Tipos válidos** en declaraciones de variables

## 📋 Snippets Predefinidos

### Snippets de Estructuras Básicas

| Trigger | Expansión | Descripción |
|---------|-----------|-------------|
| `func` | Función básica | Plantilla de función con parámetros |
| `obj` | Objeto/clase | Estructura de objeto con constructor |
| `if` | Condicional | Estructura if-sino |
| `for` | Bucle for | Bucle for con contador |
| `while` | Bucle while | Bucle while básico |
| `try` | Try-catch | Manejo de excepciones |

### Ejemplo de Snippet de Función

```javascript
// Escribir 'func' + Tab genera:
${1:tipo} ${2:nombre_funcion}(${3:parametros}) {
    ${4:// código aquí}
    retornar ${5:valor}
}
```

### Snippet de Objeto

```javascript
// Escribir 'obj' + Tab genera:
objeto ${1:NombreObjeto} {
    ${2:// propiedades}
    
    ${1:NombreObjeto}(${3:parametros}) {
        ${4:// constructor}
    }
    
    ${5:// métodos}
}
```

## 🔍 Detección de Errores

### Errores de Sintaxis

La extensión detecta y marca errores comunes:

```javascript
// ❌ Error: Punto y coma no permitido
imprimir("Hola");  // Subrayado rojo

// ❌ Error: Palabra clave en inglés
function test() {  // Subrayado rojo: usar 'función'

// ❌ Error: Variable no declarada
resultado = x + y  // x, y no declaradas

// ❌ Error: Tipo incorrecto
entero edad = "25"  // String en variable entero
```

### Advertencias de Estilo

```javascript
// ⚠️ Advertencia: Variable no utilizada
cadena mensaje = "Hola"  // Subrayado amarillo si no se usa

// ⚠️ Advertencia: Función sin retorno explícito
entero calcular() {
    // Sin 'retornar' - advertencia
}

// ⚠️ Advertencia: Variable mutable innecesaria
cadena mut nombre = "Ana"  // Si nunca se modifica
```

### Información Contextual

```javascript
// 💡 Sugerencia: Hover sobre variables muestra tipo
entero edad = 25  // Hover muestra: "entero edad"

// 💡 Sugerencia: Hover sobre funciones muestra signatura
número sumar(número a, número b) { ... }
// Hover en 'sumar' muestra: "número sumar(número a, número b)"
```

## 🔧 Configuración de la Extensión

### Configuración Básica

```json
// settings.json
{
  // Ruta del intérprete de Quetzal
  "quetzal.interprete.ruta": "C:\\Quetzal\\bin\\quetzal.exe",
  
  // Habilitar autocompletado
  "quetzal.autocompletado.habilitado": true,
  
  // Formateo automático al guardar
  "quetzal.formato.automatico": true,
  
  // Verificación de errores en tiempo real
  "quetzal.verificacion.tiempo_real": true,
  
  // Mostrar información de tipos en hover
  "quetzal.hover.tipos": true,
  
  // Nivel de logging
  "quetzal.log.nivel": "info"
}
```

### Configuración Avanzada

```json
{
  // Configuración de snippets
  "quetzal.snippets.habilitados": true,
  "quetzal.snippets.personalizados": true,
  
  // Configuración de debugging
  "quetzal.debug.habilitado": true,
  "quetzal.debug.puerto": 9229,
  
  // Configuración de formato
  "quetzal.formato.espacios_indentacion": 4,
  "quetzal.formato.insertar_espacios": true,
  "quetzal.formato.longitud_linea_maxima": 100,
  
  // Configuración de errores
  "quetzal.errores.mostrar_en_editor": true,
  "quetzal.errores.mostrar_en_panel": true,
  
  // Integración con terminal
  "quetzal.terminal.shell": "powershell",
  "quetzal.terminal.ejecutar_en_terminal_integrado": true
}
```

## 🎯 Comandos Disponibles

### Comandos Principales

| Comando | Atajo | Descripción |
|---------|-------|-------------|
| `Quetzal: Ejecutar Archivo` | `Ctrl+F5` | Ejecuta el archivo actual |
| `Quetzal: Verificar Sintaxis` | `Ctrl+Shift+C` | Verifica sintaxis sin ejecutar |
| `Quetzal: Formatear Documento` | `Shift+Alt+F` | Formatea el código actual |
| `Quetzal: Mostrar Información` | `Ctrl+K Ctrl+I` | Muestra info de símbolo |

### Comandos de Terminal

```json
// tasks.json - Configuración de tareas
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Ejecutar Quetzal",
      "type": "shell",
      "command": "quetzal",
      "args": ["ejecutar", "${file}"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    },
    {
      "label": "Verificar Sintaxis",
      "type": "shell",
      "command": "quetzal",
      "args": ["verificar", "${file}"],
      "group": "test"
    }
  ]
}
```

## 🐛 Debugging

### Configuración de Launch

```json
// launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Ejecutar Quetzal",
      "type": "quetzal",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "args": [],
      "stopOnEntry": false
    },
    {
      "name": "Debug Quetzal",
      "type": "quetzal",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "args": ["--debug"],
      "stopOnEntry": true
    }
  ]
}
```

### Características de Debug

- **Breakpoints**: Coloca puntos de interrupción haciendo clic en el margen
- **Step Over/Into/Out**: Navega línea por línea
- **Variables Watch**: Observa valores de variables en tiempo real
- **Call Stack**: Ve la pila de llamadas actual
- **Console**: Evalúa expresiones en tiempo de ejecución

## 📁 Organización de Archivos

### Estructura Recomendada

```
mi_proyecto_quetzal/
├── src/
│   ├── principal.qz           // Archivo principal
│   ├── utilidades/
│   │   ├── matematicas.qz
│   │   └── texto.qz
│   └── objetos/
│       ├── usuario.qz
│       └── producto.qz
├── pruebas/
│   ├── test_matematicas.qz
│   └── test_usuario.qz
├── docs/
│   └── README.md
└── .vscode/
    ├── settings.json
    ├── tasks.json
    └── launch.json
```

### Configuración de Workspace

```json
// .vscode/settings.json específico del proyecto
{
  "files.associations": {
    "*.qz": "quetzal"
  },
  "quetzal.proyecto.carpeta_fuente": "./src",
  "quetzal.proyecto.carpeta_pruebas": "./pruebas",
  "quetzal.proyecto.archivo_principal": "./src/principal.qz"
}
```

## 🚀 Flujo de Trabajo Recomendado

### 1. Creación de Proyecto

```bash
# Crear estructura de proyecto
mkdir mi_proyecto_quetzal
cd mi_proyecto_quetzal
mkdir src pruebas docs .vscode

# Crear archivo principal
echo 'imprimir_exito("¡Hola Quetzal!")' > src/principal.qz
```

### 2. Configuración Inicial

1. Abre el proyecto en VS Code
2. Instala la extensión de Quetzal
3. Configura `settings.json` y `tasks.json`
4. Crea tu primer archivo `.qz`

### 3. Desarrollo

1. **Escribir código** con autocompletado y snippets
2. **Verificar sintaxis** con `Ctrl+Shift+C`
3. **Formatear código** con `Shift+Alt+F`
4. **Ejecutar programa** con `Ctrl+F5`

### 4. Testing y Debug

1. **Colocar breakpoints** en líneas críticas
2. **Ejecutar en modo debug** con `F5`
3. **Revisar variables** en el panel de debug
4. **Iterar y mejorar** el código

## 📊 Estadísticas y Métricas

La extensión también proporciona:

- **Conteo de líneas** de código Quetzal
- **Análisis de complejidad** básico
- **Métricas de rendimiento** del código
- **Estadísticas de uso** de la extensión

## 🔄 Actualizaciones

### Actualizaciones Automáticas

VS Code actualiza automáticamente la extensión cuando hay nuevas versiones disponibles.

### Actualizaciones Manuales

```bash
# Verificar versión actual
code --list-extensions --show-versions | grep quetzal

# Actualizar manualmente
code --install-extension AntaresGT.lenguaje-quetzal-vscode-extension --force
```

## 🆘 Solución de Problemas

### Problemas Comunes

<CardGrid>
  <Card title="Extensión no funciona" icon="warning">
    **Solución**: Reinicia VS Code y verifica que Quetzal esté instalado en el sistema.
  </Card>
  
  <Card title="No hay autocompletado" icon="puzzle">
    **Solución**: Verifica que la configuración `quetzal.autocompletado.habilitado` esté en `true`.
  </Card>
  
  <Card title="Errores no se muestran" icon="error">
    **Solución**: Configura correctamente la ruta del intérprete en `quetzal.interprete.ruta`.
  </Card>
  
  <Card title="Debugging no funciona" icon="bug">
    **Solución**: Asegúrate de que el archivo `launch.json` esté configurado correctamente.
  </Card>
</CardGrid>

### Logs de Debugging

```json
// Habilitar logs detallados
{
  "quetzal.log.nivel": "debug",
  "quetzal.log.archivo": "./quetzal-extension.log"
}
```

---

<div class="notificacion success">
  <strong>🎉 ¡Perfecto!</strong><br>
  Ya tienes toda la información necesaria para usar la extensión de Quetzal en VS Code de manera óptima. ¡Disfruta programando en español!
</div>
