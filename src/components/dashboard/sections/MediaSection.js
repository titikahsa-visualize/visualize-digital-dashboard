import React, { useState, useEffect } from 'react';
import { 
  PhotoIcon, 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  FilmIcon,
  DocumentIcon,
  LinkIcon,
  ClipboardIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { LoadingSpinner, ErrorIcon } from '../../../assets/icons';

export default React.forwardRef(function MediaSection(props, ref) {
  const [mediaItems, setMediaItems] = useState([]);
  const [mediaSearch, setMediaSearch] = useState('');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [failedImages, setFailedImages] = useState({});
  // Add this state for image timestamps
  const [imageTimestamps, setImageTimestamps] = useState({});
  const url = 'https://visualize-digital-server-production.up.railway.app'; // Adjust the base URL as needed

  useEffect(() => {
    fetchMedia();
  }, []);

  // Update the fetchMedia function
  const fetchMedia = async () => {
    try {
      setIsLoading(true);
      // Clear failed images when fetching media
      setFailedImages({});

      const response = await fetch(`${url}/api/service/media`);
      const data = await response.json();
      
      if (data.success) {
        setMediaItems(data.media);
        
        // Generate new timestamps for all media items
        const timestamps = {};
        data.media.forEach(item => {
          timestamps[item.id] = Date.now();
        });
        setImageTimestamps(timestamps);
      }
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyLink = (id, url) => {
      const fullUrl = `https://visualize-digital-server-production.up.railway.app${url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Fix the handleUploadMedia function
  const handleUploadMedia = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      setIsLoading(true);
      
      const formData = new FormData();
      formData.append('file', file); // Ensure 'file' matches what your backend expects
      
      // Add upload options to handle large files
      const uploadOptions = {
        method: 'POST',
        body: formData,
        // Add these options for better error handling
        headers: {
          // Don't set Content-Type here, it will be set automatically with boundary
        },
        // Increase timeout for larger files
        timeout: 30000
      };
      
      console.log('Uploading file:', file.name, file.size, file.type);

      const response = await fetch(`${url}/api/service/media/upload`, uploadOptions);

      if (!response.ok) {
        // Get more detailed error information
        const errorText = await response.text();
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Increase the delay to give GridFS more time
        setTimeout(() => {
          fetchMedia(); // Refetch all media
        }, 2000); // Increased to 2 seconds
      } else {
        alert('Upload failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert(`Upload failed: ${error.message}. Please try again.`);
    } finally {
      setIsLoading(false);
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

const handleDeleteMedia = async (id) => {
  // Show confirmation dialog
  if (!window.confirm('Are you sure you want to delete this media file?')) {
    return;
  }
  
  try {
    setDeletingId(id);

    const response = await fetch(`${url}/api/service/media/${id}`, {
      method: 'DELETE',
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Remove the deleted item from the state
      setMediaItems(mediaItems.filter(item => item.id !== id));
      alert('Media deleted successfully');
    } else {
      alert('Failed to delete media: ' + data.message);
    }
  } catch (error) {
    console.error('Error deleting media:', error);
    alert('Error deleting media. Please try again.');
  } finally {
    setDeletingId(null);
  }
};

  // Add the retry function
  const retryImage = (id, url) => {
    // Remove this image from failedImages state
    setFailedImages(prev => {
      const newFailedImages = {...prev};
      delete newFailedImages[id]; 
      return newFailedImages;
    });
    
    // Update timestamp for this image
    setImageTimestamps(prev => ({
      ...prev,
      [id]: Date.now()
    }));
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
            <label className={`bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded font-medium flex items-center gap-2 cursor-pointer transition ${isLoading ? 'opacity-70' : 'hover:opacity-90'}`}>
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Uploading...
                </>
              ) : (
                <>
                  <PhotoIcon className="h-5 w-5" /> Upload Media
                </>
              )}
              <input 
                type="file" 
                className="hidden" 
                onChange={handleUploadMedia}
                accept="image/*, video/*, .pdf, .doc, .docx"
                disabled={isLoading}
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
                  {item.type === 'Image' ? (
                    failedImages[item.id] ? (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <ErrorIcon />
                        <button 
                          onClick={() => retryImage(item.id, item.url)}
                          className="mt-2 text-sm text-lime-400 hover:underline"
                        >
                          Retry loading
                        </button>
                      </div>
                    ) : (
                      <img 
                        src={`https://visualize-digital-server-production.up.railway.app${item.url}?t=${imageTimestamps[item.id] || Date.now()}`}
                        alt={item.name} 
                        className="h-full w-full object-contain"
                        onError={() => setFailedImages(prev => ({...prev, [item.id]: true}))}
                      />
                    )
                  ) : (
                    renderMediaIcon(item.type)
                  )}
                </div>
                <div>
                  <h4 className="font-medium truncate">{item.name}</h4>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleCopyLink(item.id, item.url)}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 rounded text-sm transition"
                      >
                        {copiedId === item.id ? (
                          <>
                            <ClipboardIcon className="h-4 w-4 text-lime-400" />
                            <span className="text-lime-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <LinkIcon className="h-4 w-4" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                      
                      <button 
                        onClick={() => handleDeleteMedia(item.id)}
                        disabled={deletingId === item.id}
                        className="w-10 flex items-center justify-center bg-red-900/30 hover:bg-red-900/50 py-2 rounded text-sm transition"
                        title="Delete media"
                      >
                        {deletingId === item.id ? (
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <TrashIcon className="h-4 w-4 text-red-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add a loading indicator when fetching media */}
        {isLoading && filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <svg className="animate-spin h-10 w-10 mx-auto text-lime-400" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-2 text-gray-400">Loading media...</p>
          </div>
        )}
      </div>
    </section>
  );
});
