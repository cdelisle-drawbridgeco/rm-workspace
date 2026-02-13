/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        db: {
          dark: '#111821',
          aqua: '#86C8BC',
          'aqua-dark': '#489E8E',
          'aqua-light': '#D6E6E3',
          orange: '#FF6900',
          gray: '#D8D9DB',
          'gray-light': '#F6F6F7',
        },
      },
      fontFamily: {
        heading: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: []
};
