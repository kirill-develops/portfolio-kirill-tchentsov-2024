import type { Metadata, Viewport } from 'next';
import { playfair_display, quicksand } from './ui/fonts';
import './ui/globals.css';

export const metadata: Metadata = {
   title: 'Kirill Tchentsov | Full-Stack Developer',
   description: "A portfolio showcasing Kirill's development expertise",
   keywords: [
      'Developer',
      'JavaScript',
      'Full-Stack',
      'TypeScript',
      'React',
      'Next.js',
      'AWS',
   ],
   creator: 'Kirill Tchentsov',
   authors: [{ name: 'Kirill Tchentsov' }],
   publisher: 'Kirill Tchentsov',
   metadataBase: new URL('https://www.kirill-develops.com'),
};

export const viewport: Viewport = {
   themeColor: '#2C98F0',
};

export type ReactChildProps = {
   readonly children: React.ReactNode;
};

export default function RootLayout({ children }: ReactChildProps): JSX.Element {
   return (
      <html lang="en">
         <head>
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/favicons/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicons/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicons/favicon-16x16.png"
            />
            <link
               rel="mask-icon"
               href="/favicons/safari-pinned-tab.svg"
               color="#2c98f0"
            />
            <meta
               name="msapplication-TileColor"
               content="#2C98F0"
            />
         </head>
         <body
            className={`${playfair_display.variable} ${quicksand.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
