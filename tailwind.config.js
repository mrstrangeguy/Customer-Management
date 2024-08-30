/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'default-color':'#0000008a',
        'checkbox-after-selected':'#03a6ef1a',
        'checkbox-selected-bg':'#03a9f4',
        'table-hover-primary':'#f2f2f2',
        'td-bg':'#fafafa',
        'table-border':'#e0e0e0',
        'label':'#00000099',
        'checked':'#03a9f40a',
        'selected':'#cdeefd',
        'table-hover-secondary':'#00000061',
        'table-hover-tertiary':'#000000de',
        'commission':'#03a9f4',
        'terminated':'#de8e8c',
        'salaried':'#2eb52c'
      },
      lineHeight: {
        'zero':'0px',
        'l1':'15.4284px',
        'l2':'26px',
        'l3':'15px',
        '4.5':'18px'
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
        'large':'850px',
        'medium':'750px',
        'small':'620px',
        'extra-small':'448px',
        'extra-large':'1372px'
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
      },
      backgroundColor:{
        'hover':'#00000014'
      },
      fontSize:{
        'title':'13px'
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
