/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo"],
      },
      keyframes: {
        scale_up: {
          "0%": { transform: "scale(0)" },
          "70%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
      scale_up: "scale_up .8s",
      },
    },
  },
  plugins: [],
};
