const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.stone[900],
      white: colors.stone[100],
      primary: {
        50: "#ffe6ea",
        100: "#f5bfc4",
        200: "#e9979d",
        300: "#de6d78",
        400: "#d34551",
        500: "#ba2c38",
        600: "#92212b",
        700: "#69161e",
        800: "#410b11",
        900: "#1d0103",
      },
      gray: colors.stone,
    },
    fontFamily: {
      sans: ["'Exo 2'", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
