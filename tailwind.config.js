/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito-Regular", "sans-serif"],
        "nunito-bold": ["Nunito-Bold", "sans-serif"],
        "nunito-extrabold": ["Nunito-ExtraBold", "sans-serif"],
        "nunito-medium": ["Nunito-Medium", "sans-serif"],
        "nunito-semibold": ["Nunito-semibold", "sans-serif"],
        "nunito-light": ["Nunito-Light", "sans-serif"],
      },
      colors: {
        "primary":"#252525",
        "secondary": "#3B3B3B",
        white: {
          DEFAULT: "#FFFFFF",
          500: "#9A9A9A"
        }
      }
    },
  },
  plugins: [],
};
