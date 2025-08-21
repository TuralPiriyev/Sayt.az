import React, { useState } from 'react';
import { ChevronDown, Bell } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const webSaytItems = [
    {
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded flex">
            <div className="w-2 h-2 bg-white rounded-full m-auto"></div>
          </div>
        </div>
      ),
      title: "Saytların hazırlanması",
      description: "Veb saytların hazırlanması",
      path: "/MakingTheSite"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded flex">
            <div className="flex-1 border-r border-white"></div>
            <div className="flex-1"></div>
          </div>
        </div>
      ),
      title: "Hökümat və qeyri-kommersiya saytları",
      description: "Hökümat və qeyri-kommersiya təşkilatlarını müasir, əlçatan rəqəmsal həllərlə gücləndirimək",
      path: "/Government-WebSite"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 bg-white rounded-sm flex items-center justify-center">
            <div className="w-3 h-2 bg-blue-600 rounded-sm"></div>
          </div>
        </div>
      ),
      title: "Kiçik biznes saytları",
      description: "Kiçik biznesinizi peşəkar və sərfəli onlayn mövcudluqla gücləndirim",
      path: "/SmallBusiness"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded flex items-center justify-center">
            <div className="w-4 h-2 border border-white rounded-sm flex">
              <div className="w-1 h-1 bg-white rounded-full m-auto"></div>
            </div>
          </div>
        </div>
      ),
      title: "E-ticarət saytları",
      description: "Güclü və istifadəsi asan onlayn mağaza ilə satışlarınızı artırın",
      path: "/ElectronWebSite"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded flex flex-col">
            <div className="flex-1 border-b border-white flex items-center justify-center">
              <div className="w-2 h-0.5 bg-white"></div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-2 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      ),
      title: "Hüquq firma saytı",
      description: "Hüquq fəaliyyətinizi inkişaf etmiş onlayn mövcudluqla yüksəldin",
      path: "/LawFirm"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded flex flex-col">
            <div className="w-full h-0.5 bg-white mt-1"></div>
            <div className="w-full h-0.5 bg-white mt-0.5"></div>
            <div className="w-full h-0.5 bg-white mt-0.5"></div>
          </div>
        </div>
      ),
      title: "Bloqlar və Şəxsi Vebsaytlar",
      description: "Fərdi bloq və ya şəxsi vebsayt ilə özünəxas rəqəmsal kimlik yaradın",
      path: "/Blog"
    }
  ];

  const domenItems = [
    {
      icon: (
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded"></div>
        </div>
      ),
      title: "Domen",
      description: "Azərbaycan milli domeni",
      path: "/domen"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 border-2 border-white rounded"></div>
        </div>
      ),
      title: ".com domen",
      description: "Beynəlxalq kommersiya domeni",
      path: "/FreeDomen"
    }
  ];

  const hostingItems = [
    { title: "Veb Hosting", description: "Sürətli və etibarlı veb hosting", path: "/WebHosting" },
    { title: "VPS Hosting", description: "Virtual private server hosting", path: "/VPS" },
    { title: "Dedicated Server", description: "Tam ayrılmış server həlləri", path: "/ServerHosting" },
    
  ];

  const xidmetlerItems = [
    { title: "SEO", description: "Axtarış sistemlərində optimallaşdırma", path: "#Real-Time-Tracking" },
    { title: "SMM", description: "Sosial media marketinqi", path: "/SMM" },
    { title: "Texniki Dəstək", description: "24/7 texniki dəstək xidməti", path: "/Support" },
    { title: "SSL Sertifikat", description: "Təhlükəsizlik sertifikatları", path: "/SSL" }
  ];

  const sirketItems = [
    { title: "Haqqımızda", description: "Şirkətimiz haqqında məlumat", path: "/About" },
    { title: "Əlaqə", description: "Bizimlə əlaqə saxlayın", path: "/Contact" },
    { title: "Bloq", description: "Ən son xəbərlər və məqalələr", path: "/CompanyBlog" },
    { title: "Portfolio", description: "Tamamladığımız layihələr", path: "/Portfolio" }
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
                <span>Veb sayt</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'veb-sayt' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-4 space-y-2">
                    {webSaytItems.map((item, index) => (
                      <Link key={index} to={item.path} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                        {item.icon}
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
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
                <span>Domen</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'domen' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-4 space-y-2">
                    {domenItems.map((item, index) => (
                      <Link key={index} to={item.path} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                        {item.icon}
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
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
                <span>Hosting</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'hosting' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-4 space-y-2">
                    {hostingItems.map((item, index) => (
                      <Link key={index} to={item.path} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-4 border-2 border-white rounded"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
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
                <span>Xidmətlər</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'xidmetler' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-4 space-y-2">
                    {xidmetlerItems.map((item, index) => (
                      <Link key={index} to={item.path} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-4 border-2 border-white rounded"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
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
                <span>Şirkət</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'sirket' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-4 space-y-2">
                    {sirketItems.map((item, index) => (
                      <Link key={index} to={item.path} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-4 border-2 border-white rounded"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
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
                <div className="absolute top-full right-0 mt-2 w-12 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-1">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-center p-1 rounded hover:bg-slate-700 cursor-pointer transition-colors">
                        <img src={lang.flag} alt={lang.name} className="w-4 h-3" />
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
                <div className="absolute top-full right-0 mt-2 w-12 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  <div className="p-1">
                    {currencies.map((currency, index) => (
                      <div key={index} className="flex items-center justify-center p-1 rounded hover:bg-slate-700 cursor-pointer transition-colors">
                        <span className="text-lg">{currency.symbol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Qiymət Təklifi Al Button */}
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
              Qiymət Təklifi Al
            </button>

            {/* Daxil olun */}
            <button className="hover:text-blue-400 transition-colors">Daxil olun</button>
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
