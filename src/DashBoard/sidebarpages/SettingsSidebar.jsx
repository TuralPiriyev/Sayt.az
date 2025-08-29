import { User, Shield, Bell, Globe, Key, Mail } from 'lucide-react';

const SettingsSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Profil Tənzimləri</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Tural Xeyyam Piriyev</h3>
              <p className="text-gray-600">Premium üzv</p>
              <button className="text-blue-600 text-sm hover:text-blue-800">Profil şəklini dəyişdir</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ad və Soyad</label>
              <input 
                type="text" 
                defaultValue="Tural Xeyyam Piriyev"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="tural@example.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
              <input 
                type="tel" 
                defaultValue="+994 XX XXX XX XX"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dil</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                <option>Azərbaycan dili</option>
                <option>English</option>
                <option>Русский</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Dəyişiklikləri yadda saxla
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Təhlükəsizlik</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cari parol</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500" 
              placeholder="Cari parolunuzu daxil edin"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Yeni parol</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Yeni parol"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parol təkrarı</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Yeni parolu təkrar edin"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">İki faktorlu doğrulama</p>
                <p className="text-sm text-gray-600">Əlavə təhlükəsizlik təbəqəsi</p>
              </div>
            </div>
            <button className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium">
              Aktivdir
            </button>
          </div>
          
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
            Parol dəyişdir
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Bildirişlər</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Email bildirişləri</p>
                <p className="text-sm text-gray-600">Mühüm yeniliklər haqqında məlumat alın</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-medium text-gray-900">Xidmət bildirişləri</p>
                <p className="text-sm text-gray-600">Server və xidmət vəziyyəti haqqında</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Domain bildirişləri</p>
                <p className="text-sm text-gray-600">Domain bitmə tarixləri haqqında</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">API Açarları</h2>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
            <div className="flex items-center space-x-3">
              <Key className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">API Açarı</p>
                <p className="text-sm text-gray-600 font-mono">api_key_**********************</p>
              </div>
            </div>
            <div className="space-x-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm">Göstər</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Sil</button>
            </div>
          </div>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Yeni API açarı yarat
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;