---
title: Instalasi
description: Cara menginstal Lenguaje de Programación Quetzal di sistem Anda
---

# Instalasi Quetzal

Quetzal dirancang untuk mudah diinstal dan digunakan. Ikuti panduan ini untuk menyiapkan lingkungan pengembangan Anda.

## Persyaratan Sistem

- **Sistem Operasi**: Windows 10/11 (64-bit)
- **RAM**: Minimum 512MB (disarankan 1GB)
- **Ruang Disk**: 100MB ruang kosong
- **Prosesor**: Intel/AMD x64

## Unduh Quetzal

### 1. Dari GitHub Releases (Direkomendasikan)

Kunjungi halaman [GitHub Releases](https://github.com/AntaresGT/lenguaje-quetzal/releases) dan unduh versi terbaru:

```bash
# Unduh rilis terbaru
https://github.com/AntaresGT/lenguaje-quetzal/releases/latest
```

### 2. Menggunakan Git

```bash
git clone https://github.com/AntaresGT/lenguaje-quetzal.git
cd lenguaje-quetzal
```

## Instalasi

### Windows

1. **Unduh executable**:
   - Unduh `quetzal-windows-x64.exe` dari GitHub Releases
   - Ukuran file: ~56KB

2. **Tambahkan ke PATH** (opsional):
   ```cmd
   # Salin quetzal.exe ke direktori dalam PATH Anda
   copy quetzal.exe C:\Windows\System32\
   ```

3. **Verifikasi instalasi**:
   ```cmd
   quetzal --version
   ```

## Instalasi VS Code Extension

Untuk pengalaman pengembangan terbaik, instal ekstensi resmi Quetzal untuk Visual Studio Code:

### Dari VS Code Marketplace

1. Buka Visual Studio Code
2. Pergi ke panel Extensions (`Ctrl+Shift+X`)
3. Cari "Quetzal Language"
4. Klik "Install" pada ekstensi oleh AntaresGT

### Dari Command Line

```bash
code --install-extension AntaresGT.quetzal-language
```

### Fitur Ekstensi

- ✅ **Syntax Highlighting**: Penyorotan sintaks untuk file `.qz`
- ✅ **IntelliSense**: Pelengkapan otomatis dan saran
- ✅ **Error Detection**: Deteksi dan penyorotan error
- ✅ **Code Snippets**: Template kode siap pakai
- ✅ **Integrated Terminal**: Menjalankan kode langsung dari editor

## Verifikasi Instalasi

Buat file test sederhana untuk memastikan semuanya berfungsi:

### 1. Buat file `hola_mundo.qz`

```javascript
// File: hola_mundo.qz
imprimir_exito("¡Hola mundo desde Quetzal!")

cadena nombre = "Belajar Quetzal"
imprimir("Saya sedang: " + nombre)
```

### 2. Jalankan file

```cmd
quetzal run hola_mundo.qz
```

### 3. Output yang diharapkan

```
✓ Kompilasi berhasil
¡Hola mundo desde Quetzal!
Saya sedang: Belajar Quetzal
```

## Pemecahan Masalah

### Error Umum

**Error: "quetzal tidak dikenali sebagai perintah"**
- Solusi: Pastikan `quetzal.exe` ada di PATH sistem Anda

**Error: "File tidak dapat dieksekusi"**
- Solusi: Pastikan Anda mengunduh versi yang tepat untuk sistem Windows Anda

**Error kompilasi: "Sintaks tidak valid"**
- Solusi: Periksa sintaks menggunakan ekstensi VS Code yang menyediakan error highlighting

### Bantuan Lebih Lanjut

- 📚 [Dokumentasi Lengkap](/)
- 🐛 [Laporkan Bug](https://github.com/AntaresGT/lenguaje-quetzal/issues)
- 💬 [Diskusi Komunitas](https://github.com/AntaresGT/lenguaje-quetzal/discussions)
- 📧 [Kontak Developer](mailto:contact@antaresgt.com)

## Langkah Selanjutnya

Setelah instalasi berhasil:

1. 📖 **[Langkah Pertama](/id/first-steps/)** - Belajar konsep dasar
2. 🎯 **[Sintaks Dasar](/id/basics/)** - Pelajari sintaks Quetzal
3. 💡 **[Contoh](/id/examples/)** - Lihat contoh kode praktis
4. 🛠️ **[VS Code Tips](/id/tools/)** - Maksimalkan penggunaan ekstensi

---

🎉 **Selamat! Anda telah berhasil menginstal Quetzal.** Sekarang Anda siap untuk memulai perjalanan pemrograman fungsional dalam bahasa Spanyol!
