/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "shadow_cust": "inset -129px 0px 233px -85px rgba(184,160,140,1), inset 183px 0px 290px -85px rgba(184,160,140,1) ",
      },
      colors: {
        'smallNav': 'rgba( 0, 0, 0, 0.4 );'
      },
      screens: {
        'xs': '450px'
      },
      fontFamily: {
        'Dancing': ["Dancing Script", ],
      }
  
    },
  },
  plugins: [],
}