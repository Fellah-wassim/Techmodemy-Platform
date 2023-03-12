/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      secondBlack: "#1E1E1E",
      white: "#fff",
      green: "#3eb073",
      darkerGreen: "#29975C",
      red: "#e83c35",
      lighterBlue: "#567FBE",
      blue: "#3b69b1",
      darkerBlue: "#2D599F",
      yellow: "#fdcf2a",
      purple: "#76388D",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
