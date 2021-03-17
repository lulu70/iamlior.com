const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightTheme: {
          text: colors.coolGray[900],
          bg: colors.coolGray[100],
          primary: colors.coolGray[200],
          secondary: colors.coolGray[700],
        },
        darkTheme: {
          text: colors.coolGray[100],
          bg: colors.coolGray[900],
          primary: colors.coolGray[700],
          secondary: colors.coolGray[200],
        },
        accent: colors.amber[400],
      },
      fontFamily: {
        spaceMono: [
          '"Space Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
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
