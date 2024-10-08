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
        'tuscan-image':'#de8e8c',
        'wageningen-green':'#2eb52c',
        'democrat':'#03a9f4',
      },
      lineHeight: {
        'zero':'0px',
        '2.5':'10px',
        'l1':'15.4284px',
        'l2':'26px',
        '3.75':'15px',
        '4.5':'18px',
        '8.5':'34px'
      },
      height:{
        '3.75':'15px',
        '4.5':'18px',
        '8.5':'34px',
        '9.5':'38px',
        '31':'124px'
      },
      width: {
        '3.75':'15px',
        '9.5':'38px',
        '22.5':'90px',
        '31':'124px',
        '45':'180px',
      },
      minWidth: {
        '9.5':'38px',
        '22.5':'90px'
      },
      screens: {
        'large':'850px',
        'medium':'750px',
        'small':'620px',
        'extra-small':'448px',
        'extra-large':'1372px'
      },
      maxWidth: {
        '9.5':'38px',
        '17.5':'70px',
        '35':'140px',
        '45':'180px',
      },
      padding:{
        '1.25':'5px',
        '1.75':'7px',
        '2.25':'9px',
        '2.75':'11px',
        '8.5':'34px',
        '35':'140px'
      },
      fontSize: {
        '2.5':'10px',
        '3.25':'13px',
        '3.75':'15px',
        '4.5':'18px',
      },
      margin: {
        '0.75':'3px',
        '1.25':'5px',
        '2.75':'11px'
      },
      backgroundColor:{
        'hover':'#00000014'
      },
      letterSpacing:{
        'title':'0.52px'
      },
      transitionDuration: {
        '200':'200ms',
        '1200':'1200ms',
        '1500':'1500ms'
      },
      boxShadow: {
        'options-dropdown':'0 2px 4px rgba(0,0,0,.2)',
        'header':'0 4px 8px rgba(0,0,0,.05),0 0 4px rgba(0,0,0,.15)'
      },
      zIndex: {
        '150':'150',
        'behind':'-1'
      },
      spacing: {
        '6.5':'26px'
      },
      maxHeight: {
        '1000':'1000px',
        '31':'124px'
      },
    },
  },
  plugins: [],
};
