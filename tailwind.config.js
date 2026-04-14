/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f4ef',
          100: '#efe3d6',
          500: '#8a2f14',
          600: '#742710',
          700: '#5f200d',
          900: '#2e140d',
        },
      },
      boxShadow: {
        card: '0 12px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}

