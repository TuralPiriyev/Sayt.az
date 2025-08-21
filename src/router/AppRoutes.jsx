import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Main from '../pages/Main';
import MakingTheSite from '../pages/Veb-Sayt/MakingTheSite';
import GovernmentWebSite from '../pages/Veb-Sayt/Government-WebSite'
import SmallBusiness from '../pages/Veb-Sayt/SmallBizness'; 
import ElectronWebSite from '../pages/Veb-Sayt/ElectronWebSayt';
import LawFirm from '../pages/Veb-Sayt/LawFirm';
import Blog from '../pages/Veb-Sayt/Blog';
// Domen
import Domen from '../pages/Domen/Domen';
import FreeDomen from '../pages/Domen/FreeDomain';
// Hosting
import WebHosting from '../pages/Hosting/Web-Hosting';
import VPS from '../pages/Hosting/VPS';
import ServerHosting from '../pages/Hosting/Server-Hosting';
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {/* // Veb-Sayt Routes */}
          <Route path = "MakingTheSite" element = {<MakingTheSite/>}/>
          <Route path = "Government-WebSite" element = {<GovernmentWebSite/>}/>
          <Route path = "SmallBusiness" element = {<SmallBusiness/>}/>
          <Route path = "ElectronWebSite" element = {<ElectronWebSite/>}/>
          <Route path = "LawFirm" element = {<LawFirm/>}/>
          <Route path = "Blog" element = {<Blog/>}/>

          {/* // Domen Routes */}
          <Route path = "domen" element = {<Domen/>}/>
          <Route path = "FreeDomen" element = {<FreeDomen/>}/>
          
           {/* //Hosting Routes */}
          <Route path="WebHosting" element={<WebHosting />} />
          <Route path="VPS" element={<VPS />} />
          <Route path="ServerHosting" element={<ServerHosting />} />
          </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;