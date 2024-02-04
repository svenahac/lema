/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#1371BB",
        btnHover: "#008CBA",
      },
      backgroundImage: {
        main: "url('/src/images/main.jpg')",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
});
