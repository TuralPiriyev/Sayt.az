import React from 'react';
import { Server } from 'lucide-react';

const ResellerSidebar = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Server className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Resellers</h2>
        </div>
      </div>

      {/* Table Container */}
      <div className="p-6">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 pb-4 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-600">Site URL</div>
          <div className="text-sm font-medium text-gray-600">Package</div>
          <div className="text-sm font-medium text-gray-600">NS</div>
          <div className="text-sm font-medium text-gray-600">Expire date</div>
          <div className="text-sm font-medium text-gray-600">Actions</div>
        </div>

        {/* Empty State */}
        <div className="py-16 text-center">
          <p className="text-gray-500 text-sm">You don't have any active reseller yet</p>
        </div>
      </div>
    </div>
  );
};

export default ResellerSidebar;