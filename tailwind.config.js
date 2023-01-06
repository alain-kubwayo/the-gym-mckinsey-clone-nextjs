/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          
        },
        secondary: {
          100: '#2155FF',
        }
      },
      backgroundImage: {
        'hero-texture': "url('/images/hero-cover.png')"
      }
    },
  },
  plugins: [],
}
