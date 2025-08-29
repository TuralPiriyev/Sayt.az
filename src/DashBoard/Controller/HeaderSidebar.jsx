import { Bell, Search, ChevronDown, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const HeaderSidebar = ({ activeSection, balance, sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  // Route adına görə title təyin edirik
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/domains')) return 'Domainlər';
    if (path.includes('/hosting')) return 'Web Hosting';
    if (path.includes('/vps')) return 'VPS';
    if (path.includes('/resellers')) return 'Resellerlər';
    if (path.includes('/servers')) return 'Serverlər';
    if (path.includes('/balance')) return 'Balans';
    if (path.includes('/settings')) return 'Tənzimlər';
    return 'Ana Səhifə';
  };

  return (
    <header className={`fixed top-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-6 transition-all duration-300 ${
      sidebarOpen ? 'left-64' : 'left-16'
    }`}>
      
      {/* Left side */}
      <div className="flex items-center space-x-4">
        {/* Mobile menu button */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        
        {/* Page title */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
          <p className="text-sm text-gray-500 hidden md:block">
            {new Date().toLocaleDateString('az-AZ', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
      
      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Search - hide on mobile */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Axtar..." 
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        
        {/* Balance */}
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
          <span className="text-sm text-gray-600 hidden sm:inline">Balans:</span>
          <span className="font-semibold text-green-600">${balance.toFixed(2)}</span>
        </div>
        
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
        
        {/* User Menu */}
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">T</span>
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-sm font-medium text-gray-900">Tural Xeyyam</div>
            <div className="text-xs text-gray-500">Premium</div>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSidebar;