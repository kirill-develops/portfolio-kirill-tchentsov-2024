interface ReactChildProps {
   readonly children: React.ReactNode;
}
type ExtendedReactChildProps<T> = ReactChildProps & T;

interface BlackProps {
   black?: boolean;
}

interface SelectedProps {
   selected?: boolean;
}

type BodyProps = ExtendedReactChildProps<BlackProps>;
type DrawerListItemProps = ExtendedReactChildProps<SelectedProps>;

function PageTitle({ children }: ReactChildProps) {
   return (
      <h1 className="font-serif text-3xl/[1.3] font-bold md:text-6xl/[1.3] ">
         {children}
      </h1>
   );
}

function PageSubtitle({ children }: ReactChildProps) {
   return (
      <h2 className="font-sans text-xs/[1.8] font-medium uppercase tracking-[0.0625rem] text-font">
         {children}
      </h2>
   );
}

function SectionHeading({ children }: ReactChildProps) {
   return (
      <h2 className="font-sans font-medium uppercase tracking-[0.3125rem] text-[0.625] text-font-heading">
         {children}
      </h2>
   );
}

function SectionSubheading({ children }: ReactChildProps) {
   return (
      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.3125rem]">
         {children}
      </h3>
   );
}

function Body({ children, black = false }: BodyProps) {
   const bodyStyles = 'font-sans text-base/[1.8] md:text-[0.9375rem]';
   const colorStyles = black ? 'text-black' : 'text-font';
   const dynamicBodyStyles = `${bodyStyles} ${colorStyles}`;

   return black ? (
      <span className={`${dynamicBodyStyles}`}>{children}</span>
   ) : (
      <p className={`${dynamicBodyStyles}`}>{children}</p>
   );
}

function BodyOpener({ children }: ReactChildProps) {
   return <span className="font-bold text-black">{children}</span>;
}

function ListItem({ children }: ReactChildProps) {
   return (
      <li className="font-sans text-base md:text-[0.9375rem]">{children}</li>
   );
}

function DrawerHeading({ children }: ReactChildProps) {
   return (
      <h3 className="font-serif font-bold leading-[1.8rem] tracking-[0.25px] text-[22]">
         {children}
      </h3>
   );
}

function DrawerSubheading({ children }: ReactChildProps) {
   return (
      <h3 className="font-sans text-xs/[1.8] uppercase text-font">
         {children}
      </h3>
   );
}

function DrawerListItem({ children, selected = false }: DrawerListItemProps) {
   const hasUnderline = selected
      ? 'underline text-page-blue'
      : 'no-underline text-font';

   return (
      <li
         className={`font-sans text-xs/[1.8] font-medium uppercase tracking-[0.0625rem] text-font ${hasUnderline}`}
      >
         {children}
      </li>
   );
}

function DrawerCopyright({ children }: ReactChildProps) {
   return (
      <h6 className="font-sans text-[0.796875rem] leading-[1.8] text-font-placeholder">
         {children}
      </h6>
   );
}

function CardHeading({ children }: ReactChildProps) {
   return (
      <h4 className="font-sans text-base/[1.1] font-bold uppercase">
         {children}
      </h4>
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
