/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     transitionProperty: {
      'height':'height',
      'opacity':'opacity'
     },
     transitionDuration: {
      'height':'700ms',
      'opacity':'400ms'
     }
    },
  },
  plugins: [],
}

