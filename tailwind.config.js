/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'half-white': "rgba(255, 255, 255, 0.5)",
      "transparent": 'transparent',
      "current": 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray-300': "rgba(38, 38, 38, 1)",
      'dark-blue': "rgba(17,24,39, 1)",
      'black': 'black',
      'secondary': 'rgba(17, 24, 39, 1)',
      'red': '#ff0000'
    },
    extend: {},
  },
  plugins: [],
}
