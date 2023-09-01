/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "90vw",
        md: "1020px",
        lg: "1080px",
        xl: "1180px",
      },
    },
    extend: {
      fontFamily: {
        primary: "Lato ,sans-serif",
      },
      colors: {
        primary: {
          500: "#378901",
          400: "#57D801",
        },
        accent: {
          500: "#890101",
          400: "#D80101",
          300: "rgba(0, 0, 0, 0.83)",
          200: "rgba(0, 0, 0, 0.51)",
        },
        neutral: {
          100: "#FFFFFF",
          600: "#000000",
        },
      },
      fontSize: {
        100: "12px",
        200: "16px",
        300: "20px",
        400: "22px",
        500: "24px",
        600: "26px",
        700: "28px",
        800: "30px",
        850: "32px",
        900: "36px",
        1000: "40px",
        1100: "64px",
      },
    },
  },
  plugins: [],
};
