/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '9px 10px 4px 0px rgba(0,0,0,.4)',
      }
    },
  },
  plugins: [],
}
