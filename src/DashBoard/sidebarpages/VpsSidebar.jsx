import { Database, Cpu, HardDrive, Wifi } from 'lucide-react';

const VpsSidebar = () => {
  const vpsPlans = [
    {
      name: 'Basic VPS',
      price: '19.99',
      specs: {
        cpu: '1 vCPU',
        ram: '1 GB RAM',
        disk: '25 GB SSD',
        bandwidth: '1 TB Transfer'
      }
    },
    {
      name: 'Standard VPS',
      price: '39.99',
      specs: {
        cpu: '2 vCPU',
        ram: '2 GB RAM', 
        disk: '50 GB SSD',
        bandwidth: '2 TB Transfer'
      }
    },
    {
      name: 'Premium VPS',
      price: '79.99',
      specs: {
        cpu: '4 vCPU',
        ram: '4 GB RAM',
        disk: '100 GB SSD', 
        bandwidth: '4 TB Transfer'
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">VPS Serverləri</h2>
          <p className="text-gray-600 mt-1">Yüksək performanslı virtual server seçin</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vpsPlans.map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/ay</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Cpu className="w-4 h-4 text-blue-500 mr-3" />
                    {plan.specs.cpu}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Database className="w-4 h-4 text-green-500 mr-3" />
                    {plan.specs.ram}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <HardDrive className="w-4 h-4 text-purple-500 mr-3" />
                    {plan.specs.disk}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Wifi className="w-4 h-4 text-orange-500 mr-3" />
                    {plan.specs.bandwidth}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700">
                  VPS yarat
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Aktiv VPS Serverləri</h2>
        </div>
        <div className="p-6">
          <div className="text-center py-12">
            <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">VPS yoxdur</h3>
            <p className="text-gray-600 mb-4">Hələ heç bir VPS server yaradılmayıb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VpsSidebar;