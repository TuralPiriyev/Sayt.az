import React from 'react';
import { Facebook, Instagram, MessageCircle, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations/translations';

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-6">sayt.az</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Sayt.az - Web saytların hazırlanması, Domain, Hosting satışı, SEO, SMM<br />
              və texniki xidmətlər təklif edir.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('Bizi izləyin :')}</h3>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Youtube className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Hosting & Domain Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('HOSTİNQ & DOMEN')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('Domen')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('Veb Hosting')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('VPS Hosting')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Server
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('ŞİRKƏT')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('Haqqımızda')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('Əlaqə')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('Bloq')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('Portfolio')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Numbers */}
            <div>
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">{t('Domen/Hosting:')}</p>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+994703300004</span>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{t('Sifariş üçün:')}</p>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+994503300056</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@sayt.az</span>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  {t('Nərimanov rayonu, Xan Şuşinski küçəsi 49, Green Plaza, 5-ci mərtəbə, 502, Bakı, Azərbaycan')}
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="lg:text-right">
              <p className="text-gray-400 text-sm">
                {t('© Copyright 2004-2025 © Sayt.az')}<br />
                {t('Bütün Hüquqlar Qorunur.')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer shadow-lg">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;