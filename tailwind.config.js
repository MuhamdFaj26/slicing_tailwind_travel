/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ["inter"],
        "display" :["display"],
        "CircularSTD" :["CircularSTD"]
      },
      colors : {
      },
      screens: {
        'FHD': '2560px',
        // => @media (min-width: 640px) { ... }
      }
    },
  },
  plugins: [],
}