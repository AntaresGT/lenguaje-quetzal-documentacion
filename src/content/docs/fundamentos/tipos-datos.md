---
title: Tipos de Datos en Quetzal
description: Guía completa de todos los tipos de datos disponibles en Quetzal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Tipos de Datos en Quetzal

Quetzal incluye un sistema de tipos robusto y expresivo que te permite trabajar con diferentes tipos de información de manera segura y eficiente.

## 🎯 Filosofía del Sistema de Tipos

- **Tipado fuerte**: Los tipos se verifican en tiempo de compilación
- **Inmutabilidad por defecto**: Los valores no cambian a menos que se especifique
- **Claridad**: Nombres de tipos en español y fáciles de entender
- **Seguridad**: Prevención de errores comunes de tipos

## 📊 Tipos Primitivos

### vacio
Representa la ausencia de valor. Útil para funciones que no retornan nada.

```javascript
vacio variable_sin_valor
vacio imprimir_mensaje() {
    imprimir("Esta función no retorna nada")
}
```

### entero
Números enteros positivos y negativos.

```javascript
entero edad = 25
entero temperatura = -5
entero poblacion = 1_500_000    // Separadores para legibilidad

// Rangos (implementación actual)
entero minimo = -2_147_483_648  // Mínimo valor de 32 bits
entero maximo = 2_147_483_647   // Máximo valor de 32 bits

// Operaciones comunes
entero suma = 10 + 5         // 15
entero division = 10 / 3     // 3 (división entera)
entero modulo = 10 % 3       // 1
entero potencia = 2 ** 8     // 256
```

### número
Números decimales (punto flotante de doble precisión).

```javascript
número pi = 3.14159
número precio = 19.99
número muy_pequeño = 1.23e-10
número muy_grande = 5.67e15

// Precisión especial
número preciso = 123.456789012345

// Operaciones
número calculo = 10.5 + 3.2    // 13.7
número division = 10.0 / 3.0   // 3.333...
```

### cadena
Texto y caracteres Unicode completo.

```javascript
cadena nombre = "María"
cadena apellido = "González"
cadena unicode = "Emojis: 🚀🎯🌟"
cadena acentos = "ñáéíóú¡¿"

// Cadenas multilínea
cadena texto_largo = """
    Este es un texto que
    abarca múltiples líneas
    preservando la estructura.
"""

// Cadenas raw (sin procesar escapes)
cadena ruta = r"C:\Users\Documentos\archivo.txt"

// Interpolación (futura característica)
cadena mensaje = "Hola {nombre}, tienes {edad} años"
```

### bool
Valores de verdadero o falso.

```javascript
bool activo = verdadero
bool completado = falso
bool resultado = 5 > 3        // verdadero

// Operaciones lógicas
bool y_logico = verdadero y falso    // falso
bool o_logico = verdadero o falso    // verdadero
bool negacion = !verdadero           // falso
```

## 📋 Tipos de Colección

### lista&lt;tipo&gt;
Colecciones ordenadas de elementos del mismo tipo.

```javascript
// Listas tipadas
lista<entero> numeros = [1, 2, 3, 4, 5]
lista<cadena> nombres = ["Ana", "Luis", "María"]
lista<bool> estados = [verdadero, falso, verdadero]

// Lista vacía
lista<número> calificaciones = []

// Acceso por índice
entero primer_numero = numeros[0]     // 1
cadena ultimo_nombre = nombres[2]     // "María"

// Propiedades y métodos
entero tamaño = numeros.longitud()    // 5
bool vacia = calificaciones.es_vacia() // verdadero

// Modificación (solo si la lista es mutable)
lista<entero> mut numeros_mut = [1, 2, 3]
numeros_mut.agregar(4)               // [1, 2, 3, 4]
numeros_mut.insertar(0, 0)           // [0, 1, 2, 3, 4]
entero removido = numeros_mut.remover(2) // [0, 1, 3, 4], retorna 2
```

### lista (sin tipo específico)
Listas que pueden contener elementos de diferentes tipos.

```javascript
// Lista mixta
lista datos_mixtos = [1, "texto", 3.14, verdadero]

// Acceso requiere verificación de tipo
si (datos_mixtos[0] es entero) {
    entero numero = datos_mixtos[0] como entero
}
```

## 🌐 Tipo JSON Nativo

### jsn
Soporte nativo para objetos JSON sin necesidad de conversiones.

```javascript
// Objeto JSON simple
jsn usuario = {
    nombre: "Ana García",
    edad: 28,
    activo: verdadero,
    calificacion: 9.5
}

// Acceso a propiedades
cadena nombre_usuario = usuario.nombre
entero edad_usuario = usuario.edad

// Objetos anidados
jsn empresa = {
    nombre: "TechCorp",
    empleados: [
        { nombre: "Juan", puesto: "Desarrollador" },
        { nombre: "María", puesto: "Diseñadora" }
    ],
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Madrid",
        codigo_postal: "28001"
    }
}

// Acceso anidado
cadena nombre_empleado = empresa.empleados[0].nombre
cadena ciudad_empresa = empresa.direccion.ciudad

// Modificación (si es mutable)
jsn mut config = { servidor: "localhost", puerto: 8080 }
config.puerto = 3000
config.ssl = verdadero  // Agregar nueva propiedad
```

### Conversión entre JSON y cadenas

```javascript
// De cadena JSON a objeto
cadena json_texto = '{"nombre": "Luis", "edad": 30}'
jsn objeto = json_texto.jsn()

// De objeto a cadena JSON
jsn datos = { nombre: "Ana", edad: 25 }
cadena texto = datos.cadena()  // '{"nombre": "Ana", "edad": 25}'
```

## 🔄 Conversiones de Tipos

### Métodos de Conversión

```javascript
// Convertir a cadena
entero numero = 42
cadena texto = numero.cadena()        // "42"

número decimal = 3.14159
cadena texto_decimal = decimal.cadena() // "3.14159"

bool estado = verdadero
cadena texto_bool = estado.cadena()   // "verdadero"

// Convertir desde cadena
cadena texto_numero = "123"
entero numero_convertido = texto_numero.entero()  // 123

cadena texto_decimal = "45.67"
número decimal_convertido = texto_decimal.numero() // 45.67

// Verificar conversiones válidas
si (texto_numero.es_entero_valido()) {
    entero valor = texto_numero.entero()
}
```

### Conversiones Seguras

```javascript
// Conversión con manejo de errores
cadena entrada = "abc123"

intentar {
    entero numero = entrada.entero()
} atrapar (ExcepcionConversion e) {
    imprimir_error("No se pudo convertir: " + e.mensaje)
}

// Conversiones con valores por defecto
entero numero_seguro = entrada.entero_o(0)  // Retorna 0 si falla
número decimal_seguro = entrada.numero_o(0.0)
```

## 🎨 Tipos Personalizados (Objetos)

### Definición de Objetos

```javascript
objeto Persona {
    cadena nombre
    entero edad
    bool activo
    
    // Constructor
    Persona(cadena nombre, entero edad) {
        ambiente.nombre = nombre
        ambiente.edad = edad
        ambiente.activo = verdadero
    }
    
    // Métodos
    cadena obtener_saludo() {
        retornar "Hola, soy " + ambiente.nombre
    }
    
    bool es_mayor_edad() {
        retornar ambiente.edad >= 18
    }
}

// Uso del objeto
Persona usuario = nuevo Persona("Carlos", 25)
cadena saludo = usuario.obtener_saludo()
bool mayor = usuario.es_mayor_edad()
```

### Objetos con Diferentes Tipos

```javascript
objeto Calculadora {
    lista<número> historial
    
    Calculadora() {
        ambiente.historial = []
    }
    
    número sumar(número a, número b) {
        número resultado = a + b
        ambiente.historial.agregar(resultado)
        retornar resultado
    }
    
    lista<número> obtener_historial() {
        retornar ambiente.historial
    }
}
```

## 🔍 Verificación de Tipos

### Operador `es`

```javascript
lista datos = [1, "texto", 3.14, verdadero]

para cada elemento en datos {
    si (elemento es entero) {
        imprimir("Es un entero: " + elemento.cadena())
    } sino si (elemento es cadena) {
        imprimir("Es una cadena: " + elemento)
    } sino si (elemento es número) {
        imprimir("Es un número: " + elemento.cadena())
    } sino si (elemento es bool) {
        imprimir("Es un booleano: " + elemento.cadena())
    }
}
```

### Conversiones con Verificación

```javascript
función procesar_valor(objeto valor) {
    si (valor es entero) {
        entero num = valor como entero
        imprimir("Procesando entero: " + num.cadena())
    } sino si (valor es cadena) {
        cadena texto = valor como cadena
        imprimir("Procesando texto: " + texto)
    } sino {
        imprimir("Tipo no soportado")
    }
}
```

## 📊 Comparación de Tipos

<CardGrid>
  <Card title="🔢 entero vs número" icon="bars">
    **entero**: Sin decimales, operaciones más rápidas<br>
    **número**: Con decimales, mayor precisión
  </Card>
  
  <Card title="📝 cadena vs lista&lt;cadena&gt;" icon="document">
    **cadena**: Texto continuo, inmutable<br>
    **lista&lt;cadena&gt;**: Colección de textos
  </Card>
  
  <Card title="📋 lista&lt;tipo&gt; vs lista" icon="list-format">
    **lista&lt;tipo&gt;**: Un solo tipo, mayor seguridad<br>
    **lista**: Tipos mixtos, mayor flexibilidad
  </Card>
  
  <Card title="🌐 jsn vs objeto" icon="puzzle">
    **jsn**: Dinámico, para datos externos<br>
    **objeto**: Tipado, para lógica de aplicación
  </Card>
</CardGrid>

## 🎯 Ejemplos Prácticos

### Sistema de Gestión de Estudiantes

```javascript
// Definir el objeto Estudiante
objeto Estudiante {
    cadena nombre
    entero edad
    lista<número> calificaciones
    jsn informacion_adicional
    
    Estudiante(cadena nombre, entero edad) {
        ambiente.nombre = nombre
        ambiente.edad = edad
        ambiente.calificaciones = []
        ambiente.informacion_adicional = {}
    }
    
    vacio agregar_calificacion(número nota) {
        ambiente.calificaciones.agregar(nota)
    }
    
    número calcular_promedio() {
        si (ambiente.calificaciones.es_vacia()) {
            retornar 0.0
        }
        
        número suma = 0.0
        para cada nota en ambiente.calificaciones {
            suma += nota
        }
        
        retornar suma / ambiente.calificaciones.longitud().número()
    }
    
    cadena obtener_nivel() {
        número promedio = calcular_promedio()
        
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
}

// Uso del sistema
Estudiante ana = nuevo Estudiante("Ana García", 20)
ana.agregar_calificacion(8.5)
ana.agregar_calificacion(9.2)
ana.agregar_calificacion(8.8)

número promedio = ana.calcular_promedio()
cadena nivel = ana.obtener_nivel()

imprimir("Estudiante: " + ana.nombre)
imprimir("Promedio: " + promedio.cadena())
imprimir("Nivel: " + nivel)
```

### Procesador de Datos JSON

```javascript
función procesar_datos_api() {
    // Simular respuesta de API
    cadena respuesta_json = """
    {
        "usuarios": [
            {"id": 1, "nombre": "Juan", "activo": true},
            {"id": 2, "nombre": "María", "activo": false},
            {"id": 3, "nombre": "Carlos", "activo": true}
        ],
        "total": 3,
        "pagina": 1
    }
    """
    
    // Convertir a objeto JSON
    jsn datos = respuesta_json.jsn()
    
    // Procesar usuarios
    lista usuarios_activos = []
    
    para cada usuario en datos.usuarios {
        si (usuario.activo) {
            usuarios_activos.agregar(usuario.nombre)
        }
    }
    
    // Mostrar resultados
    imprimir_informacion("Total de usuarios: " + datos.total.cadena())
    imprimir_exito("Usuarios activos: " + usuarios_activos.longitud().cadena())
    
    para cada nombre en usuarios_activos {
        imprimir("- " + nombre)
    }
}
```

## 🚨 Errores Comunes y Soluciones

### Error: Tipo incorrecto

```javascript
// ❌ Error
entero numero = "123"  // Error: no se puede asignar cadena a entero

// ✅ Correcto
entero numero = "123".entero()  // Conversión explícita
```

### Error: Lista sin tipo específico

```javascript
// ❌ Potencialmente problemático
lista datos = [1, 2, 3]
cadena texto = datos[0]  // Error: datos[0] es entero, no cadena

// ✅ Mejor práctica
lista<entero> numeros = [1, 2, 3]
entero primer_numero = numeros[0]  // Seguro y claro
```

### Error: Modificar variable inmutable

```javascript
// ❌ Error
cadena nombre = "Ana"
nombre = "María"  // Error: variable inmutable

// ✅ Correcto
cadena mut nombre = "Ana"
nombre = "María"  // OK: variable mutable
```

---

<div class="notificacion info">
  <strong>💡 Recomendación:</strong> Usa siempre el tipo más específico posible. Esto hará tu código más seguro, legible y fácil de mantener.
</div>
