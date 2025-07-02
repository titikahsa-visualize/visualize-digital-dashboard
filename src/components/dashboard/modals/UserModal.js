import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function UserModal({ 
  show, 
  onClose, 
  currentUser, 
  setCurrentUser, 
  handleAddUser, 
  isEditUser 
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{isEditUser ? "Edit User" : "Add New User"}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <input 
          type="text" 
          placeholder="Name" 
          value={currentUser.name} 
          onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })} 
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={currentUser.email} 
          onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} 
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
        />
        <input 
          type="text" 
          placeholder="Role" 
          value={currentUser.role} 
          onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })} 
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
        />
        <div>
          <label className="block text-gray-400 text-sm mb-2">Status</label>
          <select
            value={currentUser.status}
            onChange={(e) => setCurrentUser({...currentUser, status: e.target.value})}
            className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose} 
            className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <button 
            onClick={handleAddUser} 
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
          >
            {isEditUser ? "Update" : "Add User"}
          </button>
        </div>
      </div>
    </div>
  );
}