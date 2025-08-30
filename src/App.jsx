import { useState } from 'react'
import AppRoutes from './router/AppRoutes';
import { LanguageProvider } from './context/LanguageContext';
import './index.css'

//import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
}

export default App
