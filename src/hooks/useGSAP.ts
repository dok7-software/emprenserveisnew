
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      // Initialize GSAP timeline
      const tl = gsap.timeline();
      
      // Hero animations
      tl.from('.hero-badge', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      })
      .from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-description', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-buttons', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.hero-info', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.3');

      // Scroll-triggered animations
      gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: 'power2.out'
        });
      });

      // Card hover animations
      gsap.utils.toArray('.hover-card').forEach((card: any) => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(card, {
          duration: 0.3,
          y: -10,
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          ease: 'power2.out'
        });

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });

      isInitialized.current = true;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { gsap, ScrollTrigger };
};
