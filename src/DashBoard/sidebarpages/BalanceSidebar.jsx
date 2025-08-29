import { CreditCard, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const BalanceSidebar = ({ balance = 0.00 }) => {
  const recentTransactions = [
    { id: 1, type: 'Ödəniş', amount: '+50.00', date: '2024-08-25', description: 'Balans artırılması' },
    { id: 2, type: 'Xərc', amount: '-12.99', date: '2024-08-20', description: 'Premium Hosting' },
    { id: 3, type: 'Xərc', amount: '-19.99', date: '2024-08-15', description: 'Domain yenilənməsi' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cari Balans</p>
              <p className="text-2xl font-bold text-gray-900">${balance.toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bu ay xərc</p>
              <p className="text-2xl font-bold text-gray-900">$32.98</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bu ay ödəniş</p>
              <p className="text-2xl font-bold text-gray-900">$50.00</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Aktiv xidmətlər</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Balans İdarəetməsi</h2>
        </div>
        <div className="p-6">
          <div className="text-center py-8">
            <div className="text-4xl font-bold text-gray-900 mb-2">${balance.toFixed(2)}</div>
            <p className="text-gray-600 mb-6">Cari balans</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center">
                <CreditCard className="w-4 h-4 mr-2" />
                Balans artır
              </button>
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                Ödəniş tarixçəsi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Son əməliyyatlar</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Növ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Məbləğ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Təfərrüat</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.type === 'Ödəniş' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className={transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BalanceSidebar;