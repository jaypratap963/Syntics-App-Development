module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        bluegray_900: "#2d2d2d",
        gray_600: "#787878",
        gray_400: "#b3b3b3",
        black_900: "#060707",
        red_A200: "#fd6262",
        gray_800: "#4d4d4d",
        black_902: "#060606",
        black_901: "#0d0d0d",
        bluegray_100: "#cfcfcf",
        light_blue_500: "#03aef4",
        gray_200: "#eeeeee",
        white_A700: "#ffffff",
      },
      borderRadius: { radius5: "5px", radius10: "10px", radius22: "22px" },
      fontFamily: { inter: "Inter", crimsonpro: "Crimson Pro" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
