const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightTheme: {
          text: colors.coolGray[900],
          bg: colors.coolGray[100],
          primary: colors.coolGray[300],
          secondary: colors.coolGray[700],
        },
        darkTheme: {
          text: colors.coolGray[100],
          bg: colors.coolGray[900],
          primary: colors.coolGray[700],
          secondary: colors.coolGray[300],
        },
        accent: colors.amber[400],
      },
      screens: {},
      spacing: {
        "16/9": "56.25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
