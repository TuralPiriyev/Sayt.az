import React from 'react';
import { Check, MessageCircle, Send } from 'lucide-react';

export default function SocialMediaMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Social Media Marketing (SMM) Xidməti
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Instagram və Facebook reklamları, sosial media idarəetmə və SMM strategiya.
            Targeting, kontent hazırlanması və influencer marketing xidmətləri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105">
              Başlayın
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-gray-600">
              Portfolio Baxın
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-teal-400 mb-2">400+</div>
            <div className="text-gray-300 text-sm">SMM Kampaniya</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
            <div className="text-gray-300 text-sm">Əhatə</div>
            <div className="text-xs text-gray-400 mt-1">Reach</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">5x</div>
            <div className="text-gray-300 text-sm">Engagement</div>
            <div className="text-xs text-gray-400 mt-1">Engagement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">Gündəlik</div>
            <div className="text-gray-300 text-sm">İdarəetmə</div>
            <div className="text-xs text-gray-400 mt-1">Support</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Əsas Xüsusiyyətlər</h2>
          <p className="text-gray-400">Uğur üçün lazım olan hər şey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Instagram və Facebook Marketing</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">LinkedIn B2B SMM Xidməti</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Kontent Hazırlanması və Post Dizaynı</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Instagram və Facebook Targeting</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Influencer Marketing Koordinasiyası</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">SMM Analitika və Hesabat</h3>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Niyə Bizim Halları Seçməlisiz?
            </h2>
            <p className="text-gray-400 mb-8">
              Sabitliyə vurğu edən geniş və hər kütləvi keçmiş etdirlik
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Sabitə xususi təcrübə və əlli rəsli praktikalar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Yerli və qlobal üçün SEO optimallaşdırılmış</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Azərbaycan dilinə 24/7 texniki dəstək</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Standart layihələr üçün əş həftərə qürünlü təslim</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">İlk ay gün pulsuz hosting</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Ömürlük yenilənməz və təmizi xidmət imkanları</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">100% responsiv və mobil uyğun</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Məxsusi istifadəçinin integratsiya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Send className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Layihənizi Başlatmağa Hazırsınız?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Bu gün sizə sayt layihəsi üçün pulsuz konsultasiya və əşxsili ölən
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl transform hover:scale-105">
                Pulsuz Konsultasiya Alın
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Komandamızla Əlaqə
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}