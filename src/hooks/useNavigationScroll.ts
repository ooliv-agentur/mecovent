
import { useState, useEffect } from 'react';

export const useNavigationScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Set visibility based on scroll direction and position
      if (currentScrollPos > 150) {
        setVisible(!isScrollingDown);
      } else {
        setVisible(true);
      }
      
      // Update scroll position
      setPrevScrollPos(currentScrollPos);
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollPos > 150);
      
      // Update active section - added 'intro' to the sections list
      const sections = ['hero', 'intro', 'ueber-uns', 'services', 'projects', 'eventformate', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return { isScrolled, activeSection, visible };
};
