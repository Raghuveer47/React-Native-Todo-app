/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Extend default colors, instead of replacing them
      colors: {
        primary: "#1E40AF", // Custom primary color
        accent: "#F43F5E", // Custom accent color
      },
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
