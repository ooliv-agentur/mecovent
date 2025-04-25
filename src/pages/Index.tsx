
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
import VideoSection from '@/components/VideoSection';

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

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 overflow-x-hidden w-full">
      <Navigation />
      <main className="overflow-x-hidden w-full">
        <HeroSection />
        <WhyMecovent />
        {/* Order changed as requested: Projects first, then Services */}
        <ProjectsSection />
        <ServicesSection />
        <VideoSection />
        <EventTypesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
