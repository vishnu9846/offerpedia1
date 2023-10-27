/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#62C4A4',
        'back' : '#2C2C2C',
        'light' : '#E0F3ED',
        'neutrallight' : '#BBC3BC',
        'bg_black' : '#1D1F1E',
        'black_3' : '#171717',
      },
      screens:{
        'phone_max':{'max':'768px'},
        'mobile':{'max':'640px'},
        'pc':{'min':'1580px'},
        'ipad':{'max':'920px'},
        'ipad_min':{'max':'480px'},
       }
    },
  },
  plugins: [],
}