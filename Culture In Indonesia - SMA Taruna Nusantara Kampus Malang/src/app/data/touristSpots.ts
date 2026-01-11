export interface TouristSpot {
  id: string;
  name: string;
  province: string;
  city: string;
  latitude: number;
  longitude: number;
  ticketPrice: string;
  openingHours: string;
  rating: number;
  reviews: number;
  history: string;
  image: string;
  category: string;
}

export const touristSpots: TouristSpot[] = [
  // Jawa Tengah
  {
    id: '1',
    name: 'Candi Borobudur',
    province: 'Jawa Tengah',
    city: 'Magelang',
    latitude: -7.6079,
    longitude: 110.2038,
    ticketPrice: 'Rp 50.000 (Domestik), Rp 375.000 (Internasional)',
    openingHours: '06:00 - 17:00',
    rating: 4.8,
    reviews: 125430,
    history: 'Candi Borobudur adalah candi Buddha terbesar di dunia yang dibangun pada abad ke-8 dan ke-9 Masehi. Struktur masif ini terdiri dari 9 platform bertingkat dengan 504 patung Buddha dan 72 stupa. Situs warisan UNESCO ini mencerminkan perpaduan unik antara pemujaan alam India-Hindu dan Buddha Indonesia.',
    image: 'https://asset.kompas.com/crops/qs7lqo0UsFE7TXqwfxF7RAaYYA0=/1x0:1024x682/1200x800/data/photo/2020/05/11/5eb950a1c8fb3.jpeg',
    category: 'Candi'
  },
  {
    id: '2',
    name: 'Candi Prambanan',
    province: 'Jawa Tengah',
    city: 'Sleman',
    latitude: -7.7520,
    longitude: 110.4915,
    ticketPrice: 'Rp 50.000 (Domestik), Rp 375.000 (Internasional)',
    openingHours: '06:00 - 17:00',
    rating: 4.7,
    reviews: 98230,
    history: 'Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 Masehi. Dipersembahkan untuk Trimurti: Brahma, Wisnu, dan Siwa. Kompleks ini terdiri dari 240 candi dengan candi Siwa sebagai candi utama setinggi 47 meter.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrvbNwxsD3ivZ4gSdnZWEM7gntlDmGlJUOA&s',
    category: 'Candi'
  },
  // DI Yogyakarta
  {
    id: '3',
    name: 'Keraton Yogyakarta',
    province: 'DI Yogyakarta',
    city: 'Yogyakarta',
    latitude: -7.8053,
    longitude: 110.3644,
    ticketPrice: 'Rp 15.000 (Dewasa), Rp 10.000 (Anak)',
    openingHours: '08:00 - 14:00 (Sabtu-Kamis)',
    rating: 4.6,
    reviews: 52340,
    history: 'Keraton Yogyakarta merupakan istana resmi Kesultanan Ngayogyakarta Hadiningrat yang dibangun pada tahun 1755-1756. Arsitektur keraton menggabungkan elemen Jawa, Islam, dan Eropa. Hingga kini, keraton masih berfungsi sebagai tempat tinggal Sultan dan pusat kebudayaan Jawa.',
    image: 'https://suaraaisyiyah.id/wp-content/uploads/2023/12/Kraton-Yogyakarta.jpg',
    category: 'Istana'
  },
  // Bali
  {
    id: '4',
    name: 'Pura Tanah Lot',
    province: 'Bali',
    city: 'Tabanan',
    latitude: -8.6212,
    longitude: 115.0868,
    ticketPrice: 'Rp 60.000 (Dewasa), Rp 30.000 (Anak)',
    openingHours: '07:00 - 19:00',
    rating: 4.7,
    reviews: 145230,
    history: 'Pura Tanah Lot adalah pura laut yang dibangun pada abad ke-16 oleh Dang Hyang Nirartha. Terletak di atas batu karang besar di tepi laut, pura ini menjadi salah satu simbol paling ikonik Bali. Nama Tanah Lot berarti "tanah di tengah laut".',
    image: 'https://www.balitripon.com/wp-content/uploads/2020/12/pura-tanah-lot-bali-600x400.jpg',
    category: 'Pura'
  },
  {
    id: '5',
    name: 'Pura Besakih',
    province: 'Bali',
    city: 'Karangasem',
    latitude: -8.3743,
    longitude: 115.4507,
    ticketPrice: 'Rp 60.000 (Parkir & Donasi)',
    openingHours: '08:00 - 17:00',
    rating: 4.5,
    reviews: 87430,
    history: 'Pura Besakih dikenal sebagai "Pura Ibu" di Bali, terletak di lereng Gunung Agung. Kompleks ini terdiri dari 23 pura terpisah yang dibangun sejak abad ke-10. Pura ini selamat dari letusan Gunung Agung tahun 1963, dipercaya sebagai perlindungan dewata.',
    image: 'https://barometerbali.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-30-at-22.08.39.jpeg',
    category: 'Pura'
  },
  // DKI Jakarta
  {
    id: '6',
    name: 'Monumen Nasional (Monas)',
    province: 'DKI Jakarta',
    city: 'Jakarta Pusat',
    latitude: -6.1754,
    longitude: 106.8272,
    ticketPrice: 'Rp 10.000 (WNI), Rp 50.000 (WNA)',
    openingHours: '08:00 - 16:00 (Tutup Senin)',
    rating: 4.5,
    reviews: 198340,
    history: 'Monas dibangun tahun 1961-1975 untuk memperingati perlawanan rakyat Indonesia melawan penjajahan. Tinggi tugu 132 meter dengan puncak berlapis emas 35 kg. Di dalam terdapat museum sejarah dan ruang kemerdekaan yang menyimpan naskah asli Proklamasi.',
    image: 'https://asset.kompas.com/crops/-1qaDzh3KDPknMv6aHax-7tHXGg=/0x0:1000x667/1200x800/data/photo/2022/06/17/62ac673f71587.jpg',
    category: 'Monumen'
  },
  // Jawa Barat
  {
    id: '7',
    name: 'Gedung Sate',
    province: 'Jawa Barat',
    city: 'Bandung',
    latitude: -6.9022,
    longitude: 107.6189,
    ticketPrice: 'Gratis',
    openingHours: '08:00 - 15:00 (Hari Kerja)',
    rating: 4.4,
    reviews: 45230,
    history: 'Gedung Sate dibangun pada 1920 sebagai kantor gubernur Hindia Belanda. Nama "Sate" berasal dari ornamen di puncak menara yang menyerupai tusuk sate. Arsitekturnya memadukan gaya Eropa dan tradisional Indonesia dengan elemen Art Deco.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ca/76/1e/frontage.jpg?w=900&h=500&s=1',
    category: 'Bangunan Bersejarah'
  },
  // Jawa Timur
  {
    id: '8',
    name: 'Candi Penataran',
    province: 'Jawa Timur',
    city: 'Blitar',
    latitude: -8.0195,
    longitude: 112.1943,
    ticketPrice: 'Rp 10.000',
    openingHours: '07:00 - 17:00',
    rating: 4.3,
    reviews: 23420,
    history: 'Candi Penataran adalah kompleks percandian Hindu terbesar di Jawa Timur yang dibangun pada masa Kerajaan Majapahit (1197-1454 M). Relief di candi ini menggambarkan cerita Ramayana dan Krisnayana dengan detail artistik tinggi.',
    image: 'https://www.blitarkab.go.id/wp-content/uploads/2016/05/slide2-Copy.jpg',
    category: 'Candi'
  },
  // Sumatera Utara
  {
    id: '9',
    name: 'Istana Maimun',
    province: 'Sumatera Utara',
    city: 'Medan',
    latitude: 3.5752,
    longitude: 98.6833,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 17:00',
    rating: 4.5,
    reviews: 67340,
    history: 'Istana Maimun dibangun tahun 1888 oleh Sultan Deli. Arsitekturnya memadukan gaya Melayu, Islam, Spanyol, India, dan Italia. Istana seluas 2.772 m² ini memiliki 30 ruangan dan hingga kini masih dihuni oleh keturunan sultan.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWha24Qe8wkTCiGULZiN-cRn_Akwq8lc_I_g&s',
    category: 'Istana'
  },
  // Sumatera Barat
  {
    id: '10',
    name: 'Istana Pagaruyung',
    province: 'Sumatera Barat',
    city: 'Tanah Datar',
    latitude: -0.4712,
    longitude: 100.6198,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 17:00',
    rating: 4.4,
    reviews: 34230,
    history: 'Istana Pagaruyung adalah replika istana kerajaan Pagaruyung dengan arsitektur Rumah Gadang khas Minangkabau. Atap gonjong (runcing) melambangkan tanduk kerbau. Istana ini menjadi pusat kebudayaan dan adat Minangkabau.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGrT4FMwiddwenaTEI6HPhwvJwMwxWIQy_A&s',
    category: 'Istana'
  },
  // Sumatera Selatan
  {
    id: '11',
    name: 'Masjid Agung Palembang',
    province: 'Sumatera Selatan',
    city: 'Palembang',
    latitude: -2.9880,
    longitude: 104.7565,
    ticketPrice: 'Gratis',
    openingHours: '05:00 - 21:00',
    rating: 4.6,
    reviews: 45230,
    history: 'Masjid Agung Sultan Mahmud Badaruddin I dibangun tahun 1738 di tepi Sungai Musi. Arsitekturnya bergaya Kesultanan Palembang dengan pengaruh Islam dan Melayu. Masjid ini menjadi saksi kejayaan Kesultanan Palembang Darussalam.',
    image: 'https://www.indonesia.travel/contentassets/ab08d57fffe34a69b0e1a5fe3f0cbd01/jcr_content-6.jpg',
    category: 'Masjid'
  },
  // Lampung
  {
    id: '12',
    name: 'Museum Lampung',
    province: 'Lampung',
    city: 'Bandar Lampung',
    latitude: -5.4292,
    longitude: 105.2630,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 16:00 (Tutup Senin)',
    rating: 4.2,
    reviews: 12340,
    history: 'Museum Lampung didirikan tahun 1988 dengan arsitektur Rumah Nuwo Sesat khas Lampung. Koleksi mencakup artefak megalitikum, naskah kuno, dan benda-benda budaya Lampung yang mencerminkan kekayaan sejarah daerah.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlL2D3Tm9yWpk35LSWChZiiFiENXH85iHtQ&s',
    category: 'Museum'
  },
  // Riau
  {
    id: '13',
    name: 'Istana Siak Sri Indrapura',
    province: 'Riau',
    city: 'Siak',
    latitude: 0.7987,
    longitude: 101.7098,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 17:00',
    rating: 4.5,
    reviews: 28340,
    history: 'Istana Siak dibangun tahun 1889 oleh Sultan Syarif Hasyim Abdul Jalil dengan arsitektur perpaduan Melayu, Arab, dan Eropa. Bangunan megah ini memiliki 4 menara dan menjadi simbol kejayaan Kesultanan Siak.',
    image: 'https://digitiket.com/data/image/1367?group=1&m=240802093237&x=4',
    category: 'Istana'
  },
  // Kepulauan Riau
  {
    id: '14',
    name: 'Tugu Digulis',
    province: 'Kepulauan Riau',
    city: 'Tanjung Pinang',
    latitude: 0.9187,
    longitude: 104.4583,
    ticketPrice: 'Gratis',
    openingHours: '24 Jam',
    rating: 4.1,
    reviews: 8340,
    history: 'Tugu Digulis merupakan monumen perjuangan rakyat Riau melawan penjajahan Belanda. Nama "Digulis" berasal dari istilah lokal yang berarti "di garis", merujuk pada batas wilayah perjuangan.',
    image: 'https://www.suarakalbar.co.id/wp-content/uploads/2023/12/IMG_20231214_061053.jpg',
    category: 'Monumen'
  },
  // Jambi
  {
    id: '15',
    name: 'Candi Muaro Jambi',
    province: 'Jambi',
    city: 'Muaro Jambi',
    latitude: -1.4770,
    longitude: 103.6666,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 17:00',
    rating: 4.3,
    reviews: 18340,
    history: 'Kompleks Candi Muaro Jambi adalah situs Buddha terbesar di Asia Tenggara dari abad ke-7 hingga ke-13. Terdapat 82 buah candi yang tersebar di area seluas 12 km². Situs ini merupakan bekas ibukota Kerajaan Melayu.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnM-ws6oPIbG-Z2DlgFRIUDrQYHkYzWSImw&s',
    category: 'Candi'
  },
  // Continue with more provinces... (limiting for space, but following same pattern)
  // Bengkulu
  {
    id: '16',
    name: 'Fort Marlborough',
    province: 'Bengkulu',
    city: 'Bengkulu',
    latitude: -3.7928,
    longitude: 102.2625,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 17:00',
    rating: 4.4,
    reviews: 21340,
    history: 'Benteng Marlborough dibangun oleh East India Company tahun 1713-1719. Benteng terkuat yang pernah dibangun Inggris di Timur ini memiliki bentuk kura-kura dengan 4 bastion. Kini menjadi museum sejarah Bengkulu.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/76/42/7b/fort-marlborough.jpg?w=1200&h=-1&s=1',
    category: 'Benteng'
  },
  // Aceh
  {
    id: '17',
    name: 'Masjid Raya Baiturrahman',
    province: 'Aceh',
    city: 'Banda Aceh',
    latitude: 5.5560,
    longitude: 95.3238,
    ticketPrice: 'Gratis',
    openingHours: '05:00 - 21:00',
    rating: 4.8,
    reviews: 89340,
    history: 'Masjid Raya Baiturrahman pertama kali dibangun tahun 1612 oleh Sultan Iskandar Muda. Telah mengalami beberapa kali renovasi dan rekonstruksi, termasuk pasca tsunami 2004. Masjid ini menjadi simbol keteguhan iman masyarakat Aceh.',
    image: 'https://www.newsbandaaceh.com/media/2024/01/7603adef-3b21-405f-9af5-66150a0687d7.jpeg',
    category: 'Masjid'
  },
  // Sulawesi Selatan
  {
    id: '18',
    name: 'Fort Rotterdam',
    province: 'Sulawesi Selatan',
    city: 'Makassar',
    latitude: -5.1343,
    longitude: 119.4067,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 18:00',
    rating: 4.5,
    reviews: 56340,
    history: 'Benteng Rotterdam dibangun pada 1545 oleh Raja Gowa ke-9. Awalnya bernama Benteng Ujung Pandang, diubah menjadi Rotterdam setelah ditaklukkan Belanda. Benteng ini menjadi saksi bisu kejayaan Kerajaan Gowa-Tallo.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjUkoOHP3i9boEG2JGqt5tfPf5RI2NnFAVQ&s',
    category: 'Benteng'
  },
  // Kalimantan Selatan
  {
    id: '19',
    name: 'Masjid Sultan Suriansyah',
    province: 'Kalimantan Selatan',
    city: 'Banjarmasin',
    latitude: -3.3050,
    longitude: 114.5901,
    ticketPrice: 'Gratis',
    openingHours: '05:00 - 21:00',
    rating: 4.6,
    reviews: 32340,
    history: 'Masjid Sultan Suriansyah adalah masjid tertua di Kalimantan yang dibangun tahun 1526. Arsitektur khas Banjar dengan atap tumpang dan ornamen ukiran kayu. Masjid ini menjadi saksi penyebaran Islam di Kalimantan.',
    image: 'https://static.republika.co.id/uploads/images/xlarge/perahu-bermesin-kelotok-melintas-di-sungai-kuin-berlatar-masjid_210612203112-574.jpg',
    category: 'Masjid'
  },
  // Papua
  {
    id: '20',
    name: 'Museum Loka Budaya',
    province: 'Papua',
    city: 'Jayapura',
    latitude: -2.5920,
    longitude: 140.6680,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 15:00 (Tutup Minggu)',
    rating: 4.3,
    reviews: 15340,
    history: 'Museum Loka Budaya menyimpan koleksi artefak budaya Papua termasuk ukiran kayu, tifa, koteka, dan noken. Museum ini mendokumentasikan kekayaan budaya dari 250+ suku asli Papua.',
    image: 'https://museum.co.id/wp-content/uploads/2020/09/museum-loka-budaya-5-1-1024x768.jpeg',
    category: 'Museum'
  },
  // Nusa Tenggara Barat
  {
    id: '21',
    name: 'Pura Lingsar',
    province: 'Nusa Tenggara Barat',
    city: 'Lombok Barat',
    latitude: -8.5778,
    longitude: 116.2367,
    ticketPrice: 'Rp 10.000',
    openingHours: '07:00 - 18:00',
    rating: 4.4,
    reviews: 28340,
    history: 'Pura Lingsar dibangun tahun 1714 dan merupakan simbol kerukunan beragama di Lombok. Kompleks ini terdiri dari dua pura: Pura Gaduh untuk umat Hindu dan Pura Kemaliq untuk umat Wektu Telu (Islam tradisional Sasak). Setiap tahun diadakan upacara Perang Topat sebagai wujud toleransi antar umat beragama.',
    image: 'https://pacarkecilku.com/wp-content/uploads/2012/05/dsc01012.jpg?w=500',
    category: 'Pura'
  },
  // Nusa Tenggara Timur
  {
    id: '22',
    name: 'Kampung Adat Bena',
    province: 'Nusa Tenggara Timur',
    city: 'Ngada',
    latitude: -8.6947,
    longitude: 120.9598,
    ticketPrice: 'Rp 50.000 (Donasi)',
    openingHours: '07:00 - 17:00',
    rating: 4.6,
    reviews: 19340,
    history: 'Kampung Adat Bena adalah perkampungan tradisional megalitikum berusia 1200 tahun yang masih dihuni oleh masyarakat Ngada. Terdapat 45 rumah adat dengan arsitektur khas berbentuk kerucut. Di tengah kampung berdiri batu menhir dan ngadhu (tiang berukir) sebagai simbol leluhur. Kampung ini menjadi salah satu situs warisan budaya terbaik di Indonesia timur.',
    image: 'https://jadesta.kemenparekraf.go.id/imgpost/34741.jpg',
    category: 'Kampung Adat'
  },
  // Maluku
  {
    id: '23',
    name: 'Benteng Amsterdam',
    province: 'Maluku',
    city: 'Ambon',
    latitude: -3.6954,
    longitude: 128.1814,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 17:00',
    rating: 4.3,
    reviews: 12340,
    history: 'Benteng Amsterdam dibangun oleh VOC Belanda tahun 1637 untuk menguasai perdagangan rempah-rempah di Kepulauan Maluku, khususnya cengkeh dan pala yang sangat berharga pada masa itu. Benteng ini menjadi saksi sejarah perjuangan rakyat Maluku melawan penjajahan. Dari benteng ini, pemandangan Teluk Ambon sangat memukau, mengingatkan pentingnya posisi strategis Maluku dalam jalur perdagangan rempah dunia.',
    image: 'https://indonesiatraveler.id/wp-content/uploads/2020/12/Ambon-Benteng-Amsterdam-Hila.jpg',
    category: 'Benteng'
  },
  // Maluku Utara
  {
    id: '24',
    name: 'Benteng Tolukko',
    province: 'Maluku Utara',
    city: 'Ternate',
    latitude: 0.7893,
    longitude: 127.3774,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 17:00',
    rating: 4.4,
    reviews: 16340,
    history: 'Benteng Tolukko pertama kali dibangun oleh Portugis tahun 1540, kemudian dikuasai Spanyol dan akhirnya VOC Belanda. Benteng berbentuk segi lima ini menjadi saksi rebutan kekuasaan atas cengkeh Ternate. Dari benteng ini terlihat jelas Gunung Gamalama yang menjulang dengan latar Pulau Tidore, memberikan panorama spektakuler sejarah Nusantara.',
    image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/236/2025/03/02/ok-2635735228.jpg',
    category: 'Benteng'
  },
  // Banten
  {
    id: '25',
    name: 'Masjid Agung Banten',
    province: 'Banten',
    city: 'Serang',
    latitude: -6.0333,
    longitude: 106.1500,
    ticketPrice: 'Gratis',
    openingHours: '05:00 - 20:00',
    rating: 4.5,
    reviews: 34340,
    history: 'Masjid Agung Banten dibangun tahun 1552-1570 oleh Sultan Maulana Hasanuddin, sultan pertama Kesultanan Banten. Arsitektur masjid memadukan gaya Jawa, Cina, dan Eropa dengan atap tumpang bersusun lima. Di kompleks ini juga terdapat Menara Mercusuar setinggi 24 meter bergaya Eropa yang dibangun Belanda. Masjid ini menjadi saksi kejayaan Banten sebagai pelabuhan internasional dan pusat penyebaran Islam di Jawa Barat.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OV285ZbJDL7Prkhw58K0q4zwZNtxVasnPA&s',
    category: 'Masjid'
  },
  // Kalimantan Timur
  {
    id: '26',
    name: 'Kampung Pampang',
    province: 'Kalimantan Timur',
    city: 'Samarinda',
    latitude: -0.5598,
    longitude: 117.2148,
    ticketPrice: 'Rp 50.000 (termasuk pertunjukan)',
    openingHours: '09:00 - 16:00',
    rating: 4.6,
    reviews: 21340,
    history: 'Kampung Pampang adalah pusat pelestarian budaya Dayak Kenyah di Kalimantan Timur. Pengunjung dapat menyaksikan Tari Kancet Papatai (tarian perang), Tari Kancet Ledo (tarian wanita), dan berbagai upacara adat Dayak. Di kampung ini terdapat Lamin (rumah panjang adat) yang dihuni bersama oleh beberapa keluarga. Wisatawan juga dapat melihat langsung proses pembuatan kerajinan manik-manik, ukiran kayu, dan mendengarkan musik sape (alat musik petik khas Dayak).',
    image: 'https://awsimages.detik.net.id/community/media/visual/2020/06/23/desa-adat-pampang_169.jpeg?w=600&q=90',
    category: 'Kampung Adat'
  },
  // Kalimantan Tengah
  {
    id: '27',
    name: 'Museum Balanga',
    province: 'Kalimantan Tengah',
    city: 'Palangkaraya',
    latitude: -2.2084,
    longitude: 113.9125,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 16:00 (Tutup Senin)',
    rating: 4.2,
    reviews: 9340,
    history: 'Museum Balanga menampilkan koleksi budaya Dayak Kalimantan Tengah termasuk mandau (senjata tradisional), kerajinan rotan dan bambu, pakaian adat, tempayan antik, dan berbagai artefak upacara Tiwah (upacara kematian tertinggi suku Dayak Ngaju). Museum ini juga menyimpan koleksi fosil dan benda-benda prasejarah yang ditemukan di wilayah Kalteng. Nama "Balanga" diambil dari tempayan kuno yang sangat berharga dalam budaya Dayak.',
    image: 'https://asset.kompas.com/crops/x5CoUk-smbuDYNPmr9Myqy3tA78=/40x0:700x440/375x240/data/photo/2021/09/28/61520bcb4de80.jpg',
    category: 'Museum'
  },
  // Kalimantan Barat
  {
    id: '28',
    name: 'Keraton Kadriah',
    province: 'Kalimantan Barat',
    city: 'Pontianak',
    latitude: -0.0236,
    longitude: 109.3425,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 16:00',
    rating: 4.4,
    reviews: 18340,
    history: 'Keraton Kadriah dibangun tahun 1771 oleh Sultan Syarif Abdurrahman Alkadrie, pendiri Kesultanan Pontianak. Arsitektur istana bergaya Melayu dengan pengaruh Arab dan Eropa ini memiliki tiang-tiang dari kayu belian yang sangat kuat. Di dalam keraton tersimpan berbagai pusaka kesultanan, meriam kuno, Al-Quran berusia ratusan tahun, dan mahkota sultan. Keraton ini menjadi saksi perkembangan Islam dan budaya Melayu di Kalimantan Barat.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/26/a5/3e/keraton-kadriah.jpg?w=900&h=500&s=1',
    category: 'Istana'
  },
  // Kalimantan Utara
  {
    id: '29',
    name: 'Tugu Khatulistiwa',
    province: 'Kalimantan Utara',
    city: 'Tarakan',
    latitude: 3.3,
    longitude: 117.6333,
    ticketPrice: 'Gratis',
    openingHours: '24 Jam',
    rating: 4.2,
    reviews: 8340,
    history: 'Tugu Khatulistiwa menandai garis khatulistiwa yang melintasi Kalimantan Utara. Saat fenomena Kulminasi Matahari (21-23 Maret dan 21-23 September), bayangan tugu akan menghilang karena matahari tepat berada di atas kepala. Tugu ini menjadi simbol astronomi dan geografi Indonesia yang unik sebagai negara khatulistiwa.',
    image: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1521267062/k4oxzrauej4axlyak2wy.jpg',
    category: 'Monumen'
  },
  // Sulawesi Tengah
  {
    id: '30',
    name: 'Lembah Bada',
    province: 'Sulawesi Tengah',
    city: 'Poso',
    latitude: -1.4262,
    longitude: 120.1814,
    ticketPrice: 'Rp 20.000',
    openingHours: '07:00 - 17:00',
    rating: 4.5,
    reviews: 14340,
    history: 'Lembah Bada terkenal dengan megalitikum misterius berupa patung-patung batu raksasa (kalamba) yang tersebar di berbagai lokasi. Terdapat lebih dari 400 megalit dengan tinggi mencapai 4,5 meter dan berat puluhan ton. Hingga kini, asal-usul dan fungsi megalit ini masih menjadi misteri arkeologi. Diperkirakan dibuat antara 3000-5000 tahun lalu oleh peradaban kuno yang belum teridentifikasi. UNESCO telah memasukkan Lembah Bada dalam daftar Situs Warisan Dunia sementara.',
    image: 'https://asset.kompas.com/crops/Nz0NCUGEDJywJa0Sl7nCwDi2cmM=/134x0:843x473/1200x800/data/photo/2022/10/05/633d301a2b352.jpg',
    category: 'Situs Megalitikum'
  },
  // Sulawesi Tenggara
  {
    id: '31',
    name: 'Benteng Keraton Buton',
    province: 'Sulawesi Tenggara',
    city: 'Baubau',
    latitude: -5.4699,
    longitude: 122.6336,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 17:00',
    rating: 4.6,
    reviews: 22340,
    history: 'Benteng Keraton Buton adalah benteng terluas di dunia dengan keliling 2.740 meter yang dibangun pada abad ke-16 oleh Kesultanan Buton. Benteng ini memiliki 12 pintu gerbang dengan nama-nama khas seperti Lawa Wite, Lawa Barata, dan Lawa Kalausu. Di dalam benteng terdapat kompleks keraton, masjid kuno, meriam-meriam antik, dan makam para sultan. Benteng ini tercatat dalam Guinness World Records sebagai benteng terluas di dunia dan menjadi bukti kejayaan maritim Kesultanan Buton dalam perdagangan rempah-rempah.',
    image: 'https://jadesta.kemenparekraf.go.id/imgpost/29020.jpg',
    category: 'Benteng'
  },
  // Sulawesi Utara
  {
    id: '32',
    name: 'Waruga Sawangan',
    province: 'Sulawesi Utara',
    city: 'Minahasa',
    latitude: 1.2399,
    longitude: 124.8294,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 17:00',
    rating: 4.3,
    reviews: 11340,
    history: 'Waruga adalah makam batu tradisional suku Minahasa berbentuk rumah kecil yang digunakan sebelum masuknya agama Kristen. Di kompleks Sawangan terdapat 144 waruga dengan berbagai ukiran relief yang menggambarkan profesi, status sosial, dan cerita kehidupan si mati. Waruga terbuat dari batu vulkanik yang dipahat dengan detail tinggi. Ini adalah situs arkeologi penting yang menunjukkan kepercayaan dan tradisi pemakaman unik masyarakat Minahasa kuno.',
    image: 'https://cdn.rri.co.id/berita/Manado/o/1760002026133-53868/nv5bir9v3a6w2ao.jpeg',
    category: 'Situs Sejarah'
  },
  // Gorontalo
  {
    id: '33',
    name: 'Benteng Otanaha',
    province: 'Gorontalo',
    city: 'Gorontalo',
    latitude: 0.6015,
    longitude: 122.9848,
    ticketPrice: 'Rp 10.000',
    openingHours: '08:00 - 17:00',
    rating: 4.4,
    reviews: 13340,
    history: 'Benteng Otanaha dibangun pada abad ke-16 di puncak bukit batu karang setinggi 200 meter di tengah Danau Limboto. Nama "Otanaha" berarti "benteng batu". Benteng ini dibangun oleh Kerajaan Gorontalo untuk pertahanan. Untuk mencapai benteng, pengunjung harus menaiki 387 anak tangga yang dipahat di tebing batu curam. Dari puncak, pemandangan Danau Limboto dan Kota Gorontalo sangat spektakuler. Benteng ini menjadi saksi bisu perlawanan rakyat Gorontalo melawan penjajahan.',
    image: 'https://travelspromo.com/wp-content/uploads/2022/03/Bangunan-Benteng-Otanaha-di-Gorontalo.jpg',
    category: 'Benteng'
  },
  // Papua Barat
  {
    id: '34',
    name: 'Desa Wisata Arborek',
    province: 'Papua Barat',
    city: 'Raja Ampat',
    latitude: -0.5167,
    longitude: 130.5333,
    ticketPrice: 'Rp 100.000 (termasuk aktivitas)',
    openingHours: '08:00 - 17:00',
    rating: 4.7,
    reviews: 16340,
    history: 'Desa Arborek adalah desa wisata berbasis masyarakat di Raja Ampat yang mempertahankan budaya asli Papua. Pengunjung dapat menyaksikan pembuatan kerajinan tangan khas Papua seperti tas noken dari kulit kayu dan anyaman pandan, ukiran kayu, serta perhiasan tradisional. Masyarakat setempat juga masih menjaga tradisi musik dan tarian Papua. Desa ini menjadi contoh sukses ekowisata yang memadukan pelestarian budaya dan alam.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6p_1CJGXn58u-cIL7bY87jAraKtD1abUbQA&s',
    category: 'Desa Wisata'
  },
  // Sulawesi Barat
  {
    id: '35',
    name: 'Kompleks Makam Raja-Raja Mandar',
    province: 'Sulawesi Barat',
    city: 'Polewali Mandar',
    latitude: -3.4334,
    longitude: 119.3444,
    ticketPrice: 'Rp 5.000',
    openingHours: '08:00 - 17:00',
    rating: 4.1,
    reviews: 7340,
    history: 'Kompleks makam ini merupakan tempat peristirahatan terakhir para raja dan bangsawan Kerajaan Balanipa, salah satu kerajaan terbesar di Mandar. Makam tertua berasal dari abad ke-17. Arsitektur makam unik dengan nisan batu tegak dan rumah makam beratap tradisional. Di lokasi ini juga terdapat museum mini yang menyimpan pusaka kerajaan seperti keris, tombak, dan kitab-kitab kuno. Kompleks ini menjadi bukti sejarah Kerajaan Mandar yang pernah menguasai jalur pelayaran Selat Makassar.',
    image: 'https://asset.tribunnews.com/wmDGxWsKS3UHv_99KvBR89mUyuk=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/sulbar/foto/bank/originals/Kompleks-makam-raja-raja-dan-hadat-Banggae.jpg',
    category: 'Situs Sejarah'
  }
];