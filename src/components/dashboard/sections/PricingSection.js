// import React, { use, useState , useEffect } from 'react';
// import { TagIcon, PlusIcon, XMarkIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
// import PackageModal from '../modals/PackageModal';
// import { createSeoService, updateSeoService, deleteSeoService,getAllSeoServices } from '../../../api/seoServices'; // Adjust the import path as necessary

// export default React.forwardRef(function PricingSection(props, ref) {
//   const [pricingPackages, setPricingPackages] = useState([]);
//   const [showPackageForm, setShowPackageForm] = useState(false);
//   const [currentPackage, setCurrentPackage] = useState({
    
//     packageName: '',
//     features: [],
//     priceType:'',
//     cost: '',
//     ctaButton: 'Get Started',
//     createdAt: '',

//   });
//   const [isEditPackage, setIsEditPackage] = useState(false);
//   // fetch all SEO services
//   const fetchPricingPackages = async () => {
//     try {
//       const response = await getAllSeoServices();
//       setPricingPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching pricing packages:', error);
//     }
//   };
//   useEffect(() => {
//     fetchPricingPackages();
//   }, []);

//   const createPackage = async (newPkg) => {
//     try {
//       const response = await createSeoService(newPkg);
//     } catch (error) {
//       console.error('Error creating package:', error);
//     }
//   };

//   const handleAddPackage = () => {
//     if (currentPackage.packageName && currentPackage.cost) {
//       const newPkg = {
//         packageName: currentPackage.packageName,
//         features: currentPackage.features,
//         priceType: currentPackage.priceType,
//         cost: currentPackage.cost,
//         ctaButton: currentPackage.ctaButton,
//         createdAt: currentPackage.createdAt
//       };
//       createPackage(newPkg);
//       fetchPricingPackages(); 

//       if (isEditPackage) {
       
//       } else {
        
//       }
      
//       setCurrentPackage({
//         packageName: '',
//         features: [],
//         priceType:'Monthly',
//         cost: '',
//         ctaButton: 'Get Started',
//         createdAt: '',
//       });
//       setShowPackageForm(false);
//       setIsEditPackage(false);
//     }
//   };

//   const handleAddFeature = () => {
//     if (currentPackage.newFeature.trim()) {
      
//     }
//   };

//   const handleEditPackage = (pkg) => {
//     setCurrentPackage({
//       id: pkg.id,
//       name: pkg.name,
//       price: pkg.price,
//       features: pkg.features,
//       newFeature: '',
//       cta: pkg.cta || 'Get Started',
//       frequency: pkg.frequency || 'Monthly'
//     });
//     setIsEditPackage(true);
//     setShowPackageForm(true);
//   };

//   const handleDeletePackage = (id) => {
//     setPricingPackages(pricingPackages.filter(pkg => pkg.id !== id));
//   };
//   return (
//     <section 
//       id="section-pricing" 
//       ref={ref}
//       className="py-12 transition-all duration-500"
//     >
//       <div className="bg-[#111827] rounded-xl p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-bold flex items-center gap-2">
//             <TagIcon className="h-5 w-5 text-lime-400" /> 
//             Pricing : SEO Services
//           </h3>
//           <button 
//             onClick={() => {
//               setCurrentPackage({
//                 id: null,
//                 name: '',
//                 price: '',
//                 features: [],
//                 newFeature: '',
//                 cta: 'Get Started',
//                 frequency: 'Monthly'
//               });
//               setShowPackageForm(true);
//               setIsEditPackage(false);
//             }}
//             className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded font-medium flex items-center gap-2 transition hover:opacity-90"
//           >
//             <PlusIcon className="h-4 w-4" /> Add New Package
//           </button>
//         </div>
        
//         {showPackageForm ? (
//           <PackageModal 
//             currentPackage={currentPackage}
//             setCurrentPackage={setCurrentPackage}
//             handleAddFeature={handleAddFeature}
//             handleAddPackage={handleAddPackage}
//             onClose={() => setShowPackageForm(false)}
//           />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             { !pricingPackages || pricingPackages.length === 0 ? (
//               <div>No packages available</div>
//             ) : (
//               pricingPackages.map((pkg) => (
//                 <div key={pkg.id} className="bg-[#1A1F2E] p-5 rounded-xl transition hover:scale-[1.02] hover:shadow-lg">
//                   <div className="flex justify-between items-center mb-4">
//                     <h4 className="font-semibold text-xl">{pkg.name}</h4>
//                     <span className="text-2xl font-bold text-lime-400">{pkg.price}</span>
//                 </div>
                
//                 <ul className="space-y-3 mb-6">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3">
//                       <span className="text-green-500">✓</span>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="flex justify-between">
//                   <button 
//                     onClick={() => handleEditPackage(pkg)}
//                     className="text-blue-400 transition hover:text-blue-300 flex items-center gap-1"
//                   >
//                     <PencilIcon className="h-4 w-4" /> Edit
//                   </button>
//                   <button 
//                     onClick={() => handleDeletePackage(pkg.id)}
//                     className="text-red-400 transition hover:text-red-300 flex items-center gap-1"
//                   >
//                     <TrashIcon className="h-4 w-4" /> Delete
//                   </button>
//                 </div>
                
//                 <button className="w-full mt-4 bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 py-2 rounded-lg font-medium transition hover:opacity-90">
//                   {pkg.cta}
//                 </button>
//               </div>
//             )))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// });


import React, { useState, useEffect } from 'react';
import { TagIcon, PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import PackageModal from '../modals/PackageModal';
import { createSeoService, updateSeoService, deleteSeoService, getAllSeoServices } from '../../../api/seoServices';

export default React.forwardRef(function PricingSection(props, ref) {
  const [pricingPackages, setPricingPackages] = useState([]);
  const [showPackageForm, setShowPackageForm] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({
    packageName: '',
    features: [],
    priceType: 'Monthly',
    cost: '',
    ctaButton: 'Get Started',
    createdAt: '',
    newFeature: ''
  });
  const [isEditPackage, setIsEditPackage] = useState(false);

  const fetchPricingPackages = async () => {
    try {
      const response = await getAllSeoServices();
      setPricingPackages(response);
    } catch (error) {
      console.error('Error fetching pricing packages:', error);
    }
  };

  useEffect(() => {
    fetchPricingPackages();
  }, []);

  const handleAddPackage = async () => {
    if (currentPackage.packageName && currentPackage.cost) {
      const newPkg = {
        packageName: currentPackage.packageName,
        features: currentPackage.features,
        priceType: currentPackage.priceType,
        cost: currentPackage.cost,
        ctaButton: currentPackage.ctaButton,
        createdAt: new Date().toISOString()
      };

      try {
        if (isEditPackage) {
          await updateSeoService(currentPackage._id, newPkg);
        } else {
          await createSeoService(newPkg);
        }
        fetchPricingPackages();
        setShowPackageForm(false);
        setIsEditPackage(false);
        setCurrentPackage({
          packageName: '',
          features: [],
          priceType: 'Monthly',
          cost: '',
          ctaButton: 'Get Started',
          createdAt: '',
          newFeature: ''
        });
      } catch (error) {
        console.error('Error saving package:', error);
      }
    }
  };

  const handleAddFeature = () => {
    if (currentPackage.newFeature && currentPackage.newFeature.trim()) {
      setCurrentPackage({
        ...currentPackage,
        features: [...currentPackage.features, currentPackage.newFeature.trim()],
        newFeature: ''
      });
    }
  };

  const handleEditPackage = (pkg) => {
    setCurrentPackage({
      _id: pkg._id,
      packageName: pkg.packageName,
      cost: pkg.cost,
      features: pkg.features,
      newFeature: '',
      ctaButton: pkg.ctaButton || 'Get Started',
      priceType: pkg.priceType || 'Monthly',
      createdAt: pkg.createdAt
    });
    setIsEditPackage(true);
    setShowPackageForm(true);
  };

  const handleDeletePackage = async (id) => {
    try {
      await deleteSeoService(id);
      fetchPricingPackages();
    } catch (err) {
      console.error('Error deleting package:', err);
    }
  };

  return (
    <section id="section-pricing" ref={ref} className="py-12 transition-all duration-500">
      <div className="bg-[#111827] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <TagIcon className="h-5 w-5 text-lime-400" />
            Pricing : SEO Services
          </h3>
          <button
            onClick={() => {
              setCurrentPackage({
                packageName: '',
                features: [],
                priceType: 'Monthly',
                cost: '',
                ctaButton: 'Get Started',
                createdAt: '',
                newFeature: ''
              });
              setShowPackageForm(true);
              setIsEditPackage(false);
            }}
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 px-4 py-2 rounded font-medium flex items-center gap-2 transition hover:opacity-90"
          >
            <PlusIcon className="h-4 w-4" /> Add New Package
          </button>
        </div>

        {showPackageForm ? (
          <PackageModal
            currentPackage={currentPackage}
            setCurrentPackage={setCurrentPackage}
            handleAddFeature={handleAddFeature}
            handleAddPackage={handleAddPackage}
            onClose={() => setShowPackageForm(false)}
            isEditPackage={isEditPackage}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {!pricingPackages || pricingPackages.length === 0 ? (
              <div>No packages available</div>
            ) : (
              pricingPackages.map((pkg) => (
                <div key={pkg._id} className="bg-[#1A1F2E] p-5 rounded-xl transition hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-xl">{pkg.packageName}</h4>
                    <span className="text-2xl font-bold text-lime-400">{pkg.cost}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEditPackage(pkg)}
                      className="text-blue-400 transition hover:text-blue-300 flex items-center gap-1"
                    >
                      <PencilIcon className="h-4 w-4" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeletePackage(pkg._id)}
                      className="text-red-400 transition hover:text-red-300 flex items-center gap-1"
                    >
                      <TrashIcon className="h-4 w-4" /> Delete
                    </button>
                  </div>

                  <button className="w-full mt-4 bg-gradient-to-r from-lime-500 to-emerald-500 text-gray-900 py-2 rounded-lg font-medium transition hover:opacity-90">
                    {pkg.ctaButton}
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
});
