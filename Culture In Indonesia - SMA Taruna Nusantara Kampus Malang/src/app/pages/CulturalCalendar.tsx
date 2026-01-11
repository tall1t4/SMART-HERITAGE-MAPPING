import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar as CalendarIcon, Navigation } from 'lucide-react';
import { culturalEvents } from '../data/culturalEvents';

export default function CulturalCalendar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('Semua');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const provinces = ['Semua', ...Array.from(new Set(culturalEvents.map(e => e.province)))];
  const categories = ['Semua', ...Array.from(new Set(culturalEvents.map(e => e.category)))];

  const filteredEvents = culturalEvents
    .filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvince = selectedProvince === 'Semua' || event.province === selectedProvince;
      const matchesCategory = selectedCategory === 'Semua' || event.category === selectedCategory;
      return matchesSearch && matchesProvince && matchesCategory;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Calculate distance (mock - in real app would use user's location)
  const getDistance = () => `${Math.floor(Math.random() * 500) + 10} km`;

  // Group events by month
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    const monthYear = new Date(event.date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    if (!acc[monthYear]) acc[monthYear] = [];
    acc[monthYear].push(event);
    return acc;
  }, {} as Record<string, typeof filteredEvents>);

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <h1 className="text-3xl mb-6">Kalender Acara Budaya</h1>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari acara budaya..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Events List */}
      {Object.entries(groupedEvents).map(([monthYear, events]) => (
        <div key={monthYear} className="mb-8">
          <h2 className="text-xl mb-4 text-gray-700 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            {monthYear}
          </h2>
          <div className="space-y-4">
            {events.map((event) => (
              <Link
                key={event.id}
                to={`/kalender/${event.id}`}
                className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="md:flex">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full md:w-64 h-48 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-2">
                          {event.category}
                        </span>
                        <h3 className="text-xl mb-2">{event.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl text-orange-600">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString('id-ID', { month: 'short' })}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}, {event.city}, {event.province}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4" />
                        <span>Jarak dari lokasi Anda: {getDistance()}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700 line-clamp-2">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Tidak ada acara ditemukan
        </div>
      )}
    </div>
  );
}
