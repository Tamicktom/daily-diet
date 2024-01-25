import { theme } from "./src/utils/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: { extend: theme.extend },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
