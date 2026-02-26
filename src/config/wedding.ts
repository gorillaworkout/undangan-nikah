// ============================================================
// 📝 EDIT FILE INI UNTUK CUSTOMIZE UNDANGAN KAMU
// ============================================================

export const config = {
  // 👫 Data Mempelai
  groom: {
    name: "Ahmad Wahyu",
    fullName: "Ahmad Wahyu Pratama",
    father: "Bapak Surya Pratama",
    mother: "Ibu Dewi Lestari",
    childOrder: "Putra pertama", // Putra pertama/kedua/dst
    photo: "/images/groom.jpg",
    instagram: "@wahyupratama",
  },
  bride: {
    name: "Siti Aisyah",
    fullName: "Siti Aisyah Putri",
    father: "Bapak Muhammad Hasan",
    mother: "Ibu Fatimah Zahra",
    childOrder: "Putri kedua",
    photo: "/images/bride.jpg",
    instagram: "@aisyahputri",
  },

  // 📅 Tanggal & Acara
  akad: {
    date: "2026-06-15",
    time: "08:00",
    endTime: "09:30",
    venue: "Masjid Agung Al-Azhar",
    address:
      "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12110",
    mapsUrl: "https://goo.gl/maps/example",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  },
  resepsi: {
    date: "2026-06-15",
    time: "11:00",
    endTime: "14:00",
    venue: "Balai Kartini",
    address:
      "Jl. Gatot Subroto Kav. 37, Kuningan, Jakarta Selatan, DKI Jakarta 12950",
    mapsUrl: "https://goo.gl/maps/example2",
    dressCode: "Formal — Sage Green & Gold",
  },

  // 💝 Quote / Ayat
  quotes: [
    {
      text: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
      source: "QS. Ar-Rum: 21",
    },
  ],

  // 🎵 Musik
  music: {
    src: "/music/background.mp3",
    title: "Beautiful In White - Shane Filan",
  },

  // 🖼️ Gallery — tambah/kurangi sesuai kebutuhan
  gallery: [
    { src: "/images/gallery/1.jpg", alt: "Prewedding 1" },
    { src: "/images/gallery/2.jpg", alt: "Prewedding 2" },
    { src: "/images/gallery/3.jpg", alt: "Prewedding 3" },
    { src: "/images/gallery/4.jpg", alt: "Prewedding 4" },
    { src: "/images/gallery/5.jpg", alt: "Prewedding 5" },
    { src: "/images/gallery/6.jpg", alt: "Prewedding 6" },
  ],

  // 💳 Gift / Amplop Digital
  gifts: [
    {
      type: "bank",
      bankName: "Bank Central Asia (BCA)",
      accountNumber: "1234567890",
      accountHolder: "Ahmad Wahyu Pratama",
    },
    {
      type: "bank",
      bankName: "Bank Mandiri",
      accountNumber: "0987654321",
      accountHolder: "Siti Aisyah Putri",
    },
    {
      type: "address",
      label: "Kirim Hadiah",
      address:
        "Jl. Mawar No. 10, RT 05/RW 03, Kelurahan Menteng, Jakarta Pusat 10310",
      phone: "0812-3456-7890",
    },
  ],

  // 🎨 Tema
  theme: {
    primary: "#B8860B", // Gold
    secondary: "#7C8C6E", // Sage green
    background: "#FEFCF6", // Warm white
    accent: "#D4A843", // Light gold
  },

  // 📱 Social / Footer
  hashtag: "#WahyuAisyah2026",
  footerText: "With Love, Wahyu & Aisyah",
};
