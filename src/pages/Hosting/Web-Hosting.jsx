import React, { useState } from 'react';
import { Check, X, ChevronDown, MessageCircle } from 'lucide-react';

function WebHosting() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const pricingPlans = [
    {
      name: 'Ekonomik',
      monthlyPrice: '5',
      yearlyPrice: '50',
      features: {
        domains: '1',
        diskSpace: '3 GB',
        emailAccounts: '3',
        premiumSupport: false,
        sslCertificate: true,
        backupRestore: true,
        traffic: 'Limitsiz',
        securityFeatures: false,
        cpanel: true,
        ftpAccess: false,
        fileManager: false,
        dnsManagement: false,
        cronJobs: false,
        sshAccess: false
      }
    },
    {
      name: 'Standart',
      monthlyPrice: '10',
      yearlyPrice: '100',
      popular: true,
      features: {
        domains: '2',
        diskSpace: '8 GB',
        emailAccounts: '5',
        premiumSupport: false,
        sslCertificate: true,
        backupRestore: true,
        traffic: 'Limitsiz',
        securityFeatures: false,
        cpanel: true,
        ftpAccess: false,
        fileManager: false,
        dnsManagement: false,
        cronJobs: false,
        sshAccess: false
      }
    },
    {
      name: 'Professional',
      monthlyPrice: '20',
      yearlyPrice: '200',
      features: {
        domains: '5',
        diskSpace: '14 GB',
        emailAccounts: 'Limitsiz',
        premiumSupport: true,
        sslCertificate: true,
        backupRestore: true,
        traffic: 'Limitsiz',
        securityFeatures: false,
        cpanel: true,
        ftpAccess: false,
        fileManager: false,
        dnsManagement: false,
        cronJobs: false,
        sshAccess: false
      }
    }
  ];

  const features = [
    { key: 'domains', label: 'Domen' },
    { key: 'diskSpace', label: 'Disk Həcmi' },
    { key: 'emailAccounts', label: 'E-mail Hesabı' },
    { key: 'premiumSupport', label: 'Premium müştəri dəstəyi' },
    { key: 'sslCertificate', label: 'SSL Təhlükəsizliyi' },
    { key: 'backupRestore', label: 'Yedəkləmə və bərpa' },
    { key: 'traffic', label: 'Trafik' },
    { key: 'securityFeatures', label: 'Təhlükəsizlik Xüsusiyyətləri' },
    { key: 'cpanel', label: 'cPanel' },
    { key: 'ftpAccess', label: 'FTP Girişi' },
    { key: 'fileManager', label: 'Fayl İdarəetmə' },
    { key: 'dnsManagement', label: 'DNS İdarəetmə' },
    { key: 'cronJobs', label: 'Cron Job' },
    { key: 'sshAccess', label: 'SSH Girişi' }
  ];

  const faqQuestions = [
    { id: 1, question: 'Web hosting nədir?' },
    { id: 2, question: 'Hansı web hosting xidmətini təklif edirsiniz?' },
    { id: 3, question: 'Düzgün web hosting planına necə seçə bilərəm?' },
    { id: 4, question: 'Linux və Windows hosting arasındakı fərq nədir?' },
    { id: 5, question: 'Gələcəkdə web hosting planımı təkmilləşdirə bilərəmmi?' },
    { id: 6, question: 'Domen adı web hosting xidmətinə daxildirmi?' },
    { id: 7, question: 'Mövcud web saytımı hosting xidmətinizə necə köçürə bilərəm?' },
    { id: 8, question: 'Web saytımı qorumaq üçün hansı təhlükəsizlik tədbiri var?' },
    { id: 9, question: 'Bir hosting hesabı altında birden çox web saytı yerləşdirə bilərəmmi?' },
    { id: 10, question: 'Web hosting üçün texniki dəstək mövcuddurmu?' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Bulud Hostinqin Üstünlükləri və İstifadəsi',
      date: 'Nov 7, 2024',
      category: 'hosting',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Kiber Təhlükəsizlikdə Yeniliklər: Şəxsi...',
      date: 'Sep 16, 2024',
      category: 'sayt yaradılması',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'SWOT Analizi Nədir?',
      date: 'Sep 6, 2024',
      category: 'bloq',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Yeni Başlayanlar üçün Web Sayt Hostinqinin Seçilməsi',
      date: 'Aug 27, 2024',
      category: 'hosting',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Web Saytın Məzmunu Strategiyası: Effektiv...',
      date: 'Aug 14, 2024',
      category: 'sosial',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Kiçik bizneslər üçün web saytın əhəmiyyəti',
      date: 'Jul 23, 2024',
      category: 'sayt yaradılması',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Hüquq Firması Üçün Effektiv Web Dizaynı Strategiyası',
      date: 'Aug 6, 2024',
      category: 'dizayn',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Peşəkar Hosting Xidmətlərinin Faydaları',
      date: 'Jul 29, 2024',
      category: 'sayt yaradılması',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      title: 'Kiçik bizneslər üçün web saytın əhəmiyyəti',
      date: 'Jul 16, 2024',
      category: 'dizayn',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 10,
      title: '"Mobile friendly" sayt nə deməkdir?',
      date: 'Jul 3, 2024',
      category: 'web dizayn',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            İstənilən Vebsayt üçün<br />
            Sürətli və Təhlükəsiz<br />
            Hosting
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Üstün təhlükəsizlik, ultra sürət və 24/7 texniki dəstəyinə sahib olan hostinqlə 
            rəqəmsal varlığınızı yüksəldin.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Fast Speed</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">99.90% Uptime</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Başlayaq</span>
                <span className="text-white font-mono">.az</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Planları Bax
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hər Ehtiyaca Uyğun Web Hosting Planları</h2>
            <p className="text-xl text-slate-300">Mükəmməl Hosting Planına Gedən Yolunuz Buradan Başlayır</p>
          </div>

          {/* Plan toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800 rounded-lg p-1 flex">
              <button 
                className={`px-6 py-2 rounded-lg transition-colors ${
                  !isYearly 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                onClick={() => setIsYearly(false)}
              >
                Aylıq
              </button>
              <button 
                className={`px-6 py-2 rounded-lg transition-colors ${
                  isYearly 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
                onClick={() => setIsYearly(true)}
              >
                İllik
              </button>
            </div>
          </div>

          {/* Pricing table */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-4 border-b border-slate-700">
                <div className="p-6 bg-slate-700">
                  <h3 className="text-lg font-semibold text-white">Plan Xüsusiyyəti</h3>
                </div>
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="p-6 text-center relative">
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                        populyar
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-sm text-slate-400">
                      ₼{isYearly ? plan.yearlyPrice : plan.monthlyPrice}/{isYearly ? 'il' : 'ay'}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature rows */}
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-4 border-b border-slate-700 last:border-b-0">
                  <div className="p-4 bg-slate-700 text-white font-medium">
                    {feature.label}
                  </div>
                  {pricingPlans.map((plan, planIndex) => (
                    <div key={planIndex} className="p-4 text-center">
                      {typeof plan.features[feature.key] === 'boolean' ? (
                        plan.features[feature.key] ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <X className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )
                      ) : (
                        <span className="text-white font-medium">{plan.features[feature.key]}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Action buttons row */}
              <div className="grid grid-cols-4">
                <div className="p-6 bg-slate-700"></div>
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="p-6">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Sifarış et
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hostinqlə bağlı Tez-tez verilən suallar</h2>
            <p className="text-slate-300">Hosting haqqında sizə lazım olan məlumat</p>
          </div>

          <div className="space-y-4">
            {faqQuestions.map((faq) => (
              <div key={faq.id} className="bg-slate-800 rounded-lg">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700 transition-colors rounded-lg"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">
                    {faq.id}. {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-300">
                      Bu sual üçün cavab hazırlanır...
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              <span className="text-blue-500 text-sm">Blog & suallar</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Blogumuza daxil olun</h2>
            <p className="text-slate-300">
              Vebim İnkişafı, Dizayn və Onlayn Strategiyalar ilə bağlı məqalələri keçid edin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-3 text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{post.date}</span>
                    <span className="bg-slate-700 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Bütün Bloqlar →
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* FAQ Bottom Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Hər hansı bir sualınız var?</h2>
          <p className="text-slate-300">
            Nə vaxt ehtiyacınız varsa, biz sizin yanınızdayıq! Hər hansı bir sualınız və ya xəta olarsa, bizə 
            zəng edin, sayt daxilində çat və ya e-mail ünsurumuzla yazə biləriniz. Zəhmət olmasa bizimle 
            əlaqə saxlayın.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebHosting;