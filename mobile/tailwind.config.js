/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: [
          "NunitoSans_400Regular",
          "NunitoSans_700Bold"
        ]
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
