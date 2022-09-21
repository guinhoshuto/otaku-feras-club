/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bege: '#faf0ea',
        green: '#cce5e5',
        yellow: '#feda79',
        purple: '#d7bbf9',
        lime: '#ddec9c',
        orange: '#f5907c'
      }
    },
  },
  plugins: [],
}
