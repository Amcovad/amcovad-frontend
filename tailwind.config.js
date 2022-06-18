module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-[#01a1df]',
    'bg-[#9B51E0]',
    'bg-[#2F80ED]',
    'text-secondary-100',
    'bg-secondary-500',
    'bg-primary-500',
    'bg-secondary-green',
    'bg-primary-200',
    'border-danger-500/70 bg-danger-500/10',
    'border-info-500/70 bg-info/10',
    'border-success-500/70 bg-success-500/10',
    'border-warning-500/70 bg-warning-500/10'
  ],
  mode: 'jit',
  theme: {
    fontFamily: {
      RozhaOne: ['Rozha One', 'serif'],
      Inter: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-section': 'linear-gradient(90deg, rgba(245, 246, 248, 1) 50%, rgba(1, 179, 248, 0.1) 50%)',
        'about-background':
          'linear-gradient(to bottom, rgba(245, 246, 248,1) 35%,rgba(30,87,153,1) 35%,rgba(30,87,153,1) 35%,rgba(255,255,255,1) 35%);'
      },
      colors: {
        primary: {
          25: '#F2FBFF',
          50: '#D7F3FE',
          100: '#ACE6FD',
          200: '#82DAFB',
          300: '#57CDFA',
          400: '#2CC0F9',
          500: '#01B3F8',
          600: '#018FC6',
          700: '#016C95',
          800: '#004863',
          900: '#002432'
        },
        secondary: {
          25: '#F5F6F8',
          50: '#E6E8EA',
          100: '#D0D3D8',
          200: '#BABEC5',
          300: '#A3A9B2',
          400: '#8D94A0',
          500: '#777F8D',
          600: '#616A7A',
          700: '#4A5568',
          800: '#344055',
          900: '#1A202A'
        },
        danger: {
          25: '#FFF4F5',
          50: '#FEDFE1',
          100: '#FEBEC1',
          200: '#FD9CA1',
          300: '#FC7A80',
          400: '#FC5860',
          500: '#FB3640',
          600: '#C92B33',
          700: '#972026',
          800: '#64161A',
          900: '#320B0D'
        },
        success: {
          25: '#F2FCF7',
          50: '#D7F7E7',
          100: '#ACEECE',
          200: '#81E5B5',
          300: '#56DC9C',
          400: '#2BD382',
          500: '#00CA69',
          600: '#00A254',
          700: '#00793F',
          800: '#00512A',
          900: '#002815'
        },
        warning: {
          50: '#FCF6DF',
          100: '#F8ECBD',
          200: '#F5E29B',
          300: '#F1D879',
          400: '#EECE57',
          500: '#EAC435',
          600: '#BB9D2A',
          700: '#8C7620',
          800: '#5E4E15',
          900: '#2F270B'
        },
        info: {
          50: '#D7F6FA',
          100: '#ACECF5',
          200: '#81E2EF',
          300: '#57D8EA',
          400: '#2CCEE4',
          500: '#01C4DF',
          600: '#019DB2',
          700: '#017686',
          800: '#004F59',
          900: '#00272D'
        },
        purple: {
          50: '#F4F3FF',
          100: '#EBE9FE',
          200: '#D9D6FE',
          300: '#BDB4FE',
          400: '#9B8AFB',
          500: '#7A5AF8',
          600: '#6938EF',
          700: '#5925DC',
          800: '#4A1FB8',
          900: '#3E1C96'
        },
        pink: {
          50: '#FDF2FA',
          100: '#FCE7F6',
          200: '#FECDD6',
          300: '#FEA3B4',
          400: '#FD6F8E',
          500: '#F63D68',
          600: '#DD2590',
          700: '#C11574',
          800: '#9E165F',
          900: '#851651'
        },
        orange: {
          50: '#FFF6ED',
          100: '#FFEAD5',
          200: '#FDDCAB',
          300: '#FDDCAB',
          400: '#FD853A',
          500: '#FB6514',
          600: '#EC4A0A',
          700: '#C4320A',
          800: '#9C2A10',
          900: '#7E2410'
        },
        white: '#FFFFFF',
        black: '#000000',
        tertiary: '#0C1A2C',
        lightgray: '#F5F6F8'
      }
    }
  },
  plugins: []
};
