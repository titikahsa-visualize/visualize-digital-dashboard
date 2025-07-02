import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 bg-[#0B1120] z-10 pb-4">
      <div className="relative w-1/3">
        <input 
          className="bg-gray-800 px-4 py-2 rounded-lg w-full pl-10 text-sm" 
          placeholder="Search" 
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-[#2B2F3A] px-3 py-2 rounded-full flex items-center gap-2 transition hover:bg-gray-700">
          <span className="bg-green-500 w-5 h-5 flex items-center justify-center rounded-full text-xs">15</span>
          <span className="text-sm">Atharv Singh</span>
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg"
            className="rounded-full w-8 h-8 object-cover"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
}