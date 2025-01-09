/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        primary: '#FF4206',
        secondary: 'rgb(109, 188, 67)',
        tickHoverBg:"rgb(182,204,89)",
        crossIconbg:"rgb(240,68,69)",
        hoverTickBg:"rgb(234,101,86)",
        infinityProTextColor:"rgb(248,218,207)",
        orange: {
          DEFAULT: '#FF4206',
        },
        gray: {
          100: '#f5f5f5',
          600: '#525252',
          900: '#171717',
        },
        red: {
          800: '#991b1b',
        },
      },
    },
  },
  plugins: [],
}
