/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
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
      }
    },
  },
  plugins: [],
}

