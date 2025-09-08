import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return [elementRef, isVisible];
};

export const useStaggeredAnimation = (itemCount, options = {}) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef();
  
  const {
    threshold = 0.1,
    staggerDelay = 100,
    triggerOnce = true
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate items with stagger
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * staggerDelay);
          }
        } else if (!triggerOnce) {
          setVisibleItems(new Set());
        }
      },
      { threshold }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [itemCount, staggerDelay, threshold, triggerOnce]);

  return [containerRef, visibleItems];
};