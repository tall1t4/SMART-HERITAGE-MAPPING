import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, DollarSign } from 'lucide-react';
import { culinarySpots } from '../data/culinarySpots';
import { InteractiveMap } from '../components/InteractiveMap';

export default function CulinaryMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('Semua');

  const provinces = ['Semua', ...Array.from(new Set(culinarySpots.map(s => s.province)))];

  const filteredSpots = culinarySpots.filter(spot => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesProvince = selectedProvince === 'Semua' || spot.province === selectedProvince;
    return matchesSearch && matchesProvince;
  });

  const mapLocations = filteredSpots.map(spot => ({
    id: spot.id,
    name: spot.name,
    latitude: spot.latitude,
    longitude: spot.longitude,
    city: spot.city,
    province: spot.province,
    type: 'culinary' as const,
    address: spot.address,
    rating: spot.rating
  }));

  const navigate = useNavigate();

  const handleLocationClick = (location: any) => {
    navigate(`/kuliner/${location.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <h1 className="text-3xl mb-6">Peta Kuliner Indonesia</h1>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari tempat kuliner atau menu..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            {provinces.map(province => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="order-2 lg:order-1">
          <InteractiveMap
            locations={mapLocations}
            onLocationClick={handleLocationClick}
            height="500px"
          />
        </div>

        <div className="order-1 lg:order-2 h-[400px] md:h-[500px] overflow-y-auto space-y-4">
          <div className="text-sm text-gray-600 mb-2">
            Menampilkan {filteredSpots.length} tempat kuliner
          </div>
          {filteredSpots.map((spot) => (
            <Link
              key={spot.id}
              to={`/kuliner/${spot.id}`}
              className="block bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 truncate">{spot.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{spot.city}, {spot.province}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="text-yellow-500 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      {spot.rating}
                    </span>
                    <span className="text-green-600 flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {spot.priceRange}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {spot.specialties.slice(0, 3).map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-red-50 text-red-600 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}