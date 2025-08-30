import React, { useState } from 'react';
import { Search, Check, ChevronDown, ChevronUp, Lock, Zap, Shield, Calendar, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

const Domen = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('.az');
  const [openFaq, setOpenFaq] = useState(1);

  const domainExtensions = [
    { ext: '.az', price: '40', popular: true, selected: true },
    { ext: '.com', price: '25', popular: false, selected: false },
    { ext: '.net', price: '38', popular: false, selected: false },
    { ext: '.info', price: '55', popular: false, selected: false },
    { ext: '.biz', price: '38', popular: false, selected: false },
    { ext: '.org', price: '35', popular: false, selected: false }
  ];

  const pricingData = [
    { domain: '.az', register: '15', transfer: '15', renewal: '15' },
    { domain: '.com', register: '12', transfer: '12', renewal: '14' },
    { domain: '.net', register: '14', transfer: '14', renewal: '16' },
    { domain: '.org', register: '13', transfer: '13', renewal: '15' },
    { domain: '.info', register: '16', transfer: '16', renewal: '18' },
    { domain: '.biz', register: '18', transfer: '18', renewal: '20' },
    { domain: '.co', register: '25', transfer: '25', renewal: '30' },
    { domain: '.io', register: '45', transfer: '45', renewal: '50' },
    { domain: '.dev', register: '20', transfer: '20', renewal: '22' },
    { domain: '.app', register: '22', transfer: '22', renewal: '25' }
  ];

  const faqData = [
    {
      id: 1,
      question: 'Domen nədir?',
      answer: 'Domen adı internetdə veb saytı müəyyən etmək üçün istifadə edilən unikal ünvandır. Bu, insanların müəyyən bir veb saytına daxil olmaq üçün veb brauzerində daxil etdikləri ünvandır. Domen adına sahib olmaq vacibdir, çünki bu, insanların internetdə veb saytınızı asanlıqla tapmasına kömək edir. O, həmçinin veb saytınıza biznes və təşkilatlar üçün vacib ola biləcək peşəkar bir görüntü verir.'
    },
    {
      id: 2,
      question: 'Domen adı necə qeydiyyata alınır?',
      answer: 'Domen qeydiyyatı çox sadə prosesdir. Əvvəlcə istədiyiniz domen adını axtarın, mövcud olub-olmadığını yoxlayın, sonra seçdiyiniz uzantı ilə qeydiyyatdan keçirin.'
    },
    {
      id: 3,
      question: 'Hansı domen uzantısını seçməliyəm?',
      answer: 'Domen uzantısı seçimi biznesinizin növündən asılıdır. .az Azərbaycan üçün, .com beynəlxalq biznes üçün, .org qeyri-kommersiya təşkilatları üçün uyğundur.'
    },
    {
      id: 4,
      question: 'Domen qeydiyyatı nə qədər vaxt alır?',
      answer: 'Domen qeydiyyatı adətən dərhal və ya bir neçə saat ərzində tamamlanır. Bəzi hallarda 24-48 saat çəkə bilər.'
    },
    {
      id: 5,
      question: 'Domenimi başqa provayderə köçürə bilərəmmi?',
      answer: 'Bəli, domeninizi istədiyiniz zaman başqa provayderə köçürə bilərsiniz. Bu proses transfer adlanır və adətən 5-7 gün çəkir.'
    },
    {
      id: 6,
      question: 'Domen yeniləmə xidməti necə işləyir?',
      answer: 'Domeniniz müəyyən müddətə qeydiyyatdan keçir və bu müddət bitməzdən əvvəl yeniləmək lazımdır. Avtomatik yeniləmə xidmətindən istifadə edə bilərsiniz.'
    }
  ];

  const blogPosts = [
    {
      title: 'Uğurlu Domen Adı Seçməyin Yolları',
      description: 'Biznesiniz üçün ən uyğun domen adını necə seçməli',
      category: 'webdesign',
      date: 'Aug 19, 2024',
      tags: ['webdesign', 'domen'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Veb Saytın Məzmun Strategiyası: Effektiv Məzmun Strategiyası Necə...',
      description: 'Axtarış motorları üçün optimal domen strukturu',
      category: 'sayt yaratmaq',
      date: 'Aug 14, 2024',
      tags: ['sayt yaratmaq', 'social'],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Kiçik bizneslər üçün veb saytın önəmi',
      description: 'Domeninizi təhlükəsizlik təhdidlərindən necə qorumaq olar',
      category: 'sayt yaratmaq',
      date: 'Aug 13, 2024',
      tags: ['sayt yaratmaq', 'domen'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
      gradient: 'from-green-400 to-green-600'
    }
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`"${searchTerm}${selectedDomain}" üçün axtarış aparılır...`);
    }
  };

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 mb-4">
            {t('whois_check_text')} <span className="text-blue-400 underline cursor-pointer">whois.az</span>
          </p>
          <p className="text-slate-400 mb-8 text-sm">
            {t('hosting_plan_text')} <span className="text-blue-400 underline cursor-pointer">{t('read_more')}</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {t('search_domain_title')}
          </h1>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-0 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600 overflow-hidden">
              <div className="flex-1 flex items-center px-6">
                <Search className="h-5 w-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('search_placeholder')}
                  className="flex-1 bg-transparent text-white placeholder-slate-400 border-none outline-none text-lg py-4"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="flex">
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="bg-slate-700 text-white border-none outline-none px-6 py-4 cursor-pointer"
                >
                  {domainExtensions.map(domain => (
                    <option key={domain.ext} value={domain.ext}>{domain.ext}</option>
                  ))}
                </select>
                <button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!searchTerm.trim()}
                >
                  <Search className="h-5 w-5" />
                  {t('search_button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Extensions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('domain_extension_title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {domainExtensions.map((domain) => (
              <div
                key={domain.ext}
                onClick={() => handleDomainSelect(domain.ext)}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedDomain === domain.ext 
                    ? 'border-blue-500 bg-blue-900/30 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-600 hover:border-slate-500'
                }`}
              >
                {selectedDomain === domain.ext && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
                <div className="text-2xl font-bold text-blue-400 mb-2">{domain.ext}</div>
                <div className="text-3xl font-bold mb-1">₼{domain.price}</div>
                <div className="text-slate-400 text-sm">{t('per_year')}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('privacy_protection_title')}</h3>
              <p className="text-slate-400">{t('privacy_protection_desc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('fast_delivery_title')}</h3>
              <p className="text-slate-400">{t('fast_delivery_desc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('support_24_7_title')}</h3>
              <p className="text-slate-400">{t('support_24_7_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pricing_table_title')}</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold">{t('table_domain')}</th>
                    <th className="text-center py-4 px-6 font-semibold">{t('table_register')}</th>
                    <th className="text-center py-4 px-6 font-semibold">{t('table_transfer')}</th>
                    <th className="text-center py-4 px-6 font-semibold">{t('table_renewal')}</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr key={row.domain} className={`border-t border-slate-600 hover:bg-slate-700/30 transition-colors ${index % 2 === 0 ? 'bg-slate-800/20' : ''}`}>
                      <td className="py-4 px-6 font-semibold text-indigo-400">{row.domain}</td>
                      <td className="py-4 px-6 text-center">{row.register} AZN</td>
                      <td className="py-4 px-6 text-center">{row.transfer} AZN</td>
                      <td className="py-4 px-6 text-center">{row.renewal} AZN</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t('faq_title')}</h2>
          <p className="text-slate-400 text-center mb-12">{t('faq_subtitle')}</p>
          
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div 
                key={faq.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <span className="font-semibold text-lg flex items-center gap-4">
                    <span className="text-blue-400 font-bold text-xl">{faq.id}.</span>
                    {t(`faq_q${faq.id}`)}
                  </span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="h-6 w-6 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === faq.id && (
                  <div 
                    id={`faq-content-${faq.id}`}
                    className="px-8 py-6 border-t border-slate-600 bg-slate-900/30"
                  >
                    <p className="text-slate-300 leading-relaxed pl-8">{t(`faq_a${faq.id}`)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{t('blog_title')}</h2>
            <p className="text-slate-400">{t('blog_subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-90`}></div>
                  <img 
                    src={post.image} 
                    alt={t(`blog_post${index + 1}_title`)}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl text-center px-6 leading-tight">
                      {t(`blog_post${index + 1}_title`)}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center gap-2 mx-auto">
              {t('all_blogs')}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domen;