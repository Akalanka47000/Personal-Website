module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        orange:{
          dark:'#ff4000',
        }
      },
      boxShadow: {
        red: '0px 0px 10px rgba(255, 64, 0, 0.9)',
        'red-thicker': '0px 0px 14px rgba(255, 64, 0, 0.9)',
      },
      fontFamily: {
        roboto: ['"Roboto"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
