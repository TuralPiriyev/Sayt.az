import React, { useState } from 'react';
import { ChevronDown, Bell, Monitor, Globe, Server, Settings, Building2, FileText } from 'lucide-react';
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations/translations';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const webSaytItems = [
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: t("Saytların hazırlanması"),
      description: t("Veb saytların hazırlanması"),
      path: "/MakingTheSite",
      bgColor: "bg-blue-600"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: t("Hökümat və qeyri-kommersiya saytları"),
      description: t("Hökümat və qeyri-kommersiya təşkilatlarını müasir, əlçatan rəqəmsal həllərlə gücləndirimək"),
      path: "/Government-WebSite",
      bgColor: "bg-purple-600"
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: t("Kiçik biznes saytları"),
      description: t("Kiçik biznesinizi peşəkar və sərfəli onlayn mövcudluqla gücləndirim"),
      path: "/SmallBusiness",
      bgColor: "bg-purple-600"
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: t("E-ticarət saytları"),
      description: t("Güclü və istifadəsi asan onlayn mağaza ilə satışlarınızı artırın"),
      path: "/ElectronWebSite",
      bgColor: "bg-blue-600"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: t("Hüquq firma saytı"),
      description: t("Hüquq fəaliyyətinizi inkişaf etmiş onlayn mövcudluqla yüksəldin"),
      path: "/LawFirm",
      bgColor: "bg-purple-600"
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: t("Bloqlar və Şəxsi Vebsaytlar"),
      description: t("Fərdi bloq və ya şəxsi vebsayt ilə özünəxas rəqəmsal kimlik yaradın"),
      path: "/Blog",
      bgColor: "bg-purple-600"
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: t("Əmlak saytları"),
      description: t("Əmlak siyahısı və daşınmaz əmlak saytları"),
      path: "/RealEstate",
      bgColor: "bg-blue-600"
    }
  ];

  const domenItems = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: t("Domen"),
      description: t("Azərbaycan milli domeni"),
      path: "/domen",
      bgColor: "bg-blue-600"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: t(".com domen"),
      description: t("Beynəlxalq kommersiya domeni"),
      path: "/FreeDomen",
      bgColor: "bg-blue-600"
    }
  ];

  const hostingItems = [
    { 
      icon: <Server className="w-6 h-6 text-white" />,
      title: t("Veb Hosting"), 
      description: t("Sürətli və etibarlı veb hosting"), 
      path: "/WebHosting",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Server className="w-6 h-6 text-white" />,
      title: t("VPS Hosting"), 
      description: t("Virtual private server hosting"), 
      path: "/VPS",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Server className="w-6 h-6 text-white" />,
      title: t("Dedicated Server"), 
      description: t("Tam ayrılmış server həlləri"), 
      path: "/ServerHosting",
      bgColor: "bg-blue-600"
    }
  ];

  const xidmetlerItems = [
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Vebsayt sifarisinizi izleyin"), 
      description: t("Axtarış sistemlərində optimallaşdırma"), 
      path: "#Real-Time-Tracking",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Qiymet Kalkulyatoru"), 
      description: t("Sosial media marketinqi"), 
      path: "/ManualCalculator",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("AI Kalkulyator"), 
      description: t("24/7 texniki dəstək xidməti"), 
      path: "/AIChatCalculator",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("SEO Xidmeti"), 
      description: t("Təhlükəsizlik sertifikatları"), 
      path: "/SEOServicesPage",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Mobil Tetbiqlerin Hazirlanmasi"), 
      description: t("Təhlükəsizlik sertifikatları"), 
      path: "/MobileApp",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Texniki Xidmet"), 
      description: t("Təhlükəsizlik sertifikatları"), 
      path: "/TechnicalService",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Sosial Media Marketinq"), 
      description: t("Təhlükəsizlik sertifikatları"), 
      path: "/SocialMediaMarketing",
      bgColor: "bg-blue-600"
    }
  ];

  const sirketItems = [
    { 
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: t("Haqqımızda"), 
      description: t("Şirkətimiz haqqında məlumat"), 
      path: "/About",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <FileText className="w-6 h-6 text-white" />,
      title: t("Bloq"), 
      description: t("Ən son xəbərlər və məqalələr"), 
      path: "/CompanyBlog",
      bgColor: "bg-purple-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Portfolio"), 
      description: t("Tamamladığımız layihələr"), 
      path: "/Portfolio",
      bgColor: "bg-purple-600"
    },
    { 
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: t("Karyera"), 
      description: t("Açıq vakansiyalar"), 
      path: "/Careers",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <Settings className="w-6 h-6 text-white" />,
      title: t("Freelance"), 
      description: t("Müştəri rəyləri və hekayələri"), 
      path: "/Freelancer",
      bgColor: "bg-purple-600"
    },
    { 
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: t("Əlaqə"), 
      description: t("Bizimlə əlaqə saxlayın"), 
      path: "/ContactPage",
      bgColor: "bg-blue-600"
    }
  ];

  const languages = [
    { code: 'az', name: 'Azərbaycan', flag: 'https://flagcdn.com/w20/az.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' }
  ];

  const currencies = [
    { code: 'AZN', symbol: '₼', name: 'Manat' },
    { code: 'USD', symbol: '$', name: 'Dollar' }
  ];

  return (
    <nav className="bg-slate-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">sayt.az</div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Veb sayt */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('veb-sayt')}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>{t('Veb sayt')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'veb-sayt' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl z-50 border border-slate-600/30 max-h-80 overflow-y-auto dropdown-scrollbar">
                  <div className="p-4 space-y-1">
                    {webSaytItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/40 cursor-pointer transition-all duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-0.5 group-hover:text-blue-400 transition-colors text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Domen */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('domen')}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>{t('Domen')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'domen' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl z-50 border border-slate-600/30 max-h-60 overflow-y-auto dropdown-scrollbar">
                  <div className="p-4 space-y-1">
                    {domenItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/40 cursor-pointer transition-all duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-0.5 group-hover:text-blue-400 transition-colors text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hosting */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('hosting')}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>{t('Hosting')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'hosting' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl z-50 border border-slate-600/30 max-h-60 overflow-y-auto dropdown-scrollbar">
                  <div className="p-4 space-y-1">
                    {hostingItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/40 cursor-pointer transition-all duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-0.5 group-hover:text-blue-400 transition-colors text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Xidmətlər */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('xidmetler')}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>{t('Xidmətlər')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'xidmetler' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl z-50 border border-slate-600/30 max-h-60 overflow-y-auto dropdown-scrollbar">
                  <div className="p-4 space-y-1">
                    {xidmetlerItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/40 cursor-pointer transition-all duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-0.5 group-hover:text-blue-400 transition-colors text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Şirkət */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('sirket')}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span>{t('Şirkət')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'sirket' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl z-50 border border-slate-600/30 max-h-60 overflow-y-auto dropdown-scrollbar">
                  <div className="p-4 space-y-1">
                    {sirketItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/40 cursor-pointer transition-all duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white mb-0.5 group-hover:text-blue-400 transition-colors text-sm">{item.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Notification */}
            <div className="relative">
              <Bell className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>

            {/* Language Selection */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('language')}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <img src="https://flagcdn.com/w20/az.png" alt="Azerbaijan" className="w-5 h-3" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-2 w-16 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl z-50 border border-slate-600/30">
                  <div className="p-2">
                    {languages.map((lang, index) => (
                      <div 
                        key={index} 
                        onClick={() => {
                          changeLanguage(lang.code);
                          setActiveDropdown(null);
                        }}
                        className="flex items-center justify-center p-2 rounded-md hover:bg-slate-700/40 cursor-pointer transition-all duration-200"
                      >
                        <img src={lang.flag} alt={lang.name} className="w-5 h-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Currency Selection */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('currency')}
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <span className="text-lg">₼</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'currency' && (
                <div className="absolute top-full right-0 mt-2 w-16 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl z-50 border border-slate-600/30">
                  <div className="p-2">
                    {currencies.map((currency, index) => (
                      <div key={index} className="flex items-center justify-center p-2 rounded-md hover:bg-slate-700/40 cursor-pointer transition-all duration-200">
                        <span className="text-lg">{currency.symbol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Qiymət Təklifi Al Button */}
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
              {t('Qiymət Təklifi Al')}
            </button>

            {/* Daxil olun */}
            <Link to="/Login"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors">
              {t('Daxil olun')}
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)}></div>
      )}
    </nav>
  );
};

export default Navbar;