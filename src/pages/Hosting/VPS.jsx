import React, { useState } from 'react';
import { 
  ChevronDown, 
  Server, 
  Cpu, 
  HardDrive, 
  BarChart3, 
  Shield, 
  Globe
} from 'lucide-react';

function VPS() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

const toggleFaq = (index) => {
  setOpenFaqIndex(openFaqIndex === index ? null : index);
};


  const vpsFeatures = [
    { icon: HardDrive, label: 'Disk Storage', value: '20 GB', unit: 'SSD' },
    { icon: BarChart3, label: 'CPU', value: '2', unit: 'vCore' },
    { icon: Cpu, label: 'RAM', value: '1 GB', unit: 'DDR4' },
    { icon: Globe, label: 'Bandwidth', value: '2 TB', unit: 'Monthly' },
    { icon: Shield, label: 'CentOS', value: '8 GB', unit: 'OS' },
    { icon: Server, label: 'IPv4', value: '1 IPv4', unit: 'Included' },
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      storage: '20 GB',
      cpu: '2 Core',
      bandwidth: '4 GB',
      traffic: '1 TB',
      price: 'ƒ24.62'
    },
    {
      name: 'Standard',
      storage: '100 GB',
      cpu: '4 Core',
      bandwidth: '8 GB',
      traffic: '2 TB',
      price: 'ƒ49.99'
    },
    {
      name: 'Premium',
      storage: '200 GB',
      cpu: '8 Core',
      bandwidth: '16 GB',
      traffic: '5 TB',
      price: 'ƒ99.99'
    }
  ];

  const faqItems = [
    {
      question: 'Virtual özel Server (VPS) nədir?',
      answer: 'VPS, fiziki serverin virtual bölmələrə ayrılması ilə yaradılan virtual serverdir.'
    },
    {
      question: 'VPS necə işləyir?',
      answer: 'VPS, hipervizor texnologiyası ilə fiziki serveri bir neçə virtual serverə bölür.'
    },
    {
      question: 'VPS-nin sərnişin idarəsini öyrənə bilərəmmi?',
      answer: 'Bəli, VPS-i SSH və ya RDP vasitəsilə tam idarə edə bilərsiniz.'
    },
    {
      question: 'VPS-da hansı sürücüləri quraşdıra bilərəm?',
      answer: 'Linux və Windows əməliyyat sistemlərini quraşdıra bilərsiniz.'
    },
    {
      question: 'VPS giriş necə işə yarayır?',
      answer: 'VPS-ə SSH (Linux) və ya RDP (Windows) ilə daxil ola bilərsiniz.'
    },
    {
      question: 'VPS texnologiyası təsdiqlənə bilərəmmi?',
      answer: 'VPS texnologiyası sənaye standartlarına uyğundur və etibarlıdır.'
    },
    {
      question: 'VPS hosting giriş necə baş verir?',
      answer: 'VPS hosting premium xidmətdir və pulsuz versiyası mövcud deyil.'
    },
    {
      question: 'VPS hosting dəstək xidməti mövcuddurmu?',
      answer: '24/7 dəstək xidməti və detallı sənədlər mövcuddur.'
    },
    {
      question: 'VPS seçmə üçün nə bilməliyəm?',
      answer: 'İstədiyiniz konfigurasiyanı seçə və istənilən vaxt dəyişə bilərsiniz.'
    },
    {
      question: 'VPS şəxsində tam nəzarət mümkündürmü?',
      answer: 'VPS-də tam root girişi və administrativ hüquqlar əldə edirsiniz.'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Bucaq və Hütingin Datalaridir və qətillərinin',
      category: 'VPS',
      date: '15 Noy 2024',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      tags: ['VPS', 'Təhlükəsizlik', 'Server']
    },
    {
      id: 2,
      title: 'Xibər Təhlükəsizliyin Vebsayt İpucl Maksimizasionə How Görüş',
      category: 'Cybersecurity',
      date: '12 Noy 2024',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg',
      tags: ['Cybersecurity', 'Web', 'Təhlükəsizlik']
    },
    {
      id: 3,
      title: 'SWOT Analizi Nədir?',
      category: 'Business',
      date: '10 Noy 2024',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      tags: ['Business', 'Analiz', 'Strateji']
    },
    {
      id: 4,
      title: 'Vətən Region üçün Ağ Sort Hostinqini Qürüntü',
      category: 'Hosting',
      date: '08 Noy 2024',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      tags: ['Hosting', 'Performans', 'Server']
    },
    {
      id: 5,
      title: 'Website Content Strateji: Möglichkeitlərin Content Strateji',
      category: 'Content',
      date: '05 Noy 2024',
      image: 'https://images.pexels.com/photos/7688047/pexels-photo-7688047.jpeg',
      tags: ['Content', 'Marketing', 'SEO']
    },
    {
      id: 6,
      title: 'Küçək Sürmlərdə üçün ağ səyirən tözand',
      category: 'Business',
      date: '03 Noy 2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['SMB', 'Website', 'Growth']
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              VPS Hosting ilə Tam Nəzarəti Ələ Keçirin
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Yüksək məhsuldarlıq təmin edən hərtərəfli həllər və 24/7 dəstək xidmətimizlə 
              bizlərə qatılın. Güvənli və etibarlı hosting həllərindən yararlanın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {vpsFeatures.map((feature, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <feature.icon className="w-8 h-8 text-primary-500 mb-2" />
                    <div className="text-2xl font-bold">{feature.value}</div>
                    <div className="text-gray-400 text-sm">{feature.unit}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{feature.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-dark-800 rounded-xl p-6 border border-dark-700">
              <div className="mr-8">
                <div className="text-3xl font-bold">ƒ24.62</div>
                <div className="text-gray-400 text-sm">aylıq</div>
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Seçin
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Mükəmməl VPS Planını seçin
            </h2>
            <p className="text-xl text-gray-400">
              Müxtəlif tələblərə uyğun VPS planlarımızdan birini seçin və bizə qoşulun.
            </p>
          </div>

          <div className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="text-left p-6 font-semibold">Plan</th>
                    <th className="text-center p-6 font-semibold">Disk Storage</th>
                    <th className="text-center p-6 font-semibold">vCPU</th>
                    <th className="text-center p-6 font-semibold">Operation system</th>
                    <th className="text-center p-6 font-semibold">Traffic</th>
                    <th className="text-center p-6 font-semibold">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans.map((plan, index) => (
                    <tr key={index} className="border-b border-dark-700 last:border-b-0 hover:bg-dark-700 transition-colors">
                      <td className="p-6">
                        <div className="font-semibold">{plan.name}</div>
                        <div className="text-2xl font-bold text-primary-500 mt-1">{plan.price}</div>
                      </td>
                      <td className="p-6 text-center">{plan.storage}</td>
                      <td className="p-6 text-center">{plan.cpu}</td>
                      <td className="p-6 text-center">{plan.bandwidth}</td>
                      <td className="p-6 text-center">{plan.traffic}</td>
                      <td className="p-6 text-center">
                        <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-lg transition-colors">
                          Seçin
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
            Tex dəstək komandamız sizə kömək etməyə hazırdır. VPS hosting xidmətlərimiz 
            haqqında hər hansı sualınız varsa, bizimlə əlaqə saxlamaqdan çəkinməyin. 
            Profesional və sürətli cavablar almaq üçün bizə müracıət edin.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg transition-colors">
              Bizimlə əlaqə
            </button>
            <button className="border border-dark-600 hover:border-primary-500 px-8 py-3 rounded-lg transition-colors">
              Canlı söhbət
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              VPS haqqında tez-tez verilən suallar
            </h2>
            <p className="text-xl text-gray-400">
              VPS hosting və bizim xidmətlərimiz barədə ən çox verilən suallara cavablar
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl p-6 text-left hover:border-primary-500 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold">{index + 1}. {item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="bg-dark-700 border border-dark-600 rounded-b-xl p-6 -mt-2">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bloqumuza daxil olun
            </h2>
            <p className="text-xl text-gray-400">
              Ən son texnoloji məqalələr və hosting səhəsindəki yeniliklər haqqında məlumat əldə edin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500 transition-colors">
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
                      <span key={index} className="bg-primary-600 text-xs px-3 py-1 rounded-full">
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
                  <button className="text-primary-500 hover:text-primary-400 font-medium">
                    Oxumağa davam et →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg transition-colors">
              Daha böyüyü
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VPS;