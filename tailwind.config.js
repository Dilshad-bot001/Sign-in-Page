/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '100px',
      lg: '768px',
    },
    extend: {
      colors: {
        primaryColor: '#404555',
        buttonColor: '#F1C12B',
        textColor: '#121317',
        lightTextColor: '#404555',
        borderColor: '#DCDEE5',
        placeholderColor: '#606880',        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
