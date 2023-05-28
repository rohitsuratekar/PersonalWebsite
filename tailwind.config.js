/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}",
    "./src/*.{html,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User-defined colors
        primary: '#9DA65D',
        secondary: '#6C733D',
        background: {
          100 : '#D1D1D1',
          DEFAULT : '#8C8C88',
          900 : '#8C8C88'
        }
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

