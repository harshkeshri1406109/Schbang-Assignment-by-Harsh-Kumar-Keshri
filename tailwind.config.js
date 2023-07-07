/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#222831",
          200: "rgba(25, 24, 37, 0.1)",
          300: "rgba(25, 24, 37, 0.5)",
          400: "rgba(25, 24, 37, 0.75)",
        },
        black: "#191825",
        goldenrod: {
          100: "#facd49",
          200: "rgba(250, 205, 73, 0.08)",
        },
        slateblue: "#5d50c6",
        hotpink: "#f85e9f",
        orangered: "#ff5722",
        darkslategray: "#393e46",
        whitesmoke: "#eee",
      },
      fontFamily: {
        inter: "Inter",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "13xl": "32px",
        "81xl": "100px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "4xl": "1.44rem",
      "5xl": "1.5rem",
      "16xl": "2.19rem",
      "25xl": "2.75rem",
      "9xl": "1.75rem",
      sm: "0.88rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
