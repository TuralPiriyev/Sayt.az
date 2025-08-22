import React, { useState } from 'react';

const MobileApp = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'native',
      title: 'Native iOS və Android Tətbiq Hazırlanması',
      icon: '✓',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Həllər (Flutter, React Native)',
      icon: '✓',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Dizayn və Prototipləmə',
      icon: '✓',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'app-store',
      title: 'App Store və Google Play Yerləşdirilməsi',
      icon: '✓',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'backend',
      title: 'Backend API İnteqrasiyası',
      icon: '✓',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'support',
      title: 'Tətbiq Dəstəyi və Yenilənmələr',
      icon: '✓',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    'Şəxsiyə xüsusi təcrübə və ən yeni praktikalar',
    'Yerli və qlobal bazara SEO optimallaşdırma',
    'Alıcılarınızın ehtirasları 24/7 texniki dəstək',
    'Standart layihələr üçün 3 həftəlik təəhid təslim',
    'İlk ay üçün pulsuz hosting',
    'Ömürlük yenilənmələr və texniki xidmətlərin təminatı',
    '100% responsive və mobil uyğun',
    'Məzkurun səhifələrinin inteqrasiyası'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Mobil Tətbiq Hazırlanması
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            iOS və Android üçün mobil tətbiqlərin hazırlanması. Native və cross-platform həllər. 
            Flutter və React Native ilə mobil app yaradılması.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Başlayın
            </button>
            <button className="bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Portfolio Baxın
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">300+</div>
            <div className="text-lg font-semibold mb-1">Mobil Tətbiq</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1M+</div>
            <div className="text-lg font-semibold mb-1">Yüklənmə</div>
            <div className="text-sm text-gray-400">Downloads</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">iOS və Android</div>
            <div className="text-lg font-semibold mb-1"></div>
            <div className="text-sm text-gray-400">Platforms</div>
          </div>
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Ömürlük Dəstək</div>
            <div className="text-lg font-semibold mb-1"></div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Əsas Xüsusiyyətlər</h2>
            <p className="text-xl text-gray-400">Uğur üçün lazım olan hər şey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 mt-1`}>
                    <span className="text-white text-sm font-bold">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Niyə Bizim Həlləri Seçməlisiniz?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Şəxsizə uyğun geniş işlər həllər seçimi edin
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
              <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-lg font-medium text-gray-300">
                    Mobil Tətbiq<br />Nümunələri
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center animate-bounce">
              <span className="text-lg">💡</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Layihənizi Başlatmağa Hazırsınız?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bu gün ətək sayt layihəniz üçün pulsuz konsultasiya və texniki dəstək alın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Pulsuz Konsultasiya Alın
              </button>
              <button className="bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Komandamızla Danışın
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp floating button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;