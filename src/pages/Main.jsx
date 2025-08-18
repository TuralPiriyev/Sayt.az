import React, { useState } from 'react';
import { Star, Zap, Check, Code, Shield, FileText, Search, Wrench, Info, Lock, Clock, Rocket, Trophy, MessageCircle } from 'lucide-react';

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
                      className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
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
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
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
                  <span className="text-gray-300 text-sm">SSL Təhlükəsizliği</span>
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
                  <span className="text-gray-300 text-sm">SSL Təhlükəsizliği</span>
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
                  <span className="text-gray-300 text-sm">SSL Təhlükəsizliği</span>
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

      {/* Startups Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                startups
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Startuplar
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Müxtəsəs məsləhətlərimizlə biznesinizi necə inkişaf etdirəcəyinizi 
                öyrənin.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              Bütün Startuplar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Startup Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Telefon.az Card */}
            <div className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              {/* Card Image/Logo Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">TELEFON.AZ</div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="mb-6">
                  <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    Startup
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">telefon.az</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  telefonların online alqı və satışı
                </p>
                
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  <span>Ətraflı</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Kredit.az Card */}
            <div className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              {/* Card Image/Logo Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">kredit.az</div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 bg-gradient-to-br from-purple-800 to-purple-900">
                <div className="mb-6">
                  <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    Startup
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">kredit.az</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  kredit.az saytı sizinlə bankların kredit faizləri 
                  haqqında məlumatlar bir araya toplayacaq
                </p>
                
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  <span>Ətraflı</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Wisher.az Card */}
            <div className="bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              {/* Card Image/Logo Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center min-h-[200px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100"></div>
                <div className="relative text-center">
                  <div className="text-lg font-bold text-gray-800 mb-2">The Address of Gifts</div>
                  <div className="text-lg font-bold text-gray-800 mb-4">and Wishes!</div>
                  <div className="w-20 h-12 bg-orange-500 rounded mx-auto mb-4"></div>
                  <div className="grid grid-cols-3 gap-1 max-w-[100px] mx-auto">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-red-400 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 bg-gradient-to-br from-indigo-800 to-purple-900">
                <div className="mb-6">
                  <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    Startup
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Wisher.az</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Wisher.az sizinlə istəkləri xatırlatmaq və qeyd 
                  etmək üçün əsas təşkilatçınızdır
                </p>
                
                <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  <span>Ətraflı</span>
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
                Startapınızı başlatmağa hazırsınız?
              </h3>
              <p className="text-gray-300 mb-8">
                Biznesiniz üçün mükəmməl onlayn mövcudluq yaratmağınıza kömək edək
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Başla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;