import React, { useState } from 'react';
import { Server, Cpu, HardDrive, MemoryStick as Memory, Shield, Clock, ChevronDown, ChevronUp, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

function VPS() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const vpsSpecs = [
    { icon: Cpu, label: 'CPU', value: '2x GB', unit: 'vCPU' },
    { icon: Memory, label: 'RAM', value: '2 GB', unit: 'DDR4' },
    { icon: HardDrive, label: 'Storage', value: '1 GB', unit: 'NVMe SSD' },
    { icon: Shield, label: 'Control Panel', value: '3 let bil', unit: 'cPanel' },
    { icon: Clock, label: 'Backup', value: '2 TB', unit: 'Daily' },
    { icon: Server, label: 'Network', value: '1 Gbit', unit: 'Uplink' }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      diskSpace: '40 GB',
      cores: '2 Core',
      operatingSystem: 'CentOS',
      bandwidth: '1 TB',
      price: '42₼',
      popular: false
    },
    {
      name: 'Standard',
      diskSpace: '100 GB',
      cores: '3 Core',
      operatingSystem: 'Ubuntu',
      bandwidth: '1 TB',
      price: '64₼',
      popular: true
    },
    {
      name: 'Premium',
      diskSpace: '240 GB',
      cores: '4 Core',
      operatingSystem: 'Windows',
      bandwidth: '1 TB',
      price: '82₼',
      popular: false
    }
  ];

  const faqData = [
    {
      question: 'Virtual özəl Server (VPS) nədir?',
      answer: 'VPS (Virtual Private Server) fiziki serverin virtualizasiya texnologiyası ilə bölünməsindən əmələ gələn virtual serverdir. Hər bir VPS öz resursları və əməliyyat sistemini təmin edir.'
    },
    {
      question: 'VPS nece işleyir?',
      answer: 'VPS hypervisor texnologiyasından istifadə edərək fiziki serveri bir neçə virtual servere bölür. Hər bir virtual server müstəqil şəkildə işləyir və öz resurslarına sahibdir.'
    },
    {
      question: 'VPS hansı üstünlük təmin edir bizə?',
      answer: 'VPS sizə dedicated server performansını shared hosting qiymətinə təklif edir. Tam root giriş, elastik resurs idarəetmə və yüksək performans əldə edirsiniz.'
    },
    {
      question: 'VPS də hansı əməliyyat sistemləri təklif edilir bizə?',
      answer: 'Biz CentOS, Ubuntu, Debian, Windows Server və digər məşhur əməliyyat sistemlərini dəstəkləyirik. İstədiyiniz əməliyyat sistemini seçə bilərsiniz.'
    },
    {
      question: 'VPS sifarişi nece edilir?',
      answer: 'Sadəcə olaraq istədiyiniz planı seçin, ödənişi həyata keçirin və bir neçə dəqiqə ərzində VPS hazır olacaq. Avtomatik quraşdırma sistemi mövcuddur.'
    },
    {
      question: 'VPS resurslarını təkmilləşdirmək mümkündür?',
      answer: 'Bəli, istənilən vaxt VPS resurslarınızı artıra və ya azalda bilərsiniz. Bu proses bir neçə dəqiqə ərzində tamamlanır.'
    },
    {
      question: 'VPS də əlavə hosting xidmətləri fərq edirmi?',
      answer: 'VPS tam nəzarət və elastiklik təmin edir. Shared hosting-dən fərqli olaraq, öz server mühitinizi idarə edə bilərsiniz.'
    },
    {
      question: 'VPS hosting yenə təhlükəsizdir? Qoşa qorunmasındır?',
      answer: 'Bəli, bütün VPS serverlər firewall, DDoS qorunması və müntəzəm backup-larla təmin edilir. 24/7 monitoring mövcuddur.'
    },
    {
      question: 'VPS də backup nece işləyir təkmilləşdirilir?',
      answer: 'Avtomatik gündəlik backup-lar həyata keçirilir. İstədiyiniz vaxt manual backup yarada və bərpa edə bilərsiniz.'
    },
    {
      question: 'VPS təşəkkürün texnologiyası nə ilə fərqlənir?',
      answer: 'Biz ən son KVM virtualizasiya texnologiyasından istifadə edirik ki, maksimum performans və təhlükəsizlik təmin edək.'
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: 'Kiber Təhlükəsizlik və Şəxsi Məlumatların Müdafiəsi',
      excerpt: 'Günümüzdə kiber təhlükələr artdıqca şəxsi məlumatların qorunması daha da vacib olur.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '15 Noy 2024',
      category: 'Təhlükəsizlik'
    },
    {
      id: 2,
      title: 'Veb Sayt Hosting Seçimində Nəzərə Alınacaq Amillər',
      excerpt: 'Doğru hosting seçimi veb saytınızın performansı üçün çox vacibdir.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '12 Noy 2024',
      category: 'Hosting'
    },
    {
      id: 3,
      title: 'VPS Hosting ilə Performans Artırma',
      excerpt: 'VPS hosting sayəsində veb saytınızın sürətini və performansını artıra bilərsiniz.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '10 Noy 2024',
      category: 'VPS'
    },
    {
      id: 4,
      title: 'Web Saytınızın Güvənliyini Artırmaq üçün Tövsiyələr',
      excerpt: 'SSL sertifikatları və güvənlik tədbirləri haqqında ətraflı məlumat.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '08 Noy 2024',
      category: 'Təhlükəsizlik'
    },
    {
      id: 5,
      title: 'Cloud Hosting vs VPS: Hansını Seçməlisiniz?',
      excerpt: 'Cloud hosting və VPS arasındakı fərqləri və hansının sizin üçün uyğun olduğunu öyrənin.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '05 Noy 2024',
      category: 'Hosting'
    },
    {
      id: 6,
      title: 'Server İdarəetmə və Monitoring Təcrübələri',
      excerpt: 'Serverinizi effektiv şəkildə idarə etmək və monitor etmək üçün ən yaxşı təcrübələr.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '02 Noy 2024',
      category: 'Server'
    },
    {
      id: 7,
      title: 'E-ticarət Saytları üçün Hosting Seçimi',
      excerpt: 'E-ticarət saytınız üçün ən uyğun hosting həllini necə seçəcəyinizi öyrənin.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '30 Okt 2024',
      category: 'E-ticarət'
    },
    {
      id: 8,
      title: 'Backup Strategiyaları və Data Qorunması',
      excerpt: 'Məlumatlarınızı qorumaq üçün effektiv backup strategiyaları.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '28 Okt 2024',
      category: 'Backup'
    },
    {
      id: 9,
      title: 'Mobile-Friendly Sayt Dizaynının Əhəmiyyəti',
      excerpt: 'Mobil cihazlar üçün optimallaşdırılmış sayt dizaynının faydaları.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '25 Okt 2024',
      category: 'Dizayn'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t('vps_title')}
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('vps_subtitle')}
            </p>
          </div>

          {/* VPS Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vpsSpecs.map((spec, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <spec.icon className="h-8 w-8 text-violet-400" />
                  <span className="text-2xl font-bold text-white">{spec.value}</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-1">{spec.label}</h3>
                  <p className="text-slate-400 text-sm">{spec.unit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-3xl font-bold mr-4 text-violet-400">{t('vps_price')}</span>
              <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
                {t('vps_select')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t('vps_plans_title')}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('vps_plans_subtitle')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-700">
            <table className="w-full bg-slate-800/50 backdrop-blur-sm">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-white">Plan</th>
                  <th className="px-6 py-4 text-left font-semibold text-white">Disk Həcmi</th>
                  <th className="px-6 py-4 text-left font-semibold text-white">vCPU</th>
                  <th className="px-6 py-4 text-left font-semibold text-white">Əməliyyat sistemi</th>
                  <th className="px-6 py-4 text-left font-semibold text-white">Traffic</th>
                  <th className="px-6 py-4 text-left font-semibold text-white">Qiymət</th>
                  <th className="px-6 py-4 text-center font-semibold text-white">Seçim</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan, index) => (
                  <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold text-white">{plan.name}</td>
                    <td className="px-6 py-4 text-slate-300">{plan.diskSpace}</td>
                    <td className="px-6 py-4 text-slate-300">{plan.cores}</td>
                    <td className="px-6 py-4 text-slate-300">{plan.operatingSystem}</td>
                    <td className="px-6 py-4 text-slate-300">{plan.bandwidth}</td>
                    <td className="px-6 py-4 font-bold text-violet-400">{plan.price}</td>
                    <td className="px-6 py-4 text-center">
                      <button className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                        plan.popular
                          ? 'bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white shadow-lg' 
                          : 'bg-slate-600 hover:bg-slate-500 text-white'
                      }`}>
                        Seç
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-900/20 to-slate-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {t('vps_contact_title')}
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('vps_contact_subtitle')}
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
            <Phone className="h-5 w-5 mr-2" />
            {t('vps_contact_button')}
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t('vps_faq_title')}
            </h2>
            <p className="text-xl text-slate-400">
              {t('vps_faq_subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-colors duration-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-white pr-4">{index + 1}. {faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-violet-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-violet-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-slate-300 leading-relaxed animate-in slide-in-from-top duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {t('vps_blog_title')}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('vps_blog_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <article key={article.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-violet-600 rounded-full text-sm font-medium text-white">
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white leading-tight">{article.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <button className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium">
                    Daha çox oxu
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
              {t('vps_all_articles')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VPS;