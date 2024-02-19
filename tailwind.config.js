/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sansbold: ["Montserrat", "sans-serif"],
      sans: ["Lato", "sans-serif"],
      serif: ["Playfair Display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
