/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#235347",
        "primary-dark": "#173831",

        "brand-dark": "#051f20",
        "brand-soft": "#8cb79b",
        "brand-light": "#dbf0dd",
      },
    },
  },

  plugins: [],
};