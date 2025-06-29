---
title: API Completa
description: Referencia completa de funciones, métodos y APIs del Lenguaje Quetzal
---

# API Completa de Quetzal

Esta es la referencia completa de todas las funciones, métodos y APIs disponibles en el Lenguaje de Programación Quetzal.

## Funciones de Entrada/Salida

### Funciones de Salida

```javascript
// Función básica de impresión
imprimir(mensaje: cadena) -> vacio
imprimir("Hola mundo")

// Impresión con estado exitoso (color verde)
imprimir_exito(mensaje: cadena) -> vacio
imprimir_exito("Operación completada")

// Impresión de errores (color rojo)
imprimir_error(mensaje: cadena) -> vacio
imprimir_error("Error en la operación")

// Impresión de advertencias (color amarillo)
imprimir_advertencia(mensaje: cadena) -> vacio
imprimir_advertencia("Advertencia importante")

// Impresión de información (color azul)
imprimir_info(mensaje: cadena) -> vacio
imprimir_info("Información relevante")
```

### Funciones de Entrada

```javascript
// Entrada de texto
entrada(prompt: cadena = "") -> cadena
cadena nombre = entrada("Ingresa tu nombre: ")

// Entrada de números enteros
entrada_numero(prompt: cadena = "") -> entero
entero edad = entrada_numero("Ingresa tu edad: ")

// Entrada de números decimales
entrada_decimal(prompt: cadena = "") -> decimal
decimal altura = entrada_decimal("Ingresa tu altura: ")

// Entrada de valores booleanos
entrada_booleano(prompt: cadena = "") -> booleano
booleano continuar = entrada_booleano("¿Continuar? (si/no): ")
```

## Tipos de Datos y Conversiones

### Conversiones de Tipos

```javascript
// Conversión a cadena
numero.cadena() -> cadena
entero edad = 25
imprimir("Edad: " + edad.cadena())

// Conversión a número
cadena.numero() -> numero
cadena texto = "123.45"
numero valor = texto.numero()

// Conversión a entero
numero.entero() -> entero
decimal pi = 3.14159
entero pi_entero = pi.entero()  // 3

// Conversión a decimal
entero.decimal() -> decimal
entero num = 42
decimal num_decimal = num.decimal()  // 42.0

// Conversión a booleano
cadena.booleano() -> booleano
cadena texto = "verdadero"
booleano valor = texto.booleano()
```

### Verificación de Tipos

```javascript
// Verificar si es número
es_numero(valor) -> booleano
booleano esNum = es_numero("123")  // verdadero

// Verificar si es cadena
es_cadena(valor) -> booleano
booleano esCad = es_cadena(123)  // falso

// Verificar si es lista
es_lista(valor) -> booleano
booleano esLista = es_lista([1, 2, 3])  // verdadero

// Verificar si es objeto
es_objeto(valor) -> booleano
booleano esObj = es_objeto({clave: "valor"})  // verdadero

// Verificar si es nulo
es_nulo(valor) -> booleano
booleano esNulo = es_nulo(nulo)  // verdadero
```

## Operaciones con Cadenas

### Métodos de Cadena

```javascript
cadena texto = "Hola Mundo Quetzal"

// Longitud
texto.longitud() -> entero
entero len = texto.longitud()  // 18

// Convertir a mayúsculas
texto.mayuscula() -> cadena
cadena mayus = texto.mayuscula()  // "HOLA MUNDO QUETZAL"

// Convertir a minúsculas
texto.minuscula() -> cadena
cadena minus = texto.minuscula()  // "hola mundo quetzal"

// Subcadena
texto.subcadena(inicio: entero, fin?: entero) -> cadena
cadena sub = texto.subcadena(0, 4)  // "Hola"

// Dividir cadena
texto.dividir(separador: cadena) -> lista<cadena>
lista palabras = texto.dividir(" ")  // ["Hola", "Mundo", "Quetzal"]

// Reemplazar texto
texto.reemplazar(buscar: cadena, reemplazar: cadena) -> cadena
cadena nuevo = texto.reemplazar("Mundo", "Universo")

// Comienza con
texto.comienza_con(prefijo: cadena) -> booleano
booleano comienza = texto.comienza_con("Hola")  // verdadero

// Termina con
texto.termina_con(sufijo: cadena) -> booleano
booleano termina = texto.termina_con("Quetzal")  // verdadero

// Contiene
texto.contiene(buscar: cadena) -> booleano
booleano contiene = texto.contiene("Mundo")  // verdadero

// Índice de
texto.indice_de(buscar: cadena) -> entero
entero indice = texto.indice_de("Mundo")  // 5

// Eliminar espacios
cadena con_espacios = "  Hola  "
con_espacios.trim() -> cadena
cadena limpio = con_espacios.trim()  // "Hola"

// Repetir cadena
texto.repetir(veces: entero) -> cadena
cadena repetido = "Ha".repetir(3)  // "HaHaHa"
```

## Operaciones con Listas

### Métodos de Lista

```javascript
lista numeros = [1, 2, 3, 4, 5]

// Longitud
numeros.longitud() -> entero
entero len = numeros.longitud()  // 5

// Agregar elemento
numeros.agregar(elemento) -> vacio
numeros.agregar(6)  // [1, 2, 3, 4, 5, 6]

// Insertar en posición
numeros.insertar(indice: entero, elemento) -> vacio
numeros.insertar(0, 0)  // [0, 1, 2, 3, 4, 5, 6]

// Remover elemento
numeros.remover(elemento) -> booleano
booleano removido = numeros.remover(3)  // verdadero, [0, 1, 2, 4, 5, 6]

// Remover por índice
numeros.remover_en(indice: entero) -> elemento
numero removido = numeros.remover_en(0)  // 0, [1, 2, 4, 5, 6]

// Obtener elemento
numeros.obtener(indice: entero) -> elemento
numero elemento = numeros.obtener(0)  // 1

// Establecer elemento
numeros.establecer(indice: entero, elemento) -> vacio
numeros.establecer(0, 10)  // [10, 2, 4, 5, 6]

// Contiene
numeros.contiene(elemento) -> booleano
booleano contiene = numeros.contiene(5)  // verdadero

// Índice de
numeros.indice_de(elemento) -> entero
entero indice = numeros.indice_de(5)  // 3

// Está vacía
numeros.vacia() -> booleano
booleano vacia = numeros.vacia()  // falso

// Limpiar
numeros.limpiar() -> vacio
numeros.limpiar()  // []

// Clonar
numeros.clonar() -> lista
lista copia = numeros.clonar()

// Unir con separador
numeros.unir(separador: cadena = ",") -> cadena
cadena unida = numeros.unir(" - ")  // "1 - 2 - 4 - 5 - 6"
```

### Operaciones Funcionales

```javascript
lista numeros = [1, 2, 3, 4, 5]

// Mapear
numeros.mapear(funcion) -> lista
lista dobles = numeros.mapear(n => n * 2)  // [2, 4, 6, 8, 10]

// Filtrar
numeros.filtrar(funcion) -> lista
lista pares = numeros.filtrar(n => n % 2 == 0)  // [2, 4]

// Reducir
numeros.reducir(funcion, inicial?) -> elemento
numero suma = numeros.reducir((a, b) => a + b, 0)  // 15

// Para cada
numeros.para_cada(funcion) -> vacio
numeros.para_cada(n => imprimir(n.cadena()))

// Encontrar
numeros.encontrar(funcion) -> elemento?
numero encontrado = numeros.encontrar(n => n > 3)  // 4

// Encontrar índice
numeros.encontrar_indice(funcion) -> entero
entero indice = numeros.encontrar_indice(n => n > 3)  // 3

// Todos cumplen
numeros.todos(funcion) -> booleano
booleano todos_positivos = numeros.todos(n => n > 0)  // verdadero

// Alguno cumple
numeros.alguno(funcion) -> booleano
booleano hay_pares = numeros.alguno(n => n % 2 == 0)  // verdadero

// Ordenar
numeros.ordenar(funcion?) -> lista
lista ordenados = numeros.ordenar()  // [1, 2, 3, 4, 5]
lista desc = numeros.ordenar((a, b) => b - a)  // [5, 4, 3, 2, 1]

// Reverso
numeros.reverso() -> lista
lista invertidos = numeros.reverso()  // [5, 4, 3, 2, 1]

// Tomar primeros
numeros.tomar(cantidad: entero) -> lista
lista primeros = numeros.tomar(3)  // [1, 2, 3]

// Saltar primeros
numeros.saltar(cantidad: entero) -> lista
lista resto = numeros.saltar(2)  // [3, 4, 5]

// Aplanar (para listas anidadas)
lista anidada = [[1, 2], [3, 4], [5]]
anidada.aplanar() -> lista
lista plana = anidada.aplanar()  // [1, 2, 3, 4, 5]
```

## Operaciones con Objetos

### Métodos de Objeto

```javascript
objeto persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
}

// Obtener claves
persona.claves() -> lista<cadena>
lista claves = persona.claves()  // ["nombre", "edad", "ciudad"]

// Obtener valores
persona.valores() -> lista
lista valores = persona.valores()  // ["Ana", 25, "Madrid"]

// Obtener entradas (pares clave-valor)
persona.entradas() -> lista<lista>
lista entradas = persona.entradas()  // [["nombre", "Ana"], ["edad", 25], ["ciudad", "Madrid"]]

// Tiene clave
persona.tiene_clave(clave: cadena) -> booleano
booleano tiene = persona.tiene_clave("nombre")  // verdadero

// Obtener valor
persona.obtener(clave: cadena, defecto?) -> elemento
cadena nombre = persona.obtener("nombre")  // "Ana"
cadena pais = persona.obtener("pais", "España")  // "España"

// Establecer valor
persona.establecer(clave: cadena, valor) -> vacio
persona.establecer("pais", "España")

// Eliminar clave
persona.eliminar(clave: cadena) -> booleano
booleano eliminado = persona.eliminar("edad")

// Clonar
persona.clonar() -> objeto
objeto copia = persona.clonar()

// Fusionar objetos
objeto direccion = {calle: "Main St", numero: 123}
persona.fusionar(direccion) -> objeto
objeto completo = persona.fusionar(direccion)

// Está vacío
persona.vacio() -> booleano
booleano vacio = persona.vacio()  // falso

// Tamaño
persona.tamaño() -> entero
entero size = persona.tamaño()  // 3
```

## Funciones Matemáticas

### Operaciones Básicas

```javascript
// Valor absoluto
abs(numero) -> numero
numero absoluto = abs(-5)  // 5

// Máximo
max(numero, numero, ...numeros) -> numero
numero maximo = max(1, 5, 3, 9, 2)  // 9

// Mínimo
min(numero, numero, ...numeros) -> numero
numero minimo = min(1, 5, 3, 9, 2)  // 1

// Potencia
pow(base: numero, exponente: numero) -> numero
numero resultado = pow(2, 3)  // 8

// Raíz cuadrada
sqrt(numero) -> numero
numero raiz = sqrt(16)  // 4

// Redondear
round(numero) -> entero
entero redondeado = round(3.7)  // 4

// Redondear hacia abajo
floor(numero) -> entero
entero abajo = floor(3.7)  // 3

// Redondear hacia arriba
ceil(numero) -> entero
entero arriba = ceil(3.2)  // 4

// Número aleatorio
random() -> decimal  // Entre 0 y 1
decimal aleatorio = random()

// Número aleatorio en rango
random_rango(min: numero, max: numero) -> numero
numero aleatorio_rango = random_rango(1, 10)
```

### Constantes Matemáticas

```javascript
// Pi
numero PI = 3.141592653589793

// Euler
numero E = 2.718281828459045

// Funciones trigonométricas
sin(radianes: numero) -> numero
cos(radianes: numero) -> numero
tan(radianes: numero) -> numero

// Logaritmos
log(numero) -> numero        // Logaritmo natural
log10(numero) -> numero      // Logaritmo base 10
```

## Funciones de Tiempo

### Manejo de Tiempo

```javascript
// Tiempo actual en milisegundos
tiempo_actual() -> entero
entero ahora = tiempo_actual()

// Dormir/pausar ejecución
asincrono tiempo_espera(milisegundos: entero) -> promesa<vacio>
aguardar tiempo_espera(1000)  // Espera 1 segundo

// Obtener fecha actual
fecha_actual() -> objeto
objeto fecha = fecha_actual()
// {año: 2024, mes: 12, dia: 29, hora: 14, minuto: 30, segundo: 45}

// Formatear fecha
formatear_fecha(fecha: objeto, formato: cadena) -> cadena
cadena fecha_str = formatear_fecha(fecha, "DD/MM/AAAA")

// Parsear fecha
parsear_fecha(fecha_str: cadena, formato: cadena) -> objeto
objeto fecha_parseada = parsear_fecha("29/12/2024", "DD/MM/AAAA")
```

## Funciones de Sistema

### Información del Sistema

```javascript
// Información del sistema operativo
info_sistema() -> objeto
objeto sistema = info_sistema()
// {nombre: "Windows", version: "11", arquitectura: "x64"}

// Variables de entorno
obtener_env(nombre: cadena) -> cadena?
cadena path = obtener_env("PATH")

// Establecer variable de entorno
establecer_env(nombre: cadena, valor: cadena) -> vacio
establecer_env("MI_VAR", "mi_valor")

// Directorio actual
directorio_actual() -> cadena
cadena dir = directorio_actual()

// Cambiar directorio
cambiar_directorio(ruta: cadena) -> booleano
booleano cambiado = cambiar_directorio("/nueva/ruta")
```

### Manejo de Archivos

```javascript
// Leer archivo
leer_archivo(ruta: cadena) -> cadena
cadena contenido = leer_archivo("archivo.txt")

// Escribir archivo
escribir_archivo(ruta: cadena, contenido: cadena) -> booleano
booleano escrito = escribir_archivo("nuevo.txt", "Contenido")

// Verificar si existe archivo
existe_archivo(ruta: cadena) -> booleano
booleano existe = existe_archivo("archivo.txt")

// Obtener información de archivo
info_archivo(ruta: cadena) -> objeto
objeto info = info_archivo("archivo.txt")
// {tamaño: 1024, creado: fecha, modificado: fecha}

// Listar directorio
listar_directorio(ruta: cadena) -> lista<cadena>
lista archivos = listar_directorio(".")

// Crear directorio
crear_directorio(ruta: cadena) -> booleano
booleano creado = crear_directorio("nuevo_directorio")

// Eliminar archivo
eliminar_archivo(ruta: cadena) -> booleano
booleano eliminado = eliminar_archivo("archivo_temp.txt")
```

## Funciones JSON

### Manejo de JSON

```javascript
// Convertir objeto a JSON
JSON.stringify(objeto) -> cadena
objeto datos = {nombre: "Ana", edad: 25}
cadena json = JSON.stringify(datos)

// Parsear JSON a objeto
JSON.parse(json: cadena) -> objeto
objeto datos_parseados = JSON.parse(json)

// Validar JSON
JSON.validar(json: cadena) -> booleano
booleano valido = JSON.validar('{"clave": "valor"}')
```

## Funciones de Red (HTTP)

### Cliente HTTP

```javascript
// Realizar petición GET
asincrono http_get(url: cadena, headers?: objeto) -> promesa<objeto>
objeto respuesta = aguardar http_get("https://api.ejemplo.com/datos")

// Realizar petición POST
asincrono http_post(url: cadena, datos: objeto, headers?: objeto) -> promesa<objeto>
objeto resultado = aguardar http_post("https://api.ejemplo.com/crear", {nombre: "Juan"})

// Realizar petición personalizada
asincrono http_request(config: objeto) -> promesa<objeto>
objeto respuesta = aguardar http_request({
    metodo: "PUT",
    url: "https://api.ejemplo.com/actualizar/123",
    datos: {nombre: "Juan Actualizado"},
    headers: {"Authorization": "Bearer token123"}
})
```

## Funciones de Utilidad

### Utilidades Generales

```javascript
// Generar UUID
uuid() -> cadena
cadena id_unico = uuid()

// Hash MD5
md5(texto: cadena) -> cadena
cadena hash = md5("texto a hashear")

// Hash SHA256
sha256(texto: cadena) -> cadena
cadena hash_seguro = sha256("datos importantes")

// Codificar Base64
base64_encode(texto: cadena) -> cadena
cadena codificado = base64_encode("texto")

// Decodificar Base64
base64_decode(base64: cadena) -> cadena
cadena decodificado = base64_decode(codificado)

// Validar email
validar_email(email: cadena) -> booleano
booleano email_valido = validar_email("test@ejemplo.com")

// Validar URL
validar_url(url: cadena) -> booleano
booleano url_valida = validar_url("https://ejemplo.com")
```

Esta es la API completa disponible en Quetzal. Cada función está diseñada para ser intuitiva y expresiva, manteniendo la filosofía del lenguaje de ser claro y legible en español.
