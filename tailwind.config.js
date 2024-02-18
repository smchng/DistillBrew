/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*/*/**.{html,js,ts,tsx}",
    "/styles/global.css",
  ],

  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin", "sans-serif"],
      },
      colors: {
        mocha: "#D4ADA0",
        brown: "#391F06",
        brown2: "#261D15",
        brown3: "#211B15",
        grey: "#F1F1F1",
        peach: "#ffd1ac",
        matcha1: "#C0CFB2",
        matcha2: "#E7EBE3",
        blue: "#F3F8FF",
        beige1: "#FEF7F7",
        beige2: "#F5F2EE",
      },
      fontSize: {
        "2xs": "12px",
        xs: "16px",
        sm: "21px",
        base: "25px",
        lg: "50px",
        xl: "55px",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
      },
      dropShadow: {
        lg: "0 20px 13px rgba(167, 167, 167, 0.25)",
        xl: "0 20px 13px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
