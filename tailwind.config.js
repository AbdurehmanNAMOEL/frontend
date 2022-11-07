/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     ],

  theme: {
    screens: {
      'xxs': '540px', // min-width
      'sm':'640px',
      'md':'768px',
      'lg':'1024px'
    },
    extend: {},
  },
  plugins: [],
}
