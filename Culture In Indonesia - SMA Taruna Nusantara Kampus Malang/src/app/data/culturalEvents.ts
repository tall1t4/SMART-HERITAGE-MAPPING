export interface CulturalEvent {
  id: string;
  name: string;
  province: string;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
  date: string;
  description: string;
  image: string;
  category: string;
}

export const culturalEvents: CulturalEvent[] = [
  {
    id: 'e1',
    name: 'Festival Waisak Borobudur',
    province: 'Jawa Tengah',
    city: 'Magelang',
    venue: 'Candi Borobudur',
    latitude: -7.6079,
    longitude: 110.2038,
    date: '2026-05-23',
    description: 'Perayaan Hari Raya Waisak terbesar di Indonesia dengan prosesi pelepasan lampion dan ritual keagamaan umat Buddha dari seluruh dunia.',
    image: 'https://nico.co.id/wp-content/uploads/2024/05/waisak.jpg',
    category: 'Keagamaan'
  },
  {
    id: 'e2',
    name: 'Sekaten Yogyakarta',
    province: 'DI Yogyakarta',
    city: 'Yogyakarta',
    venue: 'Alun-alun Utara Keraton',
    latitude: -7.8053,
    longitude: 110.3644,
    date: '2026-03-15',
    description: 'Peringatan Maulid Nabi Muhammad SAW dengan upacara tradisional Keraton, penampilan gamelan pusaka, dan pasar malam tradisional selama sepekan.',
    image: 'https://www.kratonjogja.id/assets/content/e4e1feee-0f97-44b0-87bf-cca8d6e7229a.jpg',
    category: 'Keagamaan'
  },
  {
    id: 'e3',
    name: 'Pesta Kesenian Bali',
    province: 'Bali',
    city: 'Denpasar',
    venue: 'Art Centre Denpasar',
    latitude: -8.6705,
    longitude: 115.2126,
    date: '2026-06-14',
    description: 'Festival seni dan budaya terbesar di Bali yang menampilkan berbagai pertunjukan tari, musik, dan seni rupa dari seluruh kabupaten di Bali selama sebulan penuh.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/dc/f9/7b/20161008-182934-largejpg.jpg?w=1200&h=-1&s=1',
    category: 'Seni & Budaya'
  },
  {
    id: 'e4',
    name: 'Ogoh-ogoh Parade',
    province: 'Bali',
    city: 'Denpasar',
    venue: 'Jalan Raya Denpasar',
    latitude: -8.6500,
    longitude: 115.2167,
    date: '2026-03-21',
    description: 'Pawai patung raksasa (ogoh-ogoh) yang dilakukan sehari sebelum Hari Raya Nyepi untuk mengusir roh jahat. Diikuti ribuan peserta dari seluruh Bali.',
    image: 'https://cdn.theatlantic.com/media/img/photo/2023/03/ogoh-ogoh/a03_1248904969/main_1500.jpg',
    category: 'Keagamaan'
  },
  {
    id: 'e5',
    name: 'Jakarta Fair',
    province: 'DKI Jakarta',
    city: 'Jakarta Pusat',
    venue: 'JIExpo Kemayoran',
    latitude: -6.1493,
    longitude: 106.8448,
    date: '2026-06-01',
    description: 'Pekan Raya Jakarta (PRJ) adalah pameran dagang terbesar di Indonesia dengan berbagai produk UMKM, hiburan, dan kuliner khas dari seluruh nusantara.',
    image: 'https://cdn25.metrotvnews.com/dynamic/content/2025/06/14/N9nC2lzq/a_684d567483fdc.jpg?w=720',
    category: 'Seni & Budaya'
  },
  {
    id: 'e6',
    name: 'Festival Danau Toba',
    province: 'Sumatera Utara',
    city: 'Samosir',
    venue: 'Pantai Danau Toba',
    latitude: 2.6529,
    longitude: 98.8728,
    date: '2026-08-15',
    description: 'Festival tahunan yang menampilkan kebudayaan Batak dengan gondang sabangunan, tor-tor, dan pesta adat. Diramaikan lomba perahu naga dan pasar kuliner Batak.',
    image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/11/2023/11/14/WhatsApp-Image-2023-11-14-at-124506_e79e4786-4228642417.jpg',
    category: 'Seni & Budaya'
  },
  {
    id: 'e7',
    name: 'Festival Tabuik',
    province: 'Sumatera Barat',
    city: 'Pariaman',
    venue: 'Pantai Gandoriah',
    latitude: -0.6172,
    longitude: 100.1229,
    date: '2026-07-28',
    description: 'Upacara tradisional memperingati wafatnya cucu Nabi Muhammad dengan mengarak replika kereta kuda yang dihanyutkan ke laut. Tradisi unik perpaduan Islam dan budaya lokal.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJ_WsheNCeQxILiBNKAFYbPPQ87DuEAuG9Q&s',
    category: 'Keagamaan'
  },
  {
    id: 'e8',
    name: 'Festival Sriwijaya',
    province: 'Sumatera Selatan',
    city: 'Palembang',
    venue: 'Benteng Kuto Besak',
    latitude: -2.9880,
    longitude: 104.7600,
    date: '2026-09-10',
    description: 'Festival yang menghidupkan kembali kejayaan Kerajaan Sriwijaya dengan parade perahu hias, pertunjukan sendratari, dan pameran artefak bersejarah.',
    image: 'https://asset.kompas.com/crops/REOXTT8FjKOzbansLwGx2AGm6zQ=/0x0:855x570/1200x800/data/photo/2017/08/22/529604900.jpg',
    category: 'Seni & Budaya'
  },
  {
    id: 'e9',
    name: 'Erau International Folk Art Festival',
    province: 'Kalimantan Timur',
    city: 'Tenggarong',
    venue: 'Istana Kadriah',
    latitude: -0.4042,
    longitude: 117.0059,
    date: '2026-09-24',
    description: 'Festival budaya internasional yang menampilkan seni tradisional Kutai dan pertunjukan dari berbagai negara. Ritual adat dan prosesi kerajaan menjadi daya tarik utama.',
    image: 'https://asset-2.tribunnews.com/tribunnewswiki/foto/bank/images/festival-erauu.jpg',
    category: 'Seni & Budaya'
  },
  {
    id: 'e10',
    name: 'Festival Danau Sentani',
    province: 'Papua',
    city: 'Jayapura',
    venue: 'Danau Sentani',
    latitude: -2.5833,
    longitude: 140.5167,
    date: '2026-06-19',
    description: 'Festival budaya Papua yang menampilkan tari-tarian adat, lomba perahu tradisional, dan pameran kerajinan khas Papua seperti noken dan ukiran kayu.',
    image: 'https://isbi-tanahpapua.ac.id/public/img/informasi/berita/1720412760_8d3d462f95e80684bd7d.jpg',
    category: 'Seni & Budaya'
  },
  {
    id: 'e11',
    name: 'Festival Moyo Lako',
    province: 'Maluku Utara',
    city: 'Ternate',
    venue: 'Benteng Oranye',
    latitude: 0.7893,
    longitude: 127.3668,
    date: '2026-08-01',
    description: 'Festival budaya Maluku Utara yang menampilkan tarian cakalele, musik tradisional, dan ritual adat Kesultanan Ternate. Dimeriahkan dengan lomba perahu dan kuliner khas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYCNuxHvn1Waih2oOCuY4Ceth5x9iLQe6hg&s',
    category: 'Seni & Budaya'
  },
  {
    id: 'e12',
    name: 'Festival Krakatau',
    province: 'Lampung',
    city: 'Bandar Lampung',
    venue: 'Pantai Mutun',
    latitude: -5.3971,
    longitude: 105.3186,
    date: '2026-10-05',
    description: 'Festival tahunan yang menampilkan kebudayaan Lampung dengan tari-tarian adat, musik tradisional, dan pameran kain tapis. Diramaikan dengan lomba perahu naga.',
    image: 'https://apimice.kemenparekraf.go.id/event-daerah/public/65f/d29/3de/65fd293de5910433429106.png',
    category: 'Seni & Budaya'
  },
  {
    id: 'e13',
    name: 'Gawai Dayak',
    province: 'Kalimantan Barat',
    city: 'Pontianak',
    venue: 'Rumah Radakng',
    latitude: -0.0263,
    longitude: 109.3425,
    date: '2026-05-31',
    description: 'Perayaan panen raya suku Dayak dengan ritual adat, tarian tradisional, dan pesta adat. Menampilkan kebudayaan unik dari berbagai sub-suku Dayak di Kalimantan Barat.',
    image: 'https://www.amazingborneo.id/wp-content/uploads/2019/09/pekan-gawai-dayak.jpeg',
    category: 'Adat & Tradisi'
  },
  {
    id: 'e14',
    name: 'Festival Bunaken',
    province: 'Sulawesi Utara',
    city: 'Manado',
    venue: 'Pulau Bunaken',
    latitude: 1.6172,
    longitude: 124.7630,
    date: '2026-07-15',
    description: 'Festival bahari yang menampilkan keindahan bawah laut Bunaken, budaya Minahasa, dan kuliner khas Sulawesi Utara. Lomba diving dan fotografi underwater menjadi daya tarik.',
    image: 'https://cdn.antaranews.com/cache/1200x800/2022/11/02/bunaken3.jpg',
    category: 'Seni & Budaya'
  },
  {
    id: 'e15',
    name: 'Pekan Budaya Aceh',
    province: 'Aceh',
    city: 'Banda Aceh',
    venue: 'Taman Sari Bustanussalatin',
    latitude: 5.5501,
    longitude: 95.3187,
    date: '2026-08-17',
    description: 'Festival yang menampilkan kekayaan budaya Aceh termasuk tari Saman, rapai, dan kuliner khas. Diramaikan dengan lomba-lomba tradisional dan pameran kerajinan.',
    image: 'https://parksidehotels.co.id/wp-content/uploads/2025/02/494C204A-83C4-4504-920D-97F684A2D5FD.jpeg',
    category: 'Seni & Budaya'
  }
];
