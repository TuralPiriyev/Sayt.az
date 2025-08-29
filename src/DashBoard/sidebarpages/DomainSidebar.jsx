import { Search, Plus, Filter, Globe, Calendar, Settings, Eye, Edit, Trash2 } from 'lucide-react';

const DomainSidebar = () => {
  const domains = [
    {
      id: 1,
      name: 'example.com',
      status: 'Aktiv',
      expiry: '2024-12-15',
      autoRenew: true,
      dns: 'Cloudflare'
    },
    {
      id: 2,
      name: 'testsite.net',
      status: 'Gözləmədə', 
      expiry: '2024-11-30',
      autoRenew: false,
      dns: 'Default'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Domain İdarəetməsi</h2>
            <p className="text-gray-600">Domainlərinizi idarə edin və yeni domain əlavə edin</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Domain axtar..." 
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filtr</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Domain əlavə et</span>
            </button>
          </div>
        </div>
      </div>

      {/* Domain Registration */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">Yeni Domain Qeydiyyatı</h3>
          <p className="text-blue-100 mb-6">İdeal domain adınızı tapın və qeydiyyatdan keçirin</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="domain-adiniz.com" 
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Yoxla və Qeydiyyat
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">.com $12.99</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">.net $14.99</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">.org $13.99</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">.az $25.99</span>
          </div>
        </div>
      </div>

      {/* Domain List */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Domainlər ({domains.length})</h3>
            <div className="flex items-center space-x-2">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500">
                <option>Hamısı</option>
                <option>Aktiv</option>
                <option>Gözləmədə</option>
                <option>Vaxtı keçmiş</option>
              </select>
            </div>
          </div>
        </div>
        
        {domains.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitmə tarixi</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DNS</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avtomatik yeniləmə</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Əməliyyatlar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {domains.map((domain) => (
                  <tr key={domain.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-blue-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{domain.name}</div>
                          <div className="text-sm text-gray-500">Primary domain</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        domain.status === 'Aktiv' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {domain.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {domain.expiry}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {domain.dns}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        domain.autoRenew 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {domain.autoRenew ? 'Aktiv' : 'Deaktiv'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Domain yoxdur</h3>
            <p className="text-gray-600 mb-6">Hələ heç bir domain qeydiyyatdan keçirməmisiniz</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              İlk domainizi əlavə edin
            </button>
          </div>
        )}
      </div>

      {/* Domain Services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Domain Transfer</h3>
            <p className="text-gray-600 text-sm mb-4">Mövcud domainlərinizi bizə köçürün</p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Transfer et →
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">DNS İdarəetməsi</h3>
            <p className="text-gray-600 text-sm mb-4">DNS qeydlərinizi idarə edin</p>
            <button className="text-green-600 text-sm font-medium hover:text-green-800">
              İdarə et →
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Avtomatik Yeniləmə</h3>
            <p className="text-gray-600 text-sm mb-4">Domainləriniz avtomatik yenilənsin</p>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-800">
              Qur →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSidebar;