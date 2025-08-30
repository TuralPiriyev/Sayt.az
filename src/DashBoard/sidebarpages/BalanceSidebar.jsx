import React from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

const BalanceSidebar = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Balance</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="text-gray-700">Dashboard</span>
          <span className="mx-2">/</span>
          <span className="text-blue-600">Balance</span>
        </div>
      </div>

      {/* Balance Content */}
      <div className="p-6">
        {/* Balance Display */}
        <div className="text-center py-8">
          <div className="text-sm font-medium text-gray-600 mb-2">Balance</div>
          <div className="text-5xl font-bold text-blue-600 mb-8">$0.00</div>
          
          <div className="text-gray-600 mb-8">
            You can increase your balance by choosing one of the following tools.
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center gap-6">
            {/* United Payment Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 w-64 hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    United<br />Payment
                  </div>
                </div>
              </div>
            </div>

            {/* Payriff Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 w-64 hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    payriff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSidebar;