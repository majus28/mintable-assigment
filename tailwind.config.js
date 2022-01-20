module.exports = {
  // mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2C0346",
        },
        blue: {
          DEFAULT: "#5555ee",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
