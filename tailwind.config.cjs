/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        featureGrey: "#E8E8E8",
        featureWhite: "#F6F4EF",
        featureOrange: "#A21206",
        featureBlue: "#032CA6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

// featureOrange: "#EF7504"
