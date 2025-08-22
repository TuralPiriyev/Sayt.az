import React, { useState } from 'react';
import { MessageCircle, Eye, EyeOff } from 'lucide-react';

export default function Freelancer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Main Login Container */}
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Hesabınıza daxil olun</h1>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl p-4 mb-6 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"
                />
                <path
                  fill="#34A853"
                  d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"
                />
                <path
                  fill="#FBBC05"
                  d="M4.5 10.48a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.14l2.67-2.07z"
                />
                <path
                  fill="#EA4335"
                  d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.41L4.5 7.44a4.77 4.77 0 0 1 4.48-3.26z"
                />
              </svg>
            </div>
            <span className="text-white font-medium">Google ilə daxil ol</span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-400">or</span>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Elektron poçt ünvanı və ya telefon nömrəniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 bg-white/10 border border-white/30 rounded focus:ring-2 focus:ring-blue-500 text-blue-600"
                />
                <span className="text-gray-300">Şifrənizi Xatırlamırsınız?</span>
              </label>
              <button
                type="button"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={() => console.log('Forgot password clicked')}
              >
                Şifrəni sıfırlayın
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Hesabınıza daxil olun
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <span className="text-gray-400">Hələ üzv deyilsiniz? </span>
            <button
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              onClick={() => console.log('Sign up clicked')}
            >
              Qeydiyyat
            </button>
          </div>

          {/* Terms */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              WebsiteCA-ya daxil olmaqla, bizimla razılaşırsınız{' '}
              <button className="text-blue-400 hover:text-blue-300 underline transition-colors">
                Şərtlər və Qaydalar
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}