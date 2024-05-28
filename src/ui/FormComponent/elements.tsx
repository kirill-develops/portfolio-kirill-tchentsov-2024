import { ReactChildProps } from '@/lib/genericTypes';
import Link from 'next/link';
import React from 'react';
import { Body } from '../Typography';

export function SectionWrapper({ children }: ReactChildProps): JSX.Element {
   return (
      <div className="flex flex-col gap-y-14 md:gap-y-20 lg:flex-row-reverse">
         {children}
      </div>
   );
}

export function ContactsWrapper({ children }: ReactChildProps): JSX.Element {
   return <div className="flex flex-[0.75] flex-col gap-y-7">{children}</div>;
}

interface ContactProps extends ReactChildProps {
   as?: React.ElementType;
}

export function Contact({
   children,
   as: Component = 'div',
}: ContactProps): JSX.Element {
   return (
      <Component className="flex flex-row items-center gap-x-5">
         {children}
      </Component>
   );
}

export function IconFrame({ children }: ReactChildProps): JSX.Element {
   return (
      <div className="flex h-[100px] min-w-[100px] items-center justify-center bg-zinc-300">
         {children}
      </div>
   );
}

const emailString = 'connect@kirill-develops.com';

export function EmailContact({ children }: ReactChildProps) {
   return (
      <Link
         href={`mailto:${emailString}`}
         target="_blank"
         rel="noopener"
         className="group flex w-fit flex-row items-center gap-x-5"
      >
         {children}
      </Link>
   );
}

export function EmailString(): JSX.Element {
   return (
      <Body className="font-sans text-base/[1.8] text-page-blue animated-underline group-hover:underline-active md:text-[0.9375rem]">
         {emailString}
      </Body>
   );
}

interface FormWrapperProps extends ReactChildProps {
   onSubmit: (
      e?: React.BaseSyntheticEvent<object, any, any> | undefined,
   ) => Promise<void>;
}

export function FormWrapper({ children, onSubmit }: FormWrapperProps) {
   return (
      <form
         className="flex flex-[0.75] flex-col gap-y-5"
         onSubmit={onSubmit}
      >
         {children}
      </form>
   );
}
