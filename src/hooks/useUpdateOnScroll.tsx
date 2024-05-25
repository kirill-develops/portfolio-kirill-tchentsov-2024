import { useCallback, useEffect, useRef, useState } from 'react';
import pageSections from '@/lib/pageSections';

export default function useUpdateOnScroll(threshold = 0.5) {
   const [selectedId, setSelectedId] = useState<String>();
   const ignoreObserver = useRef(false);

   const handleLinkClick = useCallback(() => {
      ignoreObserver.current = true;

      setTimeout(() => (ignoreObserver.current = false), 1000);
   }, []);

   const observerCallback = useCallback(
      (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setSelectedId(entry.target.id);

               if (!ignoreObserver.current) {
                  window.location.hash = entry.target.id;
               }
            }
         });
      },
      [],
   );

   useEffect(() => {
      const observer = new IntersectionObserver(observerCallback, {
         threshold,
      });

      pageSections.forEach((section) => {
         const targetElement = document.getElementById(section.id);
         if (targetElement) {
            observer.observe(targetElement);
         }
      });

      return () => {
         pageSections.forEach((section) => {
            const targetElement = document.getElementById(section.id);
            if (targetElement) {
               observer.unobserve(targetElement);
            }
         });
      };
   }, [threshold, observerCallback]);

   return { selectedId, handleLinkClick };
}
