/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['cabinet', 'sans-serif'],
        custom: ['cabinet-bold', 'sans-serif'],
        custom: ['cabinet-extrabold', 'sans-serif'],
        custom: ['cabinet-extralight', 'sans-serif'],
        
      },
    },
  },
  plugins: [require("daisyui")],
}

