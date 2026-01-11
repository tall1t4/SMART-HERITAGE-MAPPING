import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix untuk icon Leaflet yang tidak muncul
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  city: string;
  province: string;
  type: 'tourism' | 'culinary';
  ticketPrice?: string;
  openingHours?: string;
  rating?: number;
  address?: string;
}

interface InteractiveMapProps {
  locations: Location[];
  onLocationClick?: (location: Location) => void;
  height?: string;
}

// Custom icon untuk tourism (oranye)
const tourismIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom icon untuk kuliner (merah)
const culinaryIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component untuk auto-fit bounds
function AutoFitBounds({ locations }: { locations: Location[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map(loc => [loc.latitude, loc.longitude] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);
  
  return null;
}

export function InteractiveMap({ locations, onLocationClick, height = '600px' }: InteractiveMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ height }} className="bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Memuat peta...</p>
      </div>
    );
  }

  // Center Indonesia (approximate)
  const center: [number, number] = [-2.5, 118];
  const zoom = 5;

  return (
    <div style={{ height, minHeight: '300px' }} className="rounded-xl overflow-hidden relative w-full">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={true}
        className="z-0"
      >
        {/* Tile Layer - OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        
        {/* Auto fit bounds ke semua lokasi */}
        <AutoFitBounds locations={locations} />
        
        {/* Markers untuk setiap lokasi */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={location.type === 'tourism' ? tourismIcon : culinaryIcon}
            eventHandlers={{
              click: () => {
                if (onLocationClick) {
                  onLocationClick(location);
                }
              }
            }}
          >
            <Popup maxWidth={300} minWidth={200}>
              <div className="min-w-[200px] max-w-[280px]">
                <h3 className="font-bold text-base mb-1 break-words">{location.name}</h3>
                <p className="text-xs text-gray-600 mb-2 break-words">
                  {location.city}, {location.province}
                </p>
                {location.type === 'tourism' && (
                  <div className="space-y-1">
                    {location.ticketPrice && (
                      <p className="text-xs">
                        <span className="font-semibold">Harga:</span> {location.ticketPrice}
                      </p>
                    )}
                    {location.openingHours && (
                      <p className="text-xs">
                        <span className="font-semibold">Jam Buka:</span> {location.openingHours}
                      </p>
                    )}
                    {location.rating && (
                      <p className="text-xs">
                        <span className="font-semibold">Rating:</span> {location.rating}/5 ⭐
                      </p>
                    )}
                  </div>
                )}
                {location.type === 'culinary' && (
                  <div className="space-y-1">
                    {location.address && (
                      <p className="text-xs mb-1 break-words">
                        <span className="font-semibold">Alamat:</span> {location.address}
                      </p>
                    )}
                    {location.rating && (
                      <p className="text-xs">
                        <span className="font-semibold">Rating:</span> {location.rating}/5 ⭐
                      </p>
                    )}
                  </div>
                )}
                <button
                  onClick={() => onLocationClick && onLocationClick(location)}
                  className="mt-2 bg-blue-500 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-600 w-full transition-colors"
                >
                  Lihat Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend - Responsive */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-lg z-[1000]">
        <div className="text-xs font-semibold mb-1.5 md:mb-2">Legenda</div>
        <div className="flex flex-col gap-1.5 md:gap-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
            <span className="whitespace-nowrap">Wisata Budaya</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
            <span className="whitespace-nowrap">Kuliner</span>
          </div>
        </div>
      </div>
    </div>
  );
}