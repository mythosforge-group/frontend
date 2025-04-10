/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
      },
      backgroundImage: {
        "rpg-parchment": "url('src/assets/2150743792.jpg')",
      },
    },
  },
  plugins: [],
};
