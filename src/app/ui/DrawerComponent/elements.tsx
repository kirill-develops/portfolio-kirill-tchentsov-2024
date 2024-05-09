import { ReactChildProps } from '@/app/lib/genericTypes';
import { useEffect, useState } from 'react';

type OpenProps = {
   open: boolean;
};

type ToggleDrawerProps = {
   toggleDrawer: () => void;
};

interface DrawerClickProps extends ReactChildProps, ToggleDrawerProps {}

const center = 'flex flex-col items-center';

export function MenuIconButton({
   children,
   toggleDrawer,
}: DrawerClickProps): JSX.Element {
   return (
      <button
         onClick={toggleDrawer}
         role="button"
         aria-haspopup="true"
         id="drawerbutton"
         className="absolute left-4 top-4 z-10 cursor-pointer sm:hidden"
      >
         {children}
      </button>
   );
}

export function Container({ children }: ReactChildProps): JSX.Element {
   return <div className="h-auto flex-1 sm:basis-1/4">{children}</div>;
}

interface WrapperProps extends ReactChildProps, OpenProps {}

export function Wrapper({ children, open }: WrapperProps): JSX.Element {
   const [showDrawer, setShowDrawer] = useState(
      open ? 'animate-slideIn' : 'animate-slideOutInit',
   );

   useEffect(
      () => setShowDrawer(open ? 'animate-slideIn' : 'animate-slideOut'),
      [open],
   );

   return (
      <aside
         id="menu"
         role="menu"
         aria-labelledby="drawerbutton"
         className={`${center} fixed top-0 z-20 min-h-screen min-w-56 gap-y-10 bg-drawer px-4 py-12 sm:sticky sm:animate-slideIn ${showDrawer}`}
      >
         {children}
      </aside>
   );
}

export function Center({ children }: ReactChildProps): JSX.Element {
   return <div className={`${center}`}>{children}</div>;
}

export function List({
   children,
   toggleDrawer,
}: DrawerClickProps): JSX.Element {
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

export function Overlay({ open, toggleDrawer }: OverlayProps): JSX.Element {
   const showOverlay = open ? `block` : 'hidden';
   return (
      <div
         className={`fixed inset-0 z-10 h-screen overflow-auto bg-black/15 ${showOverlay}`}
         onClick={toggleDrawer}
      />
   );
}
