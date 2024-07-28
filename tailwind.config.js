/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px', // Ajoute une classe de bordure personnalisée avec une largeur de 3 pixels
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'], // Active les variantes responsives et hover pour les classes de bordure
  },
  plugins: [],
}
