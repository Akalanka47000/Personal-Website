module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        black: {
          normal: '#000000',
          'see-through': 'rgb(0, 0, 0,0.3)',
        },
        white: '#ffffff',
        gray: {
          dark: '#0d0d0d',
        },
        orange: {
          dark: '#ff4000',
          light: '#f8981d',
        },
        yellow: '#fda612',
        transparent: 'rgb(0, 0, 0, 0)',
      },
      width: {
        13: '3.25rem',
        17: '4.25rem',
      },
      height: {
        13: '3.25rem',
        17: '4.25rem',
        '100vh-16': 'calc(100vh - 60px)',
      },
      boxShadow: {
        red: '0px 0px 7px rgba(255, 64, 0, 0.9)',
        'red-thicker': '0px 0px 14px rgba(255, 64, 0, 0.9)',
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
