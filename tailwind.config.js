/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#1a1a1a',
        mainBgLight: '#232323',
        mainBgInv: '#fefefe',
        mainBgInvC: '#ECECEC',
        ligthtBall: 'rgba(255,255,255,.15)',
        glassWhite: 'rgba(255,255,255,.05)',
        glassWhiteHover: 'rgba(255,255,255,.15)',
        bluredBall: 'rgba(255,255,255,.5)',
        htmlColor: '#F2672E',
        cssColor: '#4264EB',
        jsColor: '#F2BF26',
        gitColor: '#0e0e0e',
        gitSecondColor: '#9457EB',
        orangeMain: '#F09A28',
      },
      padding: {
        btnPadding: '15px',
      },
      borderRadius: {
        stdRadius: '30px',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        m: '20px',
        l: '24px',
        title: '45px',
        bigTitle: '55px',
        sliderNums: '35px',
      },
      lineHeight: {
        bigTitle: '63px',
        title: '53px',
        sliderNums: '43px',
      },
      animation: {
        spinPlanet: 'spin 60s linear infinite',
        whatWeDo: 'animWhatWeDo 30s ease infinite',
        bounceOne: 'pulse 2.5s -.3s linear infinite',
        bounceTwo: 'pulse 2.5s -.6s linear infinite',
        bounceThree: 'pulse 2.5s -.9s linear infinite',
        bounceFor: 'pulse 2.5s -1.2s linear infinite',
        animSmallMove: 'animSmallMove 5.5s ease infinite',
      },
      transitionDelay: {
        2000: '2000ms',
      },
      scale: {
        mirror: '-1 1',
      },
      screens: {
        'w-1500': { max: '1500px' },
        'w-1450': { max: '1450px' },
        'w-1350': { max: '1350px' },
        'w-1380': { max: '1380px' },
        'w-1200': { max: '1200px' },
        'w-1160': { max: '1160px' },
        'w-1140': { max: '1140px' },
        'w-1040': { max: '1040px' },
        'w-1100': { max: '1100px' },
        'w-980': { max: '980px' },
        'w-820': { max: '820px' },
        'w-750': { max: '750px' },
        'w-550': { max: '550px' },
        'w-530': { max: '530px' },
        'w-450': { max: '450px' },
        'w-420': { max: '420px' },
      },
    },
  },
  plugins: [],
};
