/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero": "url('/home-bg.webp')",
        slide1: "url('/slide1.webp')",
        landing: "url('/landing.webp')",
        mobileBG: "url('/mobileBG.webp')",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
