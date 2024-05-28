import { useCallback, useEffect, useRef, useState } from 'react';

export default function useHeroTimer(arrLength: number) {
   const [heroValue, setHeroValue] = useState('-1');
   const intervalIdRef = useRef<NodeJS.Timeout | undefined>(undefined);
   const indexRef = useRef(Number(heroValue));

   const updateHeroValue = useCallback(
      (value?: string) => {
         const newValue =
            value !== undefined ? Number(value) : indexRef.current;

         setHeroValue(value || String(newValue));
         indexRef.current = (newValue + 1) % arrLength;
      },
      [arrLength],
   );

   const startTimer = useCallback(() => {
      if (!intervalIdRef.current) {
         updateHeroValue();
         intervalIdRef.current = setInterval(updateHeroValue, 6000);
      }
   }, [updateHeroValue]);

   const stopTimer = useCallback(() => {
      if (intervalIdRef.current) {
         clearInterval(intervalIdRef.current);
         intervalIdRef.current = undefined;
      }
   }, []);

   const resumeTimer = useCallback(
      (value?: string) => {
         if (typeof value === 'string') {
            updateHeroValue(value);
         }

         if (intervalIdRef.current || typeof value === 'string') {
            return stopTimer();
         } else if (intervalIdRef.current === undefined) {
            return startTimer();
         }
      },
      [startTimer, stopTimer, updateHeroValue],
   );

   useEffect(() => {
      startTimer();

      return () => stopTimer();
   }, [startTimer, stopTimer]);

   return [heroValue, resumeTimer] as const;
}
