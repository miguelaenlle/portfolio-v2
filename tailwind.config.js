module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to top left,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1) 50%), linear-gradient(rgba(111, 162, 165, 0.25), #fff)",
      },
      screens: {
        "mobile": {
          "max": "767px"

        }
      }
    },
  },
  plugins: [],
};
