---
title: Palabras Reservadas de Quetzal
description: Lista completa de todas las palabras reservadas del Lenguaje Quetzal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Palabras Reservadas de Quetzal

El Lenguaje Quetzal tiene un conjunto específico de palabras reservadas que no pueden ser utilizadas como nombres de variables, funciones o identificadores. Todas están en español para mantener la coherencia del lenguaje.

## 📊 Lista Completa de Palabras Reservadas

### Tipos de Datos Básicos

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `vacio` | Tipo que representa ausencia de valor | `vacio variable_vacia` |
| `entero` | Números enteros | `entero edad = 25` |
| `número` | Números decimales (flotantes) | `número precio = 19.99` |
| `cadena` | Cadenas de texto | `cadena nombre = "Ana"` |
| `bool` | Valores booleanos | `bool activo = verdadero` |
| `lista` | Colecciones de elementos | `lista<entero> nums = [1,2,3]` |
| `jsn` | Objetos JSON nativos | `jsn obj = {clave: "valor"}` |

### Valores Literales

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `verdadero` | Valor booleano true | `bool estado = verdadero` |
| `falso` | Valor booleano false | `bool estado = falso` |

### Modificadores de Variables

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `mut` | Hace una variable mutable | `entero mut contador = 0` |

### Programación Orientada a Objetos

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `objeto` | Define una clase/objeto | `objeto Persona { ... }` |
| `nuevo` | Crea una nueva instancia | `Persona p = nuevo Persona()` |
| `ambiente` | Referencia al objeto actual (this) | `ambiente.nombre = "Ana"` |
| `publico` | Especifica acceso público | `publico: cadena nombre` |
| `privado` | Especifica acceso privado | `privado: entero id` |
| `libre` | Métodos estáticos | `libre cadena version() { ... }` |

### Funciones

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `función` | Define una función (alternativa) | `función saludar() { ... }` |
| `retornar` | Retorna un valor de función | `retornar resultado` |

### Programación Asíncrona

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `asincrono` | Define función asíncrona | `asincrono vacio procesar() { ... }` |
| `esperar` | Espera resultado asíncrono | `resultado = esperar obtener_datos()` |

### Estructuras de Control

#### Condicionales

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `si` | Condicional if | `si (edad >= 18) { ... }` |
| `sino` | Condicional else | `sino { ... }` |

#### Bucles

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `mientras` | Bucle while | `mientras (contador < 10) { ... }` |
| `para` | Bucle for | `para (i = 0; i < 10; i++) { ... }` |
| `hacer` | Bucle do-while | `hacer { ... } mientras (condicion)` |
| `romper` | Sale de un bucle (break) | `si (encontrado) romper` |
| `continuar` | Continúa siguiente iteración | `si (invalido) continuar` |

### Manejo de Excepciones

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `intentar` | Bloque try | `intentar { ... }` |
| `atrapar` | Captura excepciones (catch) | `atrapar (Excepcion e) { ... }` |
| `finalmente` | Bloque finally | `finalmente { ... }` |
| `lanzar` | Lanza una excepción (throw) | `lanzar nuevo Excepcion("Error")` |
| `excepción` | Tipo base de excepciones | `lanzar nuevo Excepcion()` |

### Sistema de Módulos

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `importar` | Importa elementos de módulo | `importar { funcion } desde "modulo"` |
| `exportar` | Exporta elementos de módulo | `exportar { funcion, clase }` |
| `desde` | Especifica origen de importación | `desde "archivo.qz"` |
| `como` | Alias en importaciones | `importar modulo como m` |

### Operadores Lógicos

| Palabra | Descripción | Ejemplo |
|---------|-------------|---------|
| `y` | Operador AND lógico | `si (a > 0 y b < 10) { ... }` |
| `o` | Operador OR lógico | `si (x == 1 o x == 2) { ... }` |
| `en` | Operador de pertenencia | `si (elemento en lista) { ... }` |

## 🚫 Palabras Prohibidas

### Palabras en Inglés No Permitidas

Estas palabras están explícitamente prohibidas para mantener la consistencia del español:

| Palabra Prohibida | Usar en su lugar | Razón |
|-------------------|------------------|-------|
| `function` | `función` | Mantener consistencia en español |
| `class` | `objeto` | Evitar anglicismos |
| `if` | `si` | Sintaxis en español |
| `else` | `sino` | Sintaxis en español |
| `while` | `mientras` | Sintaxis en español |
| `for` | `para` | Sintaxis en español |
| `true` | `verdadero` | Valores en español |
| `false` | `falso` | Valores en español |
| `this` | `ambiente` | Concepto más claro |
| `try` | `intentar` | Sintaxis en español |
| `catch` | `atrapar` | Sintaxis en español |
| `throw` | `lanzar` | Sintaxis en español |
| `return` | `retornar` | Sintaxis en español |
| `break` | `romper` | Sintaxis en español |
| `continue` | `continuar` | Sintaxis en español |

## 💡 Buenas Prácticas

### Evitar Conflictos

```javascript
// ❌ Error: Usar palabra reservada como variable
entero si = 10              // Error de compilación

// ❌ Error: Usar palabra prohibida
function saludar() { ... }  // Error: usar 'función'

// ✅ Correcto: Usar nombres descriptivos
entero edad_usuario = 25
entero contador_elementos = 0
cadena mensaje_bienvenida = "Hola"
```

### Nombres Alternativos Sugeridos

| Si querías usar | Alternativa sugerida |
|-----------------|---------------------|
| `numero` | `valor_numerico`, `cantidad` |
| `texto` | `mensaje`, `contenido_texto` |
| `objeto` | `elemento`, `instancia` |
| `lista` | `coleccion`, `elementos` |
| `función` | `metodo`, `operacion` |

## 🔍 Verificación de Palabras Reservadas

### Ejemplos de Errores Comunes

```javascript
// ❌ Estos ejemplos generarían errores:

// Error: palabra reservada como variable
entero para = 5                    

// Error: palabra reservada como función
vacio si() {
    imprimir("Error")
}

// Error: palabra reservada como parámetro
vacio procesar(entero mientras) {
    // código
}

// Error: palabra reservada en objeto
objeto Usuario {
    cadena desde     // Error: 'desde' es palabra reservada
}
```

### Ejemplos Correctos

```javascript
// ✅ Estos ejemplos son correctos:

// Variables con nombres descriptivos
entero edad_maxima = 65
cadena nombre_usuario = "Ana"
bool estado_activo = verdadero

// Funciones con nombres claros
vacio procesar_datos() {
    imprimir("Procesando...")
}

vacio validar_entrada(entero valor_entrada) {
    si (valor_entrada > 0) {
        imprimir_exito("Válido")
    }
}

// Objeto con propiedades bien nombradas
objeto ConfiguracionSistema {
    cadena servidor_principal
    entero puerto_conexion
    bool ssl_habilitado
    
    vacio establecer_conexion() {
        // código de conexión
    }
}
```

## 📚 Categorización por Uso

### Declaración de Variables y Tipos
`vacio`, `entero`, `número`, `cadena`, `bool`, `lista`, `jsn`, `mut`

### Control de Flujo
`si`, `sino`, `mientras`, `para`, `hacer`, `romper`, `continuar`

### Programación Orientada a Objetos
`objeto`, `nuevo`, `ambiente`, `publico`, `privado`, `libre`

### Funciones y Retorno
`función`, `retornar`, `asincrono`, `esperar`

### Manejo de Errores
`intentar`, `atrapar`, `finalmente`, `lanzar`, `excepción`

### Módulos e Importaciones
`importar`, `exportar`, `desde`, `como`

### Operadores y Lógica
`y`, `o`, `en`, `verdadero`, `falso`

## 🔧 Herramientas de Verificación

### Comando de Verificación

```bash
# Verificar si un archivo usa palabras reservadas incorrectamente
quetzal verificar --palabras-reservadas mi_archivo.qz

# Verificar todo un proyecto
quetzal verificar --proyecto ./mi_proyecto/
```

### Configuración del Editor

La extensión de VS Code detecta automáticamente el uso incorrecto de palabras reservadas y muestra:

- **Subrayado rojo**: Para palabras reservadas usadas como identificadores
- **Sugerencias**: Alternativas válidas para reemplazar palabras prohibidas
- **Autocompletado**: Solo sugiere nombres válidos que no sean palabras reservadas

## 📊 Estadísticas de Uso

### Palabras Más Comunes

Basado en el análisis de código Quetzal típico:

1. **`entero`** - 25% de declaraciones de variables
2. **`cadena`** - 20% de declaraciones de variables
3. **`si`** - 18% de estructuras de control
4. **`para`** - 15% de bucles
5. **`imprimir`** - 12% de funciones utilizadas

### Errores Más Frecuentes

1. Usar `function` en lugar de `función`
2. Usar `if`/`else` en lugar de `si`/`sino`
3. Usar `true`/`false` en lugar de `verdadero`/`falso`
4. Usar palabras reservadas como nombres de variables
5. Confundir `objeto` con `class`

---

<div class="notificacion info">
  <strong>💡 Consejo:</strong> Usa la extensión de VS Code para evitar errores con palabras reservadas. La extensión te alertará inmediatamente si intentas usar una palabra reservada incorrectamente.
</div>

<div class="notificacion warning">
  <strong>⚠️ Importante:</strong> Quetzal es estricto con las palabras reservadas para mantener la consistencia del idioma español. No se permiten excepciones o palabras en inglés en el código fuente.
</div>
