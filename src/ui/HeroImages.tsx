'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/components/tabs';
import { heroImageArr } from '@/lib/heroImageArr';
import useHeroTimer from '@/hooks/useHeroTimer';

export default function HeroImages() {
   const [heroValue, resumeTimer] = useHeroTimer(heroImageArr.length);

   return (
      <Tabs
         className="absolute h-full w-full"
         defaultValue="0"
         value={`${heroValue}`}
         onValueChange={resumeTimer}
      >
         <TabsList className="bottom-10 right-4 z-[1]">
            {heroImageArr.map((_, index) => (
               <TabsTrigger
                  key={index}
                  className="h-4 w-4"
                  value={String(index)}
               >
                  •
               </TabsTrigger>
            ))}
         </TabsList>
         {heroImageArr.map(({ styles, src }, index) => (
            <TabsContent
               key={index}
               value={String(index)}
               onClick={() => resumeTimer()}
            >
               <Image
                  className={cn(
                     'h-full w-full cursor-pointer rounded object-cover object-left-bottom',
                     styles,
                  )}
                  src={src}
                  alt={`hero image ${index}`}
                  quality={80}
                  priority
               />
            </TabsContent>
         ))}
      </Tabs>
   );
}
