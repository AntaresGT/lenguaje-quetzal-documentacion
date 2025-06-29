```txt
** Prompt Lenguaje Quetzal v0.0.1 **

# 1. Mensaje para el agente
- **Siempre** responde en español; solo usa palabras en inglés cuando se indique expresamente.  
- Todo el _código_ (funciones, variables, archivos y directorios) debe estar escrito en español.  
- El intérprete debe:
  1. Ejecutar eficientemente programas Quetzal (.qz).  
  2. Detectar y reportar **errores de sintaxis, de tipo, de ejecución y de lógica** con mensajes claros (línea y descripción).  
  3. Integrar compatibilidad nativa con JSON.  

---

# 2. Introducción a Lenguaje Quetzal
- Lenguaje interpretado en tiempo de ejecución, implementado en **Rust** para alto rendimiento.  
- Extensión de archivo: `.qz`  
  - Ejemplos: `principal.qz`, `otro_archivo.qz`  
- Tipado **fuerte**.  
- Interoperabilidad directa con estructuras JSON.  

---

# 3. Requisitos de programación del intérprete

## 3.1 Estructura de archivos
```

/src
├── principal.rs         // Punto de entrada
├── utileria.rs
└── carpeta1/
├── modulo.rs
└── modulos/
└── modulo3.rs

````
*(Los nombres de archivos y directorios están siempre en español.)*

## 3.2 Convenciones de código
- Funciones en minúsculas y con guiones bajos:  
  ```rs
  fn nombre_funcion(param1, param2) { ... }
````

* Constantes declaradas con `let`:

  ```rs
  let nombre_constante = valor;
  ```
* Objetos/estructuras en **CamelCase**.
* Documentación y comentarios exclusivamente en español.
* Palabras en inglés permitidas solo para `fn main()` o cuando se indique.

---

# 4. Especificación del Lenguaje Quetzal

## 4.1 Reglas generales

* No se utiliza “;” al final de las instrucciones.
* Todo elemento es **constante** por defecto; se hace mutable con `mut`.

## 4.2 Comentarios

```javascript
// Comentario de una línea

/*
 Comentario de
 varias líneas
*/
```

## 4.3 Tipos de datos

```javascript
vacio   nombre_var            // Ningún valor
entero  nombre_var = 0        // Entero
número  nombre_var = 0.0      // Flotante
cadena  nombre_var = "texto"  // Cadena
bool    nombre_var = verdadero
lista<tipo> nombre = [ ... ]  // Lista tipada
lista       nombre = [1, "a", 3.2] // Lista mixta
jsn      nombre = { clave: "valor" } // Objeto JSON
```

> Ejemplo de mutabilidad
> `número mut contador = 1`

## 4.4 Funciones

**Importante:** la palabra `tipo` se refiere al tipo de dato de retorno.

```javascript
tipo nombre_funcion(tipo param1, tipo mut param2) {
    // código
    retornar valor
}

asincrono tipo nombre_funcion(...) {
    esperar otra_funcion()
    retornar resultado
}
```

## 4.5 Objetos (clases)

```javascript
objeto Persona {
    cadena nombre
    entero edad

    Persona(cadena nombre, entero edad) {
        ambiente.nombre = nombre
        ambiente.edad   = edad
    }

    cadena saludar() {
        retornar "Hola, " + ambiente.nombre
    }

    libre cadena version() { retornar "1.0" }
}
Persona juan = nuevo Persona("Juan", 30)
```

* Secciones `publico:` y `privado:` separan acceso externo/interno.

## 4.6 Módulos

```javascript
// En otro_archivo.qz
exportar { suma, resta }

número suma(entero a, entero b) { retornar a + b }
número resta(entero a, entero b) { retornar a - b }
```

```javascript
// En principal.qz
importar { suma } desde "otro_archivo.qz"
```

## 4.7 Bucles y condicionales

```javascript
para (i = 0; i < 10; i++) { ... }
mientras (condición) { ... }
hacer { ... } mientras (condición)

si (x > 0) { ... } sino { ... }
si (a) { ... } sino si (b) { ... } sino { ... }
```

## 4.8 Operadores

Aritméticos `+ - * / %`  |  Comparación `== != > < >= <=`
Lógicos `y / &&`, `o / ||`, `!`
Asignación `= += -= *= /= %=`
Incremento `++`  Decremento `--`
Ternario `cond ? v1 : v2`
Acceso `.  []`  |  Propagación `...`

## 4.9 Conversión de tipos

```javascript
número n = "123".numero()
cadena s = 456.cadena()
jsn    j = '{"k":1}'.jsn()
```

## 4.10 Excepciones

```javascript
intentar {
    lanzar nuevo Excepción("Error")
} atrapar (Excepción e) {
    imprimir_error(e.mensaje)
} finalmente {
    imprimir("Fin")
}
```

## 4.11 Consola

```javascript
imprimir("Hola mundo")
imprimir_error("Error")      // Rojo
imprimir_advertencia("¡Ojo!")// Amarillo
imprimir_exito("Hecho")      // Verde
```

El intérprete debe colorear la salida según el tipo de mensaje.

## 4.12 Palabras reservadas

```
vacio entero número cadena bool verdadero falso lista jsn
mut tipo publico privado libre fn retornar objeto nuevo ambiente
asincrono esperar si sino mientras para hacer romper continuar
intentar atrapar finalmente lanzar excepción importar exportar desde como
y o en
```

---

# 5. Requisitos del intérprete

1. **Detección de errores** de sintaxis/tipo/ejecución/lógica.
2. **Mensajes claros** con línea y descripción.
3. **Ejecución interactiva** en consola Quetzal con soporte de colores.
4. **Compatibilidad JSON** sin conversiones externas.

---

# 6. Notas finales

* El diseño debe priorizar **eficiencia** (Rust) y **claridad** (código en español).
* Mantén esta estructura al colaborar con otras inteligencias artificiales.

```
```
