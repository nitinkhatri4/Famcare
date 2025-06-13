/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite',
      },
      keyframes: {
        'loop-scroll':{
          from: { transfrom: 'translateX(0%)'},
          to: { transform: 'translateX(-100%)'},
        },
      },
    },
  },
  plugins: [],
}