import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Navigation, Info } from 'lucide-react';
import { touristSpots } from '../data/touristSpots';

export default function TouristSpotDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = touristSpots.find(s => s.id === id);

  if (!spot) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p>Tempat wisata tidak ditemukan</p>
        <Link to="/wisata" className="text-orange-600 hover:underline">Kembali ke peta wisata</Link>
      </div>
    );
  }

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 md:h-96">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm p-6 -mt-16 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-2">
                {spot.category}
              </span>
              <h1 className="text-3xl mb-2">{spot.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin className="w-5 h-5" />
                <span>{spot.city}, {spot.province}</span>
              </div>
            </div>
            <button
              onClick={openInGoogleMaps}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Navigation className="w-5 h-5" />
              <span className="hidden md:inline">Buka di Maps</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200 mb-6">
            <div>
              <div className="flex items-center gap-2 text-yellow-500 mb-1">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-2xl">{spot.rating}</span>
              </div>
              <div className="text-sm text-gray-600">{spot.reviews.toLocaleString()} ulasan</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <DollarSign className="w-5 h-5" />
                <span className="text-lg">Tiket Masuk</span>
              </div>
              <div className="text-sm text-gray-600">{spot.ticketPrice}</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-lg">Jam Buka</span>
              </div>
              <div className="text-sm text-gray-600">{spot.openingHours}</div>
            </div>
          </div>

          {/* History */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Sejarah Singkat
            </h2>
            <p className="text-gray-700 leading-relaxed">{spot.history}</p>
          </div>

          {/* Map Embedded */}
          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Lokasi
            </h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="mb-2">Koordinat: {spot.latitude}, {spot.longitude}</p>
                <button
                  onClick={openInGoogleMaps}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Buka di Google Maps
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              ⚠️ Untuk menampilkan peta interaktif, tambahkan Google Maps Embed API
            </p>
          </div>

          {/* Address */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="mb-2">Informasi Tambahan</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Provinsi:</span>
                <span>{spot.province}</span>
              </div>
              <div className="flex justify-between">
                <span>Kota:</span>
                <span>{spot.city}</span>
              </div>
              <div className="flex justify-between">
                <span>Kategori:</span>
                <span>{spot.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
