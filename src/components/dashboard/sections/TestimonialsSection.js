// import React, { useState } from 'react';
// import { ClipboardDocumentIcon, PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
// import TestimonialModal from '../modals/TestimonialModal';

// export default React.forwardRef(function TestimonialsSection(props, ref) {
//   const [testimonials, setTestimonials] = useState([
//     { id: 1, name: 'Sarah Johnson', company: 'TechStart Inc', text: 'Our traffic increased by 200% in just 3 months!', rating: 5 },
//     { id: 2, name: 'Michael Chen', company: 'Global Solutions', text: 'The SEO strategies implemented have transformed our business.', rating: 5 }
//   ]);
//   const [showTestimonialForm, setShowTestimonialForm] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState({ 
//     name: '', 
//     company: '', 
//     text: '', 
//     rating: 5 
//   });
//   const [isEditTestimonial, setIsEditTestimonial] = useState(false);

//   const renderStars = (rating) => {
//     return Array(5).fill(0).map((_, i) => (
//       <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>★</span>
//     ));
//   };

//   const handleAddTestimonial = () => {
//     if (currentTestimonial.name && currentTestimonial.text) {
//       if (isEditTestimonial) {
//         setTestimonials(testimonials.map(testimonial => 
//           testimonial.id === currentTestimonial.id ? currentTestimonial : testimonial
//         ));
//       } else {
//         setTestimonials([...testimonials, {
//           ...currentTestimonial,
//           id: Date.now()
//         }]);
//       }
//       setCurrentTestimonial({ 
//         name: '', 
//         company: '', 
//         text: '', 
//         rating: 5 
//       });
//       setShowTestimonialForm(false);
//       setIsEditTestimonial(false);
//     }
//   };

//   const handleEditTestimonial = (testimonial) => {
//     setCurrentTestimonial(testimonial);
//     setShowTestimonialForm(true);
//     setIsEditTestimonial(true);
//   };

//   const handleDeleteTestimonial = (id) => {
//     setTestimonials(testimonials.filter(t => t._id !== id));
//   };

//   return (
//     <section 
//       id="section-testimonials" 
//       ref={ref}
//       className="py-12 transition-all duration-500"
//     >
//       <div className="bg-[#111827] rounded-xl p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-bold flex items-center gap-2">
//             <ClipboardDocumentIcon className="h-5 w-5 text-lime-400" /> 
//             Testimonials
//           </h3>
//           <button 
//             onClick={() => {
//               setCurrentTestimonial({ 
//                 name: '', 
//                 company: '', 
//                 text: '', 
//                 rating: 5 
//               });
//               setShowTestimonialForm(true);
//               setIsEditTestimonial(false);
//             }}
//             className="bg-gray-700 text-sm px-3 py-1 rounded transition hover:bg-gray-600 flex items-center gap-1"
//           >
//             <PlusIcon className="h-4 w-4" /> Add Testimonial
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="bg-[#1A1F2E] p-5 rounded-xl transition hover:scale-[1.02] hover:shadow-lg">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="font-semibold">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-400">{testimonial.company}</p>
//                 </div>
//                 <div className="text-xl">
//                   {renderStars(testimonial.rating)}
//                 </div>
//               </div>
              
//               <p className="mt-4 text-gray-300 italic">"{testimonial.text}"</p>
              
//               <div className="mt-4 flex gap-2">
//                 <button 
//                   onClick={() => handleEditTestimonial(testimonial)}
//                   className="text-blue-400 text-sm transition hover:text-blue-300 flex items-center gap-1"
//                 >
//                   <PencilIcon className="h-4 w-4" /> Edit
//                 </button>
//                 <button 
//                   onClick={() => handleDeleteTestimonial(testimonial._id)}
//                   className="text-red-400 text-sm transition hover:text-red-300 flex items-center gap-1"
//                 >
//                   <TrashIcon className="h-4 w-4" /> Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <TestimonialModal 
//         show={showTestimonialForm}
//         onClose={() => { setShowTestimonialForm(false); setIsEditTestimonial(false); }}
//         currentTestimonial={currentTestimonial}
//         setCurrentTestimonial={setCurrentTestimonial}
//         handleAddTestimonial={handleAddTestimonial}
//         isEditTestimonial={isEditTestimonial}
//         renderStars={renderStars}
//       />
//     </section>
//   );
// });

import React, { useState, useEffect } from 'react';
import { ClipboardDocumentIcon, PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import TestimonialModal from '../modals/TestimonialModal';
import { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../../../api/apiTestimonials';

export default React.forwardRef(function TestimonialsSection(props, ref) {
  const [testimonials, setTestimonials] = useState([]);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({ 
    name: '', 
    company: '', 
    testimonial: '', 
    rating: 5 ,
    createdAt:''
  });
  const [isEditTestimonial, setIsEditTestimonial] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const data = await getAllTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error('Failed to load testimonials:', error);
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>★</span>
    ));
  };

  const handleAddTestimonial = async () => {
    if (currentTestimonial.name && currentTestimonial.testimonial) {
      try {
        if (isEditTestimonial) {
          await updateTestimonial(currentTestimonial._id, currentTestimonial);
        } else {
          await createTestimonial(currentTestimonial);
        }
        setCurrentTestimonial({ name: '', company: '', testimonial: '', rating: 5 });
        setShowTestimonialForm(false);
        setIsEditTestimonial(false);
        fetchTestimonials();
      } catch (error) {
        console.error('Failed to save testimonial:', error);
      }
    }
  };

  const handleEditTestimonial = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setShowTestimonialForm(true);
    setIsEditTestimonial(true);
  };

  const handleDeleteTestimonial = async (id) => {
    try {
      await deleteTestimonial(id);
      fetchTestimonials();
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
    }
  };

  return (
    <section 
      id="section-testimonials" 
      ref={ref}
      className="py-12 transition-all duration-500"
    >
      <div className="bg-[#111827] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <ClipboardDocumentIcon className="h-5 w-5 text-lime-400" /> 
            Testimonials
          </h3>
          <button 
            onClick={() => {
              setCurrentTestimonial({ name: '', company: '', testimonial: '', rating: 5 });
              setShowTestimonialForm(true);
              setIsEditTestimonial(false);
            }}
            className="bg-gray-700 text-sm px-3 py-1 rounded transition hover:bg-gray-600 flex items-center gap-1"
          >
            <PlusIcon className="h-4 w-4" /> Add Testimonial
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-[#1A1F2E] p-5 rounded-xl transition hover:scale-[1.02] hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
                <div className="text-xl">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="mt-4 text-gray-300 italic">"{testimonial.testimonial}"</p>
              
              <div className="mt-4 flex gap-2">
                <button 
                  onClick={() => handleEditTestimonial(testimonial)}
                  className="text-blue-400 text-sm transition hover:text-blue-300 flex items-center gap-1"
                >
                  <PencilIcon className="h-4 w-4" /> Edit
                </button>
                <button 
                  onClick={() => handleDeleteTestimonial(testimonial._id)}
                  className="text-red-400 text-sm transition hover:text-red-300 flex items-center gap-1"
                >
                  <TrashIcon className="h-4 w-4" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TestimonialModal 
        show={showTestimonialForm}
        onClose={() => { setShowTestimonialForm(false); setIsEditTestimonial(false); }}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
        handleAddTestimonial={handleAddTestimonial}
        isEditTestimonial={isEditTestimonial}
        renderStars={renderStars}
      />
    </section>
  );
});
