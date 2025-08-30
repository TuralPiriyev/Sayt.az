import React from 'react';
import { 
  Check, 
  Edit3, 
  Users, 
  TrendingUp, 
  Zap, 
  Headphones,
  Settings,
  Shield,
  Globe,
  Briefcase,
  FileText,
  MessageSquare,
  Phone,
  MessageCircle,
  Palette,
  Database,
  Share2,
  Mail,
  BarChart3,
  Image as ImageIcon
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

// Reusable Button Component
const Button = ({ variant = 'primary', size = 'md', children, className = '', disabled = false, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl focus:ring-purple-500 disabled:hover:from-purple-600 disabled:hover:to-pink-600',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 focus:ring-gray-500 disabled:hover:bg-gray-700',
    outline: 'bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-500 disabled:hover:bg-transparent disabled:hover:text-purple-400'
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
      {...props}
    >
      {children}
    </button>
  );
};

// Stats Card Component
const StatCard = ({ icon: Icon, number, label, subtitle }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/60 transition-all duration-300 hover:transform hover:scale-105 group">
    <div className="flex justify-center mb-3">
      <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
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
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
          <Check className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      </div>
    </div>
  </div>
);

// WhatsApp Floating Button
const WhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <button 
      className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
      aria-label="WhatsApp ilə əlaqə saxlayın"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  </div>
);

// Navigation Component
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <Edit3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-lg">BlogSite</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Ana Səhifə</a>
          <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Xidmətlər</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Əlaqə</a>
        </div>
        
        <Button size="sm">
          Başlayın
        </Button>
      </div>
    </div>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50 py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">BlogSite</span>
          </div>
          <p className="text-gray-400 mb-4 max-w-md">
            Peşəkar blog və şəxsi saytlar yaradaraq, sizin rəqəmsal mövcudluğunuzu gücləndirir və hədəf auditoriyaya çatmağınıza kömək edirik.
          </p>
          <div className="flex space-x-4">
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200">
              <MessageSquare className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200">
              <Mail className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200">
              <Phone className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Xidmətlər</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog Dizaynı</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Şəxsi Sayt</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">SEO Optimallaşdırma</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Məzmun İdarəetmə</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Əlaqə</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">info@blogsite.az</li>
            <li className="text-gray-400">+994 XX XXX XX XX</li>
            <li className="text-gray-400">Bakı, Azərbaycan</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
        <p className="text-gray-400">© 2024 BlogSite. Bütün hüquqlar qorunur.</p>
      </div>
    </div>
  </footer>
);

const Blog = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('blog_title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unikal səsinizi və üslubunuzu əks etdirən heyrətamiz şəxsi veb sayt və ya bloq ilə 
            özünüzü ifadə edin.
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
              number="200+" 
              label="Layihə" 
              subtitle="Projects"
            />
            <StatCard 
              icon={Zap} 
              number="2s" 
              label="Yüklanma" 
              subtitle="Speed"
            />
            <StatCard 
              icon={Globe} 
              number="100%" 
              label="Responsiv" 
              subtitle="Responsive"
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
      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('blog_features_title')}
            </h2>
            <p className="text-lg text-gray-300">
              {t('blog_features_subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Palette}
              title={t('blog_feature1_title')}
              description={t('blog_feature1_desc')}
            />
            <FeatureCard 
              icon={Database}
              title={t('blog_feature2_title')}
              description={t('blog_feature2_desc')}
            />
            <FeatureCard 
              icon={Share2}
              title={t('blog_feature3_title')}
              description={t('blog_feature3_desc')}
            />
            <FeatureCard 
              icon={Mail}
              title={t('blog_feature4_title')}
              description={t('blog_feature4_desc')}
            />
            <FeatureCard 
              icon={BarChart3}
              title={t('blog_feature5_title')}
              description={t('blog_feature5_desc')}
            />
            <FeatureCard 
              icon={ImageIcon}
              title={t('blog_feature6_title')}
              description={t('blog_feature6_desc')}
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
                {t('blog_why_choose_title')}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {t('blog_why_choose_subtitle')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('blog_benefit1'),
                  t('blog_benefit2'),
                  t('blog_benefit3'),
                  t('blog_benefit4'),
                  t('blog_benefit5'),
                  t('blog_benefit6'),
                  t('blog_benefit7'),
                  t('blog_benefit8')
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
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                  <Edit3 className="w-32 h-32 text-purple-400" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
                label={t('blog_projects')} 
                subtitle="Projects"
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
                label={t('blog_speed')} 
                subtitle="Speed"
              {t('blog_cta_title')}
            </h2>
              {t('blog_subtitle')}
              {t('blog_cta_subtitle')}
                label={t('blog_responsive')} 
                subtitle="Responsive"
              <Button size="lg" className="w-full sm:w-auto">
                {t('blog_start_button')}
                {t('blog_cta_button1')}
              </Button>
                label={t('blog_support')} 
                {t('blog_cta_button2')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Blog;