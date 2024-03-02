/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      lineHeight: {
        "extra-small": "0.5",
      },
      fontSize: {
        exsmall: "0.5rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        header_theme: "#2b324f",
        nav_theme: "#a3bfd9",
        triky_blue: "#1E90FF",
        aqua: "#00FFFF",
      },
    },
  },
  plugins: [],
};
