---
title: Sintaxis Básica de Quetzal
description: Aprende la sintaxis fundamental del Lenguaje Quetzal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Sintaxis Básica de Quetzal

La sintaxis de Quetzal está diseñada para ser clara, expresiva y natural en español. En esta guía aprenderás todas las reglas fundamentales.

## 📜 Reglas Generales

### Características Principales

<CardGrid>
  <Card title="❌ Sin punto y coma" icon="cancel">
    Las instrucciones **NO** terminan con `;`<br>
    `imprimir("Hola mundo")`
  </Card>
  
  <Card title="🔒 Inmutable por defecto" icon="approve-check">
    Variables inmutables a menos que uses `mut`<br>
    `cadena nombre = "Ana"`
  </Card>
  
  <Card title="🇪🇸 Todo en español" icon="translate">
    Palabras clave y sintaxis en español<br>
    `si`, `sino`, `mientras`, `para`
  </Card>
  
  <Card title="📏 Indentación libre" icon="bars">
    Usa espacios o tabs, pero sé consistente<br>
    4 espacios recomendados
  </Card>
</CardGrid>

### Estructura Básica

```javascript
// Comentario de línea

/*
 * Comentario de 
 * múltiples líneas
 */

// Declaración de variables
tipo nombre = valor

// Estructuras de control
si (condición) {
    // código
}

// Funciones
tipo nombre_funcion(parámetros) {
    // código
    retornar valor
}
```

## 🔤 Identificadores y Nombres

### Reglas para Nombres

```javascript
// ✅ Válidos
nombre
nombre_completo
edad_usuario
valor_2024
_privado
CONSTANTE_GLOBAL

// ❌ Inválidos
2nombre        // No puede empezar con número
nombre-usuario // No se permiten guiones
nombre.completo // No se permiten puntos
class          // Palabra reservada (inglés no permitido)
```

### Convenciones Recomendadas

```javascript
// Variables y funciones: snake_case
cadena nombre_usuario = "Ana"
número calcular_promedio(lista<número> valores) { ... }

// Constantes: MAYÚSCULAS_CON_GUIONES
entero EDAD_MAXIMA = 120
cadena MENSAJE_BIENVENIDA = "¡Hola!"

// Clases y objetos: PascalCase
objeto PersonaUsuario { ... }
objeto CalculadoraAvanzada { ... }

// Archivos: minúsculas con guiones
// mi_programa.qz
// calculadora_cientifica.qz
```

## 💾 Declaración de Variables

### Sintaxis Básica

```javascript
// Inmutable (por defecto)
tipo nombre = valor

// Mutable
tipo mut nombre = valor

// Sin inicialización (solo para algunos tipos)
tipo nombre
```

### Ejemplos Prácticos

```javascript
// Variables inmutables
cadena nombre = "María"
entero edad = 25
número altura = 1.70
bool es_activo = verdadero

// Variables mutables
cadena mut apellido = "González"
entero mut contador = 0
número mut saldo = 1000.0

// Modificación de variables mutables
apellido = "Rodríguez"
contador = contador + 1
saldo = saldo * 1.05

// ❌ Error: no se puede modificar inmutable
// nombre = "Ana"  // Error de compilación
```

### Declaración Múltiple

```javascript
// Declaraciones múltiples del mismo tipo
entero a = 1, b = 2, c = 3

// Con mutabilidad
entero mut x = 10, mut y = 20, z = 30

// Tipos diferentes
cadena nombre = "Luis"
entero edad = 30
bool activo = verdadero
```

## 🔧 Tipos de Datos Básicos

### Tipos Primitivos

```javascript
// Vacío (sin valor)
vacio variable_vacia

// Números enteros
entero pequeño = 42
entero negativo = -100
entero grande = 1_000_000

// Números decimales
número pi = 3.14159
número precio = 19.99
número científico = 1.23e-4

// Cadenas de texto
cadena simple = "Hola mundo"
cadena con_escapes = "Línea 1\nLínea 2\tTabulado"
cadena unicode = "Español: ñáéíóú ¡¿"

// Booleanos
bool verdad = verdadero
bool mentira = falso
```

### Literales Especiales

```javascript
// Números con separadores
entero millones = 1_000_000
número decimal_largo = 123_456.789_012

// Cadenas multilínea
cadena texto_largo = """
    Este es un texto
    que abarca múltiples
    líneas preservando
    la estructura.
"""

// Cadenas raw (sin procesar escapes)
cadena ruta = r"C:\Users\Documentos\archivo.txt"

// Interpolación de cadenas
cadena nombre = "Ana"
entero edad = 25
cadena mensaje = "Hola, soy {nombre} y tengo {edad} años"
```

## 🎯 Operadores

### Operadores Aritméticos

```javascript
número a = 10
número b = 3

número suma = a + b          // 13
número resta = a - b         // 7
número multiplicacion = a * b // 30
número division = a / b      // 3.333...
número modulo = a % b        // 1
número potencia = a ** b     // 1000
```

### Operadores de Comparación

```javascript
entero x = 5
entero y = 10

bool igual = x == y          // falso
bool diferente = x != y      // verdadero
bool menor = x < y           // verdadero
bool menor_igual = x <= y    // verdadero
bool mayor = x > y           // falso
bool mayor_igual = x >= y    // falso
```

### Operadores Lógicos

```javascript
bool a = verdadero
bool b = falso

// Y lógico (ambas formas válidas)
bool y_resultado = a y b     // falso
bool y_simbolo = a && b      // falso

// O lógico (ambas formas válidas)
bool o_resultado = a o b     // verdadero
bool o_simbolo = a || b      // verdadero

// Negación
bool negacion = !a           // falso
```

### Operadores de Asignación

```javascript
entero mut numero = 10

numero += 5    // numero = numero + 5 (15)
numero -= 3    // numero = numero - 3 (12)
numero *= 2    // numero = numero * 2 (24)
numero /= 4    // numero = numero / 4 (6)
numero %=5     // numero = numero % 5 (1)

// Incremento y decremento
numero++       // numero = numero + 1 (2)
numero--       // numero = numero - 1 (1)
++numero       // Pre-incremento
--numero       // Pre-decremento
```

### Operador Ternario

```javascript
entero edad = 17
cadena categoria = edad >= 18 ? "Adulto" : "Menor"

// Ternario anidado
cadena nivel = edad < 13 ? "Niño" : 
               edad < 18 ? "Adolescente" : 
               "Adulto"
```

## 🏗️ Estructuras de Control

### Condicionales

```javascript
// If simple
si (edad >= 18) {
    imprimir("Mayor de edad")
}

// If-else
si (calificacion >= 7.0) {
    imprimir("Aprobado")
} sino {
    imprimir("Reprobado")
}

// If-else if-else
si (temperatura < 0) {
    imprimir("Helando")
} sino si (temperatura < 20) {
    imprimir("Frío")
} sino si (temperatura < 30) {
    imprimir("Templado")
} sino {
    imprimir("Caliente")
}

// Condiciones complejas
si (edad >= 18 y tiene_licencia y !tiene_multas) {
    imprimir("Puede conducir")
}
```

### Bucles

```javascript
// Bucle for tradicional
para (entero i = 0; i < 10; i++) {
    imprimir("Número: " + i.cadena())
}

// Bucle while
entero mut contador = 0
mientras (contador < 5) {
    imprimir("Contador: " + contador.cadena())
    contador++
}

// Bucle do-while
hacer {
    imprimir("Ejecutando al menos una vez")
    contador--
} mientras (contador > 0)

// Control de bucles
para (entero i = 0; i < 100; i++) {
    si (i == 50) {
        romper      // Sale del bucle
    }
    si (i % 2 == 0) {
        continuar   // Salta a la siguiente iteración
    }
    imprimir(i.cadena())
}
```

## 📝 Funciones

### Declaración Básica

```javascript
// Función simple
vacio saludar() {
    imprimir("¡Hola!")
}

// Función con parámetros
número sumar(número a, número b) {
    retornar a + b
}

// Función con múltiples parámetros
cadena crear_saludo(cadena nombre, entero edad, bool formal) {
    si (formal) {
        retornar "Buenos días, Sr./Sra. " + nombre
    } sino {
        retornar "¡Hola " + nombre + "! Tienes " + edad.cadena() + " años"
    }
}
```

### Parámetros Especiales

```javascript
// Parámetros por defecto
cadena saludar_con_formato(cadena nombre, cadena formato = "informal") {
    si (formato == "formal") {
        retornar "Buenos días, " + nombre
    }
    retornar "¡Hola " + nombre + "!"
}

// Parámetros mutables
vacio incrementar(entero mut valor) {
    valor = valor + 1
}

// Parámetros variables (futura implementación)
número sumar_varios(...números valores) {
    número total = 0
    para cada número en valores {
        total += número
    }
    retornar total
}
```

## 🗃️ Comentarios y Documentación

### Tipos de Comentarios

```javascript
// Comentario de una línea

/*
 * Comentario de múltiples líneas
 * que puede abarcar varias líneas
 * para explicaciones detalladas
 */

/**
 * Comentario de documentación
 * Se usa para documentar funciones y clases
 * 
 * @param nombre El nombre del usuario
 * @param edad La edad en años
 * @retorna Un mensaje de saludo personalizado
 */
cadena crear_saludo_documentado(cadena nombre, entero edad) {
    retornar "Hola " + nombre + ", tienes " + edad.cadena() + " años"
}
```

### Comentarios TODO y FIXME

```javascript
// TODO: Implementar validación de entrada
// FIXME: Corregir el cálculo de porcentajes
// NOTA: Esta función será deprecada en v0.1.0
// HACK: Solución temporal hasta implementar la API oficial

función procesar_datos() {
    // IMPORTANTE: No modificar sin consultar al equipo
    // código aquí...
}
```

## 🎨 Estilo y Formato

### Convenciones de Formato

```javascript
// ✅ Buen formato
si (condicion_compleja && 
    otra_condicion &&
    tercera_condicion) {
    
    realizar_accion()
    otra_accion()
}

// Funciones con muchos parámetros
número calcular_complejo(
    número base,
    número multiplicador,
    bool aplicar_descuento,
    número porcentaje_impuesto
) {
    // implementación...
}

// Arrays y objetos multilínea
lista<cadena> nombres = [
    "Ana",
    "Luis", 
    "María",
    "Carlos"
]

jsn configuracion = {
    servidor: "localhost",
    puerto: 8080,
    ssl: verdadero,
    timeout: 30
}
```

### Espaciado y Llaves

```javascript
// ✅ Estilo recomendado - llaves en nueva línea
si (condicion) 
{
    codigo()
}

// ✅ También válido - llaves en la misma línea
si (condicion) {
    codigo()
}

// Espaciado alrededor de operadores
número resultado = (a + b) * (c - d)

// Espaciado en llamadas de función
resultado = calcular(valor1, valor2, valor3)
```

## 🔍 Ejemplos Prácticos

### Programa Completo

```javascript
/**
 * Programa de ejemplo que demuestra la sintaxis básica
 * Archivo: ejemplo_sintaxis.qz
 */

// Constantes globales
entero EDAD_MINIMA = 18
cadena MENSAJE_BIENVENIDA = "¡Bienvenido al sistema!"

/**
 * Función principal del programa
 */
vacio principal() {
    imprimir_exito(MENSAJE_BIENVENIDA)
    
    // Variables locales
    cadena nombre = "Usuario"
    entero edad = 25
    bool es_activo = verdadero
    
    // Lógica condicional
    si (edad >= EDAD_MINIMA y es_activo) {
        procesar_usuario(nombre, edad)
    } sino {
        mostrar_error("Usuario no válido")
    }
}

/**
 * Procesa la información de un usuario válido
 */
vacio procesar_usuario(cadena nombre, entero edad) {
    cadena categoria = determinar_categoria(edad)
    cadena mensaje = crear_mensaje_personalizado(nombre, categoria)
    
    imprimir_informacion(mensaje)
}

/**
 * Determina la categoría de edad del usuario
 */
cadena determinar_categoria(entero edad) {
    si (edad < 25) {
        retornar "Joven"
    } sino si (edad < 65) {
        retornar "Adulto"
    } sino {
        retornar "Adulto Mayor"
    }
}

/**
 * Crea un mensaje personalizado
 */
cadena crear_mensaje_personalizado(cadena nombre, cadena categoria) {
    retornar "Hola " + nombre + ", eres categorizado como: " + categoria
}

/**
 * Muestra un mensaje de error
 */
vacio mostrar_error(cadena mensaje) {
    imprimir_error("ERROR: " + mensaje)
}

// Ejecutar programa
principal()
```

## 📋 Lista de Verificación

Para escribir código Quetzal correcto, asegúrate de:

- [ ] No usar punto y coma al final de las líneas
- [ ] Declarar variables como `mut` solo si necesitas modificarlas
- [ ] Usar nombres descriptivos en español
- [ ] Indentar consistentemente (4 espacios recomendados)
- [ ] Usar llaves `{}` para delimitar bloques de código
- [ ] Comentar código complejo en español
- [ ] Seguir las convenciones de nomenclatura
- [ ] Incluir espacios alrededor de operadores
- [ ] Usar `retornar` para devolver valores de funciones

---

<div class="notificacion info">
  <strong>💡 Consejo:</strong> La sintaxis de Quetzal priorizará siempre la claridad sobre la brevedad. Es mejor escribir código que se entienda fácilmente que código compacto pero confuso.
</div>
