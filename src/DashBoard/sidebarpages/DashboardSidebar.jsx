import { Globe, Server, Database, HardDrive, Shield, TrendingUp, Users, Activity } from 'lucide-react';

const DashboardSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Domainlər</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-blue-100 text-xs mt-1">+0 bu ay</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <Globe className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Web Hosting</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-green-100 text-xs mt-1">+0 bu ay</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <Server className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">VPS</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-purple-100 text-xs mt-1">+0 bu ay</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <Database className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Serverlər</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-orange-100 text-xs mt-1">+0 bu ay</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <HardDrive className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Aktivlik</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">7 gün</button>
              <button className="px-3 py-1 text-gray-500 rounded-lg text-sm">30 gün</button>
              <button className="px-3 py-1 text-gray-500 rounded-lg text-sm">90 gün</button>
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <Activity className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Hələ heç bir aktivlik yoxdur</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Tez Əməliyyatlar</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-lg text-left transition-colors">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <div>
                  <p className="font-medium">Domain əlavə et</p>
                  <p className="text-sm text-blue-600">Yeni domain qeydiyyatı</p>
                </div>
              </div>
            </button>
            
            <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-lg text-left transition-colors">
              <div className="flex items-center space-x-3">
                <Server className="w-5 h-5" />
                <div>
                  <p className="font-medium">Hosting sifariş et</p>
                  <p className="text-sm text-green-600">Web hosting paketi</p>
                </div>
              </div>
            </button>
            
            <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 p-4 rounded-lg text-left transition-colors">
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5" />
                <div>
                  <p className="font-medium">VPS yarat</p>
                  <p className="text-sm text-purple-600">Virtual server</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Aktivliklər</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-500">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span className="text-sm">Hələ heç bir aktivlik yoxdur</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sistem Statusu</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Web Hosting</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">VPS Serverlər</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Domain DNS</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Data State */}
      <div className="flex justify-center py-12">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Məlumat yoxdur</h3>
          <p className="text-gray-600 mb-6">Hələ heç bir aktiv domen və ya xidmət yoxdur. Başlamaq üçün yuxarıdakı düymələrdən istifadə edin.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            İlk xidməti əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;