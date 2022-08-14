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
      'black': '#000000',
      'orange': '#ff7849',
      'green': '#13ce66',
      'blue-700': '#1d4fd8',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-800': '#1F2937',
      'gray-900': '#111827',
      'white': '#FFFFFF',
      'red': '#FF0000'
    },
    extend: {
      zIndex:{
        '1000': '1000',
      }
    },
  },
  plugins: [],
}