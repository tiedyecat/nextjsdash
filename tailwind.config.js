// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    // Specify the paths to all of your pages and components
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class', // Enables class-based dark mode toggling
    theme: {
      extend: {},
    },
    plugins: [],
  };
  