import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  BarChart3, 
  Shield, 
  Smartphone,
  Star,
  CheckCircle,
  Users,
  Clock,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  PlayCircle
} from 'lucide-react';

// Button Component
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-slate-900 focus:ring-white',
    ghost: 'text-white hover:bg-white/10 focus:ring-white/50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className = '', hover = false, ...props }) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6';
  const hoverClasses = hover ? 'hover:bg-slate-800/70 hover:border-slate-600/50 hover:transform hover:scale-105 transition-all duration-300' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Counter Component
const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: 500, suffix: '+', label: 'İşa Sərmayə Online Mağaza' },
    { number: 99.9, suffix: '%', label: 'İşanə Müddəti Zəmanəti' },
    { number: 2, suffix: '', label: 'Həftə Çatdırılma' },
    { number: 24, suffix: '/7', label: 'Texniki Dəstək' }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center" hover>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-slate-300 text-sm lg:text-base">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Məhsul Kataloqu İdarəetməsi',
      description: 'Kateqoriyalar, variantlar və inventar idarəsi ilə asan məhsul idarəetməsi'
    },
    {
      icon: CreditCard,
      title: 'Təhlükəsiz Ödəniş İnteqrasiyası',
      description: 'Yerli banklar, Stripe və PayPal daxil olmaqla çoxlu ödəniş şəkilleri'
    },
    {
      icon: Truck,
      title: 'Çatdırılma və Logistika',
      description: 'Avtomatlaşdırılmış çatdırılma hesablamaları və sifarişlərin izlənməsi'
    },
    {
      icon: BarChart3,
      title: 'Satış Analitikası',
      description: 'Real vaxt satış hesabatları və müştəri davranışı təhililləri'
    },
    {
      icon: Shield,
      title: 'SSL Təhlükəsizliyi',
      description: 'Pulsuz SSL sertifikatı və PCI uyğunluğu ilə bank səviyyəli təhlükəsizlik'
    },
    {
      icon: Smartphone,
      title: 'Mobil Uyğunluq',
      description: 'PWA dizaynı ilə bütün cihazlar üçün optimallaşdırılmış'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Online Satış Üçün Hər Şey
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Müasir online biznes üçün qabaqcıl funksiyalarla tam e-ticarət həlləri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            E-ticarət Saytının Professional Hazırlanması
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            E-ticarət sayti hazırlanması ✓ Laravel və WordPress WooCommerce ✓ Bank 
            inteqrasiyası ✓ Cəmi 2 həftəya!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto">
              <PlayCircle className="w-5 h-5 mr-2" />
              Başla
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Portfoyloya Bax
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Niyə Bizi Seçməlisiniz?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              5+ illik təcrübə ilə 500+ müvəffəqiyyətli proyekt. Müasir texnologiyalar və 
              fərdi yanaşma ilə biznesinizi onlinə daşıyın.
            </p>
            
            <div className="space-y-4">
              {[
                'Professional dizayn və UX/UI',
                'Sürətli yükləmə və SEO optimallaşdırılması',
                '24/7 texniki dəstək',
                'Mobil uyğun responsive dizayn',
                'Təhlükəsiz ödəniş sistemləri'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">5.0 Reytinq</h3>
                <p className="text-slate-300 mb-6">100+ müştəridən aldığımız orta qiymət</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-400 italic">
                  "Peşəkar komanda və keyfiyyətli xidmət. Tövsiyyə edirəm!"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-800/30">
            {/* Rocket Icon */}
            <div className="w-16 h-16 mx-auto mb-8 bg-blue-500 rounded-2xl flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white transform rotate-45" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              E-ticarət Səyahətinizə Başlamağa Hazırsınız?
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Online mağaza layihəniz üçün bu gün pulsuz məsləhət və qiymət təklifi alın
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Pulsuz konsultasiya almaq üçün klik edin"
              >
                Pulsuz Konsultasiya Al
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl transition-all duration-300"
                aria-label="Satış komandası ilə əlaqə saxlamaq üçün klik edin"
              >
                Satış Komandası ilə Əlaqə
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Main ElectronWebSite Component
const ElectronWebSite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <Stats />
      <Features />
      <CTASection />
    </div>
  );
};

export default ElectronWebSite;