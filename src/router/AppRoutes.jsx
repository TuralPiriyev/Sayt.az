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
// Server
import ManualCalculator from '../pages/Server/ManualCalculator';
import AIChatCalculator from '../pages/Server/AIChatbot';
import SEOServicesPage from '../pages/Server/SEOService';
import MobileApp from '../pages/Server/MobileProgram';
import TechnicalService from '../pages/Server/TechnicalService';
import SocialMediaMarketing from '../pages/Server/SocialMarketing';
// Company
import About from '../pages/Company/About';
import Careers from '../pages/Company/Kareara';
import Freelancer from '../pages/Company/Freelancer';
import ContactPage from '../pages/Company/Contact';
//Authentication
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

//Dashboard
import DashBoardLayout from '../layout/DashBoardLayOut';
import DashBoardRoutes from './DashBoardRoutes'; 
import SidebarSidebar from '../DashBoard/Controller/SidebarSidebar';
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
          {/* Manual Calculator Route */}
           <Route path="ManualCalculator" element={<ManualCalculator />} />
           <Route path = "AIChatCalculator" element = {<AIChatCalculator/>}/>
           <Route path = "SEOServicesPage" element = {<SEOServicesPage/>}/>
           <Route path = "MobileApp" element = {<MobileApp/>}/>
           <Route path = "TechnicalService" element = {<TechnicalService/>}/>
           <Route path = "SocialMediaMarketing" element = {<SocialMediaMarketing/>}/>
          {/* Company Routes */}
          <Route path = "About" element = {<About/>}/>
          <Route path = "Careers" element = {<Careers/>}/>
          <Route path = "Freelancer" element = {<Freelancer/>}/>
          <Route path = "ContactPage" element = {<ContactPage/>}/>
          {/* Authentication Routes */}
          <Route path = "Login" element = {<Login/>}/>
          <Route path = "Register" element = {<Register/>}/>
         
        </Route>
        <Route path="SidebarSidebar" element={<SidebarSidebar />}>
           </Route>
         {/* Dashboard Routes */}
           <Route path="dashboard/*" element={<DashBoardLayout />}>
               {DashBoardRoutes()}
          </Route>
     </Routes>
     
    </BrowserRouter>
  );
}

export default AppRoutes;