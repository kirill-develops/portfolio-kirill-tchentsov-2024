import { useEffect, useState } from 'react';

function stopScroll(open) {
   if (open) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'initial';
   }
   return () => (document.body.style.overflow = 'initial');
}

export default function useDrawer() {
   const [open, setOpen] = useState(false);

   const toggleOpen = () => setOpen((open) => !open);

   useEffect(() => {
      stopScroll(open);
   });

   return [open, toggleOpen];
}
