/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      highlights: "#0AE6FF",
      primary: "#052789",
      secondary: "#8794BA",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    width: {
      container: "1000px",
    },
  },
  plugins: [],
};
