import React from 'react';
import { 
  Palette, 
  Shield, 
  Zap, 
  Search, 
  Clock, 
  Sparkles,
  ArrowRight,
  Play,
  Check,
  MessageCircle
} from 'lucide-react';

// Button Component
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  disabled = false,
  onClick,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500 active:bg-emerald-700',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500 active:bg-slate-800',
    ghost: 'bg-transparent text-white border border-slate-600 hover:bg-slate-700 focus:ring-slate-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      role="button"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </button>
  );
};

// StatCard Component
const StatCard = ({ number, label, className = '' }) => {
  return (
    <div 
      className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 ${className}`}
      role="article"
      aria-label={`${label}: ${number}`}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-slate-300 text-sm md:text-base">
        {label}
      </div>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  iconColor = 'text-emerald-400'
}) => {
  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
      role="article"
      aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-700 mb-4 group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 
        id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-lg font-semibold text-white mb-2"
      >
        {title}
      </h3>
      <p className="text-slate-300 text-sm">
        {description}
      </p>
    </div>
  );
};

// TechIcon Component
const TechIcon = ({ 
  name, 
  icon,
  color = 'text-white',
  bgColor = 'bg-slate-700'
}) => {
  return (
    <div 
      className="flex flex-col items-center p-4 rounded-lg hover:scale-105 transition-all duration-300 group"
      role="article"
      aria-label={`${name} technology`}
    >
      <div className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-300`}>
        <span className={`text-2xl font-bold ${color}`}>
          {icon}
        </span>
      </div>
      <span className="text-sm text-slate-300 font-medium">
        {name}
      </span>
    </div>
  );
};

// BenefitsList Component
const BenefitsList = ({ title, subtitle, benefits }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {title}
        </h2>
        <p className="text-slate-300">
          {subtitle}
        </p>
      </div>
      
      <ul className="space-y-4" role="list">
        {benefits.map((benefit, index) => (
          <li 
            key={index}
            className="flex items-start space-x-3 group"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
              <Check className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-slate-300 group-hover:text-white transition-colors duration-200">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// WhatsAppFloat Component
const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/994505551234', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group hover:scale-110"
      aria-label="WhatsApp ilə əlaqə"
      role="button"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
    </button>
  );
};

// Main SmallBusiness Component
const SmallBusiness = () => {
  const stats = [
    { number: '300+', label: 'Xoşbəxt bizneslər' },
    { number: '14', label: 'Gün Orta Təslim' },
    { number: '100%', label: 'Mobil Responsive' },
    { number: '24/7', label: 'Dəstək Mövcuddur' }
  ];

  const features = [
    {
      icon: Palette,
      title: 'Müasir Dizayn',
      description: 'Hədəfinizi əks etdirən təmiz, peşəkar dizaynlarla brendinizi gücləndir'
    },
    {
      icon: Shield,
      title: 'Şəffaflı Qiymət',
      description: 'Keyfiyyətdən güzəştə getmədən bütçənizə uyğun həllər'
    },
    {
      icon: Zap,
      title: 'Sürətli Təslim',
      description: 'Layihənizi çap 2 həftədə hazira dəyir'
    },
    {
      icon: Search,
      title: 'SEO Optimallaşdırılmış',
      description: 'Google-da axtarışa kolok olan dəxil SEO optimizasiyası'
    },
    {
      icon: Clock,
      title: '24/7 Dəstək',
      description: 'İstidamınızı olduqda gecə-gündüz yardım'
    },
    {
      icon: Sparkles,
      title: 'Xüsusi Funksiyalar',
      description: 'Biznesinizin ehtiyaclarına əsaslanan uyğunlaşdırılma funksionallıq'
    }
  ];

  const technologies = [
    { name: 'WordPress', icon: 'W', bgColor: 'bg-blue-600' },
    { name: 'React', icon: '⚛', bgColor: 'bg-cyan-500' },
    { name: 'Next.js', icon: 'N', bgColor: 'bg-gray-900' },
    { name: 'Tailwind', icon: '🌊', bgColor: 'bg-teal-500' },
    { name: 'Bootstrap', icon: 'B', bgColor: 'bg-purple-600' },
    { name: 'JavaScript', icon: 'JS', bgColor: 'bg-yellow-500' }
  ];

  const benefits = [
    'Onlayn Görünürlüyü Artırır',
    'Daha Çox Müştəri Cəlb Edir',
    'Brendin Etibarlılığını Qurur',
    '24/7 əlçatandıq',
    'Rəqabət Üstünlüyü',
    'Şəffaf Marketinq',
    'Müştəri İlə əlaqə',
    'İgnəsi Artırır'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32" role="banner">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Peşəkar Kiçik Biznes Saytları
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Müasir, responsive veb sayt ilə biznesinizi onlayn dünyaya çıxarın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" icon={ArrowRight}>
              Başla
            </Button>
            <Button variant="secondary" size="lg" icon={Play}>
              Portfolyoya Bax
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24" role="region" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Statistikalar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24" role="region" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Niyə Bizim Kiçik Biznes Həllərini Seçməlisiniz?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Güclü onlayn mövcudluğu yaratmaq üçün lazım olan hər şey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-slate-800/30" role="region" aria-labelledby="tech-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="tech-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Müasir Texnologiyalarla Qurulub
            </h2>
            <p className="text-lg text-slate-300">
              Saytınızın sürətli, təhlükəsiz və genişlənər olması təmin edə ən son texnologiyalardan istifadə edirik
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <TechIcon
                key={index}
                name={tech.name}
                icon={tech.icon}
                bgColor={tech.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24" role="region" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <BenefitsList
                title="Biznesiniz üçün Faydalar"
                subtitle="Onlayn uğur qazanmaq üçün lazım olan hər şey"
                benefits={benefits}
              />
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 lg:p-12 border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center justify-center h-64 lg:h-80">
                  <div className="text-emerald-400 animate-pulse">
                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-center text-slate-300">
                      <div className="text-lg font-semibold mb-2">Peşəkar Dizayn</div>
                      <div className="text-sm">Biznesinizi fərqləndirib</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" role="region" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-2xl border border-emerald-500/20 p-8 lg:p-12 text-center backdrop-blur-sm">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-full mb-6">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Biznesinizi Onlayn Dünyaya Çıxarmağa Hazırsınız?
              </h2>
              <p className="text-lg text-slate-300">
                Pulsuz konsultasiya ilə bu gün başlayın
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={ArrowRight}>
                Pulsuz Konsultasiya Al
              </Button>
              <Button variant="secondary" size="lg">
                Satış Komandası ilə əlaqə
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Kiçik Biznes Saytları. Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
};

export default SmallBusiness;