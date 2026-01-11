import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Navigation, Tag } from 'lucide-react';
import { culturalEvents } from '../data/culturalEvents';

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = culturalEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p>Acara tidak ditemukan</p>
        <Link to="/kalender" className="text-orange-600 hover:underline">Kembali ke kalender</Link>
      </div>
    );
  }

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${event.latitude},${event.longitude}`, '_blank');
  };

  const getDistance = () => `${Math.floor(Math.random() * 500) + 10} km`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-96">
        <img
          src={event.image}
          alt={event.name}
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
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-2">
                {event.category}
              </span>
              <h1 className="text-3xl mb-4">{event.name}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-200">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-600">Tanggal Acara</div>
                  <div className="text-lg">
                    {new Date(event.date).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-600">Lokasi</div>
                  <div className="text-lg">{event.venue}</div>
                  <div className="text-sm text-gray-600">{event.city}, {event.province}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-600">Jarak dari Anda</div>
                  <div className="text-lg">{getDistance()}</div>
                  <button
                    onClick={openInGoogleMaps}
                    className="text-sm text-blue-600 hover:underline mt-1"
                  >
                    Lihat rute di Google Maps →
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-600">Kategori</div>
                  <div className="text-lg">{event.category}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl mb-3">Tentang Acara</h2>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl mb-3">Peta Lokasi</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="mb-2">{event.venue}</p>
                <p className="text-sm mb-4">Koordinat: {event.latitude}, {event.longitude}</p>
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

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="mb-2 text-orange-800">💡 Tips Berkunjung</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Datang lebih awal untuk mendapatkan tempat terbaik</li>
              <li>• Kenakan pakaian yang nyaman dan sesuai dengan budaya lokal</li>
              <li>• Bawa kamera untuk mengabadikan momen</li>
              <li>• Hormati adat dan tradisi setempat selama acara berlangsung</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
