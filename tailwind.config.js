/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      lightenBlack: "#565758",
      black: "#000",
      secondBlack: "#1E1E1E",
      white: "#fff",
      secondWhite: "#EEEEEE",
      green: "#3eb073",
      darkerGreen: "#29975C",
      red: "#e83c35",
      darkerRed: "#C41C15",
      lighterBlue: "#567FBE",
      blue: "#3b69b1",
      darkerBlue: "#2D599F",
      yellow: "#fdcf2a",
      darkerYellow: "#F09E00",
      purple: "#76388D",
      secondGray: "#989A9D",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      md1000: { max: "1000px" },
      // => @media (max-width: 767px) { ... }

      md1090: { max: "1090px" },
      // => @media (max-width: 767px) { ... }

      md1390: { max: "1390px" },
      // => @media (max-width: 767px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
