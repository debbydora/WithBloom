/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // headerbg: "rgba(235, 238, 246, 1)",
        headerbg: "#FBEEFF",
      },
      boxShadow: {
        cardColor: "0px 2px 16px rgba(192, 192, 192, 0.25)",
      },
    },
  },
  plugins: [],
};
