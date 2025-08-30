import React from 'react';
import { ChevronDown } from 'lucide-react';

const SettingsSidebar = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="text-gray-700">Dashboard</span>
          <span className="mx-2">/</span>
          <span className="text-blue-600">Settings</span>
        </div>
      </div>

      {/* Settings Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Currency Section */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              Currency
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AZN">AZN</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Language Section */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              Language
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="EN">EN</option>
                <option value="AZ">AZ</option>
                <option value="TR">TR</option>
                <option value="RU">RU</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;