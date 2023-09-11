module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      colors: {
        primary: '#b81912',
        black: {
          'normal': '#000000',
          'see-through': 'rgb(0, 0, 0, 0.3)',
        },
        gray: {
          dark: '#0d0d0d',
        },
      },
      width: {
        13: '3.25rem',
        17: '4.25rem',
      },
      height: {
        '13': '3.25rem',
        '17': '4.25rem',
        '100vh-16': 'calc(100vh - 60px)',
      },
      boxShadow: {
        'red': '0px 0px 7px rgba(207, 28, 21, 1)',
        'red-thicker': '0px 0px 14px rgba(207, 28, 21, 0.9)',
        'black-blur': '0px 0px 16px 10px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        roboto: ['"Roboto"'],
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
      height: ['group-hover'],
    },
  },
  plugins: [],
}
