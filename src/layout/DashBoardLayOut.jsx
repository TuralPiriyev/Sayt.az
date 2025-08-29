// src/DashBoard/layout/DashBoardLayout.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// <-- Düzəliş: SidebarSidebar və HeaderSidebar Controller qovluğunda yerləşirsə belə import et:
import SidebarSidebar from '../DashBoard/Controller/SidebasSidebar';
import HeaderSidebar from '../DashBoard/Controller/HeaderSidebar';

const DashBoardLayout = () => {
  const [activeSection, setActiveSection] = useState('Ana Səhifə');
  const [balance] = useState(0.00);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarSidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      {/* Header */}
      <HeaderSidebar 
        activeSection={activeSection} 
        balance={balance}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'} pt-16 p-6 min-h-screen`}>
        <Outlet context={{ activeSection, setActiveSection, balance }} />
      </main>
    </div>
  );
};

export default DashBoardLayout;
