import React from 'react';
import SEOSettings from '../SEOSettings';

export default React.forwardRef(function SEOSection(props, ref) {
  return (
    <section 
      id="section-seo" 
      ref={ref}
      className="py-12 transition-all duration-500"
    >
      <div className="bg-[#111827] rounded-xl p-6">
        <SEOSettings />
      </div>
    </section>
  );
});