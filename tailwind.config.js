/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Dodaj ścieżki do plików, w których używasz klas Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // własny kolor główny
        secondary: '#9333EA',// własny kolor dodatkowy
        dark: {
          100: '#1a1a1a',
          200: '#141414',
        },
        navy: {
          DEFAULT: '#0a192f',
        },
        lightNavy: '#112240',
        lightestNavy: '#233554',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fancy: ['"Dancing Script"', 'cursive'],
        calibre: ['"Calibre-Medium"', 'sans-serif'], // dodana czcionka Calibre
        mono: ['"SFMono-Medium"', 'monospace'], // dodana czcionka SFMono
      },
    },
  },
  plugins: [],
};