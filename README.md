# Tugas Praktikum Pemweb Genap
- [Tugas 1](./adisulaksono_120140038_pertemuan1/index.html)
- [Tugas 2](./adisulaksono_120140038_pertemuan2/personal-app/index.html)
- [Tugas 3](./adisulaksono_120140038_pertemuan3/README.md)
- [Tugas 4](./adisulaksono_120140038_pertemuan4/main.py)
    .....


## Pertemuan 1
Membuat sebuah skema cara kerja dari web server dan web browser dalam melakukan request dan response.
Pertanyaan dan Tugas
Untuk menguji pemahaman Kalian, kerjakan tugas yang berikut:

Tugas:
1. Buatlah aplikasi to-do list sederhana. Style tampilan tidak menjadi penilaian, fokus utama pada fungsionalitas JavaScript, dengan kriteria:
Menambahkan item baru
Menandai item sebagai selesai
Menghapus item
Menyimpan data ke localStorage
Bobot: 40% dari nilai tugas

2. Modifikasi kalkulator pada langkah 5 untuk mendukung operasi matematika tambahan seperti pangkat, akar kuadrat, dan modulus.
Bobot: 30% dari nilai tugas

3. Buatlah sebuah fungsi untuk memvalidasi form input dengan kriteria:
Nama harus lebih dari 3 karakter
Email harus valid
Password harus minimal 8 karakter
Bobot: 30% dari nilai tugas

----

## Pertemuan 2
Tugas: Aplikasi Personal Dashboard

Buatlah aplikasi personal dashboard sederhana yang menampilkan informasi yang Kalian pilih sendiri (misalnya jadwal kuliah, daftar tugas, catatan, atau informasi cuaca/waktu).

- Persyaratan:
    - Interaktif: Pengguna harus dapat menambah, mengedit, atau menghapus informasi
    - Penyimpanan Lokal: Gunakan localStorage untuk menyimpan data pengguna
- Fitur ES6+ Wajib:
    - Gunakan let dan const secara tepat untuk deklarasi variabel
    - Implementasikan minimal 3 arrow functions
    - Gunakan template literals untuk rendering dinamis
    - Gunakan Fungsi Asinkron (Pilih salah satu Async Await atau Promises)
    - Ada implementasi Classes


## Pertemuan 3
Tugas: Aplikasi Manajemen Buku Pribadi

Buatlah aplikasi manajemen buku pribadi yang memungkinkan pengguna mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli.

Persyaratan Wajib:
- Fitur Dasar:
    - Menambah buku baru (judul, penulis, status: milik/baca/beli)
    - Mengedit dan menghapus buku
    - Filter buku berdasarkan status
    - Pencarian buku

- Teknologi React:
    - Gunakan useState dan useEffect
    - Buat minimal 3 komponen reusable
    - Implementasikan Context API untuk state management
    - Gunakan React Router untuk navigasi multi-halaman

- Penyimpanan: Gunakan localStorage untuk menyimpan data

- Persyaratan Teknis:
    - Gunakan functional components dengan Hooks
    - Implementasikan minimal 2 custom hooks
    - Gunakan PropTypes untuk type checking
    - Buat minimal 5 test unit dengan React Testing Library
    - Terapkan error handling untuk form input

----

## Pertemuan 4
Tugas:
1. Buatlah program penghitung BMI (Body Mass Index) sederhana:
    - Buatlah variabel untuk menyimpan berat badan (kg) dan tinggi badan (m)
    - Hitung BMI dengan rumus: BMI = berat / (tinggi * tinggi)
    - Gunakan percabangan if-elif-else untuk menampilkan kategori BMI:
        - BMI < 18.5: Berat badan kurang
        - 18.5 <= BMI < 25: Berat badan normal
        - 25 <= BMI < 30: Berat badan berlebih
        - BMI >= 30: Obesitas
    - Print hasil perhitungan dan kategori 

Bobot: 30% dari nilai tugas

2. Buatlah program pengelolaan data nilai mahasiswa:
    - Buat list berisi minimal 5 dictionary data mahasiswa (nama, nim, nilai_uts, nilai_uas, nilai_tugas)
    - Hitung nilai akhir setiap mahasiswa dengan rumus: (30% UTS + 40% UAS + 30% Tugas)
    - Tentukan grade setiap mahasiswa berdasarkan nilai akhir:
        - A: nilai akhir 80 atau lebih
        - B: nilai akhir 70 sampai 79
        - C: nilai akhir 60 sampai 69
        - D: nilai akhir 50 sampai 59
        - E: nilai akhir kurang dari 50
    - Tampilkan data mahasiswa lengkap dengan nilai akhir dan grade dalam format tabel
    - Tampilkan mahasiswa dengan nilai tertinggi dan terendah

Bobot: 40% dari nilai tugas

3. Buatlah modul matematika Python dan program yang menggunakannya:
    - Buat file math_operations.py yang berisi:
        - Fungsi untuk menghitung luas dan keliling bentuk geometri (minimal 3 bentuk: persegi, persegi panjang, lingkaran)
        - Fungsi untuk konversi suhu (minimal 2 konversi: Celsius-Fahrenheit, Celsius-Kelvin)
        - Minimal 1 variabel konstanta (misal: PI = 3.14159)
    - Buat file main.py yang:
        - Mengimpor modul math_operations yang telah dibuat
        - Menggunakan semua fungsi dari modul tersebut dengan berbagai nilai input
        - Menampilkan hasil perhitungan dengan format yang rapi
        - Menggunakan minimal 2 cara berbeda untuk mengimpor modul/fungsi

Bobot: 30% dari nilai tugas

----

## Pertemuan 5
Tugas: Sistem Manajemen Perpustakaan Sederhana

Buatlah sistem manajemen perpustakaan sederhana menggunakan konsep OOP Python yang telah dipelajari. Fokus pada implementasi konsep class, inheritance, encapsulation, dan polymorphism.

- Persyaratan:
    - Buatlah abstract class LibraryItem yang menjadi dasar untuk semua item di perpustakaan
    - Implementasikan minimal 2 subclass (contoh: Book dan Magazine) yang mewarisi dari LibraryItem
    - Setiap subclass harus mengimplementasikan minimal satu method abstract dari parent class
    - Buatlah class Library untuk menyimpan dan mengelola koleksi item perpustakaan
    - Terapkan encapsulation menggunakan access modifiers (protected/private) untuk melindungi data penting
    - Gunakan property decorator untuk minimal satu atribut di salah satu class
    - Sistem minimal harus dapat:
        - Menambahkan item ke perpustakaan
        - Menampilkan daftar item yang tersedia
        - Mencari item berdasarkan judul atau id

----

## Pertemuan 6
Tugas: Aplikasi Manajemen Matakuliah dengan Pyramid

Buatlah aplikasi API sederhana untuk manajemen matakuliah berdasarkan apa yang telah Anda pelajari dalam praktikum ini.

- Persyaratan:
    - Buat satu model Matakuliah dengan atribut: id, kode_mk, nama_mk, sks, dan semester
    - Implementasikan API endpoint untuk operasi dasar (GET, POST, PUT, DELETE)
    - Pastikan API berfungsi dan dapat diuji dengan curl atau Postman

----

## Pertemuan 7


_Adi Sulaksono_
120140038