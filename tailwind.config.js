/** @type {import('tailwindcss').Config} */
// import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222d38',
        secondary: '#151d25',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        'custom-gradient': 'linear-gradient(to right, #f00, #00f)',
      },
      keyframes: {
        gradientMovertl: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '100%' },
        },
        gradientMoveltr: {
          '0%': {backgroundPosition: '100%'},
          '100%':{backgroundPosition: '0%'}
        }
      },
      animation:{
        gradientMovertl: 'gradientMovertl 0.5s ease forwards',
        gradientMoveltr: 'gradientMoveltr 0.5s ease forwards'
      }
    },
  },
  plugins: [
    // typography
  ],
};
