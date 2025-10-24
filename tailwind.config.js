/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',    // Purple from Figma
        secondary: '#f3f4f6',
      },
    },
  },
  plugins: [],
}
