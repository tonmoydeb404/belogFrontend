/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=black]"],

          primary: "#1EB854",
          secondary: "#27272A",

          "base-100": "#18181B",

          "--rounded-btn": "0.3rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
