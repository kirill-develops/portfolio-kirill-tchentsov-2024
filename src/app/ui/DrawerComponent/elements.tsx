import { ReactChildProps } from '@/app/lib/genericTypes';
import { useEffect, useState } from 'react';

type OpenProps = {
   open: boolean;
};

type ToggleDrawerProps = {
   toggleDrawer: () => void;
};

const center = 'flex flex-col items-center';

function MenuLines({ toggleDrawer }: ToggleDrawerProps): JSX.Element {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="absolute left-4 top-4 z-10 h-6 w-6 cursor-pointer sm:hidden"
         onClick={toggleDrawer}
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
   return <div className="h-auto flex-1 sm:basis-1/4">{children}</div>;
}

interface WrapperProps extends ReactChildProps, OpenProps {}

function Wrapper({ children, open }: WrapperProps): JSX.Element {
   const [showDrawer, setShowDrawer] = useState(
      open ? 'animate-slideIn' : 'animate-slideOutInit',
   );

   useEffect(
      () => setShowDrawer(open ? 'animate-slideIn' : 'animate-slideOut'),
      [open],
   );

   return (
      <aside
         className={`${center} fixed top-0 z-20 min-h-screen min-w-56 gap-y-10 bg-drawer py-12 sm:sticky sm:animate-slideIn ${showDrawer}`}
      >
         {children}
      </aside>
   );
}

function Center({ children }: ReactChildProps): JSX.Element {
   return <div className={`${center}`}>{children}</div>;
}

interface ListProps extends ReactChildProps, ToggleDrawerProps {}

function List({ children, toggleDrawer }: ListProps): JSX.Element {
   return (
      <ul
         onClick={toggleDrawer}
         className="flex list-image-none flex-col items-center"
      >
         {children}
      </ul>
   );
}

interface OverlayProps extends OpenProps, ToggleDrawerProps {}

function Overlay({ open, toggleDrawer }: OverlayProps): JSX.Element {
   const showOverlay = open ? `block` : 'hidden';
   return (
      <div
         className={`fixed inset-0 z-10 h-screen overflow-auto bg-black/15 ${showOverlay}`}
         onClick={toggleDrawer}
      />
   );
}

export { MenuLines, Container, Wrapper, Center, List, Overlay };
