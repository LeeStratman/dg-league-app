const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#3CF1FF",
          400: "#1ED3EA",
          DEFAULT: "#00B5CC",
        },
        secondary: "#C1CD23",
        "light-blue": colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose,
      },
      outline: {
        primary: "2px solid #1ED3EA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
