/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      red: 'B91C1C',
      colors: {
        primary: '#7F1D1D',
        secondary: '#B91C1C',
        muted: '#6B7280',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
