/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'primary': '#6ab490',
        'accent': '#1a58a0',
        'default': '#f0f0f0',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
