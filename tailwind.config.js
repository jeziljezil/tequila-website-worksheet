/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "extra-lg": "0 20px 40px rgba(0, 0, 0, 0.3)", // Adjust values as needed
      },
      boxShadow: {
        "inner-custom": "inset 0px 8px 200px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "bg-move-right": {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        "bg-move-left": {
          "0%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        "move-right": "bg-move-right 1s ease-in-out forwards",
        "move-left": "bg-move-left 1s ease-in-out forwards",
      },
      backgroundImage: {
        "elliptic-gradient-toggle":
          "radial-gradient(ellipse at center, #613d92, transparent 90%)",
      },
      backgroundGradient: {
        "elliptic-gradient-quickAcces":
          "radial-gradient(ellipse at center, #613d92, transparent 10%)",
      },
    },
  },
  plugins: [],
};
