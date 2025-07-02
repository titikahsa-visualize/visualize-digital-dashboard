// import React from 'react';
// import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';

// export default function BlogModal({ show, onClose, currentBlog,handleEditBlog,setIsEditBlog ,  setCurrentBlog, handleAddBlog, isEditBlog }) {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
//       <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-4xl space-y-6 animate-fadeIn">
//         <div className="flex justify-between items-center border-b border-gray-700 pb-4">
//           <h3 className="text-xl font-bold text-lime-400">
//             {isEditBlog ? "Edit Blog Post" : "Create New Blog Post"}
//           </h3>
//           <button 
//             onClick={onClose} 
//             className="text-gray-400 hover:text-white transition"
//           >
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Main Content Column */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Title Section */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-300">Blog Title</label>
//               <input
//                 type="text"
//                 placeholder="Enter blog title..."
//                 value={currentBlog.title}
//                 onChange={(e) => setCurrentBlog({...currentBlog, title: e.target.value})}
//                 className="w-full bg-[#0B1120] px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-500 border border-gray-700"
//               />
//             </div>

//             {/* Content Editor */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-300">Content</label>
//               <div className="border border-gray-700 rounded-lg overflow-hidden">
//                 {/* Toolbar (simplified) */}
//                 <div className="bg-gray-800 p-2 flex flex-wrap gap-2 border-b border-gray-700">
//                   <button className="p-2 hover:bg-gray-700 rounded">
//                     <span className="font-bold">B</span>
//                   </button>
//                   <button className="p-2 hover:bg-gray-700 rounded">
//                     <span className="italic">I</span>
//                   </button>
//                   <button className="p-2 hover:bg-gray-700 rounded">
//                     <span className="underline">U</span>
//                   </button>
//                   <div className="border-r border-gray-600 h-6 mx-2"></div>
//                   <button className="p-2 hover:bg-gray-700 rounded">
//                     <PhotoIcon className="h-5 w-5" />
//                   </button>
//                   <button className="p-2 hover:bg-gray-700 rounded">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//                 <textarea
//                   placeholder="Write your blog content here..."
//                   value={currentBlog.content}
//                   onChange={(e) => setCurrentBlog({...currentBlog, content: e.target.value})}
//                   className="w-full bg-[#0B1120] px-4 py-3 min-h-[300px] rounded-b-lg text-white focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Settings Column */}
//           <div className="space-y-6">
//             {/* Featured Image */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-300">Featured Image</label>
//               {currentBlog.featuredImage ? (
//                 <div className="border border-gray-700 rounded-lg p-4">
//                   <img 
//                     src={currentBlog.featuredImage} 
//                     alt="Featured" 
//                     className="w-full h-48 object-cover rounded-lg mb-2"
//                   />
//                   <button 
//                     onClick={() => setCurrentBlog({...currentBlog, featuredImage: ''})}
//                     className="text-red-400 text-sm"
//                   >
//                     Remove Image
//                   </button>
//                 </div>
//               ) : (
//                 <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center">
//                   <PhotoIcon className="h-10 w-10 text-gray-500 mb-2" />
//                   <p className="text-sm text-gray-400 mb-2">Drag & drop image here or click to upload</p>
//                   <label className="bg-lime-500 text-gray-900 px-3 py-1 rounded text-sm font-medium cursor-pointer hover:bg-lime-400 transition">
//                     Select Image
//                     <input 
//                       type="file" 
//                       className="hidden" 
//                       onChange={(e) => {
//                         const file = e.target.files[0];
//                         if (file) {
//                           const imageUrl = URL.createObjectURL(file);
//                           setCurrentBlog({...currentBlog, featuredImage: imageUrl});
//                         }
//                       }}
//                     />
//                   </label>
//                 </div>
//               )}
//             </div>

//             {/* SEO Settings */}
//             <div className="space-y-4 bg-[#0B1120] p-4 rounded-lg border border-gray-700">
//               <h4 className="text-sm font-medium text-gray-300 border-b border-gray-700 pb-2">SEO Settings</h4>
//               <div className="space-y-3">
//                 <div>
//                   <label className="block text-xs text-gray-400 mb-1">Meta Title</label>
//                   <input
//                     type="text"
//                     placeholder="SEO-friendly title"
//                     value={currentBlog.metaTitle}
//                     onChange={(e) => setCurrentBlog({...currentBlog, metaTitle: e.target.value})}
//                     className="w-full bg-[#111827] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-lime-500 text-sm border border-gray-700"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs text-gray-400 mb-1">Slug/URL</label>
//                   <input
//                     type="text"
//                     placeholder="blog-post-url"
//                     value={currentBlog.url}
//                     onChange={(e) => setCurrentBlog({...currentBlog, slug: e.target.value})}
//                     className="w-full bg-[#111827] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-lime-500 text-sm border border-gray-700"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Publish Settings */}
//             <div className="space-y-4 bg-[#0B1120] p-4 rounded-lg border border-gray-700">
//               <h4 className="text-sm font-medium text-gray-300 border-b border-gray-700 pb-2">Publish Settings</h4>
//               <div className="space-y-3">
//                 <div>
//                   <label className="block text-xs text-gray-400 mb-1">Category</label>
//                   <select
//                     value={currentBlog.category}
//                     onChange={(e) => setCurrentBlog({...currentBlog, category: e.target.value})}
//                     className="w-full bg-[#111827] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-lime-500 text-sm border border-gray-700"
//                   >
//                     <option value="">Select category</option>
//                     <option value="SEO">SEO</option>
//                     <option value="Marketing">Marketing</option>
//                     <option value="Technology">Technology</option>
//                     <option value="Business">Business</option>
//                   </select>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <label className="text-xs text-gray-400">Visibility</label>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input 
//                       type="checkbox" 
//                       checked={currentBlog.isPublic}
//                       onChange={(e) => setCurrentBlog({...currentBlog, visibility: e.target.checked})}
//                       className="sr-only peer" 
//                     />
//                     <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-lime-500"></div>
//                     <span className="ml-2 text-xs font-medium text-gray-300">
//                       {currentBlog.isPublic ? "Public" : "Private"}
//                     </span>
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col gap-2 pt-2">
//               <button
//                onClick={() => {
//                       if (isEditBlog) {
//                         handleEditBlog(currentBlog);
//                        } else {
//                          handleAddBlog(currentBlog);
//                               }
//                         }}
//                 className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 py-2 rounded font-medium transition hover:opacity-90"
//               >
//                 {isEditBlog ? "Update Blog Post" : "Publish Blog Post"}
//               </button>
//               <button
//                 onClick={onClose}
//                 className="w-full bg-gray-700 text-white py-2 rounded font-medium transition hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function BlogModal({ show, onClose, currentBlog, setCurrentBlog, handleAddBlog, isEditBlog }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-4xl space-y-6 animate-fadeIn">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h3 className="text-xl font-bold text-lime-400">
            {isEditBlog ? "Edit Blog Post" : "Create New Blog Post"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Blog Title</label>
              <input
                type="text"
                placeholder="Enter blog title..."
                value={currentBlog.title}
                onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                className="w-full bg-[#0B1120] px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-500 border border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Content</label>
              <div className="border border-gray-700 rounded-lg overflow-hidden">
                <div className="bg-gray-800 p-2 flex flex-wrap gap-2 border-b border-gray-700">
                  <button className="p-2 hover:bg-gray-700 rounded font-bold">B</button>
                  <button className="p-2 hover:bg-gray-700 rounded italic">I</button>
                  <button className="p-2 hover:bg-gray-700 rounded underline">U</button>
                  <div className="border-r border-gray-600 h-6 mx-2"></div>
                  <button className="p-2 hover:bg-gray-700 rounded">
                    <PhotoIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <textarea
                  placeholder="Write your blog content here..."
                  value={currentBlog.content}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                  className="w-full bg-[#0B1120] px-4 py-3 min-h-[300px] rounded-b-lg text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Settings Column */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Featured Image</label>
              {currentBlog.featuredImage ? (
                <div className="border border-gray-700 rounded-lg p-4">
                  <img
                    src={currentBlog.featuredImage}
                    alt="Featured"
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <button onClick={() => setCurrentBlog({ ...currentBlog, featuredImage: '' })} className="text-red-400 text-sm">
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center">
                  <PhotoIcon className="h-10 w-10 text-gray-500 mb-2" />
                  <p className="text-sm text-gray-400 mb-2">Drag & drop image here or click to upload</p>
                  <label className="bg-lime-500 text-gray-900 px-3 py-1 rounded text-sm font-medium cursor-pointer hover:bg-lime-400 transition">
                    Select Image
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setCurrentBlog({ ...currentBlog, featuredImage: imageUrl });
                        }
                      }}
                    />
                  </label>
                </div>
              )}
            </div>

            {/* SEO Settings */}
            <div className="space-y-4 bg-[#0B1120] p-4 rounded-lg border border-gray-700">
              <h4 className="text-sm font-medium text-gray-300 border-b border-gray-700 pb-2">SEO Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Meta Title</label>
                  <input
                    type="text"
                    placeholder="SEO-friendly title"
                    value={currentBlog.metaTitle || ''}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, metaTitle: e.target.value })}
                    className="w-full bg-[#111827] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-lime-500 text-sm border border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Slug/URL</label>
                  <input
                    type="text"
                    placeholder="blog-post-url"
                    value={currentBlog.slug || ''}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, slug: e.target.value })}
                    className="w-full bg-[#111827] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-lime-500 text-sm border border-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Publish Settings */}
            <div className="space-y-4 bg-[#0B1120] p-4 rounded-lg border border-gray-700">
              <h4 className="text-sm font-medium text-gray-300 border-b border-gray-700 pb-2">Publish Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Category</label>
                  <select
                    value={currentBlog.category}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, category: e.target.value })}
                    className="w-full bg-[#111827] px-3 py-2 rounded text-white focus:outline-none focus:ring-1 focus:ring-lime-500 text-sm border border-gray-700"
                  >
                    <option value="">Select category</option>
                    <option value="SEO">SEO</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-xs text-gray-400">Visibility</label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentBlog.visibility === 'public'}
                      onChange={(e) => setCurrentBlog({ ...currentBlog, visibility: e.target.checked ? 'public' : 'private' })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-lime-500"></div>
                    <span className="ml-2 text-xs font-medium text-gray-300">
                      {currentBlog.visibility === 'public' ? 'Public' : 'Private'}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handleAddBlog()}
                className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 py-2 rounded font-medium transition hover:opacity-90"
              >
                {isEditBlog ? 'Update Blog Post' : 'Publish Blog Post'}
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-700 text-white py-2 rounded font-medium transition hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


