module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#14B8A6",
      },
    },
  },
  mode: "jit",
  variants: {
    extend: {},
  },
  plugins: [],
};
