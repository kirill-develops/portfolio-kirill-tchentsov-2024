'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Item>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
   <AccordionPrimitive.Item
      ref={ref}
      className={cn(
         'data-[state=open]: border-b shadow-card data-[state=closed]:border-b data-[state=open]:border-b-[3px]',
         className,
      )}
      {...props}
   />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
   <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
         ref={ref}
         className={cn(
            'flex flex-1 items-center justify-between bg-white px-3 py-4 font-medium transition-all hover:bg-zinc-100 hover:underline data-[state=open]:mb-2 data-[state=open]:bg-zinc-100 [&[data-state=open]>svg]:rotate-180',
            className,
         )}
         {...props}
      >
         {children}
         <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
   </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
   <AccordionPrimitive.Content
      ref={ref}
      className=" overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
   >
      <div
         className={cn(
            'flex flex-row gap-x-5 pb-2 pl-10 pt-2 md:pl-28',
            className,
         )}
      >
         {children}
      </div>
   </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
