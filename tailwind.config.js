/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPurple: '#222228',
        midPurple: '#282933',
        lightPurple: '#2e3745',
      },
      screens: {
        sm: '450px',
        // => @media (min-width: 640px) { ... }

        md: "680px",

        lg: '946px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
