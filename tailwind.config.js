/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      none: 'transparent',
      primary: '#ff585d',
      'primary-opacity': '#ff585ea7',
      white: '#ffffff',
      gray: '#484848',
      'semi-gray': '#cccccc',
      error: '#b80757ff',
      success: '#74fda6',
      warn: '#f1be57d8'
    },
    fontFamily: {
      GothamBold: ['GothamBold'],
      GothamBook: ['GothamBook']
    }
  },
  plugins: []
}
