/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scrollRight: 'scroll-right 10s linear infinite',
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
    },
  },

  plugins: [],
},
};
