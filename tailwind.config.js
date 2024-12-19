/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        twinkle: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "70%": { opacity: 0.5 },
          "90%": { opacity: 0 }, // Gradually fade out
        },
      },
      animation: {
        twinkle: "twinkle 1s ease-in-out forwards", // Ensure it stops after fading out
      },
    },
  },
  plugins: [],
};
