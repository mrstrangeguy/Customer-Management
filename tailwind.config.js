/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'default-color':'#0000008a',
        'checkbox-after-selected':'#03a6ef1a',
        'checkbox-selected-bg':'#03a9f4',
        'th-hover-color':'#f2f2f2',
        'tr-border':'#e0e0e0'
      },
      lineHeight: {
        'zero':'0px'
      }
    },
  },
  plugins: [],
};
