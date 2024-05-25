import { useEffect, useState } from 'react';

function stopScroll(open: boolean) {
   if (open) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'initial';
   }
   return () => (document.body.style.overflow = 'initial');
}

type ToggleDrawer = () => void;
type UseDrawer = [boolean, ToggleDrawer, ToggleDrawer];

export default function useDrawer(): UseDrawer {
   const [open, setOpen] = useState(false);

   const toggleOpen: ToggleDrawer = () => setOpen(true);
   const toggleClose: ToggleDrawer = () => setOpen(false);

   useEffect(() => {
      stopScroll(open);
   }, [open]);

   return [open, toggleOpen, toggleClose] as const;
}
