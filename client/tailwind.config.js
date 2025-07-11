/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "card" : "repeat(auto-fill, minmax(150px ,1fr))"
      },
    },
  },
  plugins: [],
}