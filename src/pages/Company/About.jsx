import React from 'react';
import { MessageCircle, Users, BarChart3, Award, Star, Play } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-8 border border-blue-500/30">
            <Award className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm">Keyfiyyətlilik</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Veb Dizaynda Keyfiyyətin Unvanı
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Hər dizayn daha məna kəsb edən almətlərimiz kimi dəqiq.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl transform hover:scale-105">
              Başlayın
            </button>
            <button className="bg-transparent border-2 border-gray-600 hover:border-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Portfolio
            </button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-blue-400 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-400">Team Working Together</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-8 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Həmrəylik
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            20 ildir sizin onlayn uğurunuz üçün çalışırıq
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Sayt.az - Azərbaycanın ənən veb dizayn studiyası. Daha keçfli digər müqayisə olunar. Saytlar, logo, mobil tətbiqlər və rəqəmsal marketinq sahəsində mütəxəssislik qazanmışdır və hörmətli müştərilərimiz üçürətdə işləmək etirar.
            </p>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Təcrübə sahibi komandamız veb səhifə dizaynı, e-ticarət həlləri, korporativ kimliklərin işlənməsi və rəqəmsal marketinq sahələrində peşəkar xidmətlər təklif edir. 20 ildən artıq təcrübə və pəsləkar şəhər olunmuş komandanın və təhlifçidir daxil göstərilən və multidimensiasıl bazar üçürətdə dizayn marcanın və təcrübə əsasında işləyir.
            </p>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Bizim məqsədimiz sadəcə görkəm yaratmaq deyil, həm də funksionallıq təqdim etmək və müştərilərimizin işini inkişaf etdirməkdir. Keyfiyyətli işlərlə müştərilərin etimadını qazanmaq və ən məhsulları verəşdirmə işləmək bizim əsas hədəfimizdir.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Kombinasiyaların və xidmətlər:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Korporativ veb sayt dizaynı
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    E-ticarət dükanları
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Logo və brendinq
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Mobil tətbiq dizaynı
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    Veb səhifə yeniləmələri və təkmilləşdirmə
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    SEO və optimallaşma
                  </li>
                </ul>
              </div>
              
              <div className="text-gray-300">
                <p className="mb-4">
                  2004-cü ildən bu yanə yüzlərlə müştərimizin rəqəmsal hüquq uğur qazanmağa kömək etmişik. Bizim üçün hər layihə unikal və fərqlidir. Müştəri tələbləri əsas tələsində artırılaraq hər layihə üzərində fərdi yanaşma nümayiş etdirməklə çalışıram.
                </p>
                
                <p>
                  Sayt.az olaraq bizim məsluh edirillər və sənədqəsdirməklə bilməzlədə vurağı olaraq müştərilərimizin rəqəmsal mühitdə güclü mövqe tutmalarını təmin etmək üçün tərəqdən təcrübə nümayış etdirməklə əslimizdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6 border border-blue-500/30">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm">Statistikalarmız</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Statistikalarımız</h2>
          <p className="text-gray-400">Uğurumuzdan Rəqəmlər Haqda</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Layihə</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">20+</div>
            <div className="text-gray-300">İl Təcrübə</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-gray-300">Müştəri Məmnuniyyəti</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Dəstək</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 mb-6 border border-blue-500/30">
            <Users className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm">Komandamız</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Komandamızın Peşəkar Arxası</h2>
          <p className="text-gray-400">Komandamızda Hər Üçür</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Kamil Mirzəyev</h3>
            <p className="text-gray-400 text-sm">CEO</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Ruslan Abdullazov</h3>
            <p className="text-gray-400 text-sm">Proqramçı</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Ahmad Rəhimov</h3>
            <p className="text-gray-400 text-sm">Dizayner</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Mikayıl Ağabəyov</h3>
            <p className="text-gray-400 text-sm">SMM</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fuad Məmmədov</h3>
            <p className="text-gray-400 text-sm">Backend</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Murtaza Fəndəyli</h3>
            <p className="text-gray-400 text-sm">Frontend</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Malik Məhərrəmov</h3>
            <p className="text-gray-400 text-sm">UI/UX</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Səbə Oləşov</h3>
            <p className="text-gray-400 text-sm">QA</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Users className="w-12 h-12" />
          </div>
          <h3 className="font-semibold text-xl mb-2">Məhsoul M.</h3>
          <p className="text-gray-400">Product Manager</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Rəqəmsal Komandamızla Önədən
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Komandamızla Çalışan Onların Rəğbəti və Professional olunma kənlığı
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl transform hover:scale-105">
              İndi Başlayalım
            </button>
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