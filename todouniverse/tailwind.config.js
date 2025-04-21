/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            night: '#0f0f0f',
            day: '#f0f0f0',
            jet: '#2a2929',
            blackOlive: '#444342',
            jonquil: '#f4d35e',
            selectiveYellow: '#ffb400',
            text_yellow: '#85754d',
            text_white: '#f0f0f0',
            text_gray: '#bababa',
          },
          
          
      },
    },
    plugins: [require('tailwind-scrollbar')],
  }
  