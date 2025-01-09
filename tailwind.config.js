/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        xBg: "#f0f4f9",
        secondary: "#f1c40f",
      },
    },
  },
  plugins: [],
};
