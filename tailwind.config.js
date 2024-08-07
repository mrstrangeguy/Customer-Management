/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        'leading-0':'0'
      }
    },
  },
  plugins: [],
}

