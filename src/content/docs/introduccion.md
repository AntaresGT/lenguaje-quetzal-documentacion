---
title: Introducción al Lenguaje Quetzal
description: Descubre qué es Quetzal y por qué revolucionará tu forma de programar
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Introducción al Lenguaje Quetzal

¡Bienvenido al **Lenguaje de Programación Quetzal**! Un lenguaje moderno, funcional y completamente en español que cambiará tu forma de entender la programación.

## ¿Qué es Quetzal?

Quetzal es un lenguaje de programación interpretado que combina la elegancia de la programación funcional con la claridad del español. Diseñado desde cero para ser:

- **Intuitivo**: Sintaxis natural en español
- **Eficiente**: Implementado en Rust para máximo rendimiento
- **Funcional**: Paradigma funcional puro
- **Seguro**: Tipado fuerte que previene errores
- **Moderno**: Características contemporáneas de programación

## 🎯 Filosofía del Lenguaje

### Programación en tu idioma nativo
```javascript
// En lugar de escribir en inglés...
// function calculateTotal(price, tax) { ... }

// Escribes en español natural
función calcular_total(número precio, número impuesto) {
    retornar precio + (precio * impuesto)
}
```

### Expresividad y claridad
```javascript
// Código que se lee como literatura
si (usuario.edad >= 18 y usuario.tiene_licencia) {
    imprimir_exito("Usuario autorizado para conducir")
} sino {
    imprimir_advertencia("Usuario no cumple los requisitos")
}
```

## 🚀 Características Innovadoras

<CardGrid>
  <Card title="🧠 Programación Funcional" icon="puzzle">
    Diseñado desde cero para soportar paradigmas funcionales puros, promoviendo código más limpio y mantenible.
  </Card>
  
  <Card title="🎨 Sintaxis Expresiva" icon="pencil">
    Cada línea de código se lee como español natural, facilitando la comprensión y el mantenimiento.
  </Card>
  
  <Card title="⚡ Rendimiento Optimizado" icon="rocket">
    Motor de ejecución en Rust que garantiza velocidad sin comprometer la seguridad.
  </Card>
  
  <Card title="🔒 Tipado Seguro" icon="approve-check">
    Sistema de tipos robusto que detecta errores en tiempo de compilación.
  </Card>
</CardGrid>

## 🌟 ¿Por qué elegir Quetzal?

### Para Principiantes
- **Barrera de entrada baja**: No necesitas aprender inglés técnico
- **Sintaxis intuitiva**: Se lee como español cotidiano
- **Mensajes de error claros**: Explicaciones detalladas en español
- **Documentación completa**: Guías paso a paso para aprender

### Para Desarrolladores Experimentados
- **Paradigma funcional**: Código más predecible y testeable
- **Interoperabilidad JSON**: Trabajar con APIs modernas sin fricción
- **Herramientas integradas**: Extensión VS Code completa
- **Comunidad activa**: Desarrollo colaborativo en GitHub

## 🎪 Ejemplo Comparativo

### JavaScript tradicional:
```javascript
const users = [
  { name: "Juan", age: 25, active: true },
  { name: "María", age: 30, active: false },
  { name: "Pedro", age: 35, active: true }
];

const activeUsers = users
  .filter(user => user.active)
  .map(user => user.name);

console.log("Active users:", activeUsers);
```

### Quetzal equivalente:
```javascript
lista<jsn> usuarios = [
  { nombre: "Juan", edad: 25, activo: verdadero },
  { nombre: "María", edad: 30, activo: falso },
  { nombre: "Pedro", edad: 35, activo: verdadero }
]

lista<cadena> usuarios_activos = usuarios
  .filtrar(usuario => usuario.activo)
  .mapear(usuario => usuario.nombre)

imprimir_exito("Usuarios activos: " + usuarios_activos.cadena())
```

## 🔧 Estado Actual del Desarrollo

<div class="notificacion info">
  <strong>Versión Actual: v0.0.1</strong><br>
  Quetzal está en sus primeras etapas de desarrollo. Esta versión incluye:
</div>

### ✅ Características Implementadas
- ✅ Tipos de datos básicos (entero, número, cadena, bool)
- ✅ Variables mutables e inmutables
- ✅ Funciones con parámetros tipados
- ✅ Estructuras de control (si/sino, bucles)
- ✅ Objetos y clases básicas
- ✅ Soporte JSON nativo
- ✅ Sistema de módulos
- ✅ Manejo de excepciones
- ✅ Funciones de consola con colores

### 🚧 En Desarrollo
- 🚧 Funciones asíncronas avanzadas
- 🚧 Sistema de paquetes
- 🚧 Bibliotecas estándar expandidas
- 🚧 Herramientas de debugging
- 🚧 Optimizaciones de rendimiento
- 🚧 Soporte para múltiples plataformas

## 🎓 Próximos Pasos

1. **[Instalar Quetzal](/instalacion/)** - Descarga e instala el lenguaje
2. **[Primeros pasos](/primeros-pasos/)** - Tu primer programa en Quetzal
3. **[Sintaxis básica](/fundamentos/sintaxis-basica/)** - Aprende los fundamentos
4. **[Ejemplos prácticos](/ejemplos/basicos/)** - Código real para practicar

## 💡 Visión del Proyecto

Quetzal no es solo un lenguaje de programación; es un movimiento hacia la democratización de la tecnología en el mundo hispanohablante. Nuestro objetivo es:

- **Eliminar barreras lingüísticas** en la programación
- **Fomentar la innovación** en comunidades de habla hispana
- **Crear herramientas modernas** con identidad cultural
- **Formar una comunidad** de desarrolladores colaborativa

---

<div class="flex gap-4 justify-center mt-8">
  <a href="/instalacion/" class="boton-quetzal">
    🚀 Comenzar con Quetzal
  </a>
  <a href="https://github.com/AntaresGT/lenguaje-quetzal" class="boton-quetzal">
    🌟 Contribuir en GitHub
  </a>
</div>
