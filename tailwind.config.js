const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
      primary: "#F7AB0A",
      background: "#1B1B1B",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      yellow: colors.amber,
      blue: colors.blue,
    },
    fontFamily: {
      display: ["sofia-pro", "sans-serif"],
      body: ["proxima-nova", "sans-serif"],
      mono: ["Fira Code", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "5.5rem",
        sm: "7rem",
        lg: "8rem",
        xl: "10rem",
        "2xl": "12rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
