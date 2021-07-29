module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      },
      textColor: {
        'customgrey': '#6C7381'
      },
      height: {
        "cases": "1500px"
      },
      width: {
        "case": "calc(50% - 32px)"
      }
    }
  },
  variants: {
    extend: {
      margin: ['first']
    },
  },
  plugins: [],
}
