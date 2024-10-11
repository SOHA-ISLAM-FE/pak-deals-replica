/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      overflow: {
        overlay: "overlay",
      },
    },
  },
  plugins: [],
};
