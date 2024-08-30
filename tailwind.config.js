/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'hover':'#00000014'
      },
      fontSize:{
        'title':'13px'
      },
      lineHeight:{
        '4.5':'18px'
      },
      letterSpacing:{
        'title':'0.52px'
      },
      transitionDuration: {
        '200':'200ms'
      },
      boxShadow: {
        'options-dropdown':'0 2px 4px rgba(0,0,0,.2)'
      },
      zIndex: {
        '150':'150',
        'behind':'-1'
      },
      spacing: {
        '6.5':'26px'
      }
    },
  },
  plugins: [],
};
