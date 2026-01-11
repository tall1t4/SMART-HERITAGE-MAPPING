import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, DollarSign, Navigation, UtensilsCrossed } from 'lucide-react';
import { culinarySpots } from '../data/culinarySpots';

export default function CulinaryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = culinarySpots.find(s => s.id === id);

  if (!spot) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p>Tempat kuliner tidak ditemukan</p>
        <Link to="/kuliner" className="text-red-600 hover:underline">Kembali ke peta kuliner</Link>
      </div>
    );
  }

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm p-6 -mt-16 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
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

          <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200 mb-6">
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
                <span className="text-lg">Harga</span>
              </div>
              <div className="text-sm text-gray-600">{spot.priceRange}</div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5" />
              Menu Spesial
            </h2>
            <div className="flex flex-wrap gap-2">
              {spot.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-red-50 text-red-700 rounded-lg border border-red-200"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Alamat Lengkap
            </h2>
            <p className="text-gray-700 mb-4">{spot.address}</p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="mb-2 max-w-md px-4">{spot.address}</p>
                <button
                  onClick={openInGoogleMaps}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Buka di Google Maps untuk Navigasi
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              ⚠️ Untuk menampilkan peta interaktif, tambahkan Google Maps Embed API
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h3 className="mb-2 text-red-800">🍽️ Rekomendasi</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Tempat ini terkenal dengan: {spot.specialties[0]}</li>
              <li>• Disarankan datang saat jam makan untuk mendapatkan hidangan segar</li>
              <li>• Jangan lupa mencoba semua menu spesial yang tersedia</li>
              <li>• Bawa uang tunai karena tidak semua tempat menerima pembayaran digital</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
