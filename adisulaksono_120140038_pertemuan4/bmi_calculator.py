def calculate_bmi(weight, height):
    return weight / (height * height)

def get_bmi_category(bmi):
    if bmi < 18.5:
        return "Berat badan kurang"
    elif 18.5 <= bmi < 25:
        return "Berat badan normal"
    elif 25 <= bmi < 30:
        return "Berat badan berlebih"
    else:
        return "Obesitas"

def main():
    try:
        # Input berat badan (kg)
        weight = float(input("Masukkan berat badan (kg): "))
        if weight <= 0:
            print("Berat badan harus lebih dari 0 kg")
            return

        # Input tinggi badan (m)
        height = float(input("Masukkan tinggi badan (m): "))
        if height <= 0:
            print("Tinggi badan harus lebih dari 0 m")
            return

        # Hitung BMI
        bmi = calculate_bmi(weight, height)
        category = get_bmi_category(bmi)

        # Tampilkan hasil
        print("\nHasil Perhitungan BMI:")
        print(f"Berat Badan: {weight} kg")
        print(f"Tinggi Badan: {height} m")
        print(f"BMI: {bmi:.2f}")
        print(f"Kategori: {category}")

    except ValueError:
        print("Error: Mohon masukkan angka yang valid")

if __name__ == "__main__":
    main() 