/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#1a1a1a",
        mainBgInv: "#fefefe",
        ligthtBall: "rgba(255,255,255,.15)"
      },
      padding: {
        btnPadding: "15px" 
      },
      borderRadius: {
        stdRadius: "30px",
      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"]
      },
      transitionDelay: {
        "2000": "2000ms"
      }
    },
  },
  plugins: [],
}