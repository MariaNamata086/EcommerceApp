/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src copy/**/*.{tsx,js}'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1448px'
    },
    extend: {},
  },
  plugins: [],
}

