/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1360px',
    },
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-gradient-radial': {
          'background-image': 'radial-gradient(circle, var(--tw-gradient-stops))',
        },
        '.text-test-our': {
          'font-family': 'Cairo, sans-serif',
          'font-weight': '600',
          'font-size': '32px',
          'line-height': '100%',
          'letter-spacing': '0%',
          'text-align': 'center',
          'text-transform': 'uppercase',
          '@media (min-width: 640px)': {
            'font-size': '48px',
          },
          '@media (min-width: 768px)': {
            'font-size': '64px',
          },
          '@media (min-width: 1024px)': {
            'font-size': '80px',
          },
          '@media (min-width: 1280px)': {
            'font-size': '100px',
          },
        },
        '.text-ai-assistant': {
          'font-family': 'Cairo, sans-serif',
          'font-weight': '700',
          'font-size': '32px',
          'line-height': '100%',
          'letter-spacing': '0%',
          'text-align': 'center',
          'text-transform': 'uppercase',
          '@media (min-width: 640px)': {
            'font-size': '48px',
          },
          '@media (min-width: 768px)': {
            'font-size': '64px',
          },
          '@media (min-width: 1024px)': {
            'font-size': '80px',
          },
          '@media (min-width: 1280px)': {
            'font-size': '100px',
          },
        },
        '.chat-widget-banner': {
          'background-color': '#FF42060F',
          'width': '100%',
          'max-width': '459px',
          'height': 'auto',
          'min-height': '40px',
          'border-radius': '68px',
          'padding': '12px 16px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'font-family': 'Cairo, sans-serif',
          'font-weight': '700',
          'font-size': '12px',
          'color': '#FF4206',
          'text-align': 'center',
          'text-transform': 'uppercase',
          'letter-spacing': '0.5px',
          'margin': '0 auto',
          'opacity': '1',
          'gap': '10px',
          '@media (min-width: 640px)': {
            'font-size': '14px',
          },
          '@media (min-width: 768px)': {
            'font-size': '16px',
          },
        },
        '.subtitle-text': {
          'font-family': 'Inter, sans-serif',
          'font-weight': '300',
          'font-size': '16px',
          'line-height': '150%',
          'letter-spacing': '0%',
          'text-align': 'center',
          '@media (min-width: 640px)': {
            'font-size': '18px',
          },
          '@media (min-width: 768px)': {
            'font-size': '20px',
          },
          '@media (min-width: 1024px)': {
            'font-size': '24px',
          },
        },
      })
    },
  ],
}
