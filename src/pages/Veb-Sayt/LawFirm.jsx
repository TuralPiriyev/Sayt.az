import React from 'react';
import { 
  Check, 
  Scale, 
  Users, 
  TrendingUp, 
  Search, 
  Headphones,
  Settings,
  Shield,
  Globe,
  Briefcase,
  FileText,
  MessageSquare,
  Phone,
  MessageCircle
} from 'lucide-react';

// Reusable Button Component
const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-purple-500',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 focus:ring-gray-500',
    outline: 'bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// Stats Card Component
const StatCard = ({ icon: Icon, number, label, subtitle }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/60 transition-all duration-300 hover:transform hover:scale-105">
    <div className="flex justify-center mb-3">
      <Icon className="w-8 h-8 text-purple-400" />
    </div>
    <div className="text-2xl font-bold text-white mb-1">{number}</div>
    <div className="text-gray-300 font-medium">{label}</div>
    <div className="text-gray-400 text-sm">{subtitle}</div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:transform hover:scale-105 group">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
          <Check className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// WhatsApp Floating Button
const WhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <button 
      className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label="WhatsApp ilə əlaqə saxlayın"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  </div>
);

const LawFirm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hüquq Firması Saytının Hazırlanması
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Etimad yaradan, təcrübəni numayiş etdirən və təcrübəniz üçün keyfiyyətli müştərilər 
            cəlb edən peşəkar hüquqi veb saytlar.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto">
              Başlayın
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Portfolio Baxın
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <StatCard 
              icon={Briefcase} 
              number="75+" 
              label="Layihə" 
              subtitle="Projects"
            />
            <StatCard 
              icon={TrendingUp} 
              number="45%" 
              label="Konversiya" 
              subtitle="Conversion"
            />
            <StatCard 
              icon={Search} 
              number="İlk 3" 
              label="SEO" 
              subtitle="Seo"
            />
            <StatCard 
              icon={Headphones} 
              number="24/7" 
              label="Dəstək" 
              subtitle="Support"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Əsas Xüsusiyyətlər
            </h2>
            <p className="text-lg text-gray-300">
              Uğur üçün lazım olan hər şey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Settings}
              title="İş İdarəetmə İnteqrasiyası"
              description="Müştəri işlərini asanlıqla idarə etmək üçün müasir sistem inteqrasiyası"
            />
            <FeatureCard 
              icon={Shield}
              title="Təhlükəsiz Müştəri Portalı"
              description="Müştəriləriniz üçün təhlükəsiz və rahat əlaqə platforması"
            />
            <FeatureCard 
              icon={Users}
              title="Vəkil Profil Səhifələri"
              description="Hər bir vəkil üçün peşəkar və ətraflı profil səhifələri"
            />
            <FeatureCard 
              icon={FileText}
              title="Təcrübə Sahələrinin Nümayişi"
              description="Təcrübə sahələrinizi effektiv şəkildə təqdim edən xüsusi dizayn"
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Onlayn Konsultasiya Rezervasiyası"
              description="Müştərilər üçün asanlıqla görüş rezerv edə biləcəkləri sistem"
            />
            <FeatureCard 
              icon={Globe}
              title="Hüquqi Bloq və Resurslar"
              description="SEO üçün optimizə edilmiş məqalələr və resurs mərkəzi"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Niyə Bizim Həlləri Seçməlisiniz?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Sahənizə uyğun geniş veb həllər təqdim edirik
              </p>
              
              <div className="space-y-4">
                {[
                  'Sahəyə xüsusi təcrübə və ən yaxşı praktikalar',
                  'Yerli və qlobal üçün SEO optimallaşdırılmış',
                  'Azərbaycan dilində 24/7 texniki dəstək',
                  'Standart layihələr üçün 2 həftəlik sürətli təslim',
                  'İlk ay üçün pulsuz hosting',
                  'Ömürlük yeniləmələr və texniki xidmət imkanları',
                  '100% responsive və mobil uyğun',
                  'Mövcud sistemlərlə inteqrasiya'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-200">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Illustration */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                  <Scale className="w-32 h-32 text-purple-400" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 sm:p-12 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Layihənizi Başlatmağa Hazırsınız?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Bu gün veb sayt layihəniz üçün pulsuz konsultasiya və təklif alın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Pulsuz Konsultasiya Alın
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Komandamızla Əlaqə
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default LawFirm;