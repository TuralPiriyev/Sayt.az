import React, { useState } from 'react';
import { Star, Zap, Check, Code, Shield, FileText, Search, Wrench, Info, Lock, Clock, Rocket, Trophy, MessageCircle, Users, Globe, Briefcase, Award, BarChart3, UsersIcon, Database, GraduationCap, ChevronLeft, ChevronRight, BookOpen, Calendar, Tag, ArrowRight, Play } from 'lucide-react';

const Main = () => {
  const [selectedService, setSelectedService] = useState('');
  const [features, setFeatures] = useState({
    responsive: false,
    admin: false,
    seo: false
  });
  const [orderId, setOrderId] = useState('');
  const [domainSearch, setDomainSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('.az');
  const [currentPortfolioPage, setCurrentPortfolioPage] = useState(1);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);

  // Qiymət hesablama funksiyası
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Xidmət növünə görə baza qiyməti
    switch(selectedService) {
      case 'website':
        basePrice = 1000;
        break;
      case 'ecommerce':
        basePrice = 2500;
        break;
      case 'mobile':
        basePrice = 3000;
        break;
      default:
        basePrice = 0;
    }

    // Xüsusiyyətlərin qiymətləri
    let additionalPrice = 0;
    if (features.responsive) additionalPrice += 200;
    if (features.admin) additionalPrice += 400;
    if (features.seo) additionalPrice += 300;

    return basePrice + additionalPrice;
  };

  const handleFeatureChange = (feature) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const totalPrice = calculatePrice();
  const teamMembers = [
    {
      id: 1,
      name: 'Sabina G.',
      role: 'UI/UX Designer',
      description: 'Creating beautiful and intuitive designs',
      progress: 100,
      status: 'Design',
      icon: <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
        </div>
      </div>,
      statusIcon: <Check className="w-5 h-5" />,
      statusColor: 'bg-green-500',
      cardColor: 'bg-gradient-to-br from-green-800/40 to-green-900/60',
      borderColor: 'border-green-500/30',
      progressColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Fuad M.',
      role: 'Frontend Developer',
      description: 'Building responsive user interfaces',
      progress: 75,
      status: 'Frontend',
      icon: <Zap className="w-10 h-10 text-orange-400" />,
      statusIcon: <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>,
      statusColor: 'bg-blue-500',
      cardColor: 'bg-gradient-to-br from-blue-800/40 to-blue-900/60',
      borderColor: 'border-blue-500/30',
      progressColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Ahmad R.',
      role: 'Backend Developer',
      description: 'Developing robust server infrastructure',
      progress: 45,
      status: 'Backend',
      icon: <Wrench className="w-10 h-10 text-gray-300" />,
      statusIcon: <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>,
      statusColor: 'bg-gray-500',
      cardColor: 'bg-gradient-to-br from-gray-700/40 to-gray-800/60',
      borderColor: 'border-gray-500/30',
      progressColor: 'bg-gray-500'
    }
  ];

  const progressSteps = [
    { 
      name: 'Design', 
      icon: Check, 
      completed: true, 
      active: false,
      bgColor: 'bg-green-500',
      iconColor: 'text-white'
    },
    { 
      name: 'Frontend', 
      icon: () => <div className="w-3 h-3 bg-white rounded-full"></div>, 
      completed: false, 
      active: true,
      bgColor: 'bg-blue-500',
      iconColor: 'text-white'
    },
    { 
      name: 'Backend', 
      icon: () => <div className="w-3 h-3 bg-white rounded-full"></div>, 
      completed: false, 
      active: false,
      bgColor: 'bg-gray-500',
      iconColor: 'text-white'
    }
  ];

  // Portfolio məlumatları - Şəkildəki kimi
  const portfolioProjects = [
    // Səhifə 1
    [
      {
        id: 1,
        name: 'UG.NEWS',
        url: 'ug.news',
        browserColor: 'from-blue-50 to-white',
        contentBg: 'bg-white',
        icons: [
          { color: 'bg-red-500', size: 'w-8 h-8' },
          { color: 'bg-blue-500', size: 'w-8 h-8' },
          { color: 'bg-green-500', size: 'w-8 h-8' },
          { color: 'bg-yellow-500', size: 'w-8 h-8' },
          { color: 'bg-purple-500', size: 'w-8 h-8' },
          { color: 'bg-orange-500', size: 'w-8 h-8' },
          { color: 'bg-pink-500', size: 'w-8 h-8' },
          { color: 'bg-cyan-500', size: 'w-8 h-8' }
        ]
      },
      {
        id: 2,
        name: 'FOOTBALL.BIZ',
        url: 'football.biz',
        browserColor: 'from-gray-50 to-gray-100',
        contentBg: 'bg-gray-800',
        tableData: true
      },
      {
        id: 3,
        name: 'WISHER.AZ',
        url: 'wisher.az',
        browserColor: 'from-orange-50 to-red-100',
        contentBg: 'bg-gradient-to-r from-orange-400 to-red-500',
        giftTheme: true
      },
      {
        id: 4,
        name: 'ZEMED.AZ',
        url: 'zemed.az',
        browserColor: 'from-blue-50 to-gray-100',
        contentBg: 'bg-white',
        medicalTheme: true
      },
      {
        id: 5,
        name: 'BAYMAK.AZ',
        url: 'baymak.az',
        browserColor: 'from-teal-50 to-green-100',
        contentBg: 'bg-teal-600',
        constructionTheme: true
      },
      {
        id: 6,
        name: 'QARMON.AZ',
        url: 'qarmon.az',
        browserColor: 'from-green-50 to-emerald-100',
        contentBg: 'bg-gradient-to-br from-green-600 to-emerald-700',
        natureTheme: true
      }
    ],
    // Səhifə 2 - Şəkildə görünməsə də, gələcək üçün
    [
      {
        id: 7,
        name: 'EXAMPLE1.AZ',
        url: 'example1.az',
        browserColor: 'from-purple-50 to-indigo-100',
        contentBg: 'bg-purple-600'
      },
      {
        id: 8,
        name: 'EXAMPLE2.AZ',
        url: 'example2.az',
        browserColor: 'from-pink-50 to-rose-100',
        contentBg: 'bg-pink-600'
      },
      {
        id: 9,
        name: 'EXAMPLE3.AZ',
        url: 'example3.az',
        browserColor: 'from-yellow-50 to-amber-100',
        contentBg: 'bg-yellow-600'
      }
    ]
  ];

  // Customer Reviews Data
  const customerReviews = [
    // Səhifə 1
    [
      {
        id: 1,
        rating: 5,
        title: "Müştəriləridən müsbət ray",
        review: "Sayt.az saytimin hazırlanmasında gözləntilərimizi aşdı. Mənim istəklərimizi mükəmməl şəkildə əks etdirdi.",
        author: {
          name: "Seljan Novruz",
          role: "CEO",
          avatar: "S"
        }
      }
    ],
    // Səhifə 2 - Placeholder məlumatları (siz dəyişəcəksiniz)
    [
      {
        id: 2,
        rating: 5,
        title: "Növbəti müştəri rəyi",
        review: "Bu yerdə ikinci müştərinin rəyi olacaq. Siz bu məlumatları dəyişə bilərsiniz.",
        author: {
          name: "Müştəri İkinci",
          role: "Direktor",
          avatar: "M"
        }
      }
    ],
    // Səhifə 3 - Placeholder
    [
      {
        id: 3,
        rating: 5,
        title: "Üçüncü müştəri rəyi",
        review: "Üçüncü müştərinin rəy mətni burada olacaq. Sonradan dəyişdiriləcək.",
        author: {
          name: "Müştəri Üçüncü",
          role: "Müdir",
          avatar: "M"
        }
      }
    ]
  ];

  // Blog Articles Data - Şəkildəki kimi
  const blogArticles = [
    {
      id: 1,
      title: "Uğurlu biznes üçün hansı web trendləri izləməlisən?",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Feb 27, 2025",
      tags: ["webdesign", "marketing"],
      bgGradient: "from-blue-500/20 to-purple-600/20",
      cardBorder: "border-blue-500/30"
    },
    {
      id: 2,
      title: "DeepSeek AI: Yeni Nəsil Süni İntellekt Alətı",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Feb 6, 2025",
      tags: ["sayt yaratmaq", "sayt sifarişi"],
      bgGradient: "from-purple-500/20 to-pink-600/20",
      cardBorder: "border-purple-500/30"
    },
    {
      id: 3,
      title: "2025-ci ildə Onlayn Biznesin Trendləri",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Jan 29, 2025",
      tags: ["marketing", "sosial"],
      bgGradient: "from-green-500/20 to-teal-600/20",
      cardBorder: "border-green-500/30"
    }
  ];

  // Video Content Data - Şəkildəki kimi
  const videoContent = [
    // Səhifə 1 - Şəkildəki videolar
    [
      {
        id: 1,
        title: "Domen nədir? Domen...",
        thumbnail: "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "#",
        bgColor: "from-blue-400 to-blue-600"
      },
      {
        id: 2,
        title: "Sayt.az-la biznesinizi...",
        thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "#",
        bgColor: "from-red-400 to-blue-500"
      }
    ],
    // Səhifə 2 - Əlavə videolar
    [
      {
        id: 3,
        title: "WordPress ilə sayt yaratmaq",
        thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "#",
        bgColor: "from-green-400 to-teal-600"
      },
      {
        id: 4,
        title: "E-commerce saytının üstünlükləri",
        thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
        videoUrl: "#",
        bgColor: "from-purple-400 to-indigo-600"
      }
    ]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Sol tərəf - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Azərbaycann #1 Veb Dizayn Studiyası
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Biznesinizi<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Rəqəmsal Dünyada
                </span><br />
                <span className="text-white">Lider Edin</span>
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Beynəlxalq səviyyədə texnologiya və yerli bazar anlayışını 
                birləşdirərək, Azərbaycanın aparıcı şirkətləri üçün dünya 
                səviyyəli rəqəmsal həllər təqdim edirik.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
                Layihəyə başla
              </button>
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50">
                .ar Hekayələrimiz
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Check className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-3xl font-bold">150+</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Tamamlanmış<br />
                  Layihə
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-3xl font-bold">4.9/5</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Müştəri<br />
                  Məmnuniyyəti
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-3xl font-bold">35%</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Orta Satış Artımı
                </p>
              </div>
            </div>
          </div>

          {/* Sağ tərəf - Price Calculator */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-white">Layihə Qiymət Kalkulyatoru</h2>
                <p className="text-gray-400 text-sm">Ehtiyaclarınızı seçin, dərhal qiymət təklifi alın</p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Xidmət Növü</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-700/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                >
                  <option value="">Seçin...</option>
                  <option value="website">Veb Sayt</option>
                  <option value="ecommerce">E-ticarət</option>
                  <option value="mobile">Mobil Tətbiq</option>
                </select>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">Xüsusiyyətlər</label>
                <div className="grid grid-cols-1 gap-3">
                  <label className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={features.responsive}
                      onChange={() => handleFeatureChange('responsive')}
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-white">Responsive <span className="text-gray-400">(+₼ 200)</span></span>
                  </label>
                  
                  <label className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={features.admin}
                      onChange={() => handleFeatureChange('admin')}
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-white">Admin Panel <span className="text-gray-400">(+₼ 400)</span></span>
                  </label>

                  <label className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={features.seo}
                      onChange={() => handleFeatureChange('seo')}
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-white">Başlıqlar & Meta Təqlər <span className="text-gray-400">(+₼ 300)</span></span>
                  </label>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-slate-700/60 to-slate-600/60 rounded-lg p-6 text-center border border-slate-500/30">
                <p className="text-gray-400 text-sm mb-2">Təxmini Qiymət</p>
                <div className="text-4xl font-bold text-cyan-400 mb-1">₼ {totalPrice}</div>
                <p className="text-gray-400 text-xs">ƏDV daxil deyil</p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105">
                Pulsuz Qiymət Təklifi Al
              </button>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-8 text-gray-300">Bizə Güvənən Şirkətlər</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-gray-400 font-semibold">Mətbuat.az</div>
            <div className="text-gray-400 font-semibold">Livescore.az</div>
            <div className="text-gray-400 font-semibold">Azdoç.AI</div>
            <div className="text-gray-400 font-semibold">Kredit.az</div>
          </div>
        </div>
      </div>

      {/* Real-time Tracking Section */}
      <div id = "Real-Time-Tracking" className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-6">
              <span className="text-blue-300 text-sm font-medium">Real-time Tracking</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vebsayt sifarişinizi izləyin
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Monitor your project's progress in real-time with our transparent development process
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - Team Members */}
          <div className="lg:col-span-3 space-y-8">
            {/* Team Member Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className={`relative p-6 rounded-2xl ${member.cardColor} border ${member.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                >
                  {/* Top Section with Icon and Status Badge */}
                  <div className="flex items-start justify-between mb-6">
                    {member.icon}
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${member.statusColor} text-white text-sm font-medium`}>
                      {member.statusIcon}
                      <span>{member.progress}%</span>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-white">{member.status}</span>
                      <span className="text-lg font-bold text-white">{member.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${member.progressColor} transition-all duration-500`}
                        style={{ width: `${member.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-gray-300 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Steps */}
            <div className="relative p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between relative">
                {/* Connection Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-green-500 -translate-y-1/2 z-0"></div>
                
                {progressSteps.map((step, index) => (
                  <div key={step.name} className="flex flex-col items-center relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.bgColor} shadow-lg`}>
                      {step.completed ? (
                        <Check className="w-8 h-8 text-white" />
                      ) : (
                        <step.icon />
                      )}
                    </div>
                    <span className="text-lg font-medium text-gray-300">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tracking Panel */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm sticky top-6">
              {/* Code Icon */}
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Code className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white text-center mb-3">
                Track Your Project
              </h2>
              <p className="text-gray-400 text-center text-sm mb-8">
                Enter your order ID to see real-time progress
              </p>

              {/* Input Field */}
              <div className="mb-6">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Sifariş kodu"
                  className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-lg"
                />
              </div>

              {/* Search Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 mb-6 text-lg">
                <Search className="w-5 h-5" />
                <span>İzlə</span>
              </button>

              <p className="text-sm text-gray-400 text-center mb-8">
                Saytaz ilə sifarişlərinizə hər zaman nəzarət edin
              </p>

              {/* Features */}
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-sm text-gray-400">Secure</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-400">Real-time</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-2">
                    <FileText className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-sm text-gray-400">Detailed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Domain Search Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Info className="w-4 h-4 mr-2" />
              Hamısı Bir Domendən Başlayır
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Domen Adını Axtarın
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-2">
              .az domain sifariş etməmişdən öncə <span className="text-blue-400 font-semibold">whois.az</span> saytında yoxlayın
            </p>
            <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
              Saytınız da .az domenləri yalnız aktiv hosting planı olan müştərilər üçün əlçatandır. Davam etməzdən əvvəl bizim hosting 
              xidmətinə amin olun. <span className="text-blue-400 underline cursor-pointer">Şərtlər ovu...</span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4 bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={domainSearch}
                  onChange={(e) => setDomainSearch(e.target.value)}
                  placeholder="İstədiyiniz domen adını daxil edin"
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-lg"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="px-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                >
                  <option value=".az">.az</option>
                  <option value=".com">.com</option>
                  <option value=".net">.net</option>
                  <option value=".org">.org</option>
                </select>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  <Star className="w-5 h-5 mr-2 inline" />
                  Axtar
                </button>
              </div>
            </div>
          </div>

          {/* Domain Extensions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Domen Uzantısı</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                { ext: '.az', price: '₼40', popular: true },
                { ext: '.com', price: '₼25' },
                { ext: '.net', price: '₼38' },
                { ext: '.info', price: '₼55' },
                { ext: '.biz', price: '₼38' },
                { ext: '.org', price: '₼35' }
              ].map((domain, index) => (
                <div 
                  key={index}
                  className={`relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    domain.popular 
                      ? 'border-blue-500/50 bg-blue-900/20' 
                      : 'border-slate-600/50 hover:border-slate-500/70'
                  }`}
                >
                  {domain.popular && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{domain.ext}</div>
                    <div className="text-xl font-semibold text-blue-400 mb-1">{domain.price}</div>
                    <div className="text-gray-400 text-sm">il</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Məxfilik Qorunması */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Məxfilik Qorunması</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pulsuz WHOIS məxfilik qorunması hər uyğun domen 
                qeydiyyatına daxildir.
              </p>
            </div>

            {/* Sürətli Çatdırılma */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sürətli Çatdırılma</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sayt.az-də hər bir müştərinin vaxtını dəyərləndiririk. 
                Komandamız layihəni yəd edilən müddətdə təhvil 
                verməyə hazırdır.
              </p>
            </div>

            {/* 7/24 Dəstək */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">7/24 Dəstək</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Biz müştərilərimizə 7/24 dəstək təklif edirik. Hər hansı 
                bir sual və ya problem yaranarsa, komandamız həmişə 
                kömək etməyə hazırdır.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hosting Plans Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Hosting
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hosting Planınızı Seçin
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Yaşa Bir Başlanğıc Təhlükəsiz və Güclü Hosting Talab Edir
            </p>
          </div>

          {/* Hosting Plans Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Ekonomik Plan */}
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:scale-105 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-6">Ekonomik</h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-400">₼5</span>
                  <span className="text-gray-400 ml-2">/ay</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">1 Domen</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">3 GB Disk Həcmi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">3 E-mail Hesabı</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Premium müştəri dəstəyi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">SSL Təhlükəsizliyi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Yedəkləmə və bərpa</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm"><span className="font-semibold">Limitsiz</span> Trafik</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Təhlükəsizlik Xüsusiyyətləri</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">cPanel</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">FTP Girişi</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Sifarış et →
              </button>
            </div>

            {/* Standart Plan - Popular */}
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:scale-105 transition-all duration-300">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ƏN POPULYAR
                </div>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-6">Standart</h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-400">₼10</span>
                  <span className="text-gray-400 ml-2">/ay</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">2 Domen</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">8 GB Disk Həcmi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">5 E-mail Hesabı</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Premium müştəri dəstəyi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">SSL Təhlükəsizliyi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Yedəkləmə və bərpa</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm"><span className="font-semibold">Limitsiz</span> Trafik</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Təhlükəsizlik Xüsusiyyətləri</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">cPanel</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">FTP Girişi</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Sifarış et →
              </button>
            </div>

            {/* Professional Plan */}
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:scale-105 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-6">Professional</h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-400">₼20</span>
                  <span className="text-gray-400 ml-2">/ay</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">5 Domen</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">14 GB Disk Həcmi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm"><span className="font-semibold">Limitsiz</span> E-mail Hesabı</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Premium müştəri dəstəyi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">SSL Təhlükəsizliyi</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Yedəkləmə və bərpa</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm"><span className="font-semibold">Limitsiz</span> Trafik</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Təhlükəsizlik Xüsusiyyətləri</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">cPanel</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">FTP Girişi</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Sifarış et →
              </button>
            </div>
          </div>

          {/* Bottom Features Section */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* İşləmə Müddəti Zəmanəti */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">İşləmə Müddəti Zəmanəti</h4>
              <p className="text-gray-400 text-sm mb-1">99.9% uptime</p>
            </div>

            {/* Pulsuz SSL Sertifikatı */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Pulsuz SSL Sertifikatı</h4>
              <p className="text-gray-400 text-sm mb-1">SSL Sertifikatı Daxildir</p>
            </div>

            {/* 7/24 Dəstək */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">7/24 Dəstək</h4>
              <p className="text-gray-400 text-sm mb-1">24/7 support</p>
            </div>

            {/* Ani Qurağdırma */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-red-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Ani Qurağdırma</h4>
              <p className="text-gray-400 text-sm mb-1">Sürətli Başlanğıc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section - Şəkildəki kimi tam dizayn */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header - Şəkildəki kimi */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-400/20">
              <Globe className="w-4 h-4 mr-2" />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Son İşlərimiz
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Paylaşmaqdan Qurur Duyuruq
            </p>
          </div>

          {/* Portfolio Grid - Şəkildəki kimi 3x2 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioProjects[currentPortfolioPage - 1]?.map((project) => (
              <div key={project.id} className="group relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl">
                {/* Browser Window - Şəkildəki kimi */}
                <div className={`h-64 bg-gradient-to-br ${project.browserColor} relative overflow-hidden`}>
                  {/* Browser Header */}
                  <div className="bg-white/95 border-b border-gray-200 p-4 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-md px-4 py-2 text-xs text-gray-600 font-mono">
                      {project.url}
                    </div>
                  </div>

                  {/* Website Content - Hər layihə üçün xüsusi */}
                  <div className={`h-full ${project.contentBg} p-4`}>
                    {/* UG.NEWS */}
                    {project.name === 'UG.NEWS' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-4 gap-3">
                          {project.icons?.map((icon, index) => (
                            <div key={index} className={`${icon.size} ${icon.color} rounded-full`}></div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    )}

                    {/* FOOTBALL.BIZ */}
                    {project.name === 'FOOTBALL.BIZ' && (
                      <div className="text-white space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-red-500 rounded"></div>
                          <div className="w-6 h-6 bg-green-500 rounded"></div>
                          <div className="text-sm font-bold">Live Score</div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-white/30 rounded w-full"></div>
                          <div className="h-2 bg-white/30 rounded w-4/5"></div>
                          <div className="h-2 bg-white/30 rounded w-2/3"></div>
                        </div>
                        <div className="text-xs text-green-300">⚽ Live Updates</div>
                      </div>
                    )}

                    {/* WISHER.AZ */}
                    {project.name === 'WISHER.AZ' && (
                      <div className="text-white space-y-4 relative">
                        <div className="absolute top-2 right-2 w-16 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-6 bg-orange-300 rounded"></div>
                        </div>
                        <div className="font-bold text-sm">The Address of Gifts</div>
                        <div className="font-bold text-sm">and Wishes!</div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="h-4 bg-red-400 rounded mb-2"></div>
                          <div className="h-2 bg-white/40 rounded w-3/4"></div>
                        </div>
                      </div>
                    )}

                    {/* ZEMED.AZ */}
                    {project.name === 'ZEMED.AZ' && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            +
                          </div>
                          <div className="text-sm font-bold text-gray-700">Microsoft NetMR 1 ST</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <div className="w-8 h-6 bg-blue-500 rounded"></div>
                            <div className="w-8 h-6 bg-gray-300 rounded"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* BAYMAK.AZ */}
                    {project.name === 'BAYMAK.AZ' && (
                      <div className="text-white space-y-4">
                        <div className="text-sm font-bold">BAYMAK TAM YOĞUŞMALI</div>
                        <div className="text-sm font-bold">QAZAN LECTUS</div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="h-8 bg-white/30 rounded"></div>
                            <div className="h-8 bg-white/30 rounded"></div>
                            <div className="h-8 bg-white/30 rounded"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-white/40 rounded w-full"></div>
                            <div className="h-2 bg-white/40 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* QARMON.AZ */}
                    {project.name === 'QARMON.AZ' && (
                      <div className="text-white space-y-4 relative">
                        <div className="absolute top-0 right-0 w-20 h-16 bg-green-800/30 rounded-bl-2xl"></div>
                        <div className="text-sm font-bold">Azərbaycan Qarmon Gəlin</div>
                        <div className="text-xs opacity-80">Nature & Tourism Platform</div>
                        <div className="space-y-2">
                          <div className="h-2 bg-white/30 rounded w-4/5"></div>
                          <div className="h-2 bg-white/30 rounded w-2/3"></div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="w-8 h-6 bg-green-400 rounded-full opacity-60"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Label - Şəkildəki kimi */}
                <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm rounded-2xl px-4 py-2 border border-slate-600/50">
                  <h3 className="text-white font-bold text-sm">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - Şəkildəki kimi */}
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => setCurrentPortfolioPage(Math.max(1, currentPortfolioPage - 1))}
              className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              disabled={currentPortfolioPage === 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1">
              {portfolioProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPortfolioPage(index + 1)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm transition-colors ${
                    currentPortfolioPage === index + 1
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700/30 hover:bg-slate-600/50 text-gray-400 hover:text-white'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentPortfolioPage(Math.min(portfolioProjects.length, currentPortfolioPage + 1))}
              className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              disabled={currentPortfolioPage === portfolioProjects.length}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Content Section - Şəkildəki kimi tam dizayn */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900/80 to-slate-800 py-20 relative overflow-hidden">
        {/* Background Decorative Elements - Şəkildəki kimi yıldızlar */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-16 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-80 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-60 right-40 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header - Şəkildəki kimi tam uyğun */}
          <div className="text-center mb-16">
            {/* Video Content Badge - Şəkildəki kimi play icon və mətn */}
            <div className="inline-flex items-center bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-red-400/30">
              <Play className="w-4 h-4 mr-2" />
              Video Content
            </div>
            
            {/* Main Heading - Şəkildəki kimi */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Videolarımızı Kəşf Edin
            </h2>
            
            {/* Subtitle - Şəkildəki kimi */}
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              Kəşf Edin, Öyrənin və Uğur Qazanın
            </h3>
            
            {/* Description - Şəkildəki kimi */}
            <p className="text-gray-400 text-base max-w-4xl mx-auto leading-relaxed">
              Son nailiyyətlərimizi, media çıxışlarımızı və ətraflı təlimlərimizi izləmək üçün video 
              kolleksiyamıza göz atın. İdeal veb saytınızı qurmaqda sizə necə kömək edə 
              biləcəyimizi öyrənin və uğur hekayəmizdən ilham alın.
            </p>
          </div>

          {/* Video Cards Container - Şəkildəki kimi */}
          <div className="relative">
            {/* Navigation Arrows - Şəkildəki kimi yanlarda */}
            <button 
              onClick={() => setCurrentVideoPage(Math.max(1, currentVideoPage - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-slate-700/60 hover:bg-slate-600/60 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 border border-slate-600/50 z-10"
              disabled={currentVideoPage === 1}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setCurrentVideoPage(Math.min(videoContent.length, currentVideoPage + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-slate-700/60 hover:bg-slate-600/60 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 border border-slate-600/50 z-10"
              disabled={currentVideoPage === videoContent.length}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Video Cards Grid - Şəkildəki kimi 2 video yan-yana */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {videoContent[currentVideoPage - 1]?.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative bg-slate-800/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/40 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                >
                  {/* Video Thumbnail Container */}
                  <div className="relative aspect-video">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    >
                      {/* Overlay Gradient - Şəkildəki kimi rənglər */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${video.bgColor} opacity-80`}></div>
                    </div>

                    {/* YouTube Style Play Button - Şəkildəki kimi tam mərkəzdə */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Video Title Overlay - Şəkildəki kimi altda */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Şəkildəki kimi */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {videoContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoPage(index + 1)}
                className={`transition-all duration-300 rounded-full ${
                  currentVideoPage === index + 1
                    ? 'w-8 h-3 bg-pink-500' // Şəkildə görünən aktiv pink nöqtə
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Success Stories Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <div className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                success stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Uğur Hekayələrimiz
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Müştərilərimizin rəqəmsal transformasiya səyahətində qazandıqları 
                uğurlar və təcrübələr.
              </p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
              Bütün Hekayələr
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Success Story Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* E-Commerce Success Card */}
            <div className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              {/* Card Image/Logo Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-12 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">ONLINE STORE</div>
                  <div className="text-sm text-gray-600">350% artım</div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 bg-gradient-to-br from-emerald-800 to-emerald-900">
                <div className="mb-6">
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    E-Commerce
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Onlayn Mağaza</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Ənənəvi mağazadan rəqəmsal ticarətə keçid, satış həcmində 
                  350% artım və müştəri məmnuniyyətində əhəmiyyətli yüksəliş
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">350%</div>
                    <div className="text-xs text-gray-400">Satış Artımı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">5K+</div>
                    <div className="text-xs text-gray-400">Yeni Müştəri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">4.8</div>
                    <div className="text-xs text-gray-400">Reytinq</div>
                  </div>
                </div>
                
                <button className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                  <span>Ətraflı oxu</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Corporate Website Success Card */}
            <div className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              {/* Card Image/Logo Section */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">CORPORATE</div>
                  <div className="text-sm text-gray-600">Peşəkar imaj</div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 bg-gradient-to-br from-blue-800 to-blue-900">
                <div className="mb-6">
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Korporativ
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Korporativ Sayt</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Şirkət imicinin gücləndirilməsi, beynəlxalq partnyor cəlbetmə 
                  və iş həcmində 200% artım əldə edilməsi
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">200%</div>
                    <div className="text-xs text-gray-400">İş Artımı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">25+</div>
                    <div className="text-xs text-gray-400">Partnyor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">95%</div>
                    <div className="text-xs text-gray-400">Məmnuniyyət</div>
                  </div>
                </div>
                
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  <span>Ətraflı oxu</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile App Success Card */}
            <div className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              {/* Card Image/Logo Section */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-12 flex items-center justify-center min-h-[200px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100"></div>
                <div className="relative text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">MOBILE APP</div>
                  <div className="text-sm text-gray-600">50K+ yüklənmə</div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 bg-gradient-to-br from-purple-800 to-indigo-900">
                <div className="mb-6">
                  <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    Mobil Tətbiq
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Mobil Tətbiq</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  İstifadəçi dostu mobil tətbiqi ilə müştəri bazasının 
                  genişləndirilməsi və aktiv istifadəçi sayında rekord artım
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">50K+</div>
                    <div className="text-xs text-gray-400">Yüklənmə</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">15K</div>
                    <div className="text-xs text-gray-400">Aktiv User</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">4.7</div>
                    <div className="text-xs text-gray-400">App Store</div>
                  </div>
                </div>
                
                <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  <span>Ətraflı oxu</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Sizin uğur hekayənizi yazmağa hazırsınız?
              </h3>
              <p className="text-gray-300 mb-8">
                Rəqəmsal dönüşüm səyahətinizdə bizi yanınızda görün və böyük nailiyyətlərə imza atın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Layihəyə başla
                </button>
                <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50">
                  Portfelimizi göstər
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Komandamızın Parda Arxası */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Komandamızın Parda Arxası
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Komandamızın Parda Arxası
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Behind the Scenes Team Content
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {/* Ramil Mirzayev */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-300 rotate-45"></div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Ramil Mirzayev</h3>
              <p className="text-gray-400 text-sm">CEO & Founder</p>
            </div>

            {/* Rashid Adirahman */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/30 rounded-sm rotate-12"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Rashid Adirahman</h3>
              <p className="text-gray-400 text-sm">Product Designer</p>
            </div>

            {/* Ahmad Rustamov */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white/40 rounded-full"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Ahmad Rustamov</h3>
              <p className="text-gray-400 text-sm">Tech Lead</p>
            </div>

            {/* Murad Aqlamedov */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full -ml-2"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Murad Aqlamedov</h3>
              <p className="text-gray-400 text-sm">Backend Developer</p>
            </div>

            {/* Fuad Mammadov */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 transform rotate-45">
                  <div className="w-4 h-4 bg-cyan-300 rounded-full m-2"></div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Fuad Mammadov</h3>
              <p className="text-gray-400 text-sm">Full Stack</p>
            </div>

            {/* Mirafam Eminalyli */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                <div className="w-5 h-5 bg-white/60 rounded-full mx-2"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Mirafam Eminalyli</h3>
              <p className="text-gray-400 text-sm">DevOps Engineer</p>
            </div>

            {/* Idrak Mustafazada */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-white/30 rounded-lg rotate-12 flex items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-300 rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Idrak Mustafazada</h3>
              <p className="text-gray-400 text-sm">Frontend</p>
            </div>

            {/* Saida Chinani */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Saida Chinani</h3>
              <p className="text-gray-400 text-sm">UI Designer</p>
            </div>

            {/* Matanat M. */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 text-center hover:scale-105 transition-all duration-300">
              {/* Geometric Shape instead of photo */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 border border-white/30 rounded-full -ml-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-violet-300 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Matanat M.</h3>
              <p className="text-gray-400 text-sm">Lead Developer</p>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Böyüyən Komandamıza Qoşulun
              </h3>
              <p className="text-gray-300 mb-8">
                Müstəqillik çərçivəsində bizim tərəfdə çalışmaq üçün yalnız yüksək səviyyədə olan developerləri dəvət edirik. Əgər özünüzü hazır hiss edirsizsə, bizə müraciət edin.
              </p>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Açıq Vəzifələrimiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 relative overflow-hidden">
        {/* Decorative Stars */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-40 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
              <BarChart3 className="w-5 h-5 mr-3" />
              Nailiyyətlərimiz
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Statistikalarımız
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Uğurumuzun Arxasındakı Rəqəmlər
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experience Card */}
            <div className="relative bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/5 rounded-3xl"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-500">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>

              {/* Statistics Number */}
              <div className="relative z-10 text-center mb-6">
                <div className="text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <div className="text-lg font-medium text-blue-300">il</div>
              </div>

              {/* Description */}
              <div className="relative z-10 text-center">
                <p className="text-slate-300 text-base leading-relaxed">
                  Biz Təcrübəmizə<br />
                  Güvənirik
                </p>
              </div>
            </div>

            {/* Customers Card */}
            <div className="relative bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 group overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-pink-800/5 rounded-3xl"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-shadow duration-500">
                <UsersIcon className="w-10 h-10 text-white" />
              </div>

              {/* Statistics Number */}
              <div className="relative z-10 text-center mb-6">
                <div className="text-5xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 text-center">
                <p className="text-slate-300 text-base leading-relaxed">
                  Məmnun<br />
                  Müştərilər
                </p>
              </div>
            </div>

            {/* Projects Card */}
            <div className="relative bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-orange-800/5 rounded-3xl"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow duration-500">
                <Database className="w-10 h-10 text-white" />
              </div>

              {/* Statistics Number */}
              <div className="relative z-10 text-center mb-6">
                <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  200+
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 text-center">
                <p className="text-slate-300 text-base leading-relaxed">
                  Tamamlanan<br />
                  Layihələr
                </p>
              </div>
            </div>

            {/* Team Card */}
            <div className="relative bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/30 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 group overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-800/5 rounded-3xl"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow duration-500">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              {/* Statistics Number */}
              <div className="relative z-10 text-center mb-6">
                <div className="text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 text-center">
                <p className="text-slate-300 text-base leading-relaxed">
                  Peşəkarlar<br />
                  Komandası
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section - Şəkildəki kimi tam dizayn */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900/80 to-slate-900 py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header - Şəkildəki kimi */}
          <div className="text-center mb-12">
            {/* Client Reviews Badge */}
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-400/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Client Reviews
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Müştərilərimizin Rəyları
            </h2>
            <p className="text-gray-400 text-lg">
              Müştərilarin fikirlari
            </p>
          </div>

          {/* Review Card Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentReviewPage(Math.max(1, currentReviewPage - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-slate-800/60 hover:bg-slate-700/60 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-slate-600/50 z-10"
              disabled={currentReviewPage === 1}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setCurrentReviewPage(Math.min(customerReviews.length, currentReviewPage + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-slate-800/60 hover:bg-slate-700/60 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-slate-600/50 z-10"
              disabled={currentReviewPage === customerReviews.length}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Review Card - Şəkildəki kimi tam dizayn */}
            <div className="bg-slate-800/30 backdrop-blur-lg rounded-3xl p-10 border border-slate-700/50 mx-auto max-w-2xl">
              {customerReviews[currentReviewPage - 1]?.map((review) => (
                <div key={review.id} className="text-center">
                  {/* Star Rating - Şəkildəki kimi 5 yıldız */}
                  <div className="flex justify-center items-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Review Title */}
                  <h3 className="text-xl font-bold text-white mb-6">
                    {review.title}
                  </h3>

                  {/* Review Text - Şəkildəki kimi quote marks və mətn */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                    "{review.review}"
                  </blockquote>

                  {/* Author Info - Şəkildəki kimi avatar və məlumat */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Avatar - Şəkildəki kimi dairəvi blue background */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center relative">
                      <span className="text-white font-bold text-lg">
                        {review.author.avatar}
                      </span>
                      {/* Blue dot indicator - Şəkildə görünən kimi */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-800"></div>
                    </div>
                    
                    {/* Author Details */}
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">
                        {review.author.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {review.author.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Şəkildəki kimi */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReviewPage(index + 1)}
                className={`transition-all duration-300 rounded-full ${
                  currentReviewPage === index + 1
                    ? 'w-8 h-3 bg-blue-500'
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section - Şəkildəki kimi tam dizayn */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header - Şəkildəki kimi */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-400/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog & Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bloqumuza daxil olun
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Vebın İnkişafı, Dizaynı və Onlayn Strategiyaları ilə bağlı maraqli məqalələri kəşf edin
            </p>
          </div>

          {/* Blog Articles Grid - Şəkildəki kimi 3 məqalə */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogArticles.map((article) => (
              <div 
                key={article.id} 
                className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border ${article.cardBorder} hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl`}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.bgGradient} opacity-80`}></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-slate-600/50">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/20"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Article Title */}
                  <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Read More Link */}
                  <div className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:gap-3 group-hover:text-blue-300">
                    <span>Oxumaq üçün</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bütün Bloglar Button - Şəkildəki kimi */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto">
              Bütün Bloglar
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;