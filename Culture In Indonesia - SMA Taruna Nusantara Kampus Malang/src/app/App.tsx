import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Map, Calendar, UtensilsCrossed, Info } from 'lucide-react';
import TourismMap from './pages/TourismMap';
import CulturalCalendar from './pages/CulturalCalendar';
import CulinaryMap from './pages/CulinaryMap';
import TouristSpotDetail from './pages/TouristSpotDetail';
import EventDetail from './pages/EventDetail';
import CulinaryDetail from './pages/CulinaryDetail';
import HomePage from './pages/HomePage';

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/wisata', label: 'Wisata Budaya', icon: Map },
    { path: '/kalender', label: 'Kalender', icon: Calendar },
    { path: '/kuliner', label: 'Kuliner', icon: UtensilsCrossed },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:top-0 md:bottom-auto md:border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-around md:justify-start md:gap-8 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs md:text-sm">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pb-20 md:pt-16 md:pb-4">
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wisata" element={<TourismMap />} />
          <Route path="/wisata/:id" element={<TouristSpotDetail />} />
          <Route path="/kalender" element={<CulturalCalendar />} />
          <Route path="/kalender/:id" element={<EventDetail />} />
          <Route path="/kuliner" element={<CulinaryMap />} />
          <Route path="/kuliner/:id" element={<CulinaryDetail />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
