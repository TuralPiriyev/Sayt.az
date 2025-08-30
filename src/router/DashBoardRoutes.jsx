// src/router/DashBoardRoutes.jsx
import React from 'react';
import { Route } from 'react-router-dom';

// import the components that should render in the RIGHT content area
// (əgər sən real "pages" yox, sidebarpages istifadə edirsə onlar da işləyər,
// amma adı qarışdığından daha aydın olması üçün page tərzi adlar yaxşıdır)
import DashboardSidebar from '../DashBoard/sidebarpages/DashboardSidebar';
import DomainSidebar from '../DashBoard/sidebarpages/DomainSidebar';
import HostingSidebar from '../DashBoard/sidebarpages/HostingSidebar';
import VpsSidebar from '../DashBoard/sidebarpages/VpsSidebar';
import BalanceSidebar from '../DashBoard/sidebarpages/BalanceSidebar';
import SettingsSidebar from '../DashBoard/sidebarpages/SettingsSidebar';
import ResellerSidebar from '../DashBoard/sidebarpages/ResellerSidebar';
import ServerSidebar from '../DashBoard/sidebarpages/ServerSidebar';
const DashBoardRoutes = () => {
  return (
    <>
      {/* Default route when /dashboard açıldığında */}
      <Route index element={<DashboardSidebar />} />

      {/* Dashboard child routes (relative paths) */}
      <Route path="home" element={<DashboardSidebar />} />
      <Route path="domains" element={<DomainSidebar />} />
      <Route path="hosting" element={<HostingSidebar />} />
      <Route path="vps" element={<VpsSidebar />} />
      <Route path="balance" element={<BalanceSidebar />} />
      <Route path="settings" element={<SettingsSidebar />} />
      <Route path="resellers" element={<ResellerSidebar />} />
      <Route path="servers" element={<ServerSidebar />} />

      {/* fallback for unknown dashboard child paths */}
      <Route path="*" element={<DashboardSidebar />} />
    </>
  );
};

export default DashBoardRoutes;
