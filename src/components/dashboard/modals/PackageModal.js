import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function PackageModal({ 
  currentPackage, 
  setCurrentPackage, 
  handleAddFeature, 
  handleAddPackage, 
  onClose, 
  isEditPackage 
}) {
  return (
    <div className="bg-[#1A1F2E] rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">
          {isEditPackage ? "Edit Package" : "Add New Package"}
        </h4>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Package Name */}
      <div>
        <label className="block text-gray-400 text-sm mb-2">Package Name</label>
        <input
          type="text"
          value={currentPackage.packageName}
          onChange={(e) => setCurrentPackage({...currentPackage, packageName: e.target.value})}
          className="w-full bg-[#0B1120] px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
          placeholder="Starter"
        />
      </div>

      {/* Features */}
      <div>
        <label className="block text-gray-400 text-sm mb-2">Features</label>
        <div className="space-y-2">
          {currentPackage.features.map((feature, index) => (
            <div key={index} className="flex items-center bg-[#0B1120] px-4 py-2 rounded-lg">
              <input 
                type="checkbox" 
                checked={true}
                readOnly
                className="mr-2 accent-lime-500"
              />
              <span>{feature}</span>
            </div>
          ))}
          <div className="flex items-center bg-[#0B1120] px-4 py-2 rounded-lg">
            <input 
              type="text"
              value={currentPackage.newFeature || ''}
              onChange={(e) => setCurrentPackage({...currentPackage, newFeature: e.target.value})}
              className="flex-1 bg-transparent text-white focus:outline-none"
              placeholder="Add New Feature"
            />
            <button 
              onClick={handleAddFeature}
              className="ml-2 bg-lime-500 text-gray-900 px-3 py-1 rounded text-sm transition hover:bg-lime-400"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-400 text-sm mb-2">Price</label>
        <div className="flex gap-3">
          <select
            value={currentPackage.priceType}
            onChange={(e) => setCurrentPackage({...currentPackage, priceType: e.target.value})}
            className="bg-[#0B1120] px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option>Monthly</option>
            <option>Yearly</option>
            <option>One-time</option>
          </select>
          <input
            type="text"
            value={currentPackage.cost}
            onChange={(e) => setCurrentPackage({...currentPackage, cost: e.target.value})}
            className="flex-1 bg-[#0B1120] px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="30000"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <label className="block text-gray-400 text-sm mb-2">Create CTA Button</label>
        <input
          type="text"
          value={currentPackage.ctaButton}
          onChange={(e) => setCurrentPackage({...currentPackage, ctaButton: e.target.value})}
          className="w-full bg-[#0B1120] px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
          placeholder="Get Started"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          onClick={onClose}
          className="bg-gray-700 text-white px-6 py-2 rounded font-medium transition hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={() => handleAddPackage(currentPackage)}
          className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-6 py-2 rounded font-medium transition hover:opacity-90"
        >
          {isEditPackage ? 'Update Package' : 'Save Package'}
        </button>
      </div>
    </div>
  );
}
