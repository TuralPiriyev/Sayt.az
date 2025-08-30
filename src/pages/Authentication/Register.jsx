import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

const Register = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('piriyevtural00@gmail.com');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSliderMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleSliderMouseMove = (e) => {
    if (!isDragging) return;
    
    const slider = e.currentTarget.closest('.slider-container');
    const rect = slider.getBoundingClientRect();
    const buttonWidth = 40; // 10 * 4 (w-10)
    const maxMove = rect.width - buttonWidth - 16; // 16px padding (8px each side)
    const newPosition = Math.max(0, Math.min(100, ((e.clientX - rect.left - buttonWidth/2 - 8) / maxMove) * 100));
    
    setSliderPosition(newPosition);
    
    if (newPosition > 85) {
      setIsVerified(true);
      setIsDragging(false);
      setSliderPosition(100);
    }
  };

  const handleSliderMouseUp = () => {
    if (isDragging && sliderPosition < 85) {
      setSliderPosition(0);
    }
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleSliderMouseMove);
      document.addEventListener('mouseup', handleSliderMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleSliderMouseMove);
        document.removeEventListener('mouseup', handleSliderMouseUp);
      };
    }
  }, [isDragging, sliderPosition]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center p-4">
      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </div>
      </div>

      {/* Main register container */}
      <div className="w-full max-w-md">
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
          {/* Title */}
          <h1 className="text-white text-2xl font-medium text-center mb-8">
            {t('register_title')}
          </h1>

          {/* Google Sign Up Button */}
          <div className="mb-6">
            <button className="w-20 h-12 bg-gray-700/80 rounded-lg flex items-center justify-center mx-auto border border-gray-600/50 hover:bg-gray-600/80 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-gray-600/50"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-600/50"></div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Full Name Input */}
            <div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/80 rounded-xl text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder={t('register_name_placeholder')}
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder={t('register_email_placeholder')}
              />
            </div>

            {/* Password Input with progress bar */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-12"
                  placeholder={t('register_password_placeholder')}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {/* Password strength indicator */}
              <div className="mt-2 h-1 bg-gray-600/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                  style={{ width: password.length > 0 ? `${Math.min(password.length * 10, 100)}%` : '0%' }}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex gap-3">
              <div className="flex items-center bg-gray-700/80 rounded-xl px-3 py-3 border border-gray-600/50 min-w-[100px]">
                <span className="text-yellow-400 text-lg mr-1">🇦🇿</span>
                <span className="text-white text-sm">+994</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-700/80 rounded-xl text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder={t('register_phone_placeholder')}
              />
            </div>

            {/* Slider Verification */}
            <div 
              className={`slider-container relative h-14 rounded-xl border-2 transition-all duration-500 overflow-hidden ${
                isVerified 
                  ? 'bg-green-100 border-green-400' 
                  : 'bg-gray-700/80 border-gray-600/50'
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-sm font-medium transition-colors duration-500 ${
                  isVerified ? 'text-green-600' : 'text-gray-300'
                }`}>
                  {isVerified ? t('register_verified') : t('register_verification_text')}
                </span>
              </div>
              
              <div 
                className={`absolute top-2 w-10 h-10 rounded-lg flex items-center justify-center cursor-grab transition-all duration-300 shadow-lg ${
                  isVerified 
                    ? 'bg-green-500 shadow-green-500/30' 
                    : 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/30'
                } ${isDragging ? 'cursor-grabbing scale-105' : ''}`}
                style={{ 
                  left: `${Math.max(8, Math.min(sliderPosition * (100 - 12) / 100 + 8, 88))}%`,
                  transform: 'translateX(-50%)'
                }}
                onMouseDown={handleSliderMouseDown}
              >
                <ArrowRight 
                  size={18} 
                  className="text-white transition-transform duration-300" 
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-colors ${
                    termsAccepted 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'bg-transparent border-gray-500'
                  }`}>
                    {termsAccepted && (
                      <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-400 text-sm leading-tight">
                  {t('register_terms_text')} <span className="text-blue-400 hover:text-blue-300 underline cursor-pointer">{t('register_terms_link')}</span> və <span className="text-blue-400 hover:text-blue-300 underline cursor-pointer">{t('register_privacy_link')}</span>
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors shadow-lg"
            >
              {t('register_button')}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-gray-400 text-sm">
              {t('register_have_account')} 
              <Link to = "/Login" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors underline">
                {t('register_login')}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;