from tabulate import tabulate

def calculate_final_grade(uts, uas, tugas):
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas)

def get_grade(nilai_akhir):
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"

def main():
    # Data mahasiswa
    students = [
        {"nama": "Adi", "nim": "120140038", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
        {"nama": "Budi", "nim": "120140039", "nilai_uts": 75, "nilai_uas": 80, "nilai_tugas": 78},
        {"nama": "Citra", "nim": "120140040", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 68},
        {"nama": "Dian", "nim": "120140041", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
        {"nama": "Eka", "nim": "120140042", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 48}
    ]

    # Hitung nilai akhir dan grade untuk setiap mahasiswa
    for student in students:
        nilai_akhir = calculate_final_grade(
            student["nilai_uts"],
            student["nilai_uas"],
            student["nilai_tugas"]
        )
        student["nilai_akhir"] = round(nilai_akhir, 2)
        student["grade"] = get_grade(nilai_akhir)

    # Siapkan data untuk tabel
    table_data = []
    for student in students:
        table_data.append([
            student["nama"],
            student["nim"],
            student["nilai_uts"],
            student["nilai_uas"],
            student["nilai_tugas"],
            student["nilai_akhir"],
            student["grade"]
        ])

    # Tampilkan tabel
    headers = ["Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"]
    print("\nData Nilai Mahasiswa:")
    print(tabulate(table_data, headers=headers, tablefmt="grid"))

    # Tampilkan mahasiswa dengan nilai tertinggi dan terendah
    highest_student = max(students, key=lambda x: x["nilai_akhir"])
    lowest_student = min(students, key=lambda x: x["nilai_akhir"])

    print("\nMahasiswa dengan Nilai Tertinggi:")
    print(f"Nama: {highest_student['nama']}")
    print(f"Nilai Akhir: {highest_student['nilai_akhir']}")
    print(f"Grade: {highest_student['grade']}")

    print("\nMahasiswa dengan Nilai Terendah:")
    print(f"Nama: {lowest_student['nama']}")
    print(f"Nilai Akhir: {lowest_student['nilai_akhir']}")
    print(f"Grade: {lowest_student['grade']}")

if __name__ == "__main__":
    main() 