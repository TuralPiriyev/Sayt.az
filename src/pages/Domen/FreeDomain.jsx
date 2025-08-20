import React, { useState } from 'react';
import { Search, Check, ChevronDown, ChevronUp, MessageCircle, Calendar, User, Tag, ArrowRight, Globe, Shield, Zap, Users, Award, TrendingUp, Eye, BarChart3 } from 'lucide-react';

const FreeDomen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('.site.az');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const domainExtensions = ['.site.az', '.az', '.com', '.net', '.org'];

  const faqData = [
    {
      id: 1,
      question: "Pulsuz domen qeydiyyatı üçün hansı domen sonluqları mövcuddur?",
      answer: "Biz .site.az, .az, .com və digər məşhur domen sonluqlarında pulsuz qeydiyyat imkanı təklif edirik. Hər bir sonluğun öz xüsusiyyətləri və şərtləri var."
    },
    {
      id: 2, 
      question: "Seçə biləcəyim domen adlarında hər hansı məhdudiyyətlər var?",
      answer: "Domen adları 3-63 simvol arasında olmalı, yalnız hərf, rəqəm və tire (-) simvolu daxil edə bilər. Həmçinin artıq qeydiyyatdan keçmiş adları seçə bilməzsiniz."
    },
    {
      id: 3,
      question: "Pulsuz domen adını necə qədər saxlaya bilərəm?",
      answer: "Pulsuz domen adı ilk il üçün tamamilə pulsuzdur. İkinci ildən etibarən standart qiymətlərlə yenilənə bilər."
    },
    {
      id: 4,
      question: "Pulsuz domen adının müddəti bitdikdən sonra yenilənməsə, nə olacaq?",
      answer: "Müddəti bitən domen adları 30 günlük grace period müddətində yenilənə bilər. Bu müddətdən sonra domen azad edilir və hər kəs tərəfindən qeydiyyata alına bilər."
    },
    {
      id: 5,
      question: "Pulsuz domen adını digər sayta ya da başqasına vermək olarmı?",
      answer: "Bəli, domen transfer prosesi ilə domen adını digər qeydiyyatçıya və ya digər şəxsə ötürə bilərsiniz. Bu proses üçün müəyyən şərtlər tətbiq edilir."
    },
    {
      id: 6,
      question: "Domen adları üçün hər hansı texniki məhdudiyyətlər var?",
      answer: "Texniki cəhətdən heç bir məhdudiyyət yoxdur. DNS idarəetmə, subdomen yaradılması və digər xidmətlərdən tam istifadə edə bilərsiniz."
    },
    {
      id: 7,
      question: "Nə qədər pulsuz domen adı qeydə ala bilərəm?",
      answer: "Hər bir istifadəçi maksimum 3 pulsuz domen adı qeydiyyatdan keçirə bilər. Bu məhdudiyyət spam və sui-istifadənin qarşısını almaq üçündür."
    },
    {
      id: 8,
      question: "Xidmət şərtlərini pozarsam, nə baş verər?",
      answer: "Xidmət şərtlərini pozduğunuz təqdirdə domen adınız müvəqqəti və ya daimi olaraq dayandırıla bilər. Ciddi pozuntular halında hesabınız bağlana bilər."
    },
    {
      id: 9,
      question: "Pulsuz domen adını hər cür veb sayt məzmunu üçün istifadə edə bilərəmmi?",
      answer: "Yox, qanunsuz, zərərli və ya etik olmayan məzmun üçün istifadə etmək qadağandır. Məzmunun bizim istifadə şərtlərimizə uyğun olması vacibdir."
    },
    {
      id: 10,
      question: "Pulsuz domen xidməti üçün texniki dəstək mövcuddurmu?",
      answer: "Bəli, bütün istifadəçilər üçün 24/7 texniki dəstək mövcuddur. Email, canlı söhbət və telefon vasitəsilə bizimlə əlaqə saxlaya bilərsiniz."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Müvəffəqiyyətli İstifadə",
      description: "Minlərlə şirkət artıq xidmətdən istifadə edərək uğur qazanıb, güvənilir həll tələb edən sahib olun."
    },
    {
      icon: Shield, 
      title: "Risk Olmadan Prototipləşdirmə",
      description: "Maliyyə risklər olmadan özünüzün həm yayımlayı çox şirkət vaxta mahduda dəstə axirinci sıra həmişə."
    },
    {
      icon: TrendingUp,
      title: "Sürətli Onlayn Mövcudluq",
      description: "Səriştəli yardım və sürətli onlayn mövcudluq təmin edərək biznesə və yoxlamalığa sahibkarlıq biznesi."
    },
    {
      icon: Zap,
      title: "İnnovasiyayı Təşviq Edir",
      description: "Biznes sahib olmağın hər yeni həllər ilə innovasiya və vα təmsilə qarmağında təşviq edən."
    },
    {
      icon: BarChart3,
      title: "Dərhal Aktivləşdirilmə",
      description: "Domen aktivləşdirilməsi sürəti gəldi və saat qeydiyyali portal sonra etdə."
    }
  ];

  const featureList = [
    {
      title: "Startuplar və Kiçik Biznes Sahibləri:",
      description: "Yeni biznes ideyalarını test etmək və ilk müştərə bazasını qurma işinə yönlendirici yardımçılar sistemləri ilə başlamaq."
    },
    {
      title: "Freelancerlər və Fərdi Sahibkarlar:",
      description: "Pulsuz domenləri frilanserlər və şəxslərində ayrılıqlı sərbərəst olaraq biznesin onlayn varlığını yaratmaq və müştəri həyatından alınan yorumları hərtərəfli kənnən."
    },
    {
      title: "Şəxsi və Hobbi Layihələri:",
      description: "Şəxsi bloqlar, portfolyolar, kiçik tanıdıq sahib domen sayəsində məqalələrü şəxsölün və şəxsilətündən təxəllüs edən kimin bilməsi bulunur."
    },
    {
      title: "Qeyri-Kommersiya Təşkilatları:",
      description: "Qeyri-kommersiya və təbliğat təşkilatlarına pulsuz domen adları təqdim edir və bədəvəylarinin gərizmdə və ictimaiyyətə arxayı uçdu."
    },
    {
      title: "Tələbələr və Təhsil Mütəxəssisləri:",
      description: "Proqramlaşdırma və təhsil mütəxəssisləri dərs təbliği, tarihşünas və tədris fəal onlayn təcrubələrdə yaşanmış təğlil məsələ olan bizin."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Biznes Hostingin Ustunluklari ve İstifadəsi",
      excerpt: "Biznes hostingin əsas üstünlükləri və şirkətiniz üçün ən yaxşı seçimlər haqqında məlumat.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Mar 7, 2024",
      category: "Hosting",
      tags: ["Biznes", "Hosting"]
    },
    {
      id: 2,
      title: "Kiber Təhlükəsizlik: Verilənlər Şəxsi Məlumatların Qorunması Üçün",
      excerpt: "Şəxsi məlumatların qorunması və kiber təhdidlərdən qorunmaq üçün əsas strategiyalar.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400", 
      date: "Mar 5, 2024",
      category: "Təhlükəsizlik",
      tags: ["Kiber təhlükəsizlik", "Qoruma"]
    },
    {
      id: 3,
      title: "Freelance İs Tapə Biləcəyiniz Top 5 Sayt",
      excerpt: "Freelance işləri tapmaq üçün ən yaxşı platformlar və onların üstünlükləri haqqında məlumat.",
      image: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Mar 3, 2024", 
      category: "Karriera",
      tags: ["İş tapmaq", "Freelance"]
    },
    {
      id: 4,
      title: "SWOT Analizi Nedir?",
      excerpt: "SWOT analizinin biznes planlamasında rolu və düzgün tətbiqi haqqında ətraflı məlumat.",
      image: "https://images.pexels.com/photos/7947662/pexels-photo-7947662.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Mar 2, 2024",
      category: "Biznes strategiyası", 
      tags: ["Analiz", "Strategiya"]
    },
    {
      id: 5,
      title: "SEO Strategiyaları ilə Müştəri Elde Etməyin Yolları",
      excerpt: "Effektiv SEO strategiyaları ilə veb saytınızın görünürlüyünü artırın və daha çox müştəri əldə edin.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Feb 28, 2024",
      category: "SEO strategiyası",
      tags: ["SEO", "Marketing"]
    },
    {
      id: 6,
      title: "Metaverse-in İnkişafı və gələcəkdə bu yeni dünyada nəcə mövcudluğu?",
      excerpt: "Metaverse texnologiyasının inkişafı və gələcək iş imkanları haqqında",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Feb 26, 2024", 
      category: "Texnologiya",
      tags: ["Metaverse", "Gələcək"]
    },
    {
      id: 7,
      title: "Yeni Başlayanlar üçün Web Sayt Hostinginin Seçimlər",
      excerpt: "Web sayt hostingi seçimində diqqət edilməli məsələlər və yeni başlayanlar üçün tövsiyələr.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Feb 24, 2024",
      category: "Web hosting",
      tags: ["Hosting", "Başlanğıc"]
    },
    {
      id: 8,
      title: "UX Dizaynda Minimalizm: Az Daha Çoxdur Prinsipi Necə Həyata Keçirilir?",
      excerpt: "UX dizaynda minimalist yanaşmaları tətbiq etməyin yolları və faydaları",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400", 
      date: "Feb 22, 2024",
      category: "UX Dizayn", 
      tags: ["Dizayn", "UX"]
    },
    {
      id: 9,
      title: "Vebsayt Yükleme Sürətini Artırımağın 10 Yolu",
      excerpt: "Web saytınızın performansını artırmaq və yükleme sürətini optimallaşdırmaq üçün praktik yollar.",
      image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Feb 20, 2024", 
      category: "Web inkişaf",
      tags: ["Performance", "Optimizasiya"]
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'with extension:', selectedExtension);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-600/20 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Pulsuz Domain Seçmə</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pulsuz Domen Qeydiyyatı
              <br />
              <span className="text-blue-400">.site.az</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Domen adı mühəm seçimdir üçün şəxsədəd şirkət varmadlası hərkasın texnika serbexlrının artırılmasına domen adları sistində ənlaki adın şəkildə imkan verir uylqun domen adını tapın və uğurdan təmnamini.
            </p>
          </div>

          {/* Domain Search */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Axtardığınız domen adını daxil edin"
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div className="md:w-48">
                  <select
                    value={selectedExtension}
                    onChange={(e) => setSelectedExtension(e.target.value)}
                    className="w-full py-4 px-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {domainExtensions.map((ext) => (
                      <option key={ext} value={ext} className="bg-slate-800">
                        {ext}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Axtar
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pulsuz Domenləri Niyə Seçməli?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The free domain name registration for the first year is included in our annual Premium and Business plans. Claim yours today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Səmərəli Həll</h3>
                <p className="text-gray-300">
                  Pulsuz domen sayəsində ilk verilər təlim etdirən deşlər, bu, istantizor, layh kimin sə möhkəm dəyişik sosial şəxslə və saatlar.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ölçətanilməq</h3>
                <p className="text-gray-300">
                  Layihələr ilkin qədər yaşarığı zaman əlçıldmqla və inçixlək layihələrinin sahiblik təmin edə mütləzmi mədur çipplərində məydan.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Prototipləşdirmə</h3>
                <p className="text-gray-300">
                  Web layihə sayəsində və özləndiy kədələn yenqsliyyətiyə pulsuz domen mükammələnsin razı olarıq rab uzun varqıl xar rab birkəşənlik ala çözdər.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">İstifadəçilər Üçün Asən Giriş</h3>
                <p className="text-gray-300">
                  Web-sayt yenimisəb və daha əsizlan üçün pulsuz idanan yəmi və kimsənə və tutə cixmak üçək, kimsələr əə vadə müxtəlif de konuşlır və rab yekə yaşar.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Çeviklik</h3>
                <p className="text-gray-300">
                  Pulsuz domenləri, biznel çox gözlənili və və təkilin dinəməz çətimik gələcələrə aladsarda artırmangdıqca işləri ala və yerqıylı güclü arlaşdırıcı acarıq üçün dəl priyəti ülən.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-900 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">Free Domain Registration</h4>
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Domain</span>
                      <span className="text-green-400 font-semibold">FREE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">SSL Certificate</span>
                      <span className="text-green-400 font-semibold">FREE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">DNS Management</span>
                      <span className="text-green-400 font-semibold">FREE</span>
                    </div>
                    <div className="border-t border-slate-700 pt-3 mt-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                        Başlamaq
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Free Domain Registration"
                className="absolute -bottom-6 -right-6 w-48 h-32 object-cover rounded-xl border-4 border-slate-700"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-800/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Pulsuz Domen Adlarından<br />
                Kimlər Faydalana Bilər?
              </h2>
              
              <div className="space-y-6">
                {featureList.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Domain Benefits"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pulsuz Domen Haqqında Tez-tez Verilən Suallar
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pulsuz Domen haqqında ən çox soruşulan sualların cavabları
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-800/50 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                        {faq.id}
                      </span>
                      <span className="text-white font-medium">{faq.question}</span>
                    </span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-5">
                      <div className="pl-11">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Artıq domeniniz var? Sayt.az ilə ərzу etdiyiniz saytı<br />
              dizayn edin və qurun
            </h2>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              İndi Başla
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-600/20 rounded-full px-4 py-2 mb-6">
              <Eye className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Blog & İnsights</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Blogumuza daxil olun
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Vebin Yönləndik Dizayn və Onlayn Strategiyaların ilə bağlı məqalələr kəşfli edin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>Sayt yaradanları</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-lg text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Bütün Bloglar
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-600/20 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Blog & İnsights</span>
            </div>
            <p className="text-gray-400">
              © 2024 FreeDomen. Bütün hüquqlar qorunur.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreeDomen;