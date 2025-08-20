import React from 'react';
import { 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  BarChart3, 
  Shield, 
  Smartphone,
  MessageCircle,
  ShoppingCart,
  Zap,
  Database,
  Layers,
  Code,
  Store,
  Check
} from 'lucide-react';

// Utility function for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Button Component
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 active:bg-blue-800',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 active:bg-purple-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={cn(
        'bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6',
        hover && 'hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

// StatCard Component
const StatCard = ({ value, label }) => {
  return (
    <Card className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-slate-300 text-sm">{label}</div>
    </Card>
  );
};

// ServiceCard Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card>
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

// TechCard Component
const TechCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
        {icon}
      </div>
      <span className="text-white font-medium text-sm">{name}</span>
    </div>
  );
};

// ChecklistItem Component
const ChecklistItem = ({ children }) => {
  return (
    <div className="flex items-center space-x-3 text-slate-300">
      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
        <Check size={12} className="text-white" />
      </div>
      <span>{children}</span>
    </div>
  );
};

// Main Component
const MakingTheSite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              E-ticarət Saytının Professional Hazırlanması
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              E-ticarət saytı hazırlanması ✓ Laravel və WordPress WooCommerce ✓ Bank 
              integrasiyası ✓ Cəmi 2 həftəyə!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" aria-label="Layihəyə başla">
                Başla
              </Button>
              <Button variant="secondary" size="lg" aria-label="Portfolio-nu gör">
                Portfolio Bax
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <StatCard value="500+" label="İcra Edilmiş Online Mağaza" />
            <StatCard value="99.9%" label="İşləmə Müddəti Zəmanəti" />
            <StatCard value="2" label="Həftə çatdırılma" />
            <StatCard value="24/7" label="Texniki Dəstək" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Online Satış Üçün Hər Şey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Müasir online biznes üçün qabaqcıl funksiyalarla tam e-ticarət həlləri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ShoppingBag className="w-6 h-6 text-white" />}
              title="Məhsul Kataloqu İdarəetməsi"
              description="Kateqoriyalar, variantlar və inventar idarəsi ilə asan məhsul əlavə etməsi"
            />
            <ServiceCard
              icon={<CreditCard className="w-6 h-6 text-white" />}
              title="Təhlükəsiz Ödəniş İnteqrasiyası"
              description="Yerli banklar, Stripe və PayPal daxil olmaqla çoxlu ödəniş üsulları"
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6 text-white" />}
              title="Çatdırılma və Logistika"
              description="Avtomatikləşmiş çatdırılma hesablanması və sifariş izləmə sistemi"
            />
            <ServiceCard
              icon={<BarChart3 className="w-6 h-6 text-white" />}
              title="Satış Analitikası"
              description="Real-vaxt satış hesabatları və müştəri davranışı təhlilləri"
            />
            <ServiceCard
              icon={<Shield className="w-6 h-6 text-white" />}
              title="SSL Təhlükəsizliyi"
              description="Pulsuz SSL sertifikatı və PCI uyğunluğu ilə bank səviyyəli təhlükəsizlik"
            />
            <ServiceCard
              icon={<Smartphone className="w-6 h-6 text-white" />}
              title="Mobil Uyğunluq"
              description="PWA dəstəyi ilə bütün cihazlar üçün optimallaşdırılmış"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Müasir Texnologiyalarla Qurulur
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Etibarlı və geniş texnologi həlləri üçün sənaye lideri platformalardan istifadə edirik
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <TechCard
              icon={<Code className="w-8 h-8 text-white" />}
              name="Laravel"
            />
            <TechCard
              icon={<Database className="w-8 h-8 text-white" />}
              name="WordPress"
            />
            <TechCard
              icon={<Store className="w-8 h-8 text-white" />}
              name="WooCommerce"
            />
            <TechCard
              icon={<Layers className="w-8 h-8 text-white" />}
              name="React"
            />
            <TechCard
              icon={<ShoppingBag className="w-8 h-8 text-white" />}
              name="Shopify"
            />
            <TechCard
              icon={<CreditCard className="w-8 h-8 text-white" />}
              name="Stripe"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Niyə Bizim E-ticarət Həllərımızı Seçməlisiniz?
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Sadəcə online mağaza deyil - gəlirinizi qurmaq üçün tam sənaye həlli.
              </p>
              
              <div className="space-y-4">
                <ChecklistItem>Standart mağazalar üçün 2 həftədə sürətli çatdırılma</ChecklistItem>
                <ChecklistItem>Google ilə səhifə sıralanması üçün SEO optimallaşdırılması</ChecklistItem>
                <ChecklistItem>İlk ay üçün pulsuz hosting</ChecklistItem>
                <ChecklistItem>Azərbaycan dilində 24/7 texniki dəstək</ChecklistItem>
                <ChecklistItem>SSD hosting ilə 99.9% işləmə müddəti zəmanəti</ChecklistItem>
                <ChecklistItem>Yerli ödəniş sistemləri ilə inteqrasiya</ChecklistItem>
                <ChecklistItem>Çoxdilli dəstək (Az/İng/Rus)</ChecklistItem>
                <ChecklistItem>Pulsuz təlim və sənədləşmə</ChecklistItem>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 lg:p-16 text-center">
                <div className="mb-8">
                  <ShoppingCart size={80} className="text-blue-400 mx-auto" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-700 rounded-full"></div>
                  <div className="h-4 bg-slate-700 rounded-full w-3/4 mx-auto"></div>
                  <div className="h-4 bg-slate-700 rounded-full w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Zap size={60} className="text-white mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              E-ticarət Səyahətinizə Başlamağa Hazırsınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Online mağaza təcrübəsi üçün ilk gün pulsuz məsləhət və qiymət təklifi alın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
                aria-label="Pulsuz məsləhət al"
              >
                Pulsuz Konsultasiya Al
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-purple-700 hover:bg-purple-800"
                aria-label="Satış komandası ilə əlaqə"
              >
                Satış Komandası ilə Əlaqə
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="WhatsApp ilə əlaqə saxla"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default MakingTheSite;