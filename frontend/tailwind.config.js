/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        darkBlue: '#07294D',
        lightBlue: '#A9D1E1',
        grey: '#f0f0f0', // Add a custom grey color for the footer background
        black: '#000000', // Ensure black is defined
        customBlue: '#20659e',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'marquee-left': 'marqueeLeft 50s linear infinite',
        'marquee-right': 'marqueeRight 40s linear infinite',
      },
      textColor: {
        link: '#A9D1E1',
        darkBlue: '#07294D',
      },
      backgroundColor: {
        footer: '#f0f0f0', // Use grey color as footer background
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
