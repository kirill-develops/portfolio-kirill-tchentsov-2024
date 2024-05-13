import { ReactChildProps } from '@/app/lib/genericTypes';
import Link from 'next/link';
import React from 'react';

export function SectionWrapper({ children }: ReactChildProps): JSX.Element {
   return (
      <div className="flex flex-col gap-y-14 md:gap-y-20 lg:flex-row-reverse lg:gap-x-20">
         {children}
      </div>
   );
}

export function ContactsWrapper({ children }: ReactChildProps): JSX.Element {
   return <div className="flex flex-[0.75] flex-col gap-y-7">{children}</div>;
}

export function Contact({ children }: ReactChildProps): JSX.Element {
   return <div className="flex flex-row items-center gap-x-5">{children}</div>;
}

export function IconFrame({ children }: ReactChildProps): JSX.Element {
   return (
      <div className="flex h-[100px] w-[100px] items-center justify-center bg-zinc-300">
         {children}
      </div>
   );
}

const emailString = 'kirill.develops@gmail.com';

export function EmailLink(): JSX.Element {
   return (
      <Link
         href={`mailto:${emailString}`}
         target="_blank"
         rel="noopener"
         className=" font-sans text-base/[1.8] text-page-blue md:text-[0.9375rem]"
      >
         {emailString}
      </Link>
   );
}
