import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, Clock, DollarSign, Filter } from 'lucide-react';
import { touristSpots } from '../data/touristSpots';
import { InteractiveMap } from '../components/InteractiveMap';

export default function TourismMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('Semua');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const provinces = ['Semua', ...Array.from(new Set(touristSpots.map(s => s.province)))];
  const categories = ['Semua', ...Array.from(new Set(touristSpots.map(s => s.category)))];

  const filteredSpots = touristSpots.filter(spot => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProvince = selectedProvince === 'Semua' || spot.province === selectedProvince;
    const matchesCategory = selectedCategory === 'Semua' || spot.category === selectedCategory;
    return matchesSearch && matchesProvince && matchesCategory;
  });

  const mapLocations = filteredSpots.map(spot => ({
    id: spot.id,
    name: spot.name,
    latitude: spot.latitude,
    longitude: spot.longitude,
    city: spot.city,
    province: spot.province,
    type: 'tourism' as const,
    ticketPrice: spot.ticketPrice,
    openingHours: spot.openingHours,
    rating: spot.rating
  }));

  const navigate = useNavigate();

  const handleLocationClick = (location: any) => {
    navigate(`/wisata/${location.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <h1 className="text-3xl mb-6">Peta Wisata Budaya Indonesia</h1>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari tempat wisata..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            {provinces.map(province => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map */}
        <div className="order-2 lg:order-1">
          <InteractiveMap
            locations={mapLocations}
            onLocationClick={handleLocationClick}
            height="500px"
          />
        </div>

        {/* List */}
        <div className="order-1 lg:order-2 h-[400px] md:h-[500px] overflow-y-auto space-y-4">
          <div className="text-sm text-gray-600 mb-2">
            Menampilkan {filteredSpots.length} tempat wisata
          </div>
          {filteredSpots.map((spot) => (
            <Link
              key={spot.id}
              to={`/wisata/${spot.id}`}
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
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-yellow-500 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      {spot.rating}
                    </span>
                    <span className="text-green-600 flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {spot.ticketPrice.split(',')[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Clock className="w-3 h-3" />
                    {spot.openingHours}
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