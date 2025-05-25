# Cara 1: Import seluruh modul
import math_operations as mo

# Cara 2: Import fungsi spesifik
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

def main():
    print("=== Program Demonstrasi Modul Matematika ===\n")

    # Demonstrasi perhitungan geometri
    print("1. Perhitungan Geometri:")
    print("-" * 30)
    
    # Persegi
    sisi = 5
    print(f"Persegi (sisi = {sisi}):")
    print(f"Luas: {mo.luas_persegi(sisi)}")
    print(f"Keliling: {mo.keliling_persegi(sisi)}")
    print()

    # Persegi Panjang
    panjang = 6
    lebar = 4
    print(f"Persegi Panjang (panjang = {panjang}, lebar = {lebar}):")
    print(f"Luas: {mo.luas_persegi_panjang(panjang, lebar)}")
    print(f"Keliling: {mo.keliling_persegi_panjang(panjang, lebar)}")
    print()

    # Lingkaran
    jari_jari = 7
    print(f"Lingkaran (jari-jari = {jari_jari}):")
    print(f"Luas: {mo.luas_lingkaran(jari_jari):.2f}")
    print(f"Keliling: {mo.keliling_lingkaran(jari_jari):.2f}")
    print()

    # Demonstrasi konversi suhu
    print("2. Konversi Suhu:")
    print("-" * 30)
    
    # Menggunakan fungsi yang diimpor dengan cara 1
    celsius = 25
    print(f"Suhu {celsius}°C:")
    print(f"Dalam Fahrenheit: {mo.celsius_ke_fahrenheit(celsius):.2f}°F")
    print(f"Dalam Kelvin: {mo.celsius_ke_kelvin(celsius):.2f}K")
    print()

    # Menggunakan fungsi yang diimpor dengan cara 2
    fahrenheit = 98.6
    print(f"Suhu {fahrenheit}°F:")
    print(f"Dalam Celsius: {mo.fahrenheit_ke_celsius(fahrenheit):.2f}°C")
    print()

    kelvin = 300
    print(f"Suhu {kelvin}K:")
    print(f"Dalam Celsius: {mo.kelvin_ke_celsius(kelvin):.2f}°C")
    print()

    # Menampilkan nilai konstanta PI
    print("3. Konstanta:")
    print("-" * 30)
    print(f"Nilai PI: {mo.PI}")

if __name__ == "__main__":
    main() 