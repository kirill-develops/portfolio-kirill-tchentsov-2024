import { ReactChildProps } from '@/lib/genericTypes';
import Link from 'next/link';
import pageSections from '@/lib/pageSections';
import { DrawerListItem } from '@/ui/Typography';
import { useEffect, useState } from 'react';
import useUpdateOnScroll from '@/hooks/useUpdateOnScroll';
import Image from 'next/image';

type OpenProps = {
   open: boolean;
};

type ToggleDrawerProps = {
   toggleDrawer: () => void;
};

interface DrawerClickProps extends ReactChildProps, ToggleDrawerProps {}

const center = 'flex flex-col items-center';

export function MenuIconButton({ children, toggleDrawer }: DrawerClickProps) {
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

export function Container({ children }: ReactChildProps) {
   return <div className="h-auto flex-1 sm:basis-1/4">{children}</div>;
}

interface DrawerProps extends ReactChildProps, OpenProps {}

export function Drawer({ children, open }: DrawerProps) {
   const [isLoaded, setIsLoaded] = useState(false);
   const [showDrawer, setShowDrawer] = useState(
      open ? 'animate-slideIn' : 'animate-slideOutInit',
   );
   const drawerAnimationState = open ? 'animate-slideIn' : 'animate-slideOut';

   useEffect(() => {
      let drawerTimer: NodeJS.Timeout;
      if (isLoaded) {
         setShowDrawer(drawerAnimationState);
      } else {
         drawerTimer = setTimeout(setShowDrawer, 500, drawerAnimationState);
      }

      const loadedTimer: NodeJS.Timeout = setTimeout(setIsLoaded, 1000, true);

      return () => {
         clearTimeout(drawerTimer);
         clearTimeout(loadedTimer);
      };
   }, [open, drawerAnimationState, isLoaded]);

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

export function Center({ children }: ReactChildProps) {
   return <div className={`${center}`}>{children}</div>;
}

export function List({ toggleDrawer }: ToggleDrawerProps) {
   const { selectedId, handleLinkClick } = useUpdateOnScroll();

   return (
      <ul
         onClick={toggleDrawer}
         className="flex list-image-none flex-col items-center"
      >
         {pageSections.map(({ title, id, url }) => {
            const isSelected = selectedId === id;

            return (
               <DrawerListItem
                  key={id}
                  selected={isSelected}
               >
                  <Link
                     href={url}
                     onClick={handleLinkClick}
                  >
                     {title}
                  </Link>
               </DrawerListItem>
            );
         })}
      </ul>
   );
}

interface OverlayProps extends OpenProps, ToggleDrawerProps {}

export function Overlay({ open, toggleDrawer }: OverlayProps) {
   const showOverlay = open ? `block` : 'hidden';
   return (
      <div
         className={`fixed inset-0 z-10 h-screen overflow-auto bg-black/15 ${showOverlay}`}
         onClick={toggleDrawer}
      />
   );
}

export function Avatar() {
   return (
      <Image
         height={100}
         width={100}
         quality={80}
         priority
         src="/img/avatar.JPG"
         alt="Photo of Kirill"
         className="mb-3 h-[100px] w-[100px] rounded-full object-cover ring-2 ring-white"
      />
   );
}
