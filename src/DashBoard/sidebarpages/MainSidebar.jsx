import { useState } from 'react';
import SidebarSidebar from './SidebarSidebar';
import HeaderSidebar from '../Controller/HeaderSidebar';
import DashboardSidebar from './DashboardSidebar';
import DomainSidebar from './DomainSidebar';
import HostingSidebar from './HostingSidebar';
import VpsSidebar from './VpsSidebar';
import BalanceSidebar from './BalanceSidebar';
import SettingsSidebar from './SettingsSidebar';

const MainSidebar = () => {
  const [activeSection, setActiveSection] = useState('Ana Səhifə');
  const [balance] = useState(0.00);

  const renderContent = () => {
    switch(activeSection) {
      case 'Ana Səhifə':
        return <DashboardSidebar />;
      case 'Domainlər':
        return <DomainSidebar />;
      case 'Web Hosting':
        return <HostingSidebar />;
      case 'VPS':
        return <VpsSidebar />;
      case 'Resellerlər':
        return (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Reseller Proqramı</h3>
              <p className="text-gray-600">Bu bölmə hazırlanır...</p>
            </div>
          </div>
        );
      case 'Serverlər':
        return (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Serverlər</h3>
              <p className="text-gray-600">Bu bölmə hazırlanır...</p>
            </div>
          </div>
        );
      case 'Balans':
        return <BalanceSidebar balance={balance} />;
      case 'Tənzimlər':
        return <SettingsSidebar />;
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{activeSection}</h3>
            <p className="text-gray-600">Bu bölmə hazırlanır...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarSidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <HeaderSidebar 
        activeSection={activeSection} 
        balance={balance} 
      />
      
      <main className="ml-64 pt-16 p-6 min-h-screen">
        {renderContent()}
      </main>
    </div>
  );
};

export default MainSidebar;