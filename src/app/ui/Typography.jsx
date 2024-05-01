function PageTitle({ children }) {
   return (
      <h1 className="font-serif text-3xl/[1.3] font-bold md:text-6xl/[1.3] ">
         {children}
      </h1>
   );
}

function SectionHeading({ children }) {
   return (
      <h2 className="text-font-heading font-sans font-medium uppercase tracking-[0.3125rem] text-[0.625]">
         {children}
      </h2>
   );
}

function SectionSubheading({ children }) {
   return (
      <h3 className="font-serif text-lg font-bold uppercase tracking-[0.3125rem]">
         {children}
      </h3>
   );
}

function Body({ children, black = false }) {
   const bodyStyles = 'font-sans text-base/[1.8] md:text-[0.9375rem]';
   const colorStyles = black ? 'text-black' : 'text-font';
   const dynamicBodyStyles = `${bodyStyles} ${colorStyles}`;

   return black ? (
      <span className={`${dynamicBodyStyles}`}>{children}</span>
   ) : (
      <p className={`${dynamicBodyStyles}`}>{children}</p>
   );
}

function BodyOpener({ children }) {
   return <span className="font-bold text-black">{children}</span>;
}

function ListItem({ children }) {
   return (
      <li className="font-sans text-base md:text-[0.9375rem]">{children}</li>
   );
}

function DrawerHeading({ children }) {
   return (
      <h3 className="font-serif font-bold leading-[1.8rem] tracking-[0.25px] text-[22]">
         {children}
      </h3>
   );
}

function DrawerSubheading({ children }) {
   return (
      <h3 className="text-font font-sans text-xs/[1.8] uppercase">
         {children}
      </h3>
   );
}

function DrawerListItem({ children, selected = false }) {
   const hasUnderline = selected
      ? 'underline text-page-blue'
      : 'no-underline text-font';

   return (
      <li
         className={`text-font font-sans text-xs/[1.8] font-medium uppercase tracking-[0.0625rem] ${hasUnderline}`}
      >
         {children}
      </li>
   );
}

function DrawerCopyright({ children }) {
   return (
      <h6 className="text-font-placeholder font-sans text-[0.796875rem] leading-[1.8]">
         {children}
      </h6>
   );
}

function CardHeading({ children }) {
   return (
      <h4 className="font-sans text-base/[1.1] font-bold uppercase">
         {children}
      </h4>
   );
}

export {
   PageTitle,
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
