/** @type {import('tailwindcss').Config} */
// import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222d38',
        secondary: '#151d25'
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      backgroundColor:{
       'custom-gradient':'linear-gradient(to right, #f00, #00f)',
      }
    },
  },
  plugins: [
    // typography
  ],
}