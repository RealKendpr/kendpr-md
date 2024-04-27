import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      accent: "#007aac",
      neutral: {
        100: "#fafafa",
        200: "#f5f5f5",
        300: "#ececec",
        400: "#d0d0d0",
        500: "#3e3e42",
        600: "#2d2d30",
        700: "#252526",
        800: "#1e1e1e",
      },
    },
    extend: {
      screens: {
        xsm: "500px",
      },
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
