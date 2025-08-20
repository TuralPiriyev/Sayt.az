import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

const GovernmentWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Dövlət və Qeyri-Kommersiya Sayt Həlləri
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Təhlükəsizlik, əlçatanlıq və uyğunluq əsasında dövlət qurumları və qeyri-kommersiya 
          təşkilatları üçün peşəkar veb saytlar.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors">
            Başlayın
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-medium transition-colors">
            Portfolio Baxın
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">50+ Layihə</h3>
            <p className="text-slate-400 text-sm">Projects</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">100% Təhlükəsiz</h3>
            <p className="text-slate-400 text-sm">Security</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">99.9% İşlək Vaxt</h3>
            <p className="text-slate-400 text-sm">Uptime</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">24/7 Dəstək</h3>
            <p className="text-slate-400 text-sm">Support</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Əsas Xüsusiyyətlər</h2>
          <p className="text-xl text-slate-300">Uğur üçün lazım olan hər şey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Əlçatanlıq Standartları (WCAG 2.1)</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Çoxdilli Dəstək</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Təhlükəsiz Sənad İdarəetməsi</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Vətəndaş Portal İnteqrasiyası</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Şəffaf Kommunikasiya Alətləri</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Mobil-ilk Responsiv Dizayn</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Niyə Bizim Həlləri Seçməlisiniz?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Sahənizdə uzun geniş təcrübə təqdim edirik
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Sahəyə xüsusi təcrübə və ən yaxşı praktikalar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Yerli və qlobal üçün SEO optimallaşdırma</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Azərbaycan dilində 24/7 texniki dəstək</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Standart layihələr üçün 2 həftəlik sürətli təslim</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">İlk ay üçün pulsuz hosting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Önümüzə yenilənmələr və texniki xidmət imkanları</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">100% responsive və mobil uyğun</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300">Mövcud sistemlərlə inteqrasiya</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl p-12 text-center border border-slate-700/50">
              <div className="bg-blue-600/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Layihənizi Başlatmağa Hazırsınız?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Bu gün veb sayt layihəniz üçün pulsuz konsultasiya və təklif alın
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
                Pulsuz Konsultasiya Alın
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                Komandamızla Əlaqə
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default GovernmentWebsite;