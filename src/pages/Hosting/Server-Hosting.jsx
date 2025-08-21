import React, { useState } from 'react';
import { 
  Server, 
  Shield, 
  Clock, 
  Zap, 
  ChevronDown, 
  MessageCircle
} from 'lucide-react';

function ServerHosting() {
 const [openFaqIndex, setOpenFaqIndex] = useState(null);

const toggleFaq = (index) => {
  setOpenFaqIndex(openFaqIndex === index ? null : index);
};

  // Hero features data
  const heroFeatures = [
    { icon: Zap, text: 'Fast Speed', color: 'text-green-400' },
    { icon: Clock, text: '24/7 Support', color: 'text-blue-400' },
    { icon: Shield, text: '99.99% Uptime', color: 'text-green-400' }
  ];

  // Pricing plans data
  const pricingPlans = [
    {
      name: 'Xeon E-2314',
      diskStorage: '480 GB SSD SATA GB',
      cpu: '4 cores 3.4 Ghz/4.0 GHz 4 Cores',
      operatingSystem: '64 GB DDR4 ECC Server Grade',
      traffic: '100 TB/ayda TB',
      price: 'AZN80',
      popular: false
    },
    {
      name: 'Xeon E-2316',
      diskStorage: '1 x 480 GB SSD SATA Software',
      cpu: '6 cores 3.4 Ghz/4.0 GHz 6 Cores',
      operatingSystem: '64 GB DDR4 ECC Server Grade',
      traffic: '100 TB/ayda TB',
      price: 'AZN90',
      popular: false
    },
    {
      name: 'Xeon E-2356',
      diskStorage: '1 x 960 GB SSD SATA Software',
      cpu: '6 cores 3.4 Ghz/4.0 GHz 6 Cores',
      operatingSystem: '64 GB DDR4 ECC Server Grade',
      traffic: '100 TB/ayda TB',
      price: 'AZN74',
      popular: true
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: 'Virtual (Dedicated) Server nədir?',
      answer: 'Virtual Dedicated Server, fiziki serverin virtual olaraq bölünməsi ilə yaradılan ayrı server mühitidir. Bu, sizə tam nəzarət və məxsusi resurslar təmin edir.'
    },
    {
      question: 'Virtual (Dedicated) Serverdən istifadə etməyin üstünlükləri nələrdir?',
      answer: 'Tam root giriş, yüksək performans, təhlükəsizlik, məxsusi IP ünvan, istənilən proqram təminatının quraşdırılması imkanı və 24/7 texniki dəstək.'
    },
    {
      question: 'Dedicated dedicated server planını necə seçə bilərəm?',
      answer: 'Sizin ehtiyaclarınıza uyğun olaraq CPU, RAM, disk sahəsi və trafik həcmini nəzərə alaraq ən münasib planı seçə bilərsiniz.'
    },
    {
      question: 'Dedicated virtual server planının təhlükəsizliyi və ya təminatı təklif edirsiniz?',
      answer: 'Bəli, bütün serverlərimiz DDoS qorunması, firewall və avtomatik backup xidmətləri ilə təmin edilir.'
    },
    {
      question: 'Virtual serverdə özün hansı əməliyyat sistemini seçə bilərəm?',
      answer: 'Linux (Ubuntu, CentOS, Debian) və Windows Server əməliyyat sistemlərini seçə bilərsiniz.'
    },
    {
      question: 'Virtual serverdə backup əlaqə özün hansı məlumatları təminat təklif edirsiniz?',
      answer: 'Gündəlik avtomatik backup, həftəlik və aylıq backup seçimləri mövcuddur. Məlumatlarınız təhlükəsiz saxlanılır.'
    },
    {
      question: 'Virtual serverdə özün təminat dəstək təklif edirsiniz?',
      answer: '24/7 texniki dəstək, canlı söhbət, telefon və email dəstəyi təmin edirik.'
    },
    {
      question: 'Server necə quraşdırılır və ya potensial təhlükələrdən qorunur?',
      answer: 'Serveriniz avtomatik olaraq quraşdırılır və DDoS qorunması, firewall, antivirus və təhlükəsizlik yamaqları ilə qorunur.'
    },
    {
      question: 'Virtual proqram təminatı və ya proqramların virtual serverdə quraşdırılması təklif edirsiniz?',
      answer: 'Bəli, istənilən proqram təminatını quraşdıra bilərsiniz və ya bizim texniki komandamızdan kömək ala bilərsiniz.'
    },
    {
      question: 'Virtual serverdə özün məlumatlarının etibarlı olduğuna necə əmin ola bilərəm?',
      answer: 'SSL sertifikatları, şifrələmə, təhlükəsiz məlumat mərkəzləri və ISO sertifikatları ilə məlumatlarınızın təhlükəsizliyi təmin edilir.'
    },
    {
      question: 'Texnikanın xidməti təklif edirsiniz?',
      answer: 'Bəli, 24/7 texniki xidmət, server monitorinqi, performans optimallaşdırması və texniki məsləhətlər təklif edirik.'
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Startupların üçün Güvənilir üçün təminat məsləhətləri',
      category: 'Startups',
      date: '15 Noy 2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['startups', 'business']
    },
    {
      id: 2,
      title: 'Məlumat Mərkəzlərində üçün ətraf mühit',
      category: 'Technology',
      date: '12 Noy 2024',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      tags: ['datacenter', 'green']
    },
    {
      id: 3,
      title: 'Website Yükləmə Sürətini Artırmağın 10 Yolu',
      category: 'Performance',
      date: '10 Noy 2024',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      tags: ['performance', 'optimization']
    },
    {
      id: 4,
      title: 'Kiçik bizneslər üçün web saytı üçün təminat',
      category: 'Business',
      date: '08 Noy 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['SMB', 'website']
    },
    {
      id: 5,
      title: 'Yeni Texnologiyalar və Alətlər: Web Dizayn sahəsindəki Yeniliklər',
      category: 'Web Design',
      date: '05 Noy 2024',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['webdesign', 'tools']
    },
    {
      id: 6,
      title: 'Saytlarda təminat təxminən üçün təminat',
      category: 'Security',
      date: '03 Noy 2024',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      tags: ['security', 'maintenance']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            İstənilən Vebsayt üçün<br />
            Sürətli və Təhlükəsiz Server
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Ürəyin sakinləşdirici, ultra sürətli və VPS / Shared Hosting-dən daha sürətli hosting 
            təcrübəsini yaşa bizimlədir.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Pricing display */}
          <div className="inline-flex items-center bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="mr-8">
              <div className="text-sm text-gray-400 mb-1">Başlanğıc</div>
              <div className="text-3xl font-bold">₼5<span className="text-lg text-gray-400">/ay</span></div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Başlayın Siz
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Mükəmməl Server Planını seçin
            </h2>
            <p className="text-xl text-gray-400">
              Müxtəlif Ehtiyaclara uyğun Xüsusi Serverlərindən üçün və Sürət seçin.
            </p>
          </div>

          <div className="bg-slate-700 rounded-2xl overflow-hidden border border-slate-600 max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left p-6 font-semibold">Plan</th>
                    <th className="text-center p-6 font-semibold">Disk Həcmi</th>
                    <th className="text-center p-6 font-semibold">vCPU</th>
                    <th className="text-center p-6 font-semibold">Əməliyyat sistemi</th>
                    <th className="text-center p-6 font-semibold">Trafik</th>
                    <th className="text-center p-6 font-semibold">Əməliyyat</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((plan, index) => (
                    <tr key={index} className="border-b border-slate-600 last:border-b-0 hover:bg-slate-600 transition-colors">
                      <td className="p-6">
                        <div className="font-semibold">{plan.name}</div>
                        <div className="text-2xl font-bold text-blue-400 mt-1">{plan.price}</div>
                      </td>
                      <td className="p-6 text-center text-sm">{plan.diskStorage}</td>
                      <td className="p-6 text-center text-sm">{plan.cpu}</td>
                      <td className="p-6 text-center text-sm">{plan.operatingSystem}</td>
                      <td className="p-6 text-center text-sm">{plan.traffic}</td>
                      <td className="p-6 text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors text-sm">
                          Seç
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Hər hansı bir sualınız var?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Hər zaman bizimlə əlaqə saxlayın, biz sizin yardımınıza hazırıq. Hər hansı bir 
            sual, texniki dəstək və ya məsləhət üçün bizimlə əlaqə saxlamaqdan çəkinməyin. 
            Zəhmət olmasa bizə müraciət edin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-colors">
              Bizimlə əlaqə
            </button>
            <button className="border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg transition-colors">
              Canlı söhbət
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Dedicated Server haqqında Tez-tez verilən suallar
            </h2>
            <p className="text-xl text-gray-400">
              Dedicated Server haqqında sizin tez-tez soruşduğunuz suallar
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-xl p-6 text-left hover:border-blue-500 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold">{index + 1}. {item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="bg-slate-600 border border-slate-500 rounded-b-xl p-6 -mt-2">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-blue-400 text-sm font-medium mb-2">📝 Blog & Insights</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bloqumuza daxil olun
            </h2>
            <p className="text-xl text-gray-400">
              Vebsayt İnkişafı, Dizayn və Onlayn Strategiyalar ilə bağlı məqalələr kəşf edin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-600 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">
                    {post.date} • {post.category}
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    Oxumağa davam et →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-colors">
              Daha Böyük
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ServerHosting;