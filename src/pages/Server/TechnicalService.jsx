import React from 'react';
import { Check, MessageCircle, Rocket } from 'lucide-react';

export default function TechnicalService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Sayt Texniki Xidmət və Dəstək
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Saytınıza 24/7 texniki dəstək xidməti. Təhlükəsizlik yeniləmələri, backup, sayt 
            sürətləndirmə və problem həlli ilə saytınız daim işlək vəziyyətdə.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105">
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
            <div className="text-3xl font-bold text-orange-400 mb-2">1000+</div>
            <div className="text-gray-300 text-sm">Sayt Dəstəyi</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Uptime</div>
            <div className="text-xs text-gray-400 mt-1">Response</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 1</div>
            <div className="text-gray-300 text-sm">Saat Cavab</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Texniki Dəstək</div>
            <div className="text-xs text-gray-400 mt-1">Support</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Əsas Xüsusiyyətlər</h2>
          <p className="text-gray-400">Uyğun üçün lazım olan hər şey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Təhlükəsizlik Yeniləmələri və Patch</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gündəlik Backup və Bərpa Xidməti</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Sayt Sürətləndirmə və Optimallaşdırma</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Uptime Monitoring və Xəbərdarlıq</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Bug Fix və Problem Həlli</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Kontent Yeniləmə və İdarəetmə</h3>
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
              Sabitliyə vurğu edən çata bilər keçmiş və tərtib edir
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
                  <p className="text-gray-300">İlk əý gün pulsuz hosting</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">Ömürlük yenilənməz və təmiri vədmət imkanları</p>
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
            <div className="bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-purple-600 rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Rocket className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Layihənizt Başlatmağa Hazırsınız?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Bu gün siz sayt layihəsi üçün pulsuz konsultasiya və sexd ölan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl transform hover:scale-105">
                Pulsuz Konsultasiya Alın
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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