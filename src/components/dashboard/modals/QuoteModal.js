// import React from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// export default function QuoteModal({ show, onClose, newQuote, setNewQuote, handleAddQuotation }) {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//       <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-bold">Add New Quotation</h3>
//           <button 
//             onClick={onClose} 
//             className="text-gray-400 hover:text-white"
//           >
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>
//         <input 
//           type="text" 
//           placeholder="Client Name" 
//           value={newQuote.name} 
//           onChange={(e) => setNewQuote({ ...newQuote, name: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
//         />
//         <input 
//           type="text" 
//           placeholder="Service" 
//           value={newQuote.service} 
//           onChange={(e) => setNewQuote({ ...newQuote, service: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
//         />
//         <input 
//           type="text" 
//           placeholder="Budget" 
//           value={newQuote.budget} 
//           onChange={(e) => setNewQuote({ ...newQuote, budget: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500" 
//         />
//         <textarea 
//           placeholder="Message" 
//           value={newQuote.msg} 
//           onChange={(e) => setNewQuote({ ...newQuote, msg: e.target.value })} 
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]" 
//         />
//         <div className="flex justify-end gap-2">
//           <button 
//             onClick={onClose} 
//             className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//           <button 
//             onClick={() => handleAddQuotation(newQuote)} 
//             className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
//           >
//             Add Quotation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function QuoteModal({ show, onClose, newQuote, setNewQuote, handleAddQuotation }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1F2E] p-6 rounded-lg w-full max-w-md space-y-4 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Add New Quotation</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Client Name"
          value={newQuote.client}
          onChange={(e) => setNewQuote({ ...newQuote, client: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <input
          type="text"
          placeholder="Service"
          value={newQuote.service}
          onChange={(e) => setNewQuote({ ...newQuote, service: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <input
          type="text"
          placeholder="Budget"
          value={newQuote.budget}
          onChange={(e) => setNewQuote({ ...newQuote, budget: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <textarea
          placeholder="Message"
          value={newQuote.message}
          onChange={(e) => setNewQuote({ ...newQuote, message: e.target.value })}
          className="w-full px-3 py-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-700 px-4 py-2 rounded text-sm transition hover:bg-gray-600">
            Cancel
          </button>
          <button
            onClick={handleAddQuotation}
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded text-sm font-medium transition hover:opacity-90"
          >
            Add Quotation
          </button>
        </div>
      </div>
    </div>
  );
}
