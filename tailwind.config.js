/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

