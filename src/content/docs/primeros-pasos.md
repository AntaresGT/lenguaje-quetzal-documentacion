---
title: Primeros Pasos con Quetzal
description: Tu primera experiencia programando en el Lenguaje Quetzal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Primeros Pasos con Quetzal

¡Bienvenido a tu primera experiencia programando en Quetzal! En esta guía aprenderás los conceptos básicos y escribirás tus primeros programas.

## 🎯 Tu Primer Programa

Vamos a comenzar con el clásico "Hola Mundo" en Quetzal:

### Hola Mundo Simple

```javascript
// archivo: hola_mundo.qz
imprimir("¡Hola mundo desde Quetzal!")
```

### Ejecutar el programa

```powershell
# Guarda el código en un archivo llamado hola_mundo.qz
# Luego ejecuta:
quetzal ejecutar hola_mundo.qz
```

<div class="consola-ejemplo">
<div class="prompt">quetzal@terminal:~$</div> quetzal ejecutar hola_mundo.qz
<div class="output">¡Hola mundo desde Quetzal!</div>
<div class="prompt">quetzal@terminal:~$</div>
</div>

## 🔤 Variables y Tipos Básicos

En Quetzal, todo es **inmutable por defecto**. Si quieres modificar una variable, debes declararla como `mut`:

### Declaración de Variables

```javascript
// Variables inmutables (por defecto)
cadena nombre = "María"
entero edad = 25
número altura = 1.65
bool es_estudiante = verdadero

// Variables mutables
cadena mut apellido = "González"
entero mut contador = 0
número mut saldo = 1000.50

// Modificar variables mutables
apellido = "Rodríguez"
contador = contador + 1
saldo = saldo - 50.25
```

### Tipos de Datos Disponibles

<CardGrid>
  <Card title="📝 cadena" icon="document">
    Texto y caracteres<br>
    `cadena mensaje = "Hola"`
  </Card>
  
  <Card title="🔢 entero" icon="bars">
    Números enteros<br>
    `entero edad = 30`
  </Card>
  
  <Card title="📊 número" icon="chart">
    Números decimales<br>
    `número precio = 19.99`
  </Card>
  
  <Card title="✅ bool" icon="approve-check">
    Verdadero o falso<br>
    `bool activo = verdadero`
  </Card>
  
  <Card title="📋 lista" icon="list-format">
    Colecciones de datos<br>
    `lista<entero> nums = [1, 2, 3]`
  </Card>
  
  <Card title="🌐 jsn" icon="puzzle">
    Objetos JSON<br>
    `jsn usuario = { nombre: "Ana" }`
  </Card>
</CardGrid>

## 💬 Interacción con el Usuario

### Mostrar Información

```javascript
// Diferentes tipos de mensajes
imprimir("Mensaje normal")
imprimir_exito("¡Operación exitosa!")
imprimir_advertencia("¡Cuidado!")
imprimir_error("Error encontrado")
imprimir_informacion("Información útil")
```

<div class="consola-ejemplo">
<div class="output">Mensaje normal</div>
<div class="success">¡Operación exitosa!</div>
<div class="warning">¡Cuidado!</div>
<div class="error">Error encontrado</div>
<div class="output" style="color: #3b82f6;">Información útil</div>
</div>

### Programa Interactivo

```javascript
// archivo: saludo_personalizado.qz
imprimir_exito("=== PROGRAMA DE SALUDO ===")

// Solicitar información al usuario
cadena nombre = "Visitante"  // Por ahora, entrada manual
entero edad = 25

// Procesar información
imprimir("Hola " + nombre + ", bienvenido a Quetzal")
imprimir("Veo que tienes " + edad.cadena() + " años")

// Lógica condicional simple
si (edad >= 18) {
    imprimir_exito("Eres mayor de edad")
} sino {
    imprimir_informacion("Eres menor de edad")
}

imprimir("¡Gracias por probar Quetzal!")
```

## 🧮 Operaciones Matemáticas

### Operaciones Básicas

```javascript
// archivo: calculadora_basica.qz
imprimir_exito("=== CALCULADORA BÁSICA ===")

// Números para operar
número a = 15.5
número b = 4.2

// Operaciones aritméticas
número suma = a + b
número resta = a - b
número multiplicacion = a * b
número division = a / b

// Mostrar resultados
imprimir("Número A: " + a.cadena())
imprimir("Número B: " + b.cadena())
imprimir_informacion("--- RESULTADOS ---")
imprimir("Suma: " + suma.cadena())
imprimir("Resta: " + resta.cadena())
imprimir("Multiplicación: " + multiplicacion.cadena())
imprimir("División: " + division.cadena())
```

### Operaciones con Enteros

```javascript
// Trabajando con enteros
entero x = 10
entero y = 3

entero division_entera = x / y        // 3
entero modulo = x % y                 // 1
entero potencia = x ** y              // 1000

imprimir("10 / 3 = " + division_entera.cadena())
imprimir("10 % 3 = " + modulo.cadena())
imprimir("10 ** 3 = " + potencia.cadena())
```

## 🔀 Estructuras de Control Básicas

### Condicionales

```javascript
// archivo: control_edad.qz
entero edad = 17

si (edad < 13) {
    imprimir("Eres un niño")
} sino si (edad < 18) {
    imprimir("Eres un adolescente")
} sino si (edad < 65) {
    imprimir("Eres un adulto")
} sino {
    imprimir("Eres un adulto mayor")
}

// Operador ternario
cadena categoria = edad >= 18 ? "Mayor" : "Menor"
imprimir("Categoría: " + categoria)
```

### Bucles Simples

```javascript
// archivo: contadores.qz
imprimir_exito("=== CONTADORES ===")

// Bucle for tradicional
imprimir_informacion("Contando del 1 al 5:")
para (entero i = 1; i <= 5; i++) {
    imprimir("Número: " + i.cadena())
}

// Bucle while
imprimir_informacion("Contando hacia atrás:")
entero mut contador = 5
mientras (contador > 0) {
    imprimir("Quedan: " + contador.cadena())
    contador = contador - 1
}

imprimir_exito("¡Terminado!")
```

## 📝 Trabajando con Texto

### Manipulación de Cadenas

```javascript
// archivo: manejo_texto.qz
cadena nombre = "Juan"
cadena apellido = "Pérez"
cadena nombre_completo = nombre + " " + apellido

imprimir("Nombre completo: " + nombre_completo)

// Propiedades de cadenas
imprimir("Longitud del nombre: " + nombre.longitud().cadena())
imprimir("En mayúsculas: " + nombre.mayusculas())
imprimir("En minúsculas: " + apellido.minusculas())

// Verificaciones
bool contiene_juan = nombre_completo.contiene("Juan")
imprimir("¿Contiene 'Juan'? " + contiene_juan.cadena())
```

## 🎨 Creando tu Primera Función

### Función Simple

```javascript
// archivo: mi_primera_funcion.qz

// Definir la función
cadena saludar(cadena nombre) {
    retornar "¡Hola " + nombre + ", bienvenido a Quetzal!"
}

// Usar la función
cadena mensaje = saludar("Ana")
imprimir_exito(mensaje)

// Función con múltiples parámetros
número calcular_area_rectangulo(número largo, número ancho) {
    retornar largo * ancho
}

número area = calcular_area_rectangulo(5.0, 3.5)
imprimir("El área del rectángulo es: " + area.cadena())
```

### Función con Lógica

```javascript
// Función que determina si un número es par
bool es_par(entero numero) {
    si (numero % 2 == 0) {
        retornar verdadero
    } sino {
        retornar falso
    }
}

// Probar la función
para (entero i = 1; i <= 10; i++) {
    si (es_par(i)) {
        imprimir(i.cadena() + " es par")
    } sino {
        imprimir(i.cadena() + " es impar")
    }
}
```

## 📚 Trabajando con Listas

### Listas Básicas

```javascript
// archivo: mis_primeras_listas.qz

// Lista de números
lista<número> calificaciones = [8.5, 9.2, 7.8, 9.0, 8.7]

// Lista de nombres
lista<cadena> estudiantes = ["Ana", "Luis", "María", "Carlos"]

// Mostrar información
imprimir("Número de estudiantes: " + estudiantes.longitud().cadena())
imprimir("Primera calificación: " + calificaciones[0].cadena())
imprimir("Último estudiante: " + estudiantes[estudiantes.longitud() - 1])

// Recorrer listas
imprimir_informacion("Lista de estudiantes:")
para (entero i = 0; i < estudiantes.longitud(); i++) {
    imprimir((i + 1).cadena() + ". " + estudiantes[i])
}
```

## 🌟 Proyecto: Sistema de Calificaciones

Vamos a crear un pequeño proyecto que combine todo lo aprendido:

```javascript
// archivo: sistema_calificaciones.qz
imprimir_exito("=================================")
imprimir_exito("   SISTEMA DE CALIFICACIONES")
imprimir_exito("=================================")

// Datos del estudiante
cadena nombre_estudiante = "María González"
lista<número> calificaciones = [8.5, 9.2, 7.8, 9.0, 8.7, 9.5]
lista<cadena> materias = ["Matemáticas", "Historia", "Ciencias", "Español", "Inglés", "Arte"]

// Función para calcular promedio
número calcular_promedio(lista<número> notas) {
    número suma = 0.0
    para (entero i = 0; i < notas.longitud(); i++) {
        suma = suma + notas[i]
    }
    retornar suma / notas.longitud().número()
}

// Función para determinar nivel
cadena obtener_nivel(número promedio) {
    si (promedio >= 9.0) {
        retornar "Excelente"
    } sino si (promedio >= 8.0) {
        retornar "Muy Bueno"
    } sino si (promedio >= 7.0) {
        retornar "Bueno"
    } sino si (promedio >= 6.0) {
        retornar "Regular"
    } sino {
        retornar "Necesita Mejorar"
    }
}

// Procesar información
número promedio = calcular_promedio(calificaciones)
cadena nivel = obtener_nivel(promedio)

// Mostrar resultados
imprimir_informacion("Estudiante: " + nombre_estudiante)
imprimir("Número de materias: " + materias.longitud().cadena())

imprimir_informacion("--- CALIFICACIONES DETALLADAS ---")
para (entero i = 0; i < materias.longitud(); i++) {
    imprimir(materias[i] + ": " + calificaciones[i].cadena())
}

imprimir_informacion("--- RESUMEN ---")
imprimir("Promedio general: " + promedio.cadena())
imprimir_exito("Nivel de rendimiento: " + nivel)

// Recomendaciones
si (promedio < 7.0) {
    imprimir_advertencia("Recomendación: Se necesita mayor esfuerzo")
} sino si (promedio >= 9.0) {
    imprimir_exito("¡Felicitaciones! Excelente rendimiento")
} sino {
    imprimir_informacion("Buen trabajo, continúa así")
}
```

## 🎯 Ejercicios Prácticos

Ahora es tu turno. Intenta crear estos programas:

<CardGrid>
  <Card title="🧮 Calculadora de IMC" icon="chart">
    Crea un programa que calcule el Índice de Masa Corporal y determine la categoría de peso.
  </Card>
  
  <Card title="🎲 Juego de Adivinanzas" icon="random">
    Programa que "piense" un número y dé pistas hasta que el usuario adivine.
  </Card>
  
  <Card title="📊 Analizador de Texto" icon="document">
    Programa que cuente palabras, caracteres y determine la palabra más larga.
  </Card>
  
  <Card title="💰 Conversor de Monedas" icon="external">
    Sistema que convierta entre diferentes monedas con tasas de cambio.
  </Card>
</CardGrid>

## 🚀 Próximos Pasos

¡Felicitaciones! Has completado tus primeros pasos en Quetzal. Ahora puedes continuar con:

1. **[Sintaxis básica](/fundamentos/sintaxis-basica/)** - Profundiza en la sintaxis
2. **[Tipos de datos](/fundamentos/tipos-datos/)** - Domina todos los tipos
3. **[Funciones](/funciones/definicion/)** - Aprende funciones avanzadas
4. **[Ejemplos avanzados](/ejemplos/avanzados/)** - Proyectos más complejos

---

<div class="notificacion success">
  <strong>🎉 ¡Excelente progreso!</strong><br>
  Ya conoces los fundamentos de Quetzal. ¡Continúa practicando y explorando las características más avanzadas del lenguaje!
</div>
