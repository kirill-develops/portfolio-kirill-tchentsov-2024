import { useEffect, useState } from 'react';

function stopScroll(open: boolean) {
   if (open) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'initial';
   }
   return () => (document.body.style.overflow = 'initial');
}

type ToggleOpen = () => void;
type UseDrawer = [boolean, ToggleOpen];

export default function useDrawer(): UseDrawer {
   const [open, setOpen] = useState(false);

   const toggleOpen: ToggleOpen = () => setOpen((prevOpen) => !prevOpen);

   useEffect(() => {
      stopScroll(open);
   }, [open]);

   return [open, toggleOpen] as const;
}
