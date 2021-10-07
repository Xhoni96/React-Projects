module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#14B8A6",
        gray: {
          blue: "#f5fbfd",
        },
        black: {
          overlay: "rgba(0,0,0, 0.2)",
        },
        newsletter: "#fcf5f5",
      },
    },
  },
  mode: "jit",
  variants: {
    extend: {},
  },
  plugins: [],
};
