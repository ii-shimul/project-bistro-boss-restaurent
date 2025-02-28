
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".menu li > *:not(ul):not(.menu-title):not(details).active": {
            backgroundColor: "transparent",
            color: "white",
          },
        },
      },
    ],
  },
};

