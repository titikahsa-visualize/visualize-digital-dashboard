import React from 'react';
import {
  HomeIcon,
  InformationCircleIcon,
  TagIcon,
  StarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  PhotoIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar({ activeSection, scrollToSection }) {
  return (
    <aside className="w-64 bg-[#111827] p-6 space-y-6 sticky top-0 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <span style={{ color: '#36A3D7' }}>Visualize</span>
        <span className="text-lime-400">Digital</span>
      </h2>

      <nav className="space-y-4 text-white text-sm mt-8">
        {[
          { id: 'dashboard', icon: HomeIcon, label: 'Dashboard' },
          { id: 'services', icon: InformationCircleIcon, label: 'Services' },
          { id: 'leads', icon: StarIcon, label: 'Leads' },
          { id: 'blog', icon: DocumentTextIcon, label: 'Blog' },
          { id: 'pricing', icon: TagIcon, label: 'Pricing Tables' },
          { id: 'seo', icon: MagnifyingGlassIcon, label: 'SEO' },
          { id: 'testimonials', icon: ClipboardDocumentIcon, label: 'Testimonials' },
          { id: 'media', icon: PhotoIcon, label: 'Media' },
          { id: 'users', icon: UserGroupIcon, label: 'Manage Users' },
        ].map((item) => (
          <div 
            key={item.id}
            className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-gradient-to-r from-lime-500/20 to-lime-500/5 text-lime-400 border-l-4 border-lime-500' 
                : 'hover:bg-gray-800 hover:text-lime-400'
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
            {activeSection === item.id && (
              <div className="ml-auto w-2 h-2 rounded-full bg-lime-500 animate-pulse"></div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}