import React, { useState, useEffect } from 'react';

const ManualCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    mobileFeatures: [],
    seoFeatures: [],
    logoType: '',
    deliveryTime: '',
    supportPackage: ''
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const serviceTypes = [
    { id: 'website', name: 'Veb Sayt', price: 400, icon: '🌐' },
    { id: 'ecommerce', name: 'E-ticarət', price: 1200, icon: '🛒' },
    { id: 'mobile', name: 'Mobil Tətbiq', price: 2500, icon: '📱' },
    { id: 'system', name: 'Xüsusi Sistem', price: 5500, icon: '⚙️' }
  ];

  const mobileFeatures = [
    { id: 'push', name: 'Push Bildirişlər', price: 300, icon: '🔔' },
    { id: 'social', name: 'Sosial Giriş', price: 200, icon: '👥' },
    { id: 'offline', name: 'Offline Rejim', price: 400, icon: '📴' },
    { id: 'analytics', name: 'Tətbiq Analitikası', price: 150, icon: '📊' },
    { id: 'geo', name: 'Geolokasiya', price: 250, icon: '📍' },
    { id: 'camera', name: 'Kamera İnteqrasiyası', price: 200, icon: '📷' },
    { id: 'biometric', name: 'Biometrik Giriş', price: 350, icon: '🔒' },
    { id: 'cloud', name: 'Buludrə Sinxronizasiya', price: 300, icon: '☁️' },
    { id: 'payment', name: 'Tətbiqdaxili Ödəniş', price: 500, icon: '💳' },
    { id: 'chat', name: 'Söhbət Funksiyası', price: 400, icon: '💬' },
    { id: 'googleplay', name: 'Google Play Quraşdırılması', price: 100, icon: '📲' },
    { id: 'appstore', name: 'App Store Quraşdırılması', price: 100, icon: '🍎' },
    { id: 'optimization', name: 'Tətbiq Yenilənməsi (İllik)', price: 300, icon: '🔄' }
  ];

  const seoFeatures = [
    { id: 'basic', name: 'Səhifədaxili SEO', price: 150, icon: '📄' },
    { id: 'meta', name: 'Meta Teqlər', price: 80, icon: '🏷️' },
    { id: 'sitemap', name: 'XML Sitemap', price: 60, icon: '🗺️' },
    { id: 'robots', name: 'Robots.txt', price: 40, icon: '🤖' },
    { id: 'business', name: 'Google My Business', price: 100, icon: '🏢' },
    { id: 'keywords', name: 'Açar Söz Tədqiqatı', price: 200, icon: '🔍' },
    { id: 'content', name: 'Rəqib Təhllili', price: 250, icon: '📋' },
    { id: 'optimization', name: 'Məzmun Optimallaşdırılması', price: 200, icon: '📝' },
    { id: 'schema', name: 'Schema İşarələməsi', price: 150, icon: '🏗️' },
    { id: 'local', name: 'Lokal SEO Paketi', price: 300, icon: '📍' },
    { id: 'audit', name: 'Texniki SEO Auditi', price: 400, icon: '🔧' }
  ];

  const logoOptions = [
    { id: 'none', name: 'Ehtiyac yoxdur', price: 0, color: 'bg-gray-600' },
    { id: 'basic', name: 'Əsas (AI köməkli)', price: 80, color: 'bg-blue-600' },
    { id: 'professional', name: 'Peşəkar (3 konsept)', price: 200, color: 'bg-purple-600' },
    { id: 'premium', name: 'Premium (5 konsept)', price: 300, color: 'bg-gradient-to-r from-purple-600 to-pink-600' }
  ];

  const deliveryOptions = [
    { id: 'urgent', name: 'Təcili (7 gün)', price: 0, multiplier: 1.5, color: 'bg-red-600' },
    { id: 'fast', name: 'Sürətli (14 gün)', price: 0, multiplier: 1.25, color: 'bg-orange-600' },
    { id: 'standard', name: 'Standart (30 gün)', price: 0, multiplier: 1, color: 'bg-blue-600' },
    { id: 'relaxed', name: 'Rahat (45 gün)', price: 0, multiplier: 0.95, color: 'bg-green-600' },
    { id: 'budget', name: 'Büdcə (60 gün)', price: 0, multiplier: 0.9, color: 'bg-gray-600' }
  ];

  const supportPackages = [
    { id: 'none', name: 'Dəstək yoxdur', price: 0, color: 'bg-gray-600' },
    { id: 'basic', name: 'Əsas (yenilənmələr + 3 ay yenilənmələr)', price: 50, color: 'bg-blue-600' },
    { id: 'standard', name: 'Standart (2 saat yenilənmə)', price: 120, color: 'bg-purple-600' },
    { id: 'premium', name: 'Peşəkar (5 saat yenilənmə)', price: 250, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { id: 'enterprise', name: 'Premium (10 saat yenilənmə)', price: 400, color: 'bg-gradient-to-r from-pink-600 to-red-600' }
  ];

  useEffect(() => {
    calculatePrice();
  }, [formData]);

  const calculatePrice = () => {
    let price = 0;

    // Base service price
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    if (service) {
      price += service.basePrice || service.price;
    }

    // Mobile features
    formData.mobileFeatures.forEach(featureId => {
      const feature = mobileFeatures.find(f => f.id === featureId);
      if (feature) {
        price += feature.price;
      }
    });

    // SEO features
    formData.seoFeatures.forEach(featureId => {
      const feature = seoFeatures.find(f => f.id === featureId);
      if (feature) {
        price += feature.price;
      }
    });

    // Logo
    const logo = logoOptions.find(l => l.id === formData.logoType);
    if (logo) {
      price += logo.price;
    }

    // Support
    const support = supportPackages.find(s => s.id === formData.supportPackage);
    if (support) {
      price += support.price;
    }

    // Delivery multiplier
    const delivery = deliveryOptions.find(d => d.id === formData.deliveryTime);
    if (delivery) {
      price *= delivery.multiplier;
    }

    setTotalPrice(Math.round(price));
  };

  const handleServiceChange = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      serviceType: serviceId
    }));
  };

  const handleFeatureToggle = (category, featureId) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(featureId)
        ? prev[category].filter(f => f !== featureId)
        : [...prev[category], featureId]
    }));
  };

  const handleSingleSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const steps = [
    { id: 1, name: 'Xidmət Növü', icon: '🎯' },
    { id: 2, name: 'Əlavələr', icon: '⚙️' },
    { id: 3, name: 'Çırında', icon: '🎨' },
    { id: 4, name: 'Təslim və', icon: '📦' }
  ];

  const getSelectedPrice = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const basePrice = service ? service.price : 0;
    
    const featuresPrice = [
      ...formData.mobileFeatures.map(id => mobileFeatures.find(f => f.id === id)?.price || 0),
      ...formData.seoFeatures.map(id => seoFeatures.find(f => f.id === id)?.price || 0)
    ].reduce((sum, price) => sum + price, 0);

    const logo = logoOptions.find(l => l.id === formData.logoType);
    const logoPrice = logo ? logo.price : 0;

    const support = supportPackages.find(s => s.id === formData.supportPackage);
    const supportPrice = support ? support.price : 0;

    return basePrice + featuresPrice + logoPrice + supportPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="text-center py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Layihə Qiymət Kalkulyatoru
        </h1>
        <p className="text-slate-300 mb-6">
          Ehtiyaclarınıza uyğun dəqiq qiymət hesablayın
        </p>
        
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold mb-8">
          🤖 AI Köməkçini Sına
        </button>

        {/* Steps */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                currentStep >= step.id ? 'bg-purple-600 border-purple-600' : 'border-slate-600 bg-slate-800'
              }`}>
                <span className="text-sm">{step.id}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 ${currentStep > step.id ? 'bg-purple-600' : 'bg-slate-600'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Service Types */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Xidmət Növü
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceTypes.map(service => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceChange(service.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.serviceType === service.id
                        ? 'border-purple-500 bg-purple-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <span className="font-semibold">{service.name}</span>
                      </div>
                      <span className="text-green-400 font-bold">₼{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Features */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">📱</span>
                Mobil Tətbiq Əlavələri
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {mobileFeatures.map(feature => (
                  <div
                    key={feature.id}
                    onClick={() => handleFeatureToggle('mobileFeatures', feature.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.mobileFeatures.includes(feature.id)
                        ? 'border-green-500 bg-green-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mr-2">{feature.icon}</span>
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                      <span className="text-green-400 text-sm font-bold">+₼{feature.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Features */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">🔍</span>
                Axtarış Motorunun Optimallaşdırılması (SEO)
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {seoFeatures.map(feature => (
                  <div
                    key={feature.id}
                    onClick={() => handleFeatureToggle('seoFeatures', feature.id)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.seoFeatures.includes(feature.id)
                        ? 'border-blue-500 bg-blue-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mr-2">{feature.icon}</span>
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                      <span className="text-blue-400 text-sm font-bold">+₼{feature.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo Design */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎨</span>
                Logo Dizaynı
              </h3>
              <div className="space-y-3">
                {logoOptions.map(logo => (
                  <div
                    key={logo.id}
                    onClick={() => handleSingleSelect('logoType', logo.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.logoType === logo.id
                        ? 'border-purple-500 bg-purple-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded mr-3 ${logo.color}`}></div>
                        <span className="font-medium">{logo.name}</span>
                      </div>
                      <span className="text-purple-400 font-bold">+₼{logo.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Time */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">⏰</span>
                Təslim Müddəti
              </h3>
              <div className="space-y-3">
                {deliveryOptions.map(delivery => (
                  <div
                    key={delivery.id}
                    onClick={() => handleSingleSelect('deliveryTime', delivery.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.deliveryTime === delivery.id
                        ? 'border-orange-500 bg-orange-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded mr-3 ${delivery.color}`}></div>
                        <span className="font-medium">{delivery.name}</span>
                      </div>
                      <span className="text-orange-400 text-sm">
                        {delivery.multiplier > 1 ? `+${Math.round((delivery.multiplier - 1) * 100)}%` : 
                         delivery.multiplier < 1 ? `-${Math.round((1 - delivery.multiplier) * 100)}%` : 
                         'Standart'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Package */}
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">🛡️</span>
                Dəstək Paketi
              </h3>
              <div className="space-y-3">
                {supportPackages.map(support => (
                  <div
                    key={support.id}
                    onClick={() => handleSingleSelect('supportPackage', support.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.supportPackage === support.id
                        ? 'border-green-500 bg-green-600/20'
                        : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded mr-3 ${support.color}`}></div>
                        <span className="font-medium">{support.name}</span>
                      </div>
                      <span className="text-green-400 font-bold">+₼{support.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700 sticky top-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">📊</span>
                Qiymət Xülasəsi
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Mobil Tətbiq</span>
                  <span className="text-white font-bold">₼3500</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Logo dizaynı</span>
                  <span className="text-green-400 font-bold">+₼200</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Müddət endirimı</span>
                  <span className="text-orange-400 font-bold">-₼1500</span>
                </div>

                <hr className="border-slate-600" />

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Ümumi Qiymət:</span>
                  <span className="text-green-400 font-bold">₼3100</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Alınacaqlar:</span>
                  <span className="text-red-400 font-bold">₼1100</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Məbləğ:</span>
                  <span className="text-red-400 font-bold">₼100</span>
                </div>

                <hr className="border-slate-600" />

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-300">Cəmi:</span>
                  <span className="text-red-400 font-bold">₼4550</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-2">
                  👥 {totalPrice.toLocaleString()}
                </div>
                <div className="text-slate-400 text-sm">ÖDV daxil deyil</div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl font-bold text-lg mb-4">
                🤖 Pulsuz Konsultasiya Al
              </button>

              <button className="w-full bg-slate-700 hover:bg-slate-600 py-3 rounded-xl font-medium transition-colors">
                📄 PDF Yüklə
              </button>

              <div className="text-center text-xs text-slate-400 mt-4">
                Ayrıca Şərait və Çatdırımlar
              </div>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold text-sm mb-1">Sürətli Təslim</div>
                <div className="text-xs text-slate-400">Layihələri vaxtında və keyfiyyətlə təhvil veririk</div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl mb-2">💎</div>
                <div className="font-bold text-sm mb-1">Premium Keyfiyyət</div>
                <div className="text-xs text-slate-400">20 illık təcrübə ilə mükəmməl həllər</div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-bold text-sm mb-1">Ömürlük Dəstək</div>
                <div className="text-xs text-slate-400">Layihədən sonra da yanınızdayıq</div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-bold text-sm mb-1">Şəffaf Qiymət</div>
                <div className="text-xs text-slate-400">Gizli xərclər yoxdur, hər şey aydındır</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-colors">
          💬
        </button>
      </div>
    </div>
  );
};

export default ManualCalculator;