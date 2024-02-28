/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regular_text": "#f5f5f5",
        "heading_text": "#fafafa",
        "accent_text": "#facc15",
        "regular_background": "#262626",
        "fragment_background": "#525252",
        "accent_background": "#facc15"
      }
    },
  },
  plugins: [],
}