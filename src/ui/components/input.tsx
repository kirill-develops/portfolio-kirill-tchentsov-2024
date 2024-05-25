import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               'flex h-12 w-full rounded-t border-b-2 border-zinc-400 bg-zinc-100 px-3 py-2 font-sans text-base/[1.8] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-font-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
               className,
            )}
            ref={ref}
            {...props}
         />
      );
   },
);
Input.displayName = 'Input';

export { Input };
