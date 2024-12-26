/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "DMSans" :["DM Sans", "serif"]
      },
      colors:{
        "blueee": ["#435DE2"]
      },
      container:{
        center: true
      }
    },
  },
  plugins: [
    
  ],
}