module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '459px',
      sm: '480px',
      md: '990px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#0098DA',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'blue-700': '#1d4fd8',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
    },
    extend: {
      zIndex:{
        '1000': '1000',
      }
    },
  },
  plugins: [],
}