import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardSection from './sections/DashboardSection';
import LeadsSection from './sections/LeadsSection';
import BlogSection from './sections/BlogSection';
import PricingSection from './sections/PricingSection';
import SEOSection from './sections/SEOSection';
import TestimonialsSection from './sections/TestimonialsSection';
import MediaSection from './sections/MediaSection';
import UsersSection from './sections/UsersSection';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Refs for each section
  const sectionRefs = {
    dashboard: useRef(null),
    services: useRef(null),
    pricing: useRef(null),
    leads: useRef(null),
    blog: useRef(null),
    seo: useRef(null),
    testimonials: useRef(null),
    media: useRef(null),
    users: useRef(null)
  };

  // Scroll to section with smooth animation
  const scrollToSection = (section) => {
    if (section === 'services') {
      setActiveSection(section);
      return;
    }
    setActiveSection(section);
    sectionRefs[section].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sectionRefs).forEach(([sectionName, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionName);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#0B1120] text-white font-sans">
      <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="flex-1 p-6 overflow-auto">
        <Header />
        
        <DashboardSection ref={sectionRefs.dashboard} />
        <LeadsSection ref={sectionRefs.leads} />
        <BlogSection ref={sectionRefs.blog} />
        <PricingSection ref={sectionRefs.pricing} />
        <SEOSection ref={sectionRefs.seo} />
        <TestimonialsSection ref={sectionRefs.testimonials} />
        <MediaSection ref={sectionRefs.media} />
        <UsersSection ref={sectionRefs.users} />
      </main>
    </div>
  );
}