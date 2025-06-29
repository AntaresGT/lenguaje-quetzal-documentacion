---
title: Ejemplos Básicos de Quetzal
description: Colección de ejemplos prácticos para aprender los fundamentos de Quetzal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Ejemplos Básicos de Quetzal

En esta sección encontrarás ejemplos prácticos que te ayudarán a dominar los conceptos fundamentales del Lenguaje Quetzal.

## 🎯 Primer Contacto

### Hola Mundo Expandido

```javascript
// archivo: hola_mundo_expandido.qz
imprimir_exito("¡Bienvenido al Lenguaje Quetzal!")
imprimir("Versión actual: v0.0.1")
imprimir_informacion("Desarrollado por AntaresGT")

cadena lenguaje = "Quetzal"
cadena proposito = "Programación funcional en español"

imprimir("Lenguaje: " + lenguaje)
imprimir("Propósito: " + proposito)
```

### Programa Interactivo Básico

```javascript
// archivo: programa_interactivo.qz
imprimir_exito("=== PROGRAMA INTERACTIVO ===")

// Información del usuario (simulada)
cadena nombre = "Usuario"
entero edad = 25
bool es_programador = verdadero

// Crear saludo personalizado
cadena saludo = "Hola " + nombre + ", tienes " + edad.cadena() + " años"
imprimir(saludo)

// Lógica condicional
si (es_programador) {
    imprimir_exito("¡Excelente! Ya conoces la programación")
} sino {
    imprimir_informacion("¡Perfecto momento para aprender!")
}

// Determinar categoría de edad
cadena categoria = ""
si (edad < 18) {
    categoria = "Joven"
} sino si (edad < 65) {
    categoria = "Adulto"
} sino {
    categoria = "Adulto Mayor"
}

imprimir("Categoría: " + categoria)
```

## 🧮 Matemáticas y Cálculos

### Calculadora Básica

```javascript
// archivo: calculadora_basica.qz
imprimir_exito("=== CALCULADORA BÁSICA ===")

// Valores de entrada
número a = 15.5
número b = 4.2

// Operaciones básicas
número suma = a + b
número resta = a - b
número multiplicacion = a * b
número division = a / b
número modulo = a % b

// Mostrar resultados
imprimir("Valores: a = " + a.cadena() + ", b = " + b.cadena())
imprimir_informacion("--- RESULTADOS ---")
imprimir("Suma: " + suma.cadena())
imprimir("Resta: " + resta.cadena())
imprimir("Multiplicación: " + multiplicacion.cadena())
imprimir("División: " + division.cadena())
imprimir("Módulo: " + modulo.cadena())

// Operaciones con enteros
entero x = 10
entero y = 3
entero division_entera = x / y
entero resto = x % y

imprimir_informacion("--- OPERACIONES ENTERAS ---")
imprimir("10 / 3 = " + division_entera.cadena())
imprimir("10 % 3 = " + resto.cadena())
```

### Cálculos Geométricos

```javascript
// archivo: calculos_geometricos.qz
imprimir_exito("=== CÁLCULOS GEOMÉTRICOS ===")

// Constantes
número pi = 3.14159

// Función para calcular área de círculo
número calcular_area_circulo(número radio) {
    retornar pi * radio * radio
}

// Función para calcular área de rectángulo
número calcular_area_rectangulo(número largo, número ancho) {
    retornar largo * ancho
}

// Función para calcular perímetro de círculo
número calcular_perimetro_circulo(número radio) {
    retornar 2 * pi * radio
}

// Ejemplos de uso
número radio_circulo = 5.0
número largo_rectangulo = 8.0
número ancho_rectangulo = 6.0

número area_circulo = calcular_area_circulo(radio_circulo)
número area_rectangulo = calcular_area_rectangulo(largo_rectangulo, ancho_rectangulo)
número perimetro_circulo = calcular_perimetro_circulo(radio_circulo)

imprimir_informacion("Círculo con radio " + radio_circulo.cadena() + ":")
imprimir("Área: " + area_circulo.cadena())
imprimir("Perímetro: " + perimetro_circulo.cadena())

imprimir_informacion("Rectángulo " + largo_rectangulo.cadena() + " x " + ancho_rectangulo.cadena() + ":")
imprimir("Área: " + area_rectangulo.cadena())
```

## 📝 Trabajando con Texto

### Manipulación de Cadenas

```javascript
// archivo: manipulacion_cadenas.qz
imprimir_exito("=== MANIPULACIÓN DE CADENAS ===")

// Datos básicos
cadena nombre = "Ana"
cadena apellido = "García"
cadena nombre_completo = nombre + " " + apellido

imprimir("Nombre: " + nombre)
imprimir("Apellido: " + apellido)
imprimir("Nombre completo: " + nombre_completo)

// Propiedades de cadenas
imprimir_informacion("--- PROPIEDADES ---")
imprimir("Longitud del nombre: " + nombre.longitud().cadena())
imprimir("Longitud del apellido: " + apellido.longitud().cadena())
imprimir("Longitud completa: " + nombre_completo.longitud().cadena())

// Transformaciones
imprimir_informacion("--- TRANSFORMACIONES ---")
imprimir("En mayúsculas: " + nombre.mayusculas())
imprimir("En minúsculas: " + apellido.minusculas())

// Verificaciones
bool contiene_ana = nombre_completo.contiene("Ana")
bool empieza_con_a = nombre.empieza_con("A")

imprimir_informacion("--- VERIFICACIONES ---")
imprimir("¿Contiene 'Ana'? " + contiene_ana.cadena())
imprimir("¿Empieza con 'A'? " + empieza_con_a.cadena())
```

### Analizador de Texto

```javascript
// archivo: analizador_texto.qz
imprimir_exito("=== ANALIZADOR DE TEXTO ===")

cadena texto = "El lenguaje Quetzal es moderno y funcional"

// Análisis básico
entero longitud_total = texto.longitud()
entero espacios = contar_caracter(texto, ' ')
entero palabras = espacios + 1  // Aproximación simple

imprimir("Texto: " + texto)
imprimir_informacion("--- ESTADÍSTICAS ---")
imprimir("Caracteres totales: " + longitud_total.cadena())
imprimir("Espacios: " + espacios.cadena())
imprimir("Palabras (aprox.): " + palabras.cadena())

// Función auxiliar para contar caracteres
entero contar_caracter(cadena texto, cadena caracter) {
    entero contador = 0
    para (entero i = 0; i < texto.longitud(); i++) {
        si (texto[i] == caracter) {
            contador++
        }
    }
    retornar contador
}

// Verificar contenido
bool tiene_quetzal = texto.contiene("Quetzal")
bool es_largo = longitud_total > 30

imprimir_informacion("--- ANÁLISIS ---")
imprimir("¿Menciona Quetzal? " + tiene_quetzal.cadena())
imprimir("¿Es texto largo? " + es_largo.cadena())
```

## 📊 Listas y Colecciones

### Operaciones con Listas

```javascript
// archivo: operaciones_listas.qz
imprimir_exito("=== OPERACIONES CON LISTAS ===")

// Listas básicas
lista<entero> numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lista<cadena> nombres = ["Ana", "Luis", "María", "Carlos", "Elena"]
lista<número> calificaciones = [8.5, 9.2, 7.8, 9.0, 8.7]

// Información básica
imprimir_informacion("--- INFORMACIÓN BÁSICA ---")
imprimir("Números: " + numeros.cadena())
imprimir("Cantidad de números: " + numeros.longitud().cadena())
imprimir("Primer número: " + numeros[0].cadena())
imprimir("Último número: " + numeros[numeros.longitud() - 1].cadena())

// Recorrer listas
imprimir_informacion("--- LISTA DE NOMBRES ---")
para (entero i = 0; i < nombres.longitud(); i++) {
    imprimir((i + 1).cadena() + ". " + nombres[i])
}

// Procesamiento de calificaciones
número suma_calificaciones = 0.0
para (entero i = 0; i < calificaciones.longitud(); i++) {
    suma_calificaciones += calificaciones[i]
}
número promedio = suma_calificaciones / calificaciones.longitud().número()

imprimir_informacion("--- ANÁLISIS DE CALIFICACIONES ---")
imprimir("Calificaciones: " + calificaciones.cadena())
imprimir("Promedio: " + promedio.cadena())
```

### Lista de Estudiantes

```javascript
// archivo: lista_estudiantes.qz
imprimir_exito("=== SISTEMA DE ESTUDIANTES ===")

// Datos paralelos (mismos índices corresponden al mismo estudiante)
lista<cadena> nombres = ["Ana García", "Luis Rodríguez", "María López", "Carlos Díaz"]
lista<entero> edades = [20, 22, 19, 21]
lista<número> promedios = [8.5, 9.2, 7.8, 8.9]
lista<bool> activos = [verdadero, verdadero, falso, verdadero]

// Función para mostrar información de estudiante
vacio mostrar_estudiante(entero indice) {
    si (indice >= 0 y indice < nombres.longitud()) {
        imprimir_informacion("--- ESTUDIANTE " + (indice + 1).cadena() + " ---")
        imprimir("Nombre: " + nombres[indice])
        imprimir("Edad: " + edades[indice].cadena() + " años")
        imprimir("Promedio: " + promedios[indice].cadena())
        imprimir("Activo: " + activos[indice].cadena())
        
        // Determinar nivel
        cadena nivel = ""
        si (promedios[indice] >= 9.0) {
            nivel = "Excelente"
        } sino si (promedios[indice] >= 8.0) {
            nivel = "Muy Bueno"
        } sino si (promedios[indice] >= 7.0) {
            nivel = "Bueno"
        } sino {
            nivel = "Regular"
        }
        imprimir("Nivel: " + nivel)
    }
}

// Mostrar todos los estudiantes
para (entero i = 0; i < nombres.longitud(); i++) {
    mostrar_estudiante(i)
}

// Estadísticas generales
entero estudiantes_activos = 0
número suma_promedios = 0.0

para (entero i = 0; i < nombres.longitud(); i++) {
    si (activos[i]) {
        estudiantes_activos++
    }
    suma_promedios += promedios[i]
}

número promedio_general = suma_promedios / nombres.longitud().número()

imprimir_exito("--- ESTADÍSTICAS GENERALES ---")
imprimir("Total estudiantes: " + nombres.longitud().cadena())
imprimir("Estudiantes activos: " + estudiantes_activos.cadena())
imprimir("Promedio general: " + promedio_general.cadena())
```

## 🔀 Estructuras de Control

### Condicionales Avanzados

```javascript
// archivo: condicionales_avanzados.qz
imprimir_exito("=== CONDICIONALES AVANZADOS ===")

// Función para clasificar edad
cadena clasificar_edad(entero edad) {
    si (edad < 0) {
        retornar "Edad inválida"
    } sino si (edad < 2) {
        retornar "Bebé"
    } sino si (edad < 12) {
        retornar "Niño"
    } sino si (edad < 18) {
        retornar "Adolescente"
    } sino si (edad < 30) {
        retornar "Joven adulto"
    } sino si (edad < 65) {
        retornar "Adulto"
    } sino {
        retornar "Adulto mayor"
    }
}

// Función para evaluar calificación
cadena evaluar_calificacion(número nota) {
    si (nota < 0 o nota > 10) {
        retornar "Calificación inválida"
    } sino si (nota >= 9.0) {
        retornar "Excelente"
    } sino si (nota >= 8.0) {
        retornar "Muy Bueno"
    } sino si (nota >= 7.0) {
        retornar "Bueno"
    } sino si (nota >= 6.0) {
        retornar "Regular"
    } sino {
        retornar "Insuficiente"
    }
}

// Casos de prueba
lista<entero> edades_prueba = [5, 15, 25, 70, -1]
lista<número> notas_prueba = [9.5, 8.2, 6.8, 5.1, 10.5]

imprimir_informacion("--- CLASIFICACIÓN DE EDADES ---")
para (entero i = 0; i < edades_prueba.longitud(); i++) {
    entero edad = edades_prueba[i]
    cadena clasificacion = clasificar_edad(edad)
    imprimir("Edad " + edad.cadena() + ": " + clasificacion)
}

imprimir_informacion("--- EVALUACIÓN DE CALIFICACIONES ---")
para (entero i = 0; i < notas_prueba.longitud(); i++) {
    número nota = notas_prueba[i]
    cadena evaluacion = evaluar_calificacion(nota)
    imprimir("Nota " + nota.cadena() + ": " + evaluacion)
}
```

### Bucles Prácticos

```javascript
// archivo: bucles_practicos.qz
imprimir_exito("=== BUCLES PRÁCTICOS ===")

// Tabla de multiplicar
vacio tabla_multiplicar(entero numero) {
    imprimir_informacion("--- TABLA DEL " + numero.cadena() + " ---")
    para (entero i = 1; i <= 10; i++) {
        entero resultado = numero * i
        imprimir(numero.cadena() + " x " + i.cadena() + " = " + resultado.cadena())
    }
}

// Números pares e impares
vacio clasificar_numeros(entero limite) {
    imprimir_informacion("--- CLASIFICACIÓN 1 AL " + limite.cadena() + " ---")
    entero pares = 0
    entero impares = 0
    
    para (entero i = 1; i <= limite; i++) {
        si (i % 2 == 0) {
            imprimir(i.cadena() + " es par")
            pares++
        } sino {
            imprimir(i.cadena() + " es impar")
            impares++
        }
    }
    
    imprimir_exito("Total pares: " + pares.cadena())
    imprimir_exito("Total impares: " + impares.cadena())
}

// Factorial con while
entero calcular_factorial(entero n) {
    si (n < 0) {
        retornar -1  // Error
    }
    
    entero resultado = 1
    entero contador = n
    
    mientras (contador > 1) {
        resultado *= contador
        contador--
    }
    
    retornar resultado
}

// Ejecutar ejemplos
tabla_multiplicar(7)
clasificar_numeros(10)

entero numero_factorial = 5
entero factorial = calcular_factorial(numero_factorial)
imprimir_informacion("Factorial de " + numero_factorial.cadena() + " = " + factorial.cadena())
```

## 🌐 Trabajando con JSON

### Objetos JSON Básicos

```javascript
// archivo: json_basico.qz
imprimir_exito("=== TRABAJANDO CON JSON ===")

// Crear objetos JSON
jsn usuario = {
    nombre: "Ana García",
    edad: 28,
    email: "ana@ejemplo.com",
    activo: verdadero,
    calificacion: 9.2
}

jsn configuracion = {
    servidor: "localhost",
    puerto: 8080,
    ssl: falso,
    timeout: 30,
    base_datos: {
        host: "db.ejemplo.com",
        puerto: 5432,
        nombre: "mi_app"
    }
}

// Acceder a propiedades
imprimir_informacion("--- INFORMACIÓN DEL USUARIO ---")
imprimir("Nombre: " + usuario.nombre)
imprimir("Edad: " + usuario.edad.cadena())
imprimir("Email: " + usuario.email)
imprimir("Activo: " + usuario.activo.cadena())
imprimir("Calificación: " + usuario.calificacion.cadena())

// Acceso anidado
imprimir_informacion("--- CONFIGURACIÓN DEL SERVIDOR ---")
imprimir("Servidor: " + configuracion.servidor)
imprimir("Puerto: " + configuracion.puerto.cadena())
imprimir("SSL: " + configuracion.ssl.cadena())
imprimir("Host BD: " + configuracion.base_datos.host)
imprimir("Puerto BD: " + configuracion.base_datos.puerto.cadena())
```

### Lista de Objetos JSON

```javascript
// archivo: lista_json.qz
imprimir_exito("=== LISTA DE OBJETOS JSON ===")

// Lista de productos
lista<jsn> productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 899.99,
        categoria: "Electrónicos",
        disponible: verdadero
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 25.50,
        categoria: "Accesorios",
        disponible: verdadero
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 75.00,
        categoria: "Accesorios",
        disponible: falso
    }
]

// Mostrar todos los productos
imprimir_informacion("--- CATÁLOGO DE PRODUCTOS ---")
para (entero i = 0; i < productos.longitud(); i++) {
    jsn producto = productos[i]
    imprimir("ID: " + producto.id.cadena())
    imprimir("Nombre: " + producto.nombre)
    imprimir("Precio: $" + producto.precio.cadena())
    imprimir("Categoría: " + producto.categoria)
    imprimir("Disponible: " + producto.disponible.cadena())
    imprimir("---")
}

// Filtrar productos disponibles
imprimir_informacion("--- PRODUCTOS DISPONIBLES ---")
entero disponibles = 0
número total_valor = 0.0

para (entero i = 0; i < productos.longitud(); i++) {
    jsn producto = productos[i]
    si (producto.disponible) {
        imprimir(producto.nombre + " - $" + producto.precio.cadena())
        disponibles++
        total_valor += producto.precio
    }
}

imprimir_exito("Total disponibles: " + disponibles.cadena())
imprimir_exito("Valor total: $" + total_valor.cadena())
```

## 🎯 Proyectos Completos

### Sistema de Biblioteca

```javascript
// archivo: sistema_biblioteca.qz
imprimir_exito("=== SISTEMA DE BIBLIOTECA ===")

// Base de datos de libros
lista<jsn> biblioteca = [
    {
        id: 1,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        año: 1605,
        genero: "Clásico",
        prestado: falso,
        calificacion: 9.1
    },
    {
        id: 2,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        genero: "Realismo mágico",
        prestado: verdadero,
        calificacion: 9.5
    },
    {
        id: 3,
        titulo: "El Aleph",
        autor: "Jorge Luis Borges",
        año: 1949,
        genero: "Ficción",
        prestado: falso,
        calificacion: 8.8
    }
]

// Función para mostrar información de libro
vacio mostrar_libro(jsn libro) {
    imprimir("--- " + libro.titulo + " ---")
    imprimir("Autor: " + libro.autor)
    imprimir("Año: " + libro.año.cadena())
    imprimir("Género: " + libro.genero)
    imprimir("Calificación: " + libro.calificacion.cadena())
    cadena estado = libro.prestado ? "Prestado" : "Disponible"
    imprimir("Estado: " + estado)
}

// Función para buscar libros disponibles
vacio libros_disponibles() {
    imprimir_informacion("--- LIBROS DISPONIBLES ---")
    entero contador = 0
    
    para (entero i = 0; i < biblioteca.longitud(); i++) {
        jsn libro = biblioteca[i]
        si (!libro.prestado) {
            mostrar_libro(libro)
            contador++
        }
    }
    
    si (contador == 0) {
        imprimir_advertencia("No hay libros disponibles")
    } sino {
        imprimir_exito("Total disponibles: " + contador.cadena())
    }
}

// Función para estadísticas
vacio estadisticas_biblioteca() {
    entero total_libros = biblioteca.longitud()
    entero prestados = 0
    número suma_calificaciones = 0.0
    
    para (entero i = 0; i < biblioteca.longitud(); i++) {
        jsn libro = biblioteca[i]
        si (libro.prestado) {
            prestados++
        }
        suma_calificaciones += libro.calificacion
    }
    
    entero disponibles = total_libros - prestados
    número promedio_calificacion = suma_calificaciones / total_libros.número()
    
    imprimir_informacion("--- ESTADÍSTICAS ---")
    imprimir("Total de libros: " + total_libros.cadena())
    imprimir("Libros prestados: " + prestados.cadena())
    imprimir("Libros disponibles: " + disponibles.cadena())
    imprimir("Calificación promedio: " + promedio_calificacion.cadena())
}

// Ejecutar sistema
libros_disponibles()
estadisticas_biblioteca()
```

---

<div class="notificacion success">
  <strong>🎉 ¡Excelente trabajo!</strong><br>
  Has explorado los ejemplos básicos de Quetzal. Estos fundamentos te preparan para crear programas más complejos y explorar las características avanzadas del lenguaje.
</div>

## 🚀 Próximos Pasos

Ahora que dominas los ejemplos básicos, puedes continuar con:

1. **[Ejemplos Avanzados](/ejemplos/avanzados/)** - Proyectos más complejos
2. **[Funciones](/funciones/definicion/)** - Funciones avanzadas y recursión
3. **[Objetos y Clases](/objetos/clases/)** - Programación orientada a objetos
4. **[JSON Avanzado](/avanzado/json/)** - Manejo avanzado de datos JSON
