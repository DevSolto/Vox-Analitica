/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      highlights: "#172755",
      primary: "#052789",
      secondary: "#8794BA",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    width: {
      container: "1000px",
      full: "100%",
    },
  },
  plugins: [],
};
