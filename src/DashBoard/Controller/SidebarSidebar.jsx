// src/components/DashBoard/Controller/SidebarSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, Server, HardDrive, Settings, Users, CreditCard, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

const SidebarSidebar = ({ activeSection, setActiveSection, sidebarOpen = true }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  
  // route mapping: item name -> dashboard child path (relative part)
  const routes = {
    [t('dashboard_home')]: '',           // will resolve to /dashboard (index)
    [t('dashboard_domains')]: 'domains',     // /dashboard/domains
    [t('dashboard_web_hosting')]: 'hosting',
    'VPS': 'vps',
    [t('dashboard_resellers')]: 'resellers',
    [t('dashboard_servers')]: 'servers',
    [t('dashboard_balance')]: 'balance',
    [t('dashboard_settings')]: 'settings'
  };

  const sidebarItems = [
    { name: t('dashboard_home'), icon: Home },
    { name: t('dashboard_domains'), icon: Globe },
    { name: t('dashboard_web_hosting'), icon: Server },
    { name: 'VPS', icon: HardDrive },
    { name: t('dashboard_resellers'), icon: Users },
    { name: t('dashboard_servers'), icon: Server },
    { name: t('dashboard_balance'), icon: CreditCard },
    { name: t('dashboard_settings'), icon: Settings }
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-slate-900 text-white flex flex-col z-50 transition-all ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded" />
          <span className="text-lg font-semibold hidden md:inline">{t('dashboard_title')}</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const rel = routes[item.name] ?? '';
          // build absolute path to ensure it always points under /dashboard
          const to = rel === '' ? '/dashboard' : `/dashboard/${rel}`;
          const isIndex = rel === '';

          return (
            <NavLink
              key={item.name}
              to={to}
              end={isIndex}
              className={({ isActive }) =>
                `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive || activeSection === item.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
              onClick={() => setActiveSection?.(item.name)}
            >
              <IconComponent size={20} />
              <span className="font-medium truncate">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3 text-slate-400">
          <Home size={18} />
          <span className="text-sm">{t('dashboard_main_page')}</span>
        </div>
      </div>
    </aside>
  );
};

export default SidebarSidebar;
