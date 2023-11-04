/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "raleway":['Raleway', "sans-serif"]
      },
      backgroundColor:{
        "blue-light":"#31759C",
        "blue-night":"#061A43"
      },
      boxShadowColor:{
        "blue-light":"#31759C",
        "blue-night":"#061A43"
      }

    },
  },
  plugins: [],
}

