
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyMecovent from '@/components/WhyMecovent';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import EventTypesSection from '@/components/EventTypesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll('.animate-fade-in-up');
    
    targets.forEach(target => {
      target.classList.remove('animate-fade-in-up');
      observer.observe(target);
    });

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);

  // Enable smooth scrolling pause option
  useEffect(() => {
    // Function to temporarily disable smooth scrolling for performance
    const toggleSmoothScroll = (enable: boolean) => {
      document.documentElement.style.scrollBehavior = enable ? 'smooth' : 'auto';
    };

    // Detect rapid scrolling to temporarily disable smooth scrolling
    let scrollTimeout: number | null = null;
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollSpeed = Math.abs(scrollTop - lastScrollTop);
      
      // If scrolling quickly, disable smooth scroll for better performance
      if (scrollSpeed > 50) {
        toggleSmoothScroll(false);
        
        // Clear any existing timeout
        if (scrollTimeout !== null) {
          window.clearTimeout(scrollTimeout);
        }
        
        // Re-enable smooth scrolling after scrolling stops
        scrollTimeout = window.setTimeout(() => {
          toggleSmoothScroll(true);
        }, 500);
      }
      
      lastScrollTop = scrollTop;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout !== null) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <WhyMecovent />
        <ServicesSection />
        
        {/* Projects section with improved transition */}
        <ProjectsSection />
        
        {/* Add a negative margin to pull the next section up slightly */}
        <div className="mt-[-100px] relative z-10"> 
          <EventTypesSection />
        </div>
        
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
