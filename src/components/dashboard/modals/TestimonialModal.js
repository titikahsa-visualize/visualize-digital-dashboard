// import React from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// export default function TestimonialModal({ 
//   show, 
//   onClose, 
//   currentTestimonial, 
//   setCurrentTestimonial, 
//   handleAddTestimonial, 
//   isEditTestimonial,
//   renderStars 
// }) {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//       <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-bold">{isEditTestimonial ? "Edit Testimonial" : "Add New Testimonial"}</h3>
//           <button 
//             onClick={onClose} 
//             className="text-gray-400 hover:text-white"
//           >
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={currentTestimonial.name} 
//           onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
//         />
//         <input 
//           type="text" 
//           placeholder="Company" 
//           value={currentTestimonial.company} 
//           onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, company: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
//         />
//         <textarea 
//           placeholder="Testimonial Text" 
//           value={currentTestimonial.text} 
//           onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, text: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]" 
//         />
//         <div>
//           <label className="block text-gray-400 text-sm mb-2">Rating</label>
//           <div className="flex gap-1 text-2xl">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span 
//                 key={star}
//                 className={`cursor-pointer ${star <= currentTestimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
//                 onClick={() => setCurrentTestimonial({...currentTestimonial, rating: star})}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-end gap-2">
//           <button 
//             onClick={onClose} 
//             className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//           <button 
//             onClick={handleAddTestimonial} 
//             className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
//           >
//             {isEditTestimonial ? "Update" : "Add Testimonial"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function TestimonialModal({ 
  show, 
  onClose, 
  currentTestimonial, 
  setCurrentTestimonial, 
  handleAddTestimonial, 
  isEditTestimonial 
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">
            {isEditTestimonial ? "Edit Testimonial" : "Add New Testimonial"}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Name */}
        <input 
          type="text" 
          placeholder="Name" 
          value={currentTestimonial.name} 
          onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })} 
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
        />

        {/* Company */}
        <input 
          type="text" 
          placeholder="Company (optional)" 
          value={currentTestimonial.company} 
          onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, company: e.target.value })} 
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
        />

        {/* Testimonial Text */}
        <textarea 
          placeholder="Testimonial" 
          value={currentTestimonial.testimonial} 
          onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, testimonial: e.target.value })} 
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]" 
        />

        {/* Rating */}
        <div>
          <label className="block text-gray-400 text-sm mb-2">Rating</label>
          <div className="flex gap-1 text-2xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star}
                className={`cursor-pointer ${star <= currentTestimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                onClick={() => setCurrentTestimonial({ ...currentTestimonial, rating: star })}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose} 
            className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <button 
            onClick={handleAddTestimonial} 
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
          >
            {isEditTestimonial ? "Update Testimonial" : "Add Testimonial"}
          </button>
        </div>
      </div>
    </div>
  );
}
