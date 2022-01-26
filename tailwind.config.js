module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      RozhaOne: ['Rozha One', 'serif'],
      Inter: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-section': 'linear-gradient(90deg, rgba(245, 246, 248, 1) 50%, rgba(1, 179, 248, 0.1) 50%)'
      },
      colors: {
        'amcovad-primary': {
          100: '#99E1FC',
          200: '#67D1FB',
          300: '#34C2F9',
          400: '#01B3F8',
          500: '#01A1DF',
          600: '#017DAE',
          700: '#015A7C'
        },
        'amcovad-secondary': {
          100: '#F5F6F8',
          200: '#EBECEE',
          300: '#D6D9DD',
          400: '#AEB3BB',
          500: '#858C99',
          600: '#5D6677',
          700: '#344055'
        },
        'amcovad-secondary-darker': '#0C1A2C',
        'amcovad-info': '#01C4DF',
        'amcovad-white': '#FFFFFF',
        'amcovad-black': '#000000',
        'amcovad-danger': '#FB3640',
        'amcovad-success': '#00CA69',
        'amcovad-warning': '#F3C000'
      }
    }
  },
  plugins: []
};
