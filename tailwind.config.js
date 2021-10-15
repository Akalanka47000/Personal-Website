module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
