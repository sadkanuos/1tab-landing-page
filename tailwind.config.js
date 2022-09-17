/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors: {
        oxfordBlue: 'hsl(232, 29%, 21%)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage:() =>({
        dots: "url('../assets/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
}
