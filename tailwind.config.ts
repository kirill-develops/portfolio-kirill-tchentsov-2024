import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         colors: {
            drawer: { DEFAULT: '#F2F3F7' },
            font: {
               heading: '#999999',
               DEFAULT: 'rgba(0 0 0/0.7)',
               placeholder: 'rgba(0 0 0/0.5)',
            },
            page: {
               blue: '#2C98F0',
               orange: '#EC5453',
               yellow: '#F9BF3F',
               purple: '#A84CB8',
               teal: '#2FA499',
               navy: '#4054B2',
               red: '#CC403F',
            },
         },
         boxShadow: { card: '0 8px 56px -8px rgba(0, 0, 0, 0.17)' },
         fontFamily: {
            serif: ['var(--font-playfair-display)', 'Georgia', 'serif'],
            sans: ['var(--font-quicksand)', 'Arial', 'sans-serif'],
         },
         animation: {
            slideIn:
               'slideIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            slideOut:
               'slideOut 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            slideOutContainer:
               'slideOutContainer 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            slideOutInit:
               'slideOut 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            slideOutContainerInit:
               'slideOutContainer 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
         },
         keyframes: {
            slideIn: {
               '0%': {
                  transform: 'translateX(-16rem)',
               },
               '100%': {
                  transform: 'translateX(0)',
               },
            },
            slideOut: {
               '0%': {
                  transform: 'translateX(0)',
               },
               '100%': {
                  transform: 'translateX(-16rem)',
               },
            },
            slideOutContainer: {
               '0%': {
                  transform: 'translateX(16rem)',
               },
               '100%': {
                  transform: 'translateX(0)',
               },
            },
         },
      },
   },
   plugins: [
      plugin(({ addUtilities }) => {
         addUtilities({
            '.hexagonClip': {
               'clip-path':
                  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            },
         });
      }),
   ],
};

export default config;
