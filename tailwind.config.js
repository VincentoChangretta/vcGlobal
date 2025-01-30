/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                mainBg: '#1a1a1a',
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
                orangeMain: '#F07427',
            },
            margin: {
                section: '100px',
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
                big: '24px',
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
        },
    },
    plugins: [],
};
