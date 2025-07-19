import React from 'react';

const EmbeddedApp = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="https://visualize-digital-frontend.vercel.app/"  // Replace with your target URL or port
        title="External App"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default EmbeddedApp;
