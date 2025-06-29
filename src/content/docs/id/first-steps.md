---
title: Langkah Pertama
description: Tutorial langkah pertama dengan Lenguaje de Programación Quetzal
---

# Langkah Pertama dengan Quetzal

Selamat datang di dunia pemrograman fungsional dengan Quetzal! Tutorial ini akan memandu Anda melalui konsep-konsep dasar dan menulis program pertama Anda.

## Program Pertama Anda

Mari kita mulai dengan tradisi "Hola Mundo":

```javascript
// File: hola_mundo.qz
imprimir_exito("¡Hola mundo desde Quetzal!")
```

Untuk menjalankannya:

```bash
quetzal run hola_mundo.qz
```

Output:
```
✓ Kompilasi berhasil
¡Hola mundo desde Quetzal!
```

## Konsep Dasar

### 1. Variabel dan Tipe Data

Quetzal memiliki sistem tipe yang kuat dengan inferensi otomatis:

```javascript
// Deklarasi variabel dengan tipe eksplisit
cadena nombre = "Ana García"
entero edad = 25
decimal altura = 1.68
booleano activo = verdadero

// Inferensi tipe otomatis
numero pi = 3.14159
lista números = [1, 2, 3, 4, 5]
```

### 2. Fungsi Dasar

Fungsi adalah warga kelas satu di Quetzal:

```javascript
// Fungsi sederhana
cadena saludar(cadena nombre) {
    devolver "¡Hola, " + nombre + "!"
}

// Penggunaan
cadena mensaje = saludar("Mundo")
imprimir(mensaje)  // Output: ¡Hola, Mundo!
```

### 3. Struktur Kontrol

#### Kondisional

```javascript
entero edad = 18

si (edad >= 18) {
    imprimir("Eres mayor de edad")
} sino {
    imprimir("Eres menor de edad")
}
```

#### Perulangan

```javascript
// Loop for tradisional
para i desde 1 hasta 5 {
    imprimir("Número: " + i.cadena())
}

// Loop dengan daftar
lista nombres = ["Ana", "Juan", "María"]
para nombre pada nombres {
    imprimir("Hola " + nombre)
}
```

## Bekerja dengan Data

### Daftar dan Manipulasi

```javascript
// Membuat dan memanipulasi daftar
lista números = [1, 2, 3, 4, 5]

// Operasi fungsional
lista pares = números.filtrar(n => n % 2 == 0)
lista doblar = números.mapear(n => n * 2)
numero suma = números.reducir((a, b) => a + b, 0)

imprimir("Números pares: " + pares.cadena())
imprimir("Números doblados: " + doblar.cadena())
imprimir("Suma total: " + suma.cadena())
```

### Objek dan Properti

```javascript
// Definisi objek
objeto persona = {
    nombre: "Carlos Mendoza",
    edad: 30,
    ciudad: "Barcelona",
    activo: verdadero
}

// Akses properti
imprimir("Nombre: " + persona.nombre)
imprimir("Vive en: " + persona.ciudad)

// Modifikasi properti
persona.edad = 31
imprimir("Nueva edad: " + persona.edad.cadena())
```

## Input dan Output

### Input Pengguna

```javascript
// Input string
cadena nombre = entrada("¿Cuál es tu nombre? ")
imprimir("Hola " + nombre)

// Input angka
entero edad = entrada_numero("¿Cuántos años tienes? ")
si (edad >= 18) {
    imprimir("Eres adulto")
}

// Input boolean
booleano continuar = entrada_booleano("¿Quieres continuar? (si/no) ")
si (continuar) {
    imprimir("Continuando...")
}
```

### Output yang Diformat

```javascript
cadena nombre = "María"
entero edad = 25
decimal salario = 45000.50

// Output sederhana
imprimir("Nombre: " + nombre)

// Output dengan warna
imprimir_exito("✓ Operación exitosa")
imprimir_error("✗ Error encontrado")
imprimir_advertencia("⚠ Advertencia importante")

// Format data kompleks
imprimir("Empleado: " + nombre + ", Edad: " + edad.cadena() + ", Salario: $" + salario.cadena())
```

## Menangani Error

```javascript
// Blok try-catch
intentar {
    entero resultado = 10 / 0  // Ini akan menyebabkan error
    imprimir("Resultado: " + resultado.cadena())
} capturar error {
    imprimir_error("Error: División por cero")
} finalmente {
    imprimir("Operación finalizada")
}
```

## Contoh Praktis: Kalkulator Sederhana

```javascript
// File: calculadora.qz

cadena operacion = entrada("Ingresa la operación (+, -, *, /): ")
numero num1 = entrada_numero("Primer número: ")
numero num2 = entrada_numero("Segundo número: ")

numero resultado = 0

si (operacion == "+") {
    resultado = num1 + num2
} sino si (operacion == "-") {
    resultado = num1 - num2
} sino si (operacion == "*") {
    resultado = num1 * num2
} sino si (operacion == "/") {
    si (num2 != 0) {
        resultado = num1 / num2
    } sino {
        imprimir_error("Error: División por cero")
        devolver
    }
} sino {
    imprimir_error("Operación no válida")
    devolver
}

imprimir_exito("Resultado: " + resultado.cadena())
```

## Tips untuk Pemula

### 1. **Gunakan VS Code Extension**
- Instalasi ekstensi Quetzal untuk syntax highlighting
- Gunakan IntelliSense untuk pelengkapan otomatis

### 2. **Debugging**
```javascript
// Gunakan imprimir untuk debugging
entero x = 10
imprimir("Debug: x = " + x.cadena())
```

### 3. **Kode yang Bersih**
```javascript
// Gunakan nama variabel yang deskriptif
cadena nombreCompleto = "Juan Pérez"  // ✓ Baik
cadena n = "Juan Pérez"               // ✗ Buruk

// Komentar yang berguna
// Calcula el área de un círculo
numero calcularArea(numero radio) {
    numero pi = 3.14159
    devolver pi * radio * radio
}
```

### 4. **Organisasi Kode**
```javascript
// Grupkan kode yang terkait
// === FUNCIONES MATEMÁTICAS ===
numero sumar(numero a, numero b) { devolver a + b }
numero restar(numero a, numero b) { devolver a - b }

// === PROGRAMA PRINCIPAL ===
numero x = 10
numero y = 5
numero resultado = sumar(x, y)
```

## Langkah Selanjutnya

Sekarang Anda telah menguasai dasar-dasar, mari jelajahi lebih lanjut:

1. 📖 **[Sintaks Dasar](/id/basics/syntax)** - Pelajari sintaks lengkap
2. 🎯 **[Fungsi Lanjut](/id/functions/)** - Konsep fungsi yang mendalam
3. 📚 **[Struktur Data](/id/data-structures/)** - Daftar, objek, dan lainnya
4. ⚡ **[Pemrograman Asinkron](/id/async/)** - Async/await dan promises
5. 💡 **[Contoh Proyyek](/id/examples/projects/)** - Proyek lengkap

## Latihan

Coba tulis program berikut untuk berlatih:

1. **Konverter Suhu**: Konversi Celsius ke Fahrenheit
2. **Penghitung Faktorial**: Hitung faktorial dari angka
3. **Daftar Tugas**: Aplikasi TODO sederhana
4. **Generator Password**: Buat password acak

---

🎉 **Selamat!** Anda telah menyelesaikan langkah pertama dengan Quetzal. Terus berlatih dan jelajahi fitur-fitur canggih bahasa ini!
