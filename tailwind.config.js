/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //12 column grid
      BackgroundImage: {
        'custom-gradient': 'linear-gradient(90deg,transparent 0,#000 2rem,#000 calc(100% - 4rem),transparent 100%)'
      }
    },
  },
  plugins: [forms],
}
