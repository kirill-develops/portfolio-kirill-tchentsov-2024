import { ReactChildProps } from '../lib/genericTypes';

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
}

function Body({ children, black = false }: BodyProps): JSX.Element {
   const bodyStyles = 'font-sans text-base/[1.8] md:text-[0.9375rem]';
   const colorStyles = black ? 'text-black' : 'text-font';
   const dynamicBodyStyles = `${bodyStyles} ${colorStyles}`;

   return black ? (
      <span className={`${dynamicBodyStyles}`}>{children}</span>
   ) : (
      <p className={`${dynamicBodyStyles}`}>{children}</p>
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
   const hasUnderline = selected
      ? 'underline text-page-blue'
      : 'no-underline text-font';

   return (
      <li
         className={`font-sans text-xs/[1.8] font-medium uppercase tracking-[0.0625rem] text-font hover:text-page-blue ${hasUnderline}`}
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

function CardHeading({ children }: ReactChildProps): JSX.Element {
   return (
      <h3 className="text-center font-sans text-base/[1.1] font-bold uppercase">
         {children}
      </h3>
   );
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
