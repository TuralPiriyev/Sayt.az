import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations/translations';

const DomainSidebar = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  const domains = []; // Empty array for now, can be populated with actual domain data

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Domains</h1>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">{t('dashboard_domains')}</h1>
              Buy
          </div>
        </div>

        {/* Domains Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">{t('table_site_url')}</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">{t('table_ns')}</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">{t('table_expire_date')}</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">{t('table_actions')}</th>
                </tr>
              </thead>
              <tbody>
                {domains.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <Globe className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-600 font-medium">{t('no_active_domain')}</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  domains.map((domain, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{domain.url}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{domain.ns}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{domain.expireDate}</td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            {t('buy_button')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSidebar;