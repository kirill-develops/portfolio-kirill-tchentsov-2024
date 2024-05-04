import { ReactChildProps } from '@/app/lib/genericTypes';

type OpenProps = {
   open: boolean;
};

type ToggleOpenProps = {
   toggleOpen: () => void;
};

const center = 'flex flex-col items-center';

function MenuLines({ toggleOpen }: ToggleOpenProps): JSX.Element {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="absolute left-4 top-4 h-6 w-6 cursor-pointer sm:hidden"
         onClick={toggleOpen}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
         />
      </svg>
   );
}

function Container({ children }: ReactChildProps): JSX.Element {
   return <div className={`h-auto flex-1 sm:basis-1/4`}>{children}</div>;
}

interface WrapperProps extends ReactChildProps, OpenProps {}

function Wrapper({ children, open }: WrapperProps): JSX.Element {
   const showDrawer = open ? 'animate-slideIn' : ' animate-slideOut';

   return (
      <aside
         className={`${center} fixed top-0 z-10 min-h-screen min-w-56 gap-y-10 bg-drawer py-12 sm:sticky sm:animate-slideIn ${showDrawer}`}
      >
         {children}
      </aside>
   );
}

function Center({ children }: ReactChildProps): JSX.Element {
   return <div className={`${center}`}>{children}</div>;
}

function List({ children }: ReactChildProps): JSX.Element {
   return (
      <ul className="flex list-image-none flex-col items-center">{children}</ul>
   );
}

interface OverlayProps extends OpenProps, ToggleOpenProps {}

function Overlay({ open, toggleOpen }: OverlayProps): JSX.Element {
   const showOverlay = open ? `block` : 'hidden';
   return (
      <div
         className={`fixed inset-0 z-0 h-screen overflow-auto bg-black/15 ${showOverlay}`}
         onClick={toggleOpen}
      />
   );
}

export { MenuLines, Container, Wrapper, Center, List, Overlay };
