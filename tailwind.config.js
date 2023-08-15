/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero": "url('/home-bg.png')",
        "slide1" : "url('/slide1.png')",
        "landing" : "url('/landing.png')",
      },
      backgroundSize: {
        
        '100%': '100%',
        
      }
    },
  },
  plugins: [],
}
