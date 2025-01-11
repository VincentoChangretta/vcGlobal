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
        ligthtBall: "rgba(255,255,255,.15)",
        glassWhite: "rgba(255,255,255,.05)",
        glassWhiteHover: "rgba(255,255,255,.15)"
      },
      margin: {
        "section": "100px"
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
      fontSize: {
        "title": "45px",
        "bigTitle": "55px",
        "sliderNums": "35px",
        "big": "24px",
      },
      lineHeight: {
        "title": "53px"
      },
      animation: {
        "spinPlanet": "spin 60s linear infinite"
      },
      transitionDelay: {
        "2000": "2000ms"
      },
      scale: {
        mirror: "-1 1", 
      }
    },
  },
  plugins: [],
}