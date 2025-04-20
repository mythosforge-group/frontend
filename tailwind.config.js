/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
      },
      backgroundImage: {
        "rpg-parchment": "url('/back.jpg')",
        "login-back": "url(/op.png)",
        "register-back": "url(/project-fantasy-io-interactive.jpg)",
      },
    },
  },
  plugins: [],
};
