import React, { useState } from 'react';
import { Star, Zap, Check } from 'lucide-react';

const Main = () => {
  const [selectedService, setSelectedService] = useState('');
  const [features, setFeatures] = useState({
    responsive: false,
    admin: false,
    seo: false
  });

  // Qiymət hesablama funksiyası
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Xidmət növünə görə baza qiyməti
    switch(selectedService) {
      case 'website':
        basePrice = 1000;
        break;
      case 'ecommerce':
        basePrice = 2500;
        break;
      case 'mobile':
        basePrice = 3000;
        break;
      default:
        basePrice = 0;
    }

    // Xüsusiyyətlərin qiymətləri
    let additionalPrice = 0;
    if (features.responsive) additionalPrice += 200;
    if (features.admin) additionalPrice += 400;
    if (features.seo) additionalPrice += 300;

    return basePrice + additionalPrice;
  };

  const handleFeatureChange = (feature) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const totalPrice = calculatePrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Sol tərəf - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Azərbaycann #1 Veb Dizayn Studiyası
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Biznesinizi<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Rəqəmsal Dünyada
                </span><br />
                <span className="text-white">Lider Edin</span>
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Beynəlxalq səviyyədə texnologiya və yerli bazar anlayışını 
                birləşdirərək, Azərbaycanın aparıcı şirkətləri üçün dünya 
                səviyyəli rəqəmsal həllər təqdim edirik.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                Layihəyə başla
              </button>
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50">
                .ar Hekayələrimiz
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-3xl font-bold">150+</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Tamamlanmış<br />
                  Layihə
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">4.9/5</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Müştəri<br />
                  Məmnuniyyəti
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-3xl font-bold">35%</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Orta Satış Artımı
                </p>
              </div>
            </div>
          </div>

          {/* Sağ tərəf - Price Calculator */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-white">Layihə Qiymət Kalkulyatoru</h2>
                <p className="text-gray-400 text-sm">Ehtiyaclarınızı seçin, dərhal qiymət təklifi alın</p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Xidmət Növü</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-700/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                >
                  <option value="">Seçin...</option>
                  <option value="website">Veb Sayt</option>
                  <option value="ecommerce">E-ticarət</option>
                  <option value="mobile">Mobil Tətbiq</option>
                </select>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Xüsusiyyətlər</label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={features.responsive}
                      onChange={() => handleFeatureChange('responsive')}
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-white">Responsive <span className="text-gray-400">(+₼ 200)</span></span>
                  </label>
                  
                  <label className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={features.admin}
                      onChange={() => handleFeatureChange('admin')}
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-white">Admin Panel <span className="text-gray-400">(+₼ 400)</span></span>
                  </label>

                  <label className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={features.seo}
                      onChange={() => handleFeatureChange('seo')}
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-white">Başlıqlar & Meta Təqlər <span className="text-gray-400">(+₼ 300)</span></span>
                  </label>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-slate-700/60 to-slate-600/60 rounded-lg p-6 text-center border border-slate-500/30">
                <p className="text-gray-400 text-sm mb-2">Təxmini Qiymət</p>
                <div className="text-4xl font-bold text-cyan-400 mb-1">₼ {totalPrice}</div>
                <p className="text-gray-400 text-xs">ƏDV daxil deyil</p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105">
                Pulsuz Qiymət Təklifi Al
              </button>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-8 text-gray-300">Bizə Güvənən Şirkətlər</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-gray-400 font-semibold">Mətbuat.az</div>
            <div className="text-gray-400 font-semibold">Livescore.az</div>
            <div className="text-gray-400 font-semibold">Azdoç.AI</div>
            <div className="text-gray-400 font-semibold">Kredit.az</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;