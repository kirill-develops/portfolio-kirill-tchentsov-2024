'use client';

import { useEffect, useState } from 'react';
import { ReactChildProps } from '../lib/genericTypes';

function PageFrame({ children }: ReactChildProps) {
   return (
      <main
         className="relative mx-auto
         flex h-full
         min-h-screen
         max-w-screen-lg flex-row
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
      setAnimationClass('animate-slideOutContainer');
   }, []);

   return (
      <div
         className={`${animationClass} z-0 flex h-screen snap-y snap-proximity flex-col overflow-scroll scroll-smooth sm:basis-3/4 sm:animate-slideIn`}
      >
         {children}
      </div>
   );
}

function SectionFrame({ children, id }: ReactChildProps) {
   return (
      <section
         className="flex min-h-screen snap-start snap-always flex-col gap-y-16 px-4 py-20 md:px-8"
         id={id}
      >
         {children}
      </section>
   );
}

function HeadingsFrame({ children }: ReactChildProps) {
   return <div className="flex flex-col gap-y-7">{children}</div>;
}

export { PageFrame, MainFrame, SectionFrame, HeadingsFrame };
