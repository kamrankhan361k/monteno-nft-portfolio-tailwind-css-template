/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tf: '#fd562a',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        crisscrossleft: {
          '0%': { left: '-20px' },
          '50%': { left: '50%', width: '20px', height:'20px' },
          '100%': { left: '50%', width: '375px', height:'375px' },
        },
        crisscrossright: {
          '0%': { right: '-20px' },
          '50%': { right: '50%', width: '20px', height:'20px' },
          '100%': { right: '50%', width: '375px', height:'375px' },
        },
        swing: {
          '0%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(-3deg)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
}

