/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightColor: "#F4F6FF",
        headingColor:"#F3C623",
        darkestColorAdjust: "rgba(16, 55, 92, 0.70)",
        darkestColorAdjust2:"rgba(16, 55, 92, 0.4)",
        darkestColor: "rgb(0, 39, 76)",
      },
    },
  },
  plugins: [],
};
