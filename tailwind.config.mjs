import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      accent: {
        dark: "#007aac",
        light: "#001d59",
      },
      neutral: {
        100: "#f8f9fa",
        200: "#E9ECEF",
        300: "#DEE2E6",
        400: "#d5d5d5",
        500: "#CED4DA",
        600: "#6C757D",
        700: "#495057",
        800: "#1f1f1f",
        900: "#141414",
      },
    },
    extend: {
      screens: {
        xsm: "500px",
        maxSm: { max: "640px" },
      },
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
