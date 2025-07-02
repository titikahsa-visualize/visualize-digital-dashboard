import React, { useState } from 'react';
import {
  XMarkIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

export default function SEOSettings() {
  const [activeTool, setActiveTool] = useState('Meta Tag Manager');
  const [form, setForm] = useState({
    title: 'Affordable SEO Services for Startups',
    slug: 'affordable-seo-services',
    description: 'Get found online with our expert SEO strategies designed specifically for startups and small businesses.',
    keywords: ['SEO', 'Search Engine Optimization', 'Digital Marketing', 'Startups']
  });

  return (
    <div className="bg-[#1A1F2E] text-white p-8 rounded-xl space-y-6">
      <h2 className="text-3xl font-bold">SEO Control Panel</h2>
      <p className="text-gray-400">Optimize your website for search engines and improve visibility</p>

      {/* Tool Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        {[
          'Meta Tag Manager',
          'Slug Editor',
          'Sitemap Generator',
          'Robots.Txt',
          'Social Sharing Tags',
          'Schema Generator',
          'Redirects'
        ].map(tool => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`px-4 py-2 rounded-full border ${
              activeTool === tool
                ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-black font-semibold'
                : 'border-gray-400 text-gray-200 hover:border-lime-400'
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* SEO Form */}
      <div className="space-y-5 mt-6">
        <div>
          <label className="block mb-2 text-sm">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500"
            placeholder="Affordable SEO Services for Startups"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Slug</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500"
            placeholder="affordable-seo-services"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Short Description</label>
          <textarea
            className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500"
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Meta Keywords</label>
          <div className="flex flex-wrap gap-2">
            {form.keywords.map((kw, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full border border-gray-400 text-sm flex items-center"
              >
                {kw}
                <button 
                  onClick={() => {
                    const newKeywords = [...form.keywords];
                    newKeywords.splice(i, 1);
                    setForm({ ...form, keywords: newKeywords });
                  }}
                  className="ml-2 text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            ))}
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="Add new keyword"
              className="flex-1 px-4 py-2 rounded-lg bg-[#111827] border border-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  setForm({
                    ...form,
                    keywords: [...form.keywords, e.target.value.trim()]
                  });
                  e.target.value = '';
                }
              }}
            />
            <button
              className="ml-2 bg-lime-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-400 transition"
              onClick={(e) => {
                const input = e.target.previousElementSibling;
                if (input.value.trim()) {
                  setForm({
                    ...form,
                    keywords: [...form.keywords, input.value.trim()]
                  });
                  input.value = '';
                }
              }}
            >
              Add
            </button>
          </div>
        </div>

        <button
          className="mt-4 bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition"
          onClick={() => alert('SEO settings saved!')}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}