module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "main-color": "#092133",
        "button-color": "#FF4D2A",
        "grey-color" : "#2D3A4C"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
