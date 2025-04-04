
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import EventTypesSection from '@/components/EventTypesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Log the logo paths to confirm they're being used correctly
  useEffect(() => {
    console.log("Using logo paths: /logos/mecovent logo weiss blau@2x.png and /logos/MECOVENT-@2x-weiss.png");
    
    // Check if files exist by creating image objects
    const checkImageExists = (imagePath: string) => {
      const img = new Image();
      img.onload = () => console.log(`Image loaded successfully: ${imagePath}`);
      img.onerror = () => console.error(`Failed to load image: ${imagePath}`);
      img.src = imagePath;
    };
    
    checkImageExists('/logos/mecovent logo weiss blau@2x.png');
    checkImageExists('/logos/MECOVENT-@2x-weiss.png');
  }, []);

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
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <EventTypesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
