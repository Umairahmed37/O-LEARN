
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-back": "##E5E5E5",
        "pink-back": "#FDF2F2",
        "pink-main": "#F9E7EA",
        "pink-alt": "#FD6060",
        "pink-dark": "#EE2E4F",
        // "pink-light-back":"#FDF4F4",
        "pink-button": "#FF738B",
        "blue-dark-title": "#1E2A39",

        "blue-dark": "#1E1E1E",
        "text-color": "#5C6272"

      },
      backgroundImage: {
        "educationback": "url('/Shapes/Education.svg')",
      },
    },

    screens: {
      'xs': '520px',
      ...defaultTheme.screens,
    }

  },
  plugins: [],


}