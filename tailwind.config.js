/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",
      "./src/**/*.{html,js,jsx,ts,tsx}", // Monitora tutti i file HTML, JS, JSX, TS, TSX nella folder src
      "./src/index.html",
    ],
    theme: {
      extend: {
      },
    },
    plugins: [],
  }
  