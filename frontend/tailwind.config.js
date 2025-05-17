/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          tenor: ['"Tenor Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

