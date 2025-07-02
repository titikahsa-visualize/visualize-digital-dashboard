// import React, { useState , useEffect } from 'react';
// import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
// import { getAllLeads, createLeads } from '../../../api/apiLeads-quotation.js';

// import QuoteModal from '../modals/QuoteModal';

// export default React.forwardRef(function LeadsSection(props, ref) {
//   const [leadsSearch, setLeadsSearch] = useState('');
//   const[loading, setLoading] = useState(false);
//   const [leads, setLeads] = useState([]);
//   const [showQuoteForm, setShowQuoteForm] = useState(false);
//   const [newQuote, setNewQuote] = useState({
//     name: '',
//     service: '',
//     budget: '',
//     msg: '',
//     date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
//   });

//   const filteredLeads = leads.filter(lead => 
//     lead.name.toLowerCase().includes(leadsSearch.toLowerCase()) ||
//     lead.service.toLowerCase().includes(leadsSearch.toLowerCase()) ||
//     lead.budget.toLowerCase().includes(leadsSearch.toLowerCase()) ||
//     lead.msg.toLowerCase().includes(leadsSearch.toLowerCase())
//   );

//   const handleAddQuotation = async () => {
//   if (!newQuote.client || !newQuote.service) {
//     alert('Client and Service are required');
//     return;
//   }

//   try {
//     // Optional: You can make a POST request here if you are using the backend
//     await createLeads({
//       ...newQuote,
//       date: new Date().toISOString()  // optional, server can handle default
//     });

//     // Refresh local state
//     await fetchLeads();

//     // Reset form
//     setNewQuote({
//       client: '',
//       service: '',
//       budget: '',
//       message: '',
//       date: ''
//     });

//     setShowQuoteForm(false);
//   } catch (err) {
//     alert('Failed to add quotation');
//     console.error(err);
//   }
// };

 
//   const fetchLeads = async () => {
//     setLoading(true);
//     try {
//       const data = await getAllLeads();
//       setLeads(data);
//     } catch (err) {
//       alert('Failed to load leads');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

 
    

    

//   return (
//     <section 
//       id="section-leads" 
//       ref={ref}
//       className="py-12 transition-all duration-500"
//     >
//       <div className="bg-[#111827] rounded-xl p-6 space-y-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-2xl font-bold flex items-center gap-2">Leads and Quotations</h3>
          
//           <button
//             onClick={() => setShowQuoteForm(true)}
//             className="text-sm text-lime-400 flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-lg transition hover:bg-gray-700"
//           >
//             New Manual Quotation <PlusIcon className="h-4 w-4" />
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="flex gap-4">
//           <input 
//             placeholder="🔍 Search" 
//             className="bg-gray-800 px-3 py-2 rounded-lg w-1/3 text-sm" 
//             value={leadsSearch}
//             onChange={(e) => setLeadsSearch(e.target.value)}
//           />
//           <input 
//             placeholder="🔍 Service" 
//             className="bg-gray-800 px-3 py-2 rounded-lg w-1/4 text-sm" 
//           />
//           <input 
//             placeholder="🔍 Budget" 
//             className="bg-gray-800 px-3 py-2 rounded-lg w-1/4 text-sm" 
//           />
//         </div>

//         {/* Leads Table */}
//         <div className="overflow-auto rounded-xl border border-gray-700 mt-4">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-800 text-gray-300">
//               <tr>
//                 <th className="px-4 py-3">Client</th>
//                 <th className="px-4 py-3">Service</th>
//                 <th className="px-4 py-3">Budget</th>
//                 <th className="px-4 py-3">Message</th>
//                 <th className="px-4 py-3">Date</th>
//                 <th className="px-4 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-[#0B1120] text-white">
//               {filteredLeads.map((lead, index) => (
//                 <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/50 transition-colors">
//                   <td className="px-4 py-3 flex items-center gap-2">
//                     <input type="checkbox" className="accent-lime-500" />
//                     <span>{lead.name}</span>
//                   </td>
//                   <td className="px-4 py-3">{lead.service}</td>
//                   <td className="px-4 py-3">{lead.budget}</td>
//                   <td className="px-4 py-3">{lead.message}</td>
//                   <td className="px-4 py-3">{lead.date}</td>
//                   <td className="px-4 py-3 flex gap-2 items-center">
//                     <button className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 text-xs px-3 py-1 rounded font-medium transition hover:opacity-90">
//                       Generate Quotation
//                     </button>
//                     <button className="text-gray-400 text-lg transition hover:text-white">⤴</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* CRM Footer */}
//         <div className="flex justify-between items-center pt-4">
//           <p className="text-sm text-gray-400">CRM connected: New leads auto-synced to Zoho CRM</p>
//           <div className="flex items-center gap-4">
//             <button className="bg-[#1F2937] px-4 py-2 rounded text-sm transition hover:bg-gray-700">
//               ⬇ Export to Excel
//             </button>
//             <a href="#" className="text-sm text-blue-400 transition hover:text-blue-300">
//               View more →
//             </a>
//           </div>
//         </div>
//       </div>

//       <QuoteModal 
//         show={showQuoteForm}
//         onClose={() => setShowQuoteForm(false)}
//         newQuote={newQuote}
//         setNewQuote={setNewQuote}
//         handleAddQuotation={handleAddQuotation}
//       />
//     </section>
//   );
// });


import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { getAllLeads, createLeads } from '../../../api/apiLeads-quotation.js';
import QuoteModal from '../modals/QuoteModal';

export default React.forwardRef(function LeadsSection(props, ref) {
  const [leadsSearch, setLeadsSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [newQuote, setNewQuote] = useState({
    client: '',
    service: '',
    budget: '',
    message: '',
    date: new Date().toISOString()
  });

  const filteredLeads = leads.filter((lead) =>
    (lead.client || '').toLowerCase().includes(leadsSearch.toLowerCase()) ||
    (lead.service || '').toLowerCase().includes(leadsSearch.toLowerCase()) ||
    (lead.budget || '').toLowerCase().includes(leadsSearch.toLowerCase()) ||
    (lead.message || '').toLowerCase().includes(leadsSearch.toLowerCase())
  );

  const handleAddQuotation = async () => {
    if (!newQuote.client || !newQuote.service) {
      alert('Client and Service are required');
      return;
    }

    try {
      await createLeads(newQuote);
      await fetchLeads();
      setNewQuote({
        client: '',
        service: '',
        budget: '',
        message: '',
        date: new Date().toISOString()
      });
      setShowQuoteForm(false);
    } catch (err) {
      console.error('Failed to add quotation', err);
      alert('Failed to add quotation');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const data = await getAllLeads();
      setLeads(data);
    } catch (err) {
      alert('Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <section id="section-leads" ref={ref} className="py-12 transition-all duration-500">
      <div className="bg-[#111827] rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold flex items-center gap-2">Leads and Quotations</h3>
          <button
            onClick={() => setShowQuoteForm(true)}
            className="text-sm text-lime-400 flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-lg transition hover:bg-gray-700"
          >
            New Manual Quotation <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-4">
          <input
            placeholder="🔍 Search"
            className="bg-gray-800 px-3 py-2 rounded-lg w-1/3 text-sm"
            value={leadsSearch}
            onChange={(e) => setLeadsSearch(e.target.value)}
          />
        </div>

        <div className="overflow-auto rounded-xl border border-gray-700 mt-4">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-[#0B1120] text-white">
              {filteredLeads.map((lead, index) => (
                <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3">{lead.client}</td>
                  <td className="px-4 py-3">{lead.service}</td>
                  <td className="px-4 py-3">{lead.budget}</td>
                  <td className="px-4 py-3">{lead.message}</td>
                  <td className="px-4 py-3">
                    {new Date(lead.date).toLocaleDateString('en-IN')}
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 text-xs px-3 py-1 rounded font-medium transition hover:opacity-90">
                      Generate Quotation
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center pt-4">
          <p className="text-sm text-gray-400">CRM connected: New leads auto-synced to Zoho CRM</p>
          <div className="flex items-center gap-4">
            <button className="bg-[#1F2937] px-4 py-2 rounded text-sm transition hover:bg-gray-700">
              ⬇ Export to Excel
            </button>
            <a href="#" className="text-sm text-blue-400 transition hover:text-blue-300">
              View more →
            </a>
          </div>
        </div>
      </div>

      <QuoteModal
        show={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        newQuote={newQuote}
        setNewQuote={setNewQuote}
        handleAddQuotation={handleAddQuotation}
      />
    </section>
  );
});
