import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        <div className="loader mb-4"></div>
        <p className="text-white text-lg font-semibold">Loading, please wait...</p>
      </div>
      <style jsx="true">{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #22c55e;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
