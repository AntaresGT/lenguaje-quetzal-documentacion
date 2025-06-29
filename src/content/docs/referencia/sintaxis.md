---
title: Sintaxis Completa
description: Guía completa de la sintaxis del Lenguaje de Programación Quetzal
---

# Sintaxis Completa de Quetzal

Esta guía contiene toda la sintaxis del Lenguaje de Programación Quetzal, desde los elementos básicos hasta las construcciones más avanzadas.

## Comentarios

### Comentarios de Línea

```javascript
// Esto es un comentario de línea
imprimir("Hola mundo")  // Comentario al final de línea
```

### Comentarios de Bloque

```javascript
/*
  Este es un comentario
  de múltiples líneas
  que puede abarcar varios párrafos
*/

/*
 * Comentario con formato
 * usando asteriscos para
 * mayor legibilidad
 */
```

### Comentarios de Documentación

```javascript
/**
 * Función que calcula el área de un círculo
 * @param radio El radio del círculo
 * @devuelve El área calculada
 */
numero calcular_area(numero radio) {
    devolver 3.14159 * radio * radio
}
```

## Declaración de Variables

### Declaración Explícita

```javascript
// Tipos básicos
cadena nombre = "Juan Pérez"
entero edad = 25
decimal altura = 1.75
booleano activo = verdadero
caracter inicial = 'J'

// Tipos de colección
lista numeros = [1, 2, 3, 4, 5]
objeto persona = {nombre: "Ana", edad: 30}

// Tipos especiales
promesa<cadena> datos_remotos = obtener_datos_servidor()
```

### Declaración con Inferencia

```javascript
// El tipo se infiere automáticamente
let nombre = "María"        // inferido como cadena
let edad = 42              // inferido como entero
let precio = 99.99         // inferido como decimal
let activo = verdadero     // inferido como booleano
let lista = [1, 2, 3]      // inferido como lista<entero>
```

### Variables Constantes

```javascript
// Constantes que no pueden cambiar
const PI = 3.14159
const NOMBRE_APP = "Mi Aplicación"
const CONFIGURACION = {
    host: "localhost",
    puerto: 8080
}
```

### Variables Mutables vs Inmutables

```javascript
// Variable mutable (puede cambiar)
var contador = 0
contador = contador + 1

// Variable inmutable (no puede cambiar después de asignación)
let mensaje = "Hola"
// mensaje = "Adiós"  // Error: no se puede reasignar

// Constante (inmutable y debe inicializarse)
const VERSION = "1.0.0"
```

## Tipos de Datos

### Tipos Primitivos

```javascript
// Números
entero edad = 25                    // Número entero
decimal precio = 29.99              // Número decimal
numero cualquiera = 42              // Número genérico

// Texto
cadena nombre = "Quetzal"           // Cadena de texto
caracter letra = 'Q'                // Carácter individual

// Lógico
booleano verdadero_valor = verdadero
booleano falso_valor = falso

// Especiales
nulo valor_nulo = nulo              // Valor nulo/vacío
```

### Tipos de Colección

```javascript
// Listas homogéneas
lista<entero> numeros = [1, 2, 3, 4, 5]
lista<cadena> nombres = ["Ana", "Juan", "María"]

// Listas heterogéneas
lista mixta = [1, "texto", verdadero, 3.14]

// Objetos/Diccionarios
objeto persona = {
    nombre: "Carlos",
    edad: 35,
    activo: verdadero,
    hobbies: ["leer", "correr"],
    direccion: {
        calle: "Main St",
        numero: 123
    }
}

// Tuplas (listas inmutables de tamaño fijo)
tupla coordenada = (10, 20)
tupla<cadena, entero> info = ("Juan", 25)
```

### Tipos Funcionales

```javascript
// Funciones
funcion<entero, entero, entero> suma = (a, b) => a + b
funcion<cadena, vacio> saludar = nombre => imprimir("Hola " + nombre)

// Promesas para programación asíncrona
promesa<cadena> datos = obtener_datos_async()
promesa<entero> resultado = calcular_async(10, 20)

// Opcionales (pueden ser nulo)
opcional<cadena> resultado_busqueda = buscar_elemento("clave")
```

## Operadores

### Operadores Aritméticos

```javascript
// Básicos
numero suma = 10 + 5        // 15
numero resta = 10 - 5       // 5
numero multiplicacion = 10 * 5  // 50
numero division = 10 / 5    // 2
numero modulo = 10 % 3      // 1
numero potencia = 2 ** 3    // 8

// Asignación compuesta
entero x = 10
x += 5      // x = x + 5
x -= 3      // x = x - 3
x *= 2      // x = x * 2
x /= 4      // x = x / 4
x %= 3      // x = x % 3

// Incremento y decremento
entero contador = 0
contador++      // Incremento posterior
++contador      // Incremento previo
contador--      // Decremento posterior
--contador      // Decremento previo
```

### Operadores de Comparación

```javascript
// Igualdad y desigualdad
booleano igual = 5 == 5         // verdadero
booleano diferente = 5 != 3     // verdadero
booleano identico = 5 === "5"   // falso (diferentes tipos)
booleano no_identico = 5 !== "5" // verdadero

// Comparaciones numéricas
booleano menor = 3 < 5          // verdadero
booleano menor_igual = 5 <= 5   // verdadero
booleano mayor = 7 > 3          // verdadero
booleano mayor_igual = 5 >= 5   // verdadero
```

### Operadores Lógicos

```javascript
// Operadores en español
booleano resultado1 = verdadero y falso      // falso
booleano resultado2 = verdadero o falso      // verdadero
booleano resultado3 = no verdadero           // falso

// Operadores con símbolos
booleano resultado4 = verdadero && falso     // falso
booleano resultado5 = verdadero || falso     // verdadero
booleano resultado6 = !verdadero             // falso
```

### Operadores de Cadena

```javascript
// Concatenación
cadena saludo = "Hola" + " " + "mundo"      // "Hola mundo"
cadena nombre = "Juan"
nombre += " Pérez"      // "Juan Pérez"

// Interpolación de cadenas
entero edad = 25
cadena mensaje = `Tengo ${edad} años`       // "Tengo 25 años"
cadena complejo = `Resultado: ${2 + 3 * 4}` // "Resultado: 14"
```

## Estructuras de Control

### Condicionales

#### if-else

```javascript
// if simple
si (edad >= 18) {
    imprimir("Eres mayor de edad")
}

// if-else
si (edad >= 18) {
    imprimir("Eres mayor de edad")
} sino {
    imprimir("Eres menor de edad")
}

// if-else-if
si (nota >= 90) {
    imprimir("Excelente")
} sino si (nota >= 80) {
    imprimir("Muy bueno")
} sino si (nota >= 70) {
    imprimir("Bueno")
} sino {
    imprimir("Necesitas mejorar")
}
```

#### Switch/cuando

```javascript
// Switch clásico
cuando (dia) {
    caso "lunes":
        imprimir("Inicio de semana")
        romper
    caso "viernes":
        imprimir("Fin de semana laboral")
        romper
    caso "sabado", "domingo":
        imprimir("Fin de semana")
        romper
    defecto:
        imprimir("Día laboral normal")
}

// Switch con expresiones
cadena mensaje = cuando (calificacion) {
    caso nota >= 90 -> "Excelente"
    caso nota >= 80 -> "Muy bueno"
    caso nota >= 70 -> "Bueno"
    defecto -> "Necesitas mejorar"
}
```

#### Operador Ternario

```javascript
// Operador ternario
cadena estado = edad >= 18 ? "adulto" : "menor"

// Ternario encadenado
cadena categoria = edad >= 65 ? "senior" : 
                   edad >= 18 ? "adulto" : "menor"
```

### Bucles

#### for

```javascript
// for tradicional
para (entero i = 0; i < 10; i++) {
    imprimir("Número: " + i.cadena())
}

// for con rango
para i desde 1 hasta 10 {
    imprimir("Número: " + i.cadena())
}

// for con paso
para i desde 0 hasta 20 paso 2 {
    imprimir("Par: " + i.cadena())
}

// for-in para listas
lista nombres = ["Ana", "Juan", "María"]
para nombre en nombres {
    imprimir("Hola " + nombre)
}

// for-in para objetos
objeto persona = {nombre: "Juan", edad: 25, ciudad: "Madrid"}
para clave en persona.claves() {
    imprimir(clave + ": " + persona[clave].cadena())
}

// for-in con índice
para (indice, valor) en nombres.enumerar() {
    imprimir("${indice}: ${valor}")
}
```

#### while

```javascript
// while
entero contador = 0
mientras (contador < 5) {
    imprimir("Contador: " + contador.cadena())
    contador++
}

// do-while
entero numero
hacer {
    numero = entrada_numero("Ingresa un número positivo: ")
} mientras (numero <= 0)
```

#### Bucles con Control

```javascript
// continue (continuar)
para i desde 1 hasta 10 {
    si (i % 2 == 0) {
        continuar  // Salta a la siguiente iteración
    }
    imprimir("Impar: " + i.cadena())
}

// break (romper)
para i desde 1 hasta 100 {
    si (i > 5) {
        romper  // Sale del bucle
    }
    imprimir("Número: " + i.cadena())
}
```

## Funciones

### Declaración de Funciones

```javascript
// Función básica
funcion saludar(cadena nombre) {
    imprimir("Hola " + nombre)
}

// Función con valor de retorno
cadena formatear_nombre(cadena nombre, cadena apellido) {
    devolver nombre + " " + apellido
}

// Función con tipos explícitos
numero calcular_area(numero ancho, numero alto) -> numero {
    devolver ancho * alto
}

// Función con parámetros opcionales
cadena saludar_completo(cadena nombre, cadena apellido = "") {
    si (apellido.vacio()) {
        devolver "Hola " + nombre
    }
    devolver "Hola " + nombre + " " + apellido
}

// Función con parámetros variables
numero sumar(...numeros) {
    numero total = 0
    para numero en numeros {
        total += numero
    }
    devolver total
}
```

### Funciones Lambda

```javascript
// Lambda básica
funcion suma = (a, b) => a + b

// Lambda con cuerpo complejo
funcion procesar = (lista datos) => {
    lista resultado = []
    para dato en datos {
        si (dato > 0) {
            resultado.agregar(dato * 2)
        }
    }
    devolver resultado
}

// Lambda como parámetro
lista numeros = [1, 2, 3, 4, 5]
lista dobles = numeros.mapear(x => x * 2)
lista pares = numeros.filtrar(x => x % 2 == 0)
```

### Funciones de Orden Superior

```javascript
// Función que recibe otra función
funcion aplicar_operacion(numero a, numero b, funcion operacion) {
    devolver operacion(a, b)
}

// Uso
numero resultado1 = aplicar_operacion(5, 3, (x, y) => x + y)  // 8
numero resultado2 = aplicar_operacion(5, 3, (x, y) => x * y)  // 15

// Función que devuelve otra función
funcion crear_multiplicador(numero factor) {
    devolver funcion(numero x) {
        devolver x * factor
    }
}

funcion duplicar = crear_multiplicador(2)
numero resultado = duplicar(5)  // 10
```

### Funciones Recursivas

```javascript
// Recursión simple
entero factorial(entero n) {
    si (n <= 1) {
        devolver 1
    }
    devolver n * factorial(n - 1)
}

// Recursión con tail call optimization
entero factorial_optimizado(entero n, entero acumulador = 1) {
    si (n <= 1) {
        devolver acumulador
    }
    devolver factorial_optimizado(n - 1, n * acumulador)
}
```

## Clases y Objetos

### Definición de Clases

```javascript
// Clase básica
clase Persona {
    // Propiedades
    cadena nombre
    entero edad
    
    // Constructor
    constructor(cadena nombre, entero edad) {
        este.nombre = nombre
        este.edad = edad
    }
    
    // Métodos
    cadena presentarse() {
        devolver "Hola, soy " + este.nombre
    }
    
    entero obtener_edad() {
        devolver este.edad
    }
    
    vacio cumplir_años() {
        este.edad++
    }
}

// Uso de la clase
Persona juan = nuevo Persona("Juan", 25)
imprimir(juan.presentarse())
juan.cumplir_años()
imprimir("Nueva edad: " + juan.obtener_edad().cadena())
```

### Herencia

```javascript
// Clase base
clase Animal {
    cadena nombre
    cadena especie
    
    constructor(cadena nombre, cadena especie) {
        este.nombre = nombre
        este.especie = especie
    }
    
    cadena hacer_sonido() {
        devolver "El animal hace un sonido"
    }
    
    cadena describir() {
        devolver este.nombre + " es un " + este.especie
    }
}

// Clase derivada
clase Perro extiende Animal {
    cadena raza
    
    constructor(cadena nombre, cadena raza) {
        super(nombre, "perro")  // Llamar al constructor padre
        este.raza = raza
    }
    
    // Sobrescribir método
    cadena hacer_sonido() {
        devolver "¡Guau guau!"
    }
    
    // Método específico
    vacio buscar_pelota() {
        imprimir(este.nombre + " está buscando la pelota")
    }
}
```

### Propiedades y Métodos

```javascript
clase Rectangulo {
    // Propiedades privadas
    privado numero _ancho
    privado numero _alto
    
    constructor(numero ancho, numero alto) {
        este._ancho = ancho
        este._alto = alto
    }
    
    // Getter
    numero obtener ancho() {
        devolver este._ancho
    }
    
    // Setter
    establecer ancho(numero valor) {
        si (valor > 0) {
            este._ancho = valor
        } sino {
            lanzar nuevo Error("El ancho debe ser positivo")
        }
    }
    
    // Propiedad calculada
    numero obtener area() {
        devolver este._ancho * este._alto
    }
    
    // Método estático
    estatico Rectangulo cuadrado(numero lado) {
        devolver nuevo Rectangulo(lado, lado)
    }
}

// Uso
Rectangulo rect = nuevo Rectangulo(10, 5)
imprimir("Área: " + rect.area.cadena())

Rectangulo cuad = Rectangulo.cuadrado(8)
```

### Interfaces y Traits

```javascript
// Interface
interfaz Volador {
    volar(numero altura)
    aterrizar()
    numero obtener_altura_actual()
}

// Trait (mixin)
trait Nadador {
    numero profundidad = 0
    
    vacio nadar(numero prof) {
        este.profundidad = prof
        imprimir("Nadando a " + prof.cadena() + " metros")
    }
    
    vacio emerger() {
        este.profundidad = 0
        imprimir("Emergiendo a la superficie")
    }
}

// Clase que implementa interface y usa trait
clase Pato implementa Volador con Nadador {
    cadena nombre
    numero altura_vuelo = 0
    
    constructor(cadena nombre) {
        este.nombre = nombre
    }
    
    // Implementar métodos de la interface
    vacio volar(numero altura) {
        este.altura_vuelo = altura
        imprimir(este.nombre + " volando a " + altura.cadena() + "m")
    }
    
    vacio aterrizar() {
        este.altura_vuelo = 0
        imprimir(este.nombre + " aterrizando")
    }
    
    numero obtener_altura_actual() {
        devolver este.altura_vuelo
    }
}
```

## Manejo de Errores

### try-catch-finally

```javascript
// Manejo básico de errores
intentar {
    entero resultado = 10 / 0
    imprimir("Resultado: " + resultado.cadena())
} capturar error {
    imprimir_error("Error: " + error.mensaje)
} finalmente {
    imprimir("Operación finalizada")
}

// Captura específica de tipos de error
intentar {
    objeto datos = JSON.parse("{invalid json}")
} capturar (ErrorJSON e) {
    imprimir_error("Error de JSON: " + e.mensaje)
} capturar (ErrorRed e) {
    imprimir_error("Error de red: " + e.mensaje)
} capturar error {
    imprimir_error("Error general: " + error.mensaje)
}
```

### Lanzar Errores

```javascript
// Lanzar error simple
funcion dividir(numero a, numero b) {
    si (b == 0) {
        lanzar nuevo Error("División por cero no permitida")
    }
    devolver a / b
}

// Lanzar error personalizado
clase ErrorValidacion extiende Error {
    cadena campo
    
    constructor(cadena mensaje, cadena campo) {
        super(mensaje)
        este.campo = campo
    }
}

funcion validar_edad(entero edad) {
    si (edad < 0) {
        lanzar nuevo ErrorValidacion("La edad no puede ser negativa", "edad")
    }
    si (edad > 150) {
        lanzar nuevo ErrorValidacion("La edad no puede ser mayor a 150", "edad")
    }
}
```

## Programación Asíncrona

### Promesas

```javascript
// Crear promesa
promesa<cadena> mi_promesa = nuevo Promesa((resolver, rechazar) => {
    tiempo_espera(1000, () => {
        si (condicion_exitosa) {
            resolver("Operación exitosa")
        } sino {
            rechazar(nuevo Error("Operación falló"))
        }
    })
})

// Usar promesa
mi_promesa
    .entonces(resultado => {
        imprimir("Éxito: " + resultado)
    })
    .capturar(error => {
        imprimir_error("Error: " + error.mensaje)
    })
    .finalmente(() => {
        imprimir("Operación completada")
    })
```

### async/await

```javascript
// Función asíncrona
asincrono promesa<cadena> obtener_datos(cadena url) {
    intentar {
        objeto respuesta = aguardar fetch(url)
        cadena datos = aguardar respuesta.text()
        devolver datos
    } capturar error {
        lanzar nuevo Error("Error obteniendo datos: " + error.mensaje)
    }
}

// Usar función asíncrona
asincrono vacio procesar_datos() {
    intentar {
        cadena datos = aguardar obtener_datos("https://api.ejemplo.com")
        imprimir("Datos recibidos: " + datos)
    } capturar error {
        imprimir_error("Error: " + error.mensaje)
    }
}

// Ejecutar múltiples promesas en paralelo
asincrono vacio obtener_multiples_datos() {
    lista promesas = [
        obtener_datos("https://api1.ejemplo.com"),
        obtener_datos("https://api2.ejemplo.com"),
        obtener_datos("https://api3.ejemplo.com")
    ]
    
    lista resultados = aguardar Promesa.todas(promesas)
    
    para (indice, resultado) en resultados.enumerar() {
        imprimir("API " + (indice + 1).cadena() + ": " + resultado)
    }
}
```

## Módulos

### Exportar

```javascript
// archivo: matematicas.qz

// Exportar funciones
exportar funcion sumar(numero a, numero b) {
    devolver a + b
}

exportar funcion restar(numero a, numero b) {
    devolver a - b
}

// Exportar constantes
exportar const PI = 3.14159

// Exportar clases
exportar clase Calculadora {
    numero memoria = 0
    
    vacio guardar(numero valor) {
        este.memoria = valor
    }
    
    numero recuperar() {
        devolver este.memoria
    }
}

// Exportar por defecto
exportar defecto clase CalculadoraAvanzada {
    // implementación
}
```

### Importar

```javascript
// Importar elementos específicos
importar {sumar, restar, PI} de "./matematicas.qz"

// Importar todo con alias
importar * como mat de "./matematicas.qz"

// Importar elemento por defecto
importar CalculadoraAvanzada de "./matematicas.qz"

// Importar con alias
importar {Calculadora como Calc} de "./matematicas.qz"

// Uso
numero resultado = sumar(5, 3)
numero area_circulo = PI * mat.potencia(radio, 2)
Calc calc = nuevo Calc()
```

## Anotaciones de Tipo

### Tipos Básicos

```javascript
// Anotaciones explícitas
funcion procesar_datos(
    datos: lista<objeto>,
    filtro: funcion<objeto, booleano>,
    transformar: funcion<objeto, cadena>
): lista<cadena> {
    devolver datos
        .filtrar(filtro)
        .mapear(transformar)
}
```

### Tipos Genéricos

```javascript
// Función genérica
funcion<T> identidad(valor: T): T {
    devolver valor
}

// Clase genérica
clase Contenedor<T> {
    privado T _valor
    
    constructor(valor: T) {
        este._valor = valor
    }
    
    T obtener(): T {
        devolver este._valor
    }
    
    vacio establecer(valor: T): vacio {
        este._valor = valor
    }
}

// Uso
Contenedor<cadena> texto = nuevo Contenedor("Hola")
Contenedor<entero> numero = nuevo Contenedor(42)
```

### Tipos de Unión

```javascript
// Tipo que puede ser múltiples tipos
cadena | entero | nulo identificador = obtener_id()

// Función con parámetro de unión
funcion formatear(valor: cadena | numero): cadena {
    si (es_cadena(valor)) {
        devolver valor
    } sino {
        devolver valor.cadena()
    }
}
```

Esta sintaxis completa muestra todas las características y capacidades del Lenguaje Quetzal, desde los elementos más básicos hasta las construcciones más avanzadas, manteniendo siempre la filosofía de ser claro, expresivo y natural en español.
