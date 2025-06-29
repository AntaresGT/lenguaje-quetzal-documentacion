---
title: Ejemplos Avanzados
description: Ejemplos avanzados del Lenguaje de Programación Quetzal
---

# Ejemplos Avanzados

Esta sección contiene ejemplos más complejos que demuestran las características avanzadas de Quetzal.

## Programación Funcional Avanzada

### Composición de Funciones

```javascript
// Funciones de orden superior
funcion componer(funcion f, funcion g) {
    devolver funcion(x) {
        devolver f(g(x))
    }
}

// Funciones auxiliares
numero duplicar(numero x) {
    devolver x * 2
}

numero incrementar(numero x) {
    devolver x + 1
}

// Composición de funciones
funcion duplicarEIncrementar = componer(incrementar, duplicar)

numero resultado = duplicarEIncrementar(5)  // (5 * 2) + 1 = 11
imprimir("Resultado: " + resultado.cadena())
```

### Funciones de Array Avanzadas

```javascript
// Datos de ejemplo
lista personas = [
    {nombre: "Ana", edad: 25, ciudad: "Madrid"},
    {nombre: "Carlos", edad: 30, ciudad: "Barcelona"},
    {nombre: "Elena", edad: 22, ciudad: "Madrid"},
    {nombre: "David", edad: 35, ciudad: "Valencia"}
]

// Filtrar personas de Madrid mayores de 23 años
lista personasMadrid = personas
    .filtrar(p => p.ciudad == "Madrid")
    .filtrar(p => p.edad > 23)
    .mapear(p => p.nombre)

imprimir("Personas de Madrid > 23: " + personasMadrid.cadena())

// Reducir para calcular edad promedio
numero edadPromedio = personas
    .mapear(p => p.edad)
    .reducir((suma, edad) => suma + edad, 0) / personas.longitud()

imprimir("Edad promedio: " + edadPromedio.cadena())
```

## Manejo Avanzado de Objetos

### Clases y Herencia

```javascript
// Clase base
clase Animal {
    cadena nombre
    entero edad
    
    constructor(cadena nombre, entero edad) {
        este.nombre = nombre
        este.edad = edad
    }
    
    cadena describir() {
        devolver este.nombre + " tiene " + este.edad.cadena() + " años"
    }
    
    cadena hacer_sonido() {
        devolver "El animal hace un sonido"
    }
}

// Clase derivada
clase Perro extiende Animal {
    cadena raza
    
    constructor(cadena nombre, entero edad, cadena raza) {
        super(nombre, edad)
        este.raza = raza
    }
    
    cadena hacer_sonido() {
        devolver "¡Guau guau!"
    }
    
    cadena presentarse() {
        devolver "Soy " + este.nombre + ", un " + este.raza
    }
}

// Uso
Perro miPerro = nuevo Perro("Max", 3, "Golden Retriever")
imprimir(miPerro.describir())
imprimir(miPerro.hacer_sonido())
imprimir(miPerro.presentarse())
```

### Mixins y Traits

```javascript
// Trait para funcionalidad voladora
trait Volador {
    numero alturaVuelo = 0
    
    volar(numero altura) {
        este.alturaVuelo = altura
        imprimir("Volando a " + altura.cadena() + " metros")
    }
    
    aterrizar() {
        este.alturaVuelo = 0
        imprimir("Aterrizando...")
    }
}

// Clase que usa el trait
clase Pajaro con Volador {
    cadena especie
    
    constructor(cadena especie) {
        este.especie = especie
    }
    
    cadena cantar() {
        devolver "♪ ♫ ♪ ♫"
    }
}

// Uso
Pajaro quetzal = nuevo Pajaro("Quetzal Resplandeciente")
quetzal.volar(100)
imprimir(quetzal.cantar())
quetzal.aterrizar()
```

## Programación Asíncrona Avanzada

### Manejo de Múltiples Promesas

```javascript
// Simular llamadas API
asincrono promesa<objeto> obtener_usuario(entero id) {
    aguardar tiempo_espera(100)
    devolver {
        id: id,
        nombre: "Usuario " + id.cadena(),
        email: "user" + id.cadena() + "@ejemplo.com"
    }
}

asincrono promesa<lista> obtener_posts(entero userId) {
    aguardar tiempo_espera(150)
    devolver [
        {titulo: "Post 1", contenido: "Contenido del post 1"},
        {titulo: "Post 2", contenido: "Contenido del post 2"}
    ]
}

// Ejecutar promesas en paralelo
asincrono obtener_datos_completos(entero userId) {
    intentar {
        // Ejecutar en paralelo
        lista resultados = aguardar promesa.todas([
            obtener_usuario(userId),
            obtener_posts(userId)
        ])
        
        objeto usuario = resultados[0]
        lista posts = resultados[1]
        
        imprimir("Usuario: " + usuario.nombre)
        imprimir("Posts: " + posts.longitud().cadena())
        
        devolver {usuario: usuario, posts: posts}
    } capturar error {
        imprimir_error("Error obteniendo datos: " + error.mensaje)
        devolver nulo
    }
}

// Uso
aguardar obtener_datos_completos(123)
```

### Generadores y Iteradores

```javascript
// Generador de números Fibonacci
generador fibonacci(entero limite) {
    entero a = 0
    entero b = 1
    
    mientras (a <= limite) {
        producir a
        entero temp = a
        a = b
        b = temp + b
    }
}

// Uso del generador
para numero en fibonacci(100) {
    imprimir("Fibonacci: " + numero.cadena())
}

// Generador infinito con control manual
generador contador_infinito() {
    entero i = 0
    mientras (verdadero) {
        producir i
        i = i + 1
    }
}

// Uso controlado
objeto contador = contador_infinito()
para i desde 1 hasta 10 {
    entero valor = contador.siguiente()
    imprimir("Contador: " + valor.cadena())
}
```

## Metaprogramación

### Decoradores

```javascript
// Decorador para medir tiempo de ejecución
decorador cronometrar(funcion f) {
    devolver funcion(...argumentos) {
        entero inicio = tiempo_actual()
        objeto resultado = f.aplicar(este, argumentos)
        entero fin = tiempo_actual()
        
        imprimir("Función '" + f.nombre + "' ejecutada en " + (fin - inicio).cadena() + "ms")
        devolver resultado
    }
}

// Decorador para cache
decorador cache(funcion f) {
    objeto memoria = {}
    
    devolver funcion(...argumentos) {
        cadena clave = argumentos.unir(",")
        
        si (memoria.tiene_clave(clave)) {
            imprimir("Cache hit para: " + clave)
            devolver memoria[clave]
        }
        
        objeto resultado = f.aplicar(este, argumentos)
        memoria[clave] = resultado
        imprimir("Cache miss para: " + clave)
        devolver resultado
    }
}

// Uso de decoradores
@cronometrar
@cache
numero fibonacci_recursivo(numero n) {
    si (n <= 1) {
        devolver n
    }
    devolver fibonacci_recursivo(n - 1) + fibonacci_recursivo(n - 2)
}

// Test
imprimir("Fibonacci(10): " + fibonacci_recursivo(10).cadena())
imprimir("Fibonacci(10): " + fibonacci_recursivo(10).cadena())  // Desde cache
```

### Reflexión

```javascript
// Información de tipos en runtime
clase EjemploClase {
    cadena propiedad1 = "valor1"
    entero propiedad2 = 42
    
    cadena metodo1() {
        devolver "Método 1 ejecutado"
    }
    
    entero metodo2(entero x) {
        devolver x * 2
    }
}

// Introspección
objeto instancia = nuevo EjemploClase()
objeto tipo = instancia.obtener_tipo()

imprimir("Nombre de la clase: " + tipo.nombre)
imprimir("Propiedades:")
para propiedad en tipo.propiedades {
    imprimir("  " + propiedad.nombre + ": " + propiedad.tipo)
}

imprimir("Métodos:")
para metodo en tipo.metodos {
    imprimir("  " + metodo.nombre + "(" + metodo.parametros.unir(", ") + ")")
}

// Ejecución dinámica
cadena nombreMetodo = "metodo1"
objeto resultado = instancia.invocar(nombreMetodo)
imprimir("Resultado dinámico: " + resultado.cadena())
```

## Patrones de Diseño

### Observer Pattern

```javascript
// Interface Observer
interfaz Observer {
    actualizar(objeto datos)
}

// Clase Subject
clase EventoManager {
    lista observadores = []
    
    suscribir(Observer observer) {
        este.observadores.agregar(observer)
    }
    
    desuscribir(Observer observer) {
        este.observadores.remover(observer)
    }
    
    notificar(objeto datos) {
        para observer en este.observadores {
            observer.actualizar(datos)
        }
    }
}

// Implementaciones de Observer
clase LoggerObserver implementa Observer {
    actualizar(objeto datos) {
        imprimir("Log: " + datos.cadena())
    }
}

clase EmailObserver implementa Observer {
    actualizar(objeto datos) {
        imprimir("Enviando email sobre: " + datos.evento)
    }
}

// Uso
EventoManager manager = nuevo EventoManager()
manager.suscribir(nuevo LoggerObserver())
manager.suscribir(nuevo EmailObserver())

manager.notificar({evento: "usuario_registrado", usuario: "juan@ejemplo.com"})
```

### Builder Pattern

```javascript
// Builder para configuración compleja
clase ConfiguracionBuilder {
    objeto config = {}
    
    ConfiguracionBuilder host(cadena host) {
        este.config.host = host
        devolver este
    }
    
    ConfiguracionBuilder puerto(entero puerto) {
        este.config.puerto = puerto
        devolver este
    }
    
    ConfiguracionBuilder ssl(booleano habilitado) {
        este.config.ssl = habilitado
        devolver este
    }
    
    ConfiguracionBuilder autenticacion(cadena usuario, cadena password) {
        este.config.auth = {usuario: usuario, password: password}
        devolver este
    }
    
    objeto construir() {
        // Validaciones
        si (!este.config.host) {
            lanzar nuevo Error("Host es requerido")
        }
        
        // Valores por defecto
        si (!este.config.puerto) {
            este.config.puerto = este.config.ssl ? 443 : 80
        }
        
        devolver este.config
    }
}

// Uso fluido
objeto config = nuevo ConfiguracionBuilder()
    .host("api.ejemplo.com")
    .puerto(8080)
    .ssl(verdadero)
    .autenticacion("admin", "secreto123")
    .construir()

imprimir("Configuración: " + config.cadena())
```

## Casos de Uso Prácticos

### API REST Client

```javascript
// Cliente HTTP avanzado
clase ApiClient {
    cadena baseUrl
    objeto headers = {}
    
    constructor(cadena baseUrl) {
        este.baseUrl = baseUrl
        este.headers["Content-Type"] = "application/json"
    }
    
    establecer_token(cadena token) {
        este.headers["Authorization"] = "Bearer " + token
    }
    
    asincrono promesa<objeto> get(cadena endpoint) {
        devolver aguardar este.request("GET", endpoint)
    }
    
    asincrono promesa<objeto> post(cadena endpoint, objeto datos) {
        devolver aguardar este.request("POST", endpoint, datos)
    }
    
    asincrono promesa<objeto> request(cadena metodo, cadena endpoint, objeto datos = nulo) {
        intentar {
            objeto respuesta = aguardar fetch(este.baseUrl + endpoint, {
                metodo: metodo,
                headers: este.headers,
                cuerpo: datos ? JSON.stringify(datos) : nulo
            })
            
            si (!respuesta.ok) {
                lanzar nuevo Error("HTTP " + respuesta.status.cadena())
            }
            
            devolver aguardar respuesta.json()
        } capturar error {
            imprimir_error("Error en API: " + error.mensaje)
            lanzar error
        }
    }
}

// Uso del cliente
asincrono ejemplo_api() {
    ApiClient client = nuevo ApiClient("https://api.ejemplo.com")
    client.establecer_token("mi-token-secreto")
    
    // GET request
    objeto usuarios = aguardar client.get("/usuarios")
    imprimir("Usuarios obtenidos: " + usuarios.longitud().cadena())
    
    // POST request
    objeto nuevoUsuario = {
        nombre: "Juan Pérez",
        email: "juan@ejemplo.com"
    }
    
    objeto resultado = aguardar client.post("/usuarios", nuevoUsuario)
    imprimir("Usuario creado con ID: " + resultado.id.cadena())
}

// Ejecutar ejemplo
aguardar ejemplo_api()
```

Este conjunto de ejemplos avanzados muestra la potencia y flexibilidad del Lenguaje Quetzal para desarrollar aplicaciones complejas manteniendo la elegancia y legibilidad del código en español.
