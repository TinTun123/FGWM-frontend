/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
],
  theme: {
    extend: {
      colors : {
        'primary-red-01' : '#400303',
        'primary-red-02' : '#572428',
        'primary-red-03' : '#2E090A',
        'primary-red-04' : "#D40B0B",
        'primary-red-5' : '#290505',
        'footer-red' : '#400303',
        'secondary-yel-01' : '#F2F2C2',
        'secondary-yel-02' : '#F2CAA2',
        'fist' : '#5D5D72',
        'logo' : '#F9C20F'
      },
      fontSize : {
        'xx-sm' : '0.512rem',
        'x-sm' : '0.64rem',
        'sm' : "0.8rem",
        'primary' : "1rem",
        'lg' : "1.25rem",
        'xlg' : '1.563rem',
        'xxlg' : '1.953rem'

      },
      fontFamily : {
        sans : ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      boxShadow : {
        'drop-sha' : '2px 2px 4px rgba(64, 3, 3, 0.25)'
      }
    },
    screens : {
      'xxs' : '370px',
      ...defaultTheme.screens
    }
  },
  plugins: [
  ],
}

