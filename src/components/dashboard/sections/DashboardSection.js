// import React, { useState } from 'react';
// import { ArrowDownIcon, InformationCircleIcon, PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
// import ServiceModal from '../modals/ServiceModal';
// import { createService , getAllServices , deleteService } from '../../../api/apiService.js';

// export default React.forwardRef(function DashboardSection(props, ref) {
//   const [isManageMode, setIsManageMode] = useState(false);
//   const [services, setServices] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ title: '', img: '', desc: '' });
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddService = () => {
//     if (formData.title && formData.img && formData.desc) {
//       if (isEditMode) {
//         const updated = [...services];
//         updated[editIndex] = formData;
//         setServices(updated);
//       } else {
//         setServices([...services, formData]);
//       }
//       setFormData({ title: '', img: '', desc: '' });
//       setShowForm(false);
//       setIsEditMode(false);
//     }
//   };

//   const handleDeleteService = (index) => {
//     const updated = services.filter((_, i) => i !== index);
//     setServices(updated);
//   };

//   const handleEditService = (index) => {
//     setFormData(services[index]);
//     setEditIndex(index);
//     setIsEditMode(true);
//     setShowForm(true);
//   };

//   return (
//     <section 
//       id="section-dashboard" 
//       ref={ref}
//       className="py-8 transition-all duration-500"
//     >
//       {/* Welcome Section */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-lime-400">Welcome Atharv!</h1>
//         </div>
//         <button className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 text-sm px-4 py-2 rounded font-medium flex items-center gap-2 transition hover:opacity-90">
//           <ArrowDownIcon className="h-4 w-4" /> 
//           Download Reports
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         {[
//           { label: 'Website Traffic', value: '12,000', note: '+12.5%' }, 
//           { label: 'Leads Generated', value: '3,000' }, 
//           { label: 'Top Pages', value: '780' }, 
//           { label: 'Pending Requests', value: '5' }
//         ].map((item, index) => (
//           <div key={index} className="group p-4 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gradient-to-r hover:from-lime-500/20 hover:to-emerald-500/20 hover:shadow-xl">
//             <h4 className="text-sm text-gray-400">{index < 2 ? "This Week" : "This Month"}</h4>
//             <p className="text-lg font-bold mt-1">{item.label}</p>
//             <p className="text-2xl font-semibold mt-2 text-lime-400">{item.value}</p>
//             {item.note && <p className="text-xs mt-2 text-green-500">{item.note}</p>}
//           </div>
//         ))}
//       </section>

//       {/* Services + SEO Banner */}

//      useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const data = await getAllServices('service'); // 'service' is your API slug
//         setServices(data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Failed to fetch services:', err);
//         setLoading(false);
//       }
//     };

//     fetchServices(); // Call on component mount
//   }, []);

//   if (loading) <p className="text-white">Loading...</p>;

//       <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
//         <div className="lg:col-span-4 bg-[#111827] p-6 rounded-xl">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center gap-3 text-white-400">
//               <InformationCircleIcon className="h-6 w-6" />
//               <span className="text-2xl font-bold">Services</span>
//             </div>
//             <button 
//               onClick={() => setIsManageMode(!isManageMode)} 
//               className="text-sm px-4 py-1 bg-gray-700 rounded-lg transition hover:bg-gray-600"
//             >
//               {isManageMode ? "Done" : "Manage Services"}
//             </button>
//           </div>

//           <div className="flex overflow-x-auto gap-4 pb-2">
//             {services.map((service, i) => (
//               <div key={i} className="relative w-[220px] h-[250px] bg-[#1A1F2E] rounded-lg p-4 flex-shrink-0 text-center transition hover:scale-[1.02] hover:shadow-lg">
//                 <img src={service.img} className="rounded-md h-20 w-full object-cover mb-2" alt={service.title} />
//                 <h4 className="font-semibold truncate">{service.title}</h4>
//                 <p className="text-sm text-gray-400 mt-1 line-clamp-3">{service.desc}</p>
//                 {isManageMode && (
//                   <div className="absolute top-2 right-2 flex gap-1">
//                     <button 
//                       onClick={() => handleEditService(i)} 
//                       className="bg-blue-600 px-2 rounded text-xs transition hover:bg-blue-500"
//                     >
//                       <PencilIcon className="h-3 w-3" />
//                     </button>
//                     <button 
//                       onClick={() => handleDeleteService(i)} 
//                       className="bg-red-600 px-2 rounded text-xs transition hover:bg-red-500"
//                     >
//                       <TrashIcon className="h-3 w-3" />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}

//             <div className="w-[220px] h-[250px] bg-[#1A1F2E] border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-center p-4 flex-shrink-0 transition hover:border-lime-400">
//               <div>
//                 <button onClick={() => setShowForm(true)} className="flex flex-col items-center">
//                   <div className="text-lime-400 mb-2">
//                     <PlusIcon className="h-8 w-8" />
//                   </div>
//                   <p className="text-sm text-lime-400">Add New Service</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div 
//           className="h-full bg-cover bg-center rounded-xl overflow-hidden flex items-end justify-start transition-all duration-500 hover:shadow-xl" 
//           style={{ 
//             minHeight: '250px', 
//             backgroundImage: "url('https://images.unsplash.com/photo-1622151834677-70f982c9adef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D')" 
//           }}
//         >
//           <div className="bg-gradient-to-t from-black to-transparent p-4 w-full">
//             <p className="text-sm font-medium">
//               “<span className="text-white">Drive more traffic to your website</span> with expert <span className="text-lime-400">Search Engine Optimization</span> strategies.”
//             </p>
//           </div>
//         </div>
//       </section>

//       <ServiceModal 
//         show={showForm} 
//         onClose={() => { setShowForm(false); setIsEditMode(false); }}
//         formData={formData}
//         setFormData={setFormData}
//         handleAddService={handleAddService}
//         isEditMode={isEditMode}
//       />
//     </section>
//   );
// });


import React, { useState, useEffect } from 'react';
import {
  ArrowDownIcon, InformationCircleIcon, PencilIcon, TrashIcon, PlusIcon,
} from '@heroicons/react/24/outline';
import ServiceModal from '../modals/ServiceModal';
import { createService, getAllServices, deleteService ,updateService } from '../../../api/apiService.js';

export default React.forwardRef(function DashboardSection(props, ref) {
  const [isManageMode, setIsManageMode] = useState(false);
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', imageUrl: '', caption: '', type: '' });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editServiceId, setEditServiceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchServices = async () => {
      try {
        const data = await getAllServices('service');
        setServices(data);
      } catch (err) {
        console.error('Failed to fetch services:', err);
      } finally {
        setLoading(false);
      }
    };
  // Fetch all services
  useEffect(() => {
    
    fetchServices();
  }, []);

  // Handle add / edit
  const handleAddService = async (data) => {
  try {
    if (isEditMode && editServiceId) {
      // 🔁 Edit mode: Update existing service
      await updateService(editServiceId, formData);
      alert('Service updated successfully');
    } else {
      // ➕ Add mode: Create new service
      await createService(formData, 'service');
      alert('Service added successfully');
    }

    // 🔄 Refresh service list
    const updated = await getAllServices('service');
    setServices(updated);

    // 🧹 Reset state
    setFormData({ name: '', imageUrl: '', caption: '', type: '' });
    setShowForm(false);
    setIsEditMode(false);
    setEditServiceId(null);
  } catch (err) {
    console.error('Service Submit Error:', err);
    alert('Failed to submit service. Check console for details.');
  }
};

  // Handle delete
  const handleDeleteService = async (id) => {
    try {
      await deleteService(id, 'service');
      fetchServices();
    } catch (err) {
      console.error('Delete Error:', err);
    }
  };

  const handleEditService = (service) => {
    setFormData(service);
    setEditServiceId(service._id);
    setIsEditMode(true);
    setShowForm(true);
  };

  return (
    <section id="section-dashboard" ref={ref} className="py-8 transition-all duration-500">
      {/* Welcome Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-lime-400">Welcome Atharv!</h1>
        <button className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 text-sm px-4 py-2 rounded font-medium flex items-center gap-2 transition hover:opacity-90">
          <ArrowDownIcon className="h-4 w-4" /> Download Reports
        </button>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Website Traffic', value: '12,000', note: '+12.5%' },
          { label: 'Leads Generated', value: '3,000' },
          { label: 'Top Pages', value: '780' },
          { label: 'Pending Requests', value: '5' }
        ].map((item, index) => (
          <div key={index} className="group p-4 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gradient-to-r hover:from-lime-500/20 hover:to-emerald-500/20 hover:shadow-xl">
            <h4 className="text-sm text-gray-400">{index < 2 ? "This Week" : "This Month"}</h4>
            <p className="text-lg font-bold mt-1">{item.label}</p>
            <p className="text-2xl font-semibold mt-2 text-lime-400">{item.value}</p>
            {item.note && <p className="text-xs mt-2 text-green-500">{item.note}</p>}
          </div>
        ))}
      </section>

//          

      {/* Services Section */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-4 bg-[#111827] p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3 text-white-400">
              <InformationCircleIcon className="h-6 w-6" />
              <span className="text-2xl font-bold">Services</span>
            </div>
            <button
              onClick={() => setIsManageMode(!isManageMode)}
              className="text-sm px-4 py-1 bg-gray-700 rounded-lg transition hover:bg-gray-600"
            >
              {isManageMode ? 'Done' : 'Manage Services'}
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-2">
            {loading ? (
              <p className="text-white text-sm">Loading services...</p>
            ) : (
              <>
                {services.map((service) => (
                  <div
                    key={service._id}
                    className="relative w-[220px] h-[250px] bg-[#1A1F2E] rounded-lg p-4 flex-shrink-0 text-center transition hover:scale-[1.02] hover:shadow-lg"
                  >
                    <img
                      src={service.imageUrl}
                      className="rounded-md h-20 w-full object-cover mb-2"
                      alt={service.name}
                    />
                    <h4 className="font-semibold truncate">{service.name}</h4>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-3">{service.caption}</p>
                    {isManageMode && (
                      <div className="absolute top-2 right-2 flex gap-1">
                        <button
                          onClick={() => handleEditService(service)}
                          className="bg-blue-600 px-2 rounded text-xs transition hover:bg-blue-500"
                        >
                          <PencilIcon className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service._id)}
                          className="bg-red-600 px-2 rounded text-xs transition hover:bg-red-500"
                        >
                          <TrashIcon className="h-3 w-3" onClick={() => handleDeleteService(service._id)} />
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* Add New Service Card */}
                <div className="w-[220px] h-[250px] bg-[#1A1F2E] border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-center p-4 flex-shrink-0 transition hover:border-lime-400">
                  <button onClick={() => setShowForm(true)} className="flex flex-col items-center">
                    <PlusIcon className="h-8 w-8 text-lime-400" />
                    <p className="text-sm text-lime-400 mt-2">Add New Service</p>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Banner */}
        <div
          className="h-full bg-cover bg-center rounded-xl overflow-hidden flex items-end justify-start transition-all duration-500 hover:shadow-xl"
          style={{
            minHeight: '250px',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1622151834677-70f982c9adef?fm=jpg&q=60&w=3000')",
          }}
        >
          <div className="bg-gradient-to-t from-black to-transparent p-4 w-full">
            <p className="text-sm font-medium">
              “<span className="text-white">Drive more traffic</span> with expert{' '}
              <span className="text-lime-400">SEO strategies</span>.”
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        show={showForm}
        onClose={() => {
          setShowForm(false);
          setIsEditMode(false);
        }}
        formData={formData}
        setFormData={setFormData}
        handleAddService={handleAddService}
        fetchServices={fetchServices}
        isEditMode={isEditMode}
      />
    </section>
  );
});
