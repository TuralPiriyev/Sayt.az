import React, { useState } from 'react';
import { 
  Globe, 
  Server, 
  HardDrive, 
  Database,
  Calendar,
  ExternalLink,
  Settings,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

function DashboardSidebar() {
  const [activeTab, setActiveTab] = useState('domains');

  const statsData = [
    { title: 'Domains', count: 0, icon: Globe },
    { title: 'Web Hosting', count: 0, icon: Server },
    { title: 'VPS', count: 0, icon: HardDrive },
    { title: 'Servers', count: 0, icon: Database }
  ];

  const domains = [];
  const hosting = [];
  const vps = [];
  const servers = [];

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'active':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'inactive':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'inactive':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const EmptyState = ({ service }) => (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        <Database className="w-8 h-8 text-gray-400" />
      </div>
      <p className="text-gray-500 text-sm mb-2">No data</p>
      <p className="text-gray-400 text-xs">You don't have any active {service} yet</p>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'domains':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site URL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {domains.length === 0 ? (
                    <tr>
                      <td colSpan={4}>
                        <EmptyState service="domain" />
                      </td>
                    </tr>
                  ) : (
                    domains.map((domain) => (
                      <tr key={domain.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-blue-600">{domain.url}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{domain.expireDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Settings className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'hosting':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site URL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {hosting.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <EmptyState service="hosting" />
                      </td>
                    </tr>
                  ) : (
                    hosting.map((host) => (
                      <tr key={host.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-blue-600">{host.url}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{host.package}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{host.expireDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(host.status)}>{host.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Settings className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'vps':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPU</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory (RAM)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disk</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vps.length === 0 ? (
                    <tr>
                      <td colSpan={7}>
                        <EmptyState service="virtual private server" />
                      </td>
                    </tr>
                  ) : (
                    vps.map((server) => (
                      <tr key={server.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.cpu}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.memory}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.disk}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.expireDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(server.status)}
                            <span className={getStatusBadge(server.status)}>{server.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Settings className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'servers':
        return (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site URL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {servers.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <EmptyState service="dedicated server" />
                      </td>
                    </tr>
                  ) : (
                    servers.map((server) => (
                      <tr key={server.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-blue-600">{server.url}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.package}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.expireDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(server.status)}
                            <span className={getStatusBadge(server.status)}>{server.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Settings className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-full">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'domains', label: 'Domains', icon: Globe },
                { key: 'hosting', label: 'Hosting', icon: Server },
                { key: 'vps', label: 'VPS', icon: HardDrive },
                { key: 'servers', label: 'Servers', icon: Database }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-6">
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200 mt-12">
          <p className="text-gray-500 text-sm">
            © 2025 Hosting Dashboard. Professional hosting management interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;