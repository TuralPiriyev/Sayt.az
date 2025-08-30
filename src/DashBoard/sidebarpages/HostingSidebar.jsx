import React from 'react';
import { Server } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

const HostingSidebar = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Server className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{t('dashboard_web_hosting')}</h2>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
          {t('buy_button')}
        </button>
      </div>

      {/* Table Container */}
      <div className="p-6">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 pb-4 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-600">{t('table_site_url')}</div>
          <div className="text-sm font-medium text-gray-600">{t('table_package')}</div>
          <div className="text-sm font-medium text-gray-600">{t('table_ns')}</div>
          <div className="text-sm font-medium text-gray-600">{t('table_expire_date')}</div>
          <div className="text-sm font-medium text-gray-600">{t('table_status')}</div>
          <div className="text-sm font-medium text-gray-600">{t('table_actions')}</div>
        </div>

        {/* Empty State */}
        <div className="py-16 text-center">
          <p className="text-gray-500 text-sm">{t('no_active_hosting')}</p>
        </div>
      </div>
    </div>
  );
};

export default HostingSidebar;