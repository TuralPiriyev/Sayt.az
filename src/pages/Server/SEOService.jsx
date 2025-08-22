import React, { useState } from 'react';

const SEOServicesPage = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const stats = [
    { number: '500+', label: 'SEO Layihə', sublabel: 'Projects' },
    { number: '95%', label: 'Top 10 Reyting', sublabel: 'Rankings' },
    { number: '3x', label: 'Trafik Artımı', sublabel: 'Traffic' },
    { number: '24/7', label: 'SEO Dəstək', sublabel: 'Support' }
  ];

  const services = [
    {
      title: 'Ətraflı SEO Audit və Analiz',
      description: 'Veb saytınızın mövcud vəziyyətini ətraflı analiz edirik',
      icon: '🔍'
    },
    {
      title: 'Açar Söz Araşdırması və SEO Strategiya',
      description: 'Ən effektiv açar sözləri müəyyən edirik',
      icon: '📊'
    },
    {
      title: 'On-Page və Texniki SEO Optimallaşdırma',
      description: 'Saytınızın texniki performansını artırırıq',
      icon: '⚙️'
    },
    {
      title: 'Keyfiyyətli Backlink və Off-Page SEO',
      description: 'Güclü link profili yaradırıq',
      icon: '🔗'
    },
    {
      title: 'Azərbaycan üçün Local SEO Xidməti',
      description: 'Yerli axtarışlarda üstünlük qazanın',
      icon: '📍'
    },
    {
      title: 'Aylıq SEO Hesabat və Google Analytics',
      description: 'Nəticələri şəffaf şəkildə izləyin',
      icon: '📈'
    }
  ];

  const whyChooseUs = [
    'Sahəyə xüsusi təcrübə və yüzlərlə praktik layihə',
    'Veb və qlobal üçün SEO optimallaşdırma üçün',
    'Azərbaycan dilində 24/7 texniki dəstək',
    'Standart tiplərdən üçün 2 həftəlik sürətli cavab',
    'Ük və çevik paketlər hosting',
    'Ömürlük yeniliklər və texniki xidmət təminatı',
    '100% responsive və mobil uyğun',
    'Mövcud sistemlərlə inteqrasiya'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            SEO Xidməti və Axtarış Optimizasiyası
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional SEO xidməti ilə saytınızı Google-də ön sıralara çıxarın. Axtarış 
            sistemlərində optimizasiya, açar söz araşdırması və organik trafik artımı.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Başlayın
            </button>
            <button className="bg-transparent border border-slate-400 hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Portfolio Baxın
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur rounded-xl p-6 border border-slate-700">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Əsas Xüsusiyyətlər
          </h2>
          <p className="text-xl text-slate-300">
            Uğur üçün bizim olan hər şey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Niyə Bizim Həlləri Seçməlisiniz?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Azərbaycan üçün uyğun və yüksək keyfiyyətli xidmət
            </p>

            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  SEO Nəticələriniz
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Organik Trafik</span>
                    <span className="text-green-400 font-bold">+300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Açar Söz Reytinqi</span>
                    <span className="text-blue-400 font-bold">Top 3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Konversiya</span>
                    <span className="text-purple-400 font-bold">+150%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layihənizi Başlatmağa Hazırsınız?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Bu gün veb sayt layihənizi üçün pulsuz konsultasiya və ya təklif alın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactModal(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Pulsuz Konsultasiya Alın
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Komandamızla Əlaqə
              </button>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full animate-pulse"
                  style={{
                    width: Math.random() * 100 + 20 + 'px',
                    height: Math.random() * 100 + 20 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 3 + 's'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.515"/>
          </svg>
        </button>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Əlaqə</h3>
              <p className="text-slate-300">Layihəniz haqqında danışaq</p>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ad və soyadınız"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="E-mail ünvanınız"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Layihəniz haqqında qısa məlumat"
                rows="4"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 resize-none"
              />
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowContactModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 py-3 rounded-lg font-semibold transition-colors"
              >
                Ləğv et
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition-colors">
                Göndər
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOServicesPage;