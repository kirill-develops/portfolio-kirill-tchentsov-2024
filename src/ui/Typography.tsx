import { ReactChildProps } from '../lib/genericTypes';
import { cn } from '../lib/utils';

function PageTitle({ children }: ReactChildProps): JSX.Element {
   return (
      <h1 className="font-serif text-3xl/[1.3] font-bold md:text-6xl/[1.3] ">
         {children}
      </h1>
   );
}

function PageSubtitle({ children }: ReactChildProps): JSX.Element {
   return (
      <h1 className="font-sans text-xs/[1.8] font-medium uppercase tracking-[0.0625rem] text-font">
         {children}
      </h1>
   );
}

function SectionHeading({ children }: ReactChildProps): JSX.Element {
   return (
      <h2 className="font-sans font-medium uppercase tracking-[0.3125rem] text-[0.625] text-font-heading">
         {children}
      </h2>
   );
}

function SectionSubheading({ children }: ReactChildProps): JSX.Element {
   return (
      <h2 className="font-serif text-lg font-bold uppercase tracking-[0.3125rem]">
         {children}
      </h2>
   );
}

interface BodyProps extends ReactChildProps {
   black?: boolean;
   justify?: string;
   span?: boolean;
   className?: string;
}

function Body({
   children,
   black = false,
   justify,
   span,
   className,
}: BodyProps): JSX.Element {
   const bodyStyles = 'font-sans text-base/[1.8] md:text-[0.9375rem]';
   const alignStyles = justify ?? 'text-justify';
   const colorStyles = black ? 'text-black' : 'text-font';
   const dynamicBodyStyles = `${bodyStyles} ${colorStyles} ${alignStyles}`;

   return black || span ? (
      <span className={cn(dynamicBodyStyles, className)}>{children}</span>
   ) : (
      <p className={cn(dynamicBodyStyles, className)}>{children}</p>
   );
}

function BodyOpener({ children }: ReactChildProps): JSX.Element {
   return <span className="font-bold text-black">{children}</span>;
}

function ListItem({ children }: ReactChildProps): JSX.Element {
   return (
      <li className="font-sans text-base md:text-[0.9375rem]">{children}</li>
   );
}

function DrawerHeading({ children }: ReactChildProps): JSX.Element {
   return (
      <h3 className="font-serif font-bold leading-[1.8rem] tracking-[0.25px] text-[22]">
         {children}
      </h3>
   );
}

function DrawerSubheading({ children }: ReactChildProps): JSX.Element {
   return (
      <h3 className="font-sans text-xs/[1.8] uppercase text-font">
         {children}
      </h3>
   );
}
interface DrawerListItemProps extends ReactChildProps {
   selected?: boolean;
}

function DrawerListItem({
   children,
   selected = false,
}: DrawerListItemProps): JSX.Element {
   const selectedStyles = selected
      ? 'underline-active text-page-blue'
      : 'text-font';

   return (
      <li
         className={cn(
            'font-sans text-xs/[1.8] font-medium uppercase tracking-[0.0625rem] text-font  animated-underline ',
            selectedStyles,
         )}
      >
         {children}
      </li>
   );
}

function DrawerCopyright({ children }: ReactChildProps): JSX.Element {
   return (
      <h6 className="text-center font-sans text-[0.796875rem] leading-[1.8] text-font-placeholder">
         {children}
      </h6>
   );
}

interface CardHeading extends ReactChildProps {
   span?: boolean;
   className?: string;
}

function CardHeading({ children, span, className }: CardHeading): JSX.Element {
   const commonStyles =
      'text-center font-sans text-base/[1.1] font-bold uppercase';

   if (span) {
      return <span className={cn(commonStyles, className)}>{children}</span>;
   }

   return <h3 className={cn(commonStyles, className)}>{children}</h3>;
}

export {
   PageTitle,
   PageSubtitle,
   SectionHeading,
   SectionSubheading,
   Body,
   BodyOpener,
   ListItem,
   DrawerHeading,
   DrawerSubheading,
   DrawerListItem,
   DrawerCopyright,
   CardHeading,
};
