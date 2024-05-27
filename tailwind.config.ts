import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
   darkMode: ['class'],
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
            favicon: {
               primary: '#140088',
               secondary: '#E5C454',
            },
         },
         boxShadow: { card: '0 8px 56px -8px rgba(0, 0, 0, 0.17)' },
         fontFamily: {
            serif: ['var(--font-playfair-display)', 'Georgia', 'serif'],
            sans: ['var(--font-quicksand)', 'Arial', 'sans-serif'],
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
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
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
         },
      },
   },
   plugins: [
      require('tailwindcss-animate'),
      plugin(({ addUtilities, theme }) => {
         addUtilities({
            '.hexagon-clip': {
               'clip-path':
                  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            },
            '.animated-underline': {
               position: 'relative',
               '&::after': {
                  content: 'var(--tw-content)',
                  position: 'absolute',
                  bottom: theme('spacing.1'),
                  left: '0px',
                  right: '0px',
                  height: '1px',
                  transform: 'scaleX(0)',
                  backgroundColor: theme('colors.page.blue'),
                  transitionDuration: '300ms',
                  animationDuration: '300ms',
               },
               '&:hover::after': {
                  transform: 'scaleX(1)',
               },
            },
            '.underline-active': {
               '&::after': {
                  transform: 'scaleX(1)',
               },
            },
         });
      }),
   ],
};

export default config;
