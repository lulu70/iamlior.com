module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        hd: "1920px",
      },
      spacing: {
        "16/9": "56.25%",
      },
      animation: {
        fade: "fade 0.5s linear",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0.5,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
