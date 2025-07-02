// import React, { useEffect, useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import { createService , getAllServices , deleteService } from '../../../api/apiService.js'; // your API POST method

// const SERVICE_TYPES = [
//   'performance-marketing',
//   'seo-content',
//   'social-media-marketing',
//   'email-sms-marketing',
//   'analytics-cro',
//   'web-app-services',
//   'strategy-consultant',
//   'industry-packages',
//   'tools-integrations',
//   'client-portal',
// ];

// export default function ServiceModal({ show, onClose, isEditMode , fetchServices }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     imageUrl: '',
//     caption: '',
//     type: '',
//   });

//    handleAddService = async () => {
//     try {
//       await createService(formData, 'service'); // POST to /api/service
//       alert('Service added successfully');
//       setFormData({
//       title: '',
//       img: '',
//       desc: '',
//       type: ''
//     });
//       fetchServices();
//       onClose();
//     } catch (err) {
//       console.error('Add Service Error:', err);
//       alert('Failed to add service. Check console for details.');
//     }
//   };

//   if (!show) return null;
//   return (
//     <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//       <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-bold">{isEditMode ? "Edit Service" : "Add New Service"}</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-white">
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         {/* 🔤 Service Name (Mongoose: name) */}
//         <input
//           type="text"
//           placeholder="Service Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
//         />

//         {/* 🖼️ Image URL (Mongoose: imageUrl) */}
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={formData.imageUrl}
//           onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
//         />

//         {/* ✍️ Caption / Description (Mongoose: caption) */}
//         <textarea
//           placeholder="Caption / Description"
//           value={formData.caption}
//           onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]"
//         />

//         {/* 📂 Service Type (Mongoose: type enum) */}
//         <select
//           value={formData.type}
//           onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
//         >
//           <option value="">Select Service Type</option>
//           {SERVICE_TYPES.map((type) => (
//             <option key={type} value={type}>
//               {type.replace(/-/g, ' ')}
//             </option>
//           ))}
//         </select>

//         <div className="flex justify-end gap-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleAddService}
//             className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
//           >
//             {isEditMode ? "Update" : "Add Service"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import { createService , updateService } from '../../../api/apiService.js'; // POST method only

// const SERVICE_TYPES = [
//   'performance-marketing',
//   'seo-content',
//   'social-media-marketing',
//   'email-sms-marketing',
//   'analytics-cro',
//   'web-app-services',
//   'strategy-consultant',
//   'industry-packages',
//   'tools-integrations',
//   'client-portal',
// ];

// export default function ServiceModal({ show, onClose, isEditMode, fetchServices , editServiceId ,handleAddService}) {
//   const [formData, setFormData] = useState({
//     name: '',
//     imageUrl: '',
//     caption: '',
//     type: '',
//   });

//   // ✅ FIXED: Added const

//  handleAddService(formData);

 
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//       <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-bold">{isEditMode ? "Edit Service" : "Add New Service"}</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-white">
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         <input
//           type="text"
//           placeholder="Service Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
//         />

//         <input
//           type="text"
//           placeholder="Image URL"
//           value={formData.imageUrl}
//           onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
//         />

//         <textarea
//           placeholder="Caption / Description"
//           value={formData.caption}
//           onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]"
//         />

//         <select
//           value={formData.type}
//           onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
//         >
//           <option value="">Select Service Type</option>
//           {SERVICE_TYPES.map((type) => (
//             <option key={type} value={type}>
//               {type.replace(/-/g, ' ')}
//             </option>
//           ))}
//         </select>

//         <div className="flex justify-end gap-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleAddService}
//             className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
//           >
//             {isEditMode ? "Update" : "Add Service"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const SERVICE_TYPES = [
  'performance-marketing', 'seo-content', 'social-media-marketing',
  'email-sms-marketing', 'analytics-cro', 'web-app-services',
  'strategy-consultant', 'industry-packages', 'tools-integrations', 'client-portal',
];

export default function ServiceModal({ show, onClose, isEditMode, formData, setFormData, handleAddService }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{isEditMode ? 'Edit Service' : 'Add New Service'}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Service Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        />

        <textarea
          placeholder="Caption / Description"
          value={formData.caption}
          onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]"
        />

        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          <option value="">Select Service Type</option>
          {SERVICE_TYPES.map((type) => (
            <option key={type} value={type}>{type.replace(/-/g, ' ')}</option>
          ))}
        </select>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
          >Cancel</button>
          <button
            onClick={() => handleAddService(formData)}
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
          >{isEditMode ? 'Update' : 'Add Service'}</button>
        </div>
      </div>
    </div>
  );
}
