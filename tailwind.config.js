const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          ...colors,
          primary: '#5765F2',
          gray1: '#1D1D21',
          gray2: '#1A1A1D',
          gray3: '#26262B',
          gray4: '#0E0E10',
          gray5: '#1E1F28',
          gray6: '#25252A',
        }
    },
  },
  plugins: [],
}
