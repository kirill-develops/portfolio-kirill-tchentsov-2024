import React from 'react';
import { SectionHeading } from '../Typography';

export default function Footer() {
   return (
      <div className="flex h-36 w-full flex-col items-center justify-center bg-gradient-to-l from-neutral-100 via-slate-50 to-stone-100">
         <SectionHeading className="text-center">
            Thanks for stopping by!
         </SectionHeading>
      </div>
   );
}
