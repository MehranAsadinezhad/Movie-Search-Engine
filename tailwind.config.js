/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPurple: '#222228',
        midPurple:"#282933",
        lightPurple:"#2e3745"
      },
    },
  },
  plugins: [],
};
