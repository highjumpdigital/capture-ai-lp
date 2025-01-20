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
        tickHoverBg: "rgb(176,207,65)",
        crossIconbg: "rgb(240,68,69)",
        hoverTickBg: "rgb(234,101,86)",
        infinityProTextColor: "rgb(248,218,207)",
        orange: {
          DEFAULT: '#FF4206',
          gradient: {
            start: 'rgba(255, 66, 6, 0)',
            middle: '#FF4206',
          }
        },
        gray: {
          100: '#f5f5f5',
          600: '#525252',
          900: '#171717',
        },
        red: {
          800: '#991b1b',
        },
        card: {
          bg: '#fdfdfd',
          border: '#d3ddef33',
          triangle: '#ededed',
        },
        marquee: {
          text: '#FFFFFFCC',
          darkBg: '#595959',
          lightBg: '#F4F4F4',
        },
        plan: {
          border: '#00000033',
          description: {
            dark: '#3E444A',
            light: '#D4D6D8',
            text: '#FFFFFFCC',
          },
          hover: {
            dark: 'rgb(51,13,1)',
            light: 'rgb(255,251,249)',
            text: '#633E34',
          },
        },
        chat: {
          title: '#FF4206',
          text: '#000000CC',
          border: {
            DEFAULT: '#383E4E33',
            selected: '#FF4206',
          },
          bg: {
            DEFAULT: '#FFFFFFCC',
            selected: '#FF420633',
          },
        },
        platform: {
          gradient: {
            start: 'rgba(176, 179, 183, 0.4)',
            end: 'rgba(176, 179, 183, 0)',
          }
        },
      },
    },
  },
  plugins: [],
}
