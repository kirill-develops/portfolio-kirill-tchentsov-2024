import * as React from 'react';

import { cn } from '@/app/lib/utils';

export interface TextareaProps
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({ className, ...props }, ref) => {
      return (
         <textarea
            className={cn(
               'flex min-h-[80px] w-full rounded-t border-b-2 border-zinc-400 bg-zinc-100 px-3 py-2 font-sans text-base/[1.8] ring-offset-white placeholder:text-font-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
               className,
            )}
            ref={ref}
            {...props}
         />
      );
   },
);
Textarea.displayName = 'Textarea';

export { Textarea };
