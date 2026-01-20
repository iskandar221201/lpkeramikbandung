import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
export const projects = [
    {
        slug: "rumah-minimalis-modern",
        title: "Rumah Minimalis Modern",
        location: "Dago, Bandung",
        image: project1,
        images: [project1, project2, project1],
        category: "Residensial",
        description: "Desain rumah minimalis modern dengan sentuhan alam yang menenangkan. Menggunakan material ramah lingkungan dan sistem pencahayaan alami yang optimal. Proyek ini mencakup pembangunan struktur utama, interior custom, dan tamah landscape.",
        details: [
            { label: "Luas Bangunan", value: "250 m²" },
            { label: "Luas Tanah", value: "350 m²" },
            { label: "Tahun Selesai", value: "2023" },
            { label: "Klien", value: "Bpk. Heru" }
        ]
    },
    {
        slug: "renovasi-kafe-industrial",
        title: "Renovasi Kafe Industrial",
        images: [project2, project1, project2],
        location: "Braga, Bandung",
        image: project2,
        category: "Komersial",
        description: "Transformasi bangunan tua menjadi kafe bergaya industrial yang ikonik di kawasan Braga. Mempertahankan elemen vintage sambil menyuntikkan sentuhan modern yang disukai kaum milenial.",
        details: [
            { label: "Luas Bangunan", value: "120 m²" },
            { label: "Tahun Selesai", value: "2022" },
            { label: "Klien", value: "Kopi Senja" }
        ]
    },
    {
        slug: "komplek-perumahan-elite",
        title: "Komplek Perumahan Elite",
        location: "Setiabudi, Bandung",
        image: project3,
        category: "Residensial",
        description: "Pembangunan cluster perumahan mewah dengan fasilitas lengkap. Setiap unit didesain eksklusif dengan privasi tinggi dan pemandangan kota Bandung yang memukau.",
        details: [
            { label: "Total Unit", value: "15 Unit" },
            { label: "Tahun Selesai", value: "2024" },
            { label: "Klien", value: "PT. Griya Utama" }
        ]
    },
    {
        slug: "villa-pegunungan",
        title: "Villa Pegunungan",
        location: "Lembang, Bandung",
        image: project4,
        category: "Residensial",
        description: "Villa keluarga dengan konsep open-space yang menyatu dengan alam. Dilengkapi dengan kolam renang infinity dan area BBQ outdoor.",
        details: [
            { label: "Luas Bangunan", value: "400 m²" },
            { label: "Luas Tanah", value: "1000 m²" },
            { label: "Tahun Selesai", value: "2021" },
            { label: "Klien", value: "Ibu Sarah" }
        ]
    },
    {
        slug: "kantor-startup",
        title: "Kantor Startup",
        location: "Dago Pakar, Bandung",
        image: project5,
        category: "Komersial",
        description: "Ruang kerja dinamis dan kolaboratif untuk perusahaan teknologi. Desain interior yang fun namun tetap produktif, dengan banyak area komunal dan meeting pod.",
        details: [
            { label: "Luas Bangunan", value: "500 m²" },
            { label: "Tahun Selesai", value: "2023" },
            { label: "Klien", value: "TechInno" }
        ]
    },
    {
        slug: "apartemen-studio",
        title: "Apartemen Studio",
        location: "Ciumbuleuit, Bandung",
        image: project6,
        category: "Interior",
        description: "Optimalisasi ruang terbatas pada apartemen tipe studio. Penggunaan furnitur multifungsi dan pemilihan warna cerah membuat ruangan terasa luas dan nyaman.",
        details: [
            { label: "Luas Bangunan", value: "30 m²" },
            { label: "Tahun Selesai", value: "2022" },
            { label: "Klien", value: "Mahasiswa ITB" }
        ]
    }
];
