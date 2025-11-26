/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        "indigo-brand": "#2f1893",
        "fuchsia-brand": "#e93a7d",
        "golden-brand": "#cbaa5c"
      },
      spacing: {
        15: "3.75rem",
        30: "7.5rem"
      },
      fontSize: {
        "45px": "2.8125rem"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"]
      }
    }
  },
  plugins: []
};
