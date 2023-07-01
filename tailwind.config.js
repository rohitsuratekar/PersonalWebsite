/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  safelist: [
    {
      pattern: /col-span-./,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9DA65D",
        secondary: "#6C733D",
        background: {
          50: "#E0E0DE",
          100: "#D1D1D1",
          DEFAULT: "#8C8C88",
          900: "#545454",
        },
        link: "#3273dc",
      },
    },
  },
  plugins: [],
};
