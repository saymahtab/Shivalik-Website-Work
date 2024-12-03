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
        customed: '#98012E',
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
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' }, // Full size, full opacity
          '50%': { transform: 'scale(0.9)', opacity: '0.7' },  // Slightly reduced size, slightly faded
        },
      },
      animation: {
        'marquee-left': 'marqueeLeft 50s linear infinite',
        'marquee-right': 'marqueeRight 40s linear infinite',
        'marquee': "marquee 20s linear infinite",
        'zoomInOut': 'zoomInOut 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
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
