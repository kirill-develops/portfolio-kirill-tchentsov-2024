import { ReactChildProps } from '@/lib/genericTypes';
import Link from 'next/link';
import React from 'react';

interface LinkProps extends ReactChildProps {
   url: string;
   label?: string;
}

const IconLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
   ({ children, url, label }, ref) => {
      return (
         <Link
            href={url}
            aria-label={label}
            className="cursor-pointer text-[#666666] hover:text-page-blue"
            target="_blank"
            rel="noopener"
            ref={ref}
         >
            {children}
         </Link>
      );
   },
);
IconLink.displayName = 'IconLink';

export default IconLink;
