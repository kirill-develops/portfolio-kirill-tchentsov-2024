import { Playfair_Display, Quicksand } from "next/font/google";

const playfair_display = Playfair_Display({
   subsets: ['latin'],
   fallback: ['Georgia', 'serif'],
   variable: '--font-playfair-display'
});

const quicksand = Quicksand({
   subsets: ['latin'],
   fallback: ['Arial', 'sans-serif'],
   variable: '--font-quicksand'
});

export { playfair_display, quicksand }