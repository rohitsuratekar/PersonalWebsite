/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9DA65D',
        secondary: '#6C733D',
        background: {
          100 : '#D1D1D1',
          DEFAULT : '#8C8C88',
          900 : '#8C8C88'
        }
      },
    },
  },
  plugins: [],
}
