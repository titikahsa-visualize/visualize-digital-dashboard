// import React, { useState , useEffect} from 'react';
// import { DocumentTextIcon, XMarkIcon, PlusIcon, PencilIcon, TrashIcon, PhotoIcon } from '@heroicons/react/24/outline';
// import BlogModal from '../modals/BlogModal';
// import { getAllBlogs, createBlog, updateBlog, deleteBlog } from '../../../api/apiBlog';
// export default React.forwardRef(function BlogSection(props, ref) {
//   const [expandedBlog, setExpandedBlog] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [showBlogForm, setShowBlogForm] = useState(false);
//   const [currentBlog, setCurrentBlog] = useState({
//     title: '',
//     content: '',
//     featuredImage: '',
//     slug: '',
//     category: '',
//     visibility: 'public',
//     views: 0,
//     createdAt: new Date().toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: 'short', // e.g., 'Dec'
//   day: 'numeric'  // e.g., '15'
// }),
//   });
//   const [isEditBlog, setIsEditBlog] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const fetchBlog = async()=>{
//     setLoading(true);
//     try{
//         const response = await getAllBlogs();
//         setBlogs(response);
//     }catch(err){
//       console.log("Error fetching blogs:", err);
//     }finally{
//       setLoading(false);
//     }
//   }
//   useEffect(()=>{
//     fetchBlog();
//   },[]);

//   const createBlogs = async()=>{
//      try{
//       const response = await createBlog(currentBlog);
//       setCurrentBlog({
//         title: '',
//         content: '',
//         featuredImage: '',
//         slug: '',
//         category: '',
//         visibility: 'public',
//         createdAt:'',
//       });
//      }catch(err){
//       console.log("Error creating blog:", err);
//   }
// }
//   const handleAddBlog = () => {
//     if (currentBlog.title) {
      
//         createBlogs();
//         fetchBlog();
      
//       setCurrentBlog({
//         title: '',
//     content: '',
//     featuredImage: '',
//     slug: '',
//     category: '',
//     visibility: 'public',
//     createdAt:'',
//       });
//       setShowBlogForm(false);
//       setIsEditBlog(false);
//     }
//   };

//   const handleEditBlog = async  (blog) => {
//     setCurrentBlog(blog);
//     try{
//       const response = await updateBlog(blog._id, currentBlog);
//       fetchBlog();
//     }catch(err){
//       console.log("Error updating blog:", err);
//     }
//     setShowBlogForm(true);
//     setIsEditBlog(true);
//   };

//   const handleDeleteBlog = async (id) => {
//     try{
//       await deleteBlog(id);
//       console.log("Blog deleted successfully");
//       fetchBlog();
//     }
//     catch(err){
//       console.log("Error deleting blog:", err);
//     }
//   };

//   return ( 
//     <section 
//       id="section-blog" 
//       ref={ref}
//       className="py-12 transition-all duration-500"
//     >
//       <div className="bg-[#111827] rounded-xl p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-bold flex items-center gap-2">
//             <DocumentTextIcon className="h-5 w-5 text-lime-400" /> 
//             Blogs
//           </h3>
//           <div className="flex gap-2">
//             <button 
//               onClick={() => {
//                 setCurrentBlog({
//                    title: '',
//                       content: '',
//                    featuredImage: '',
//                    slug: '',
//                    category: '',
//                    visibility: 'public',
//                     createdAt:'',
//                 });
//                 setShowBlogForm(true);
//                 setIsEditBlog(false);
//               }}
//               className="bg-gray-700 text-sm px-3 py-1 rounded transition hover:bg-gray-600 flex items-center gap-1"
//             >
//               <PlusIcon className="h-4 w-4" /> Add Blog
//             </button>
//             <button className="bg-gray-700 text-sm px-3 py-1 rounded transition hover:bg-gray-600">
//               SEO Settings
//             </button>
//           </div>
//         </div>
        
//         <div className="space-y-4">
//           {blogs.map((blog) => (
//             <div key={blog._id}>
//               {/* Blog Summary Card */}
//               <div 
//                 onClick={() => setExpandedBlog(expandedBlog === blog._id ? null : blog._id)}
//                 className="bg-[#1A1F2E] p-4 rounded-lg flex justify-between items-center transition hover:bg-gray-800/50 cursor-pointer"
//               >
//                 <div>
//                   <h4 className="font-semibold">{blog.title}</h4>
//                   <div className="flex gap-4 text-sm text-gray-400 mt-1">
//                     <span>Published: {blog.createdAt}</span>
//                     <span>Views: {blog.views}</span>
//                     <span>Category: {blog.category}</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleEditBlog(blog);
//                     }}
//                     className="text-blue-400 transition hover:text-blue-300 flex items-center gap-1"
//                   >
//                     <PencilIcon className="h-4 w-4" /> Edit
//                   </button>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDeleteBlog(blog._id);
//                     }}
//                     className="text-red-400 transition hover:text-red-300 flex items-center gap-1"
//                   >
//                     <TrashIcon className="h-4 w-4" /> Delete
//                   </button>
//                 </div>
//               </div>

//               {/* Expanded Blog Content */}
//               {expandedBlog === blog._id && (
//                 <div className="bg-[#1A1F2E] mt-2 p-6 rounded-lg border-l-4 border-lime-500 animate-fadeIn">
//                   {/* Featured Image - Now with fixed size */}
//                   {blog.featuredImage && (
//                     <div className="mb-6">
//                       <div className="relative w-full h-64 overflow-hidden rounded-lg">
//                         <img 
//                           src={blog.featuredImage} 
//                           alt="Featured" 
//                           className="absolute w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Blog Metadata */}
//                   <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
//                     <div>
//                       <span className="mr-4">Published: {blog.createdAt}</span>
//                       <span>Category: {blog.category}</span>
//                     </div>
//                     <div>
//                       <span className="text-lime-400">{blog.views} views</span>
//                     </div>
//                   </div>
                  
//                   {/* Blog Content */}
//                   <div className="prose prose-invert max-w-none">
//                     <h2 className="text-2xl font-bold text-lime-400 mb-4">{blog.title}</h2>
//                     <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    
//                     {/* Example image in content - Also with fixed size */}
//                     <div className="my-8">
//                       <div className="relative w-full h-48 overflow-hidden rounded-lg">
//                         <img 
//                           src="https://via.placeholder.com/600x300?text=Content+Image" 
//                           alt="Content" 
//                           className="absolute w-full h-full object-cover"
//                         />
//                       </div>
//                       <p className="text-center text-sm text-gray-400 mt-2">Example image caption</p>
//                     </div>
//                   </div>
                  
//                   {/* Close Button */}
//                   <div className="mt-6 flex justify-end">
//                     <button 
//                       onClick={() => setExpandedBlog(null)}
//                       className="text-gray-400 hover:text-white transition flex items-center gap-1"
//                     >
//                       <XMarkIcon className="h-5 w-5" /> Close
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
          
//           <button 
//             onClick={() => {
//               setCurrentBlog({
//                  title: '',
//                  content: '',
//                  featuredImage: '',
//                   slug: '',
//                    category: '',
//                  visibility: 'public',
//                      createdAt:'',
//               });
//               setShowBlogForm(true);
//               setIsEditBlog(false);
//             }}
//             className="w-full py-3 bg-[#1A1F2E] border-2 border-dashed border-gray-600 rounded-lg text-gray-400 flex items-center justify-center gap-2 transition hover:border-lime-400 hover:text-lime-400"
//           >
//             <PlusIcon className="h-5 w-5" /> Add New Blog
//           </button>
//         </div>
//       </div>

//       <BlogModal 
//         show={showBlogForm}
//         onClose={() => { setShowBlogForm(false); setIsEditBlog(false); }}
//         currentBlog={currentBlog}
//         setCurrentBlog={setCurrentBlog}
//         handleAddBlog={handleAddBlog}
//         isEditBlog={isEditBlog}
//         setIsEditBlog={setIsEditBlog}
//         handleEditBlog={handleEditBlog}
//       />
//     </section>
//   );
// });


import React, { useState, useEffect } from 'react';
import {
  DocumentTextIcon,
  XMarkIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import BlogModal from '../modals/BlogModal';
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from '../../../api/apiBlog';

export default React.forwardRef(function BlogSection(props, ref) {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(getInitialBlog());
  const [isEditBlog, setIsEditBlog] = useState(false);
  const [loading, setLoading] = useState(false);

  function getInitialBlog() {
    return {
      title: '',
      content: '',
      featuredImage: '',
      slug: '',
      category: '',
      visibility: 'public',
      views: 0,
      createdAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    };
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await getAllBlogs();
      setBlogs(response);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBlog = async () => {
    if (!currentBlog.title) return;
    try {
      if (isEditBlog) {
        await updateBlog(currentBlog._id, currentBlog);
      } else {
        await createBlog({
          ...currentBlog,
          slug: currentBlog.slug.toLowerCase().replace(/\s+/g, '-')
        });
      }
      fetchBlogs();
      setCurrentBlog(getInitialBlog());
      setShowBlogForm(false);
      setIsEditBlog(false);
    } catch (err) {
      console.error('Error saving blog:', err);
    }
  };

  const handleEditBlog = (blog) => {
    setCurrentBlog(blog);
    setShowBlogForm(true);
    setIsEditBlog(true);
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };

  return (
    <section id="section-blog" ref={ref} className="py-12 transition-all duration-500">
      <div className="bg-[#111827] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <DocumentTextIcon className="h-5 w-5 text-lime-400" /> Blogs
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setCurrentBlog(getInitialBlog());
                setShowBlogForm(true);
                setIsEditBlog(false);
              }}
              className="bg-gray-700 text-sm px-3 py-1 rounded transition hover:bg-gray-600 flex items-center gap-1"
            >
              <PlusIcon className="h-4 w-4" /> Add Blog
            </button>
            <button className="bg-gray-700 text-sm px-3 py-1 rounded transition hover:bg-gray-600">
              SEO Settings
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <div
                onClick={() => setExpandedBlog(expandedBlog === blog._id ? null : blog._id)}
                className="bg-[#1A1F2E] p-4 rounded-lg flex justify-between items-center transition hover:bg-gray-800/50 cursor-pointer"
              >
                <div>
                  <h4 className="font-semibold">{blog.title}</h4>
                  <div className="flex gap-4 text-sm text-gray-400 mt-1">
                    <span>Published: {blog.createdAt}</span>
                    <span>Views: {blog.views}</span>
                    <span>Category: {blog.category}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditBlog(blog);
                    }}
                    className="text-blue-400 transition hover:text-blue-300 flex items-center gap-1"
                  >
                    <PencilIcon className="h-4 w-4" /> Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteBlog(blog._id);
                    }}
                    className="text-red-400 transition hover:text-red-300 flex items-center gap-1"
                  >
                    <TrashIcon className="h-4 w-4" /> Delete
                  </button>
                </div>
              </div>

              {expandedBlog === blog._id && (
                <div className="bg-[#1A1F2E] mt-2 p-6 rounded-lg border-l-4 border-lime-500 animate-fadeIn">
                  {blog.featuredImage && (
                    <div className="mb-6">
                      <div className="relative w-full h-64 overflow-hidden rounded-lg">
                        <img src={blog.featuredImage} alt="Featured" className="absolute w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                    <div>
                      <span className="mr-4">Published: {blog.createdAt}</span>
                      <span>Category: {blog.category}</span>
                    </div>
                    <div>
                      <span className="text-lime-400">{blog.views} views</span>
                    </div>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-lime-400 mb-4">{blog.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setExpandedBlog(null)}
                      className="text-gray-400 hover:text-white transition flex items-center gap-1"
                    >
                      <XMarkIcon className="h-5 w-5" /> Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              setCurrentBlog(getInitialBlog());
              setShowBlogForm(true);
              setIsEditBlog(false);
            }}
            className="w-full py-3 bg-[#1A1F2E] border-2 border-dashed border-gray-600 rounded-lg text-gray-400 flex items-center justify-center gap-2 transition hover:border-lime-400 hover:text-lime-400"
          >
            <PlusIcon className="h-5 w-5" /> Add New Blog
          </button>
        </div>
      </div>

      <BlogModal
        show={showBlogForm}
        onClose={() => {
          setShowBlogForm(false);
          setIsEditBlog(false);
        }}
        currentBlog={currentBlog}
        setCurrentBlog={setCurrentBlog}
        handleAddBlog={handleAddBlog}
        handleEditBlog={handleEditBlog}
        isEditBlog={isEditBlog}
      />
    </section>
  );
});

