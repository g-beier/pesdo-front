const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.stone[950],
      white: colors.stone[50],
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
    extend: {},
  },
  plugins: [],
};
