import { Server, CheckCircle, Zap, Shield, Headphones, Monitor, Plus, Settings, BarChart3 } from 'lucide-react';

const HostingSidebar = () => {
  const hostingPlans = [
    {
      name: 'Başlanğıc',
      price: '5.99',
      originalPrice: '9.99',
      features: [
        '1 GB Disk sahəsi',
        '10 GB Aylıq trafik', 
        '1 Domain hosting',
        'cPanel idarəetmə paneli',
        'SSL sertifikat',
        'Email hesabları',
        '24/7 Dəstək'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Premium',
      price: '12.99',
      originalPrice: '19.99',
      features: [
        '10 GB Disk sahəsi',
        'Limitsiz trafik',
        '5 Domain hosting',
        'cPanel + Softaculous',
        'Pulsuz SSL',
        'Limitsiz email',
        'Günlük backup',
        'Prioritet dəstək'
      ],
      popular: true,
      color: 'green'
    },
    {
      name: 'Professional',
      price: '24.99',
      originalPrice: '39.99',
      features: [
        '50 GB Disk sahəsi',
        'Limitsiz trafik',
        'Limitsiz domain',
        'WordPress optimizasiya',
        'Pulsuz CDN',
        'SSD storage',
        'Malware təmizləmə',
        'Dedicated IP',
        'VIP dəstək'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const activeHosting = [
    {
      id: 1,
      domain: 'example.com',
      plan: 'Premium',
      status: 'Aktiv',
      expiry: '2024-12-15',
      usage: { disk: 45, bandwidth: 78 }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Web Hosting Xidmətləri</h2>
          <p className="text-blue-100 text-lg mb-6">Yüksək performanslı, etibarlı və sürətli web hosting həlləri</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">99.9% Uptime</span>
              </div>
              <p className="text-sm text-blue-100">Maksimum əlçatanlıq</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">SSL Pulsuz</span>
              </div>
              <p className="text-sm text-blue-100">Təhlükəsizlik təminatı</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Headphones className="w-5 h-5" />
                <span className="font-semibold">24/7 Dəstək</span>
              </div>
              <p className="text-sm text-blue-100">Daimi texniki dəstək</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hosting Plans */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Hosting Paketləri</h3>
          <p className="text-gray-600">Ehtiyacınıza uyğun paketi seçin və dərhal başlayın</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hostingPlans.map((plan, index) => (
            <div key={index} className={`relative border-2 rounded-2xl p-8 transition-all hover:shadow-lg ${
              plan.popular 
                ? 'border-green-500 ring-4 ring-green-100 transform scale-105' 
                : 'border-gray-200 hover:border-blue-300'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Ən Populyar
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <div className="text-left">
                      <div className="text-gray-500 line-through text-sm">${plan.originalPrice}</div>
                      <div className="text-gray-600 text-sm">/ay</div>
                    </div>
                  </div>
                  <div className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full inline-block">
                    %40 endirim
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.popular ? 'İndi sifariş et' : 'Paketi seç'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Hosting */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">Aktiv Hosting Paketləri</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Yeni paket</span>
            </button>
          </div>
        </div>
        
        {activeHosting.length > 0 ? (
          <div className="p-6">
            {activeHosting.map((hosting) => (
              <div key={hosting.id} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Server className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{hosting.domain}</h4>
                      <p className="text-sm text-gray-600">{hosting.plan} paket</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                      {hosting.status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Monitor className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <BarChart3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Disk istifadəsi</span>
                      <span className="font-semibold">{hosting.usage.disk}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: `${hosting.usage.disk}%`}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Bandwidth</span>
                      <span className="font-semibold">{hosting.usage.bandwidth}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: `${hosting.usage.bandwidth}%`}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Bitmə tarixi</span>
                    <span className="text-sm font-semibold text-gray-900">{hosting.expiry}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                    cPanel-ə keç
                  </button>
                  <button className="flex-1 bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors">
                    Fayl meneceri
                  </button>
                  <button className="flex-1 bg-purple-50 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors">
                    Yenilə
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <Server className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Hosting paketi yoxdur</h3>
            <p className="text-gray-600 mb-6">Hələ heç bir hosting paketi aktivləşdirilməyib</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              İlk paketinizi seçin
            </button>
          </div>
        )}
      </div>

      {/* Additional Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">SSL Sertifikat</h3>
          <p className="text-gray-600 text-sm mb-4">Saytınızı təhlükəsiz edin</p>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            Ətraflı →
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">CDN Xidməti</h3>
          <p className="text-gray-600 text-sm mb-4">Saytınızı sürətləndirin</p>
          <button className="text-green-600 text-sm font-medium hover:text-green-800">
            Ətraflı →
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Server className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Backup Xidməti</h3>
          <p className="text-gray-600 text-sm mb-4">Məlumatlarınızı qoruyun</p>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-800">
            Ətraflı →
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Monitor className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Website Builder</h3>
          <p className="text-gray-600 text-sm mb-4">Asanlıqla sayt yaradın</p>
          <button className="text-orange-600 text-sm font-medium hover:text-orange-800">
            Ətraflı →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostingSidebar;