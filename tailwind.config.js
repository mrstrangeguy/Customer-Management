/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'default-color':'#0000008a',
        'checkbox-after-selected':'#03a6ef1a',
        'checkbox-selected-bg':'#03a9f4',
        'table-hover-primary':'#f2f2f2', //table-hover-primary
        'td-bg':'#fafafa',
        'table-border':'#e0e0e0',//table-border
        'label':'#00000099',
        'checked':'#03a9f40a',
        'selected':'#cdeefd',
        'table-hover-primary':'#000000de',//table-hover-primary
        'table-hover-secondary':'#00000061',//table-hover-secondary
        'commission':'#03a9f4',
        'terminated':'#de8e8c',
        'salaried':'#2eb52c'
      },
      lineHeight: {
        'zero':'0px',
        'l1':'15.4284px',
        'l2':'26px',
        'l3':'15px'
      },
      height:{
        '3.75':'15px'
      },
      width: {
        '9.5':'38px',
        '3.75':'15px'
      },
      minWidth: {
        '9.5':'38px',
      },
      screens: {
        'laptop':'850px',
        'laptop-mid':'750px',
        'tablet':'620px',
        'mobile':'448px',
        'desktop':'1372px'
      },
      maxWidth: {
        '17.5':'70px',
      },
      padding:{
        '2.75':'11px'
      },
      fontSize: {
        '3.25':'13px',
        '3.75':'15px',
        '4.5':'18px'
      },
      margin: {
        '1.25':'5px',
        '0.75':'3px'
      }
    },
  },
  plugins: [],
};
