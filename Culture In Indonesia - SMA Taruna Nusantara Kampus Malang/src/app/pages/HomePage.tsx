import { Link } from 'react-router-dom';
import { Map, Calendar, UtensilsCrossed, TrendingUp } from 'lucide-react';
import { touristSpots } from '../data/touristSpots';
import { culturalEvents } from '../data/culturalEvents';
import { culinarySpots } from '../data/culinarySpots';
import { StaticMap } from '../components/StaticMap';

export default function HomePage() {
  const featuredTours = touristSpots.slice(0, 3);
  const upcomingEvents = culturalEvents
    .filter(e => new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  const featuredCulinary = culinarySpots.slice(0, 3);
  
  // Combine all locations for the map
  const allLocations = [
    ...touristSpots.map(spot => ({
      id: spot.id,
      name: spot.name,
      latitude: spot.latitude,
      longitude: spot.longitude,
      city: spot.city,
      province: spot.province,
      type: 'tourism' as const
    })),
    ...culinarySpots.map(spot => ({
      id: spot.id,
      name: spot.name,
      latitude: spot.latitude,
      longitude: spot.longitude,
      city: spot.city,
      province: spot.province,
      type: 'culinary' as const
    }))
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl mb-4">
          Jelajahi Budaya Indonesia
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan keindahan budaya, tradisi, dan kuliner Indonesia. Rencanakan perjalanan wisata Anda
          dengan informasi lengkap tentang tempat wisata budaya, jadwal acara, dan rekomendasi kuliner.
        </p>
      </div>

      {/* Map Section */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">Peta Lokasi Wisata & Kuliner</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <StaticMap locations={allLocations} height="500px" />
          <div className="p-4 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-4 items-center justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-600"></div>
                <span>Wisata Budaya ({touristSpots.length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                <span>Kuliner ({culinarySpots.length})</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Arahkan kursor ke pin untuk melihat detail lokasi
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <Map className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl">{touristSpots.length}</div>
          <div className="text-sm text-gray-600">Tempat Wisata</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl">{culturalEvents.length}</div>
          <div className="text-sm text-gray-600">Acara Budaya</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <UtensilsCrossed className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl">{culinarySpots.length}</div>
          <div className="text-sm text-gray-600">Spot Kuliner</div>
        </div>
      </div>

      {/* Featured Tourist Spots */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Wisata Budaya Populer</h2>
          <Link to="/wisata" className="text-orange-600 hover:text-orange-700 text-sm flex items-center gap-1">
            Lihat Semua
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredTours.map((spot) => (
            <Link
              key={spot.id}
              to={`/wisata/${spot.id}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2">{spot.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{spot.city}, {spot.province}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-500">★ {spot.rating}</span>
                  <span className="text-gray-500">({spot.reviews.toLocaleString()} ulasan)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Acara Mendatang</h2>
          <Link to="/kalender" className="text-orange-600 hover:text-orange-700 text-sm flex items-center gap-1">
            Lihat Semua
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              to={`/kalender/${event.id}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-orange-600 mb-1">
                  {new Date(event.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <h3 className="mb-2">{event.name}</h3>
                <p className="text-sm text-gray-600">{event.city}, {event.province}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Culinary */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Kuliner Rekomendasi</h2>
          <Link to="/kuliner" className="text-orange-600 hover:text-orange-700 text-sm flex items-center gap-1">
            Lihat Semua
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredCulinary.map((spot) => (
            <Link
              key={spot.id}
              to={`/kuliner/${spot.id}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2">{spot.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{spot.city}, {spot.province}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-yellow-500">★ {spot.rating}</span>
                  <span className="text-green-600">{spot.priceRange}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}