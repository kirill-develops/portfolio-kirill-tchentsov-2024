'use client';

import { useEffect, useState } from 'react';
import { ReactChildProps } from '../lib/genericTypes';
import { cn } from '../lib/utils';

function PageFrame({ children }: ReactChildProps) {
   return (
      <main
         className="relative mx-auto
         flex h-full
         min-h-screen
         max-w-6xl flex-row
         justify-between
         "
      >
         {children}
      </main>
   );
}

function MainFrame({ children }: ReactChildProps) {
   const [animationClass, setAnimationClass] = useState(
      'animate-slideOutContainerInit',
   );

   useEffect(() => {
      setTimeout(setAnimationClass, 500, 'animate-slideOutContainer');
   }, []);

   return (
      <div
         className={`${animationClass} z-0 flex h-screen flex-col overflow-scroll scroll-smooth sm:basis-3/4 sm:animate-slideIn`}
      >
         {children}
      </div>
   );
}

interface SectionFrameProps extends ReactChildProps {
   className?: string;
}

function SectionFrame({ children, id, className }: SectionFrameProps) {
   return (
      <article
         className={cn(
            'flex h-auto flex-col gap-y-16 px-4 py-10 pb-20 sm:px-8 lg:px-12',
            className,
         )}
         id={id}
      >
         {children}
      </article>
   );
}

function HeadingsFrame({ children }: ReactChildProps) {
   return <div className="flex flex-col gap-y-7">{children}</div>;
}

export { PageFrame, MainFrame, SectionFrame, HeadingsFrame };
