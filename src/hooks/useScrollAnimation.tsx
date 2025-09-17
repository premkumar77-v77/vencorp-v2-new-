import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('section-visible');
          element.classList.remove('section-hidden');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    element.classList.add('section-hidden');
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return elementRef;
};