import React, { useState } from 'react';
import { 
  PhotoIcon, 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  FilmIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';

export default React.forwardRef(function MediaSection(props, ref) {
  const [mediaItems, setMediaItems] = useState([
    { id: 1, name: "mountains.jpg", size: "2.4 MB", type: "Image" },
    { id: 2, name: "office-team.png", size: "3.1 MB", type: "Image" },
    { id: 3, name: "product-demo.mp4", size: "15.2 MB", type: "Video" },
    { id: 4, name: "presentation.pdf", size: "4.2 MB", type: "Document" },
    { id: 5, name: "report.docx", size: "2.1 MB", type: "Document" }
  ]);
  const [mediaSearch, setMediaSearch] = useState('');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('All');

  const handleUploadMedia = (e) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type.split('/')[0];
      let mediaType;
      
      if (type === 'image') mediaType = 'Image';
      else if (type === 'video') mediaType = 'Video';
      else mediaType = 'Document'; // For all other file types

      const newMedia = {
        id: Date.now(),
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        type: mediaType
      };
      setMediaItems([...mediaItems, newMedia]);
    }
  };

  const filteredMedia = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(mediaSearch.toLowerCase());
    const matchesType = mediaTypeFilter === 'All' || item.type === mediaTypeFilter;
    return matchesSearch && matchesType;
  });

  const renderMediaIcon = (type) => {
    switch(type) {
      case 'Image':
        return <PhotoIcon className="h-12 w-12 text-lime-400" />;
      case 'Video':
        return <FilmIcon className="h-12 w-12 text-lime-400" />;
      case 'Document':
        return <DocumentIcon className="h-12 w-12 text-lime-400" />;
      default:
        return <DocumentTextIcon className="h-12 w-12 text-lime-400" />;
    }
  };

  return (
    <section 
      id="section-media" 
      ref={ref}
      className="py-12 transition-all duration-500"
    >
      <div className="bg-[#111827] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <PhotoIcon className="h-5 w-5 text-lime-400" /> 
            Media Library
          </h3>
          <div className="relative">
            <label className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded font-medium flex items-center gap-2 cursor-pointer transition hover:opacity-90">
              <PhotoIcon className="h-5 w-5" /> Upload Media
              <input 
                type="file" 
                className="hidden" 
                onChange={handleUploadMedia}
                accept="image/*, video/*, .pdf, .doc, .docx"
                multiple
              />
            </label>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button 
              className={`px-4 py-2 rounded transition ${
                mediaTypeFilter === 'All' 
                  ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setMediaTypeFilter('All')}
            >
              All Media
            </button>
            <button 
              className={`px-4 py-2 rounded transition ${
                mediaTypeFilter === 'Image' 
                  ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setMediaTypeFilter('Image')}
            >
              Images
            </button>
            <button 
              className={`px-4 py-2 rounded transition ${
                mediaTypeFilter === 'Video' 
                  ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setMediaTypeFilter('Video')}
            >
              Videos
            </button>
            <button 
              className={`px-4 py-2 rounded transition ${
                mediaTypeFilter === 'Document' 
                  ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setMediaTypeFilter('Document')}
            >
              Documents
            </button>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search media..." 
              value={mediaSearch}
              onChange={(e) => setMediaSearch(e.target.value)}
              className="bg-[#1A1F2E] px-4 py-2 rounded-lg pl-10 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        
        {filteredMedia.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No media found matching your criteria
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((item) => (
              <div key={item.id} className="bg-[#1A1F2E] rounded-lg p-4 transition hover:scale-[1.02] hover:shadow-lg">
                <div className="bg-gray-800 rounded-lg h-40 flex items-center justify-center mb-3">
                  {renderMediaIcon(item.type)}
                </div>
                <div>
                  <h4 className="font-medium truncate">{item.name}</h4>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
});