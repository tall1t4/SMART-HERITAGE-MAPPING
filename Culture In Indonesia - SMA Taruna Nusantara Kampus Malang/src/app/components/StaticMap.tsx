import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  city: string;
  province: string;
  type: 'tourism' | 'culinary';
}

interface StaticMapProps {
  locations: Location[];
  height?: string;
}

export function StaticMap({ locations, height = '500px' }: StaticMapProps) {
  // Indonesia bounds: approximately
  const minLat = -11;
  const maxLat = 6;
  const minLng = 95;
  const maxLng = 141;

  // Convert lat/lng to x/y coordinates (0-100%)
  const latLngToPercent = (lat: number, lng: number) => {
    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
    return { x, y };
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden"
      style={{ height }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Indonesia outline text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-blue-200 text-6xl font-bold opacity-30">INDONESIA</div>
      </div>

      {/* Markers */}
      {locations.map((location) => {
        const { x, y } = latLngToPercent(location.latitude, location.longitude);
        const isTourism = location.type === 'tourism';
        
        return (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer"
            style={{ left: `${x}%`, top: `${y}%` }}
            title={`${location.name} - ${location.city}, ${location.province}`}
          >
            {/* Marker pin */}
            <div className={`relative ${isTourism ? 'text-orange-600' : 'text-red-600'}`}>
              <MapPin className="w-7 h-7 drop-shadow-lg fill-current" />
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
                <div className="font-semibold">{location.name}</div>
                <div className="text-gray-600 text-xs">{location.city}, {location.province}</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                <div className="border-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
        <div className="text-xs font-semibold mb-2">Legenda</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-4 h-4 text-orange-600 fill-current" />
            <span>Wisata Budaya</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-4 h-4 text-red-600 fill-current" />
            <span>Kuliner</span>
          </div>
        </div>
      </div>

      {/* Info message */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg text-xs text-center max-w-md">
        Peta interaktif sederhana - Arahkan kursor ke pin untuk melihat detail lokasi
      </div>
    </div>
  );
}
