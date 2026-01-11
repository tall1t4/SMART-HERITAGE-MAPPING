# Website Budaya Indonesia - Setup Instructions

## Fitur Utama

Website ini adalah platform lengkap untuk menjelajahi budaya Indonesia dengan fitur:

### 1. **Peta Wisata Budaya** 
- 20+ destinasi wisata budaya dari berbagai provinsi
- Integrasi Google Maps dengan pin lokasi
- Filter berdasarkan provinsi dan kategori
- Informasi lengkap: tiket masuk, jam buka, rating, ulasan, dan sejarah
- Detail lokasi dengan koordinat GPS

### 2. **Kalender Acara Budaya**
- 15+ acara budaya dari seluruh Indonesia
- Jadwal lengkap dengan tanggal dan venue
- Informasi jarak dari lokasi pengguna
- Filter berdasarkan provinsi dan kategori
- Pengelompokan acara per bulan

### 3. **Peta Kuliner**
- 20+ rekomendasi tempat kuliner khas Indonesia
- Peta interaktif dengan pin lokasi
- Informasi lengkap: alamat, rating, harga, dan menu spesial
- Link langsung ke Google Maps untuk navigasi

### 4. **Halaman Detail**
- Halaman detail untuk setiap wisata, acara, dan kuliner
- Gambar berkualitas tinggi
- Tombol navigasi ke Google Maps
- Informasi komprehensif dan rekomendasi

## Data Coverage

### Provinsi yang Tercakup (20+ lokasi):
- Aceh
- Sumatera Utara
- Sumatera Barat
- Riau
- Kepulauan Riau
- Jambi
- Sumatera Selatan
- Bengkulu
- Lampung
- DKI Jakarta
- Jawa Barat
- Jawa Tengah
- DI Yogyakarta
- Jawa Timur
- Bali
- Kalimantan Barat
- Kalimantan Selatan
- Kalimantan Timur
- Sulawesi Utara
- Sulawesi Selatan
- Maluku Utara
- Papua

## Setup Google Maps API

Untuk mengaktifkan fitur peta interaktif:

1. **Dapatkan Google Maps API Key:**
   - Kunjungi https://console.cloud.google.com/
   - Buat project baru atau pilih project yang ada
   - Aktifkan "Maps JavaScript API" dan "Places API"
   - Buat kredensial API Key
   - Copy API key yang didapat

2. **Tambahkan API Key ke Project:**
   - Cari `YOUR_GOOGLE_MAPS_API_KEY` di file:
     - `/src/app/pages/TourismMap.tsx`
     - `/src/app/pages/CulinaryMap.tsx`
   - Ganti dengan API key Anda

3. **Setup Restrictions (Opsional tapi Disarankan):**
   - Di Google Cloud Console, tambahkan HTTP referrer restrictions
   - Batasi penggunaan API key hanya untuk domain Anda

## Struktur Data

### Tourist Spots (Wisata Budaya)
- ID unik
- Nama tempat
- Provinsi & Kota
- Koordinat GPS (latitude, longitude)
- Harga tiket
- Jam buka
- Rating & jumlah ulasan
- Sejarah singkat
- Gambar
- Kategori (Candi, Istana, Museum, dll)

### Cultural Events (Acara Budaya)
- ID unik
- Nama acara
- Provinsi, Kota, & Venue
- Koordinat GPS
- Tanggal
- Deskripsi
- Gambar
- Kategori (Keagamaan, Seni & Budaya, dll)

### Culinary Spots (Tempat Kuliner)
- ID unik
- Nama tempat
- Provinsi, Kota, & Alamat lengkap
- Koordinat GPS
- Rating & jumlah ulasan
- Range harga
- Menu spesial
- Gambar

## Fitur Tambahan

### Navigation
- Bottom navigation untuk mobile
- Top navigation untuk desktop
- Active state indication
- Smooth transitions

### Search & Filter
- Pencarian real-time
- Filter berdasarkan provinsi
- Filter berdasarkan kategori (untuk wisata)
- Responsive design

### Maps Integration
- Pin markers dengan ikon custom
- Info windows dengan detail singkat
- Auto-adjust bounds untuk menampilkan semua marker
- Click to navigate di Google Maps

### Mobile Responsive
- Optimized untuk semua ukuran layar
- Touch-friendly interface
- Bottom navigation untuk mobile
- Responsive grid layouts

## Teknologi yang Digunakan

- **React** - Framework UI
- **TypeScript** - Type safety
- **React Router DOM** - Routing
- **@googlemaps/js-api-loader** - Google Maps integration
- **Lucide React** - Icons
- **Tailwind CSS** - Styling
- **Unsplash API** - Gambar berkualitas tinggi

## Catatan Penting

⚠️ **Google Maps API Key:**
Website ini memerlukan Google Maps API Key untuk fitur peta interaktif. Tanpa API key, peta akan menampilkan placeholder. Pastikan untuk mengganti `YOUR_GOOGLE_MAPS_API_KEY` dengan API key yang valid.

⚠️ **Data Lokasi:**
Koordinat GPS yang digunakan adalah perkiraan. Untuk produksi, disarankan untuk memverifikasi koordinat setiap lokasi.

⚠️ **Gambar:**
Gambar dari Unsplash digunakan sebagai placeholder. Untuk produksi, gunakan gambar asli dari setiap lokasi.

⚠️ **Jarak dari Lokasi Pengguna:**
Fitur ini saat ini menggunakan jarak acak (mock). Untuk implementasi nyata, gunakan Geolocation API dan hitung jarak sebenarnya.

## Penggunaan

1. **Beranda** - Lihat ringkasan dan tempat populer
2. **Wisata Budaya** - Jelajahi peta wisata dengan filter
3. **Kalender** - Lihat jadwal acara budaya
4. **Kuliner** - Temukan tempat makan khas Indonesia
5. Klik item untuk melihat detail lengkap
6. Gunakan tombol "Buka di Maps" untuk navigasi

## Future Enhancements

Potensial pengembangan lebih lanjut:
- User reviews dan rating
- Booking tiket online
- Integrasi dengan social media
- User-generated content
- Multi-language support
- Dark mode
- Favorite/bookmark sistem
- Trip planner
- Weather integration
- AR features untuk tour virtual

## Support

Jika ada pertanyaan atau masalah, silakan buka issue di repository atau hubungi tim pengembang.

---

**Selamat menjelajahi budaya Indonesia! 🇮🇩**
