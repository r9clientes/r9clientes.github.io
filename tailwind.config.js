/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f4efe4',
        parchment: '#e9e1cf',
        card: '#fffdf7',
        ink: '#211b13',
        smoke: '#6c6357',
        line: '#ddd2bc',
        ember: '#d9481c',
        emberdeep: '#b23611',
        moss: '#5b7f2a',
        gold: '#9a6206',
        brick: '#b3261e',
        night: '#211b13',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        hard: '5px 5px 0 0 #211b13',
        'hard-sm': '3px 3px 0 0 #211b13',
        'hard-lg': '8px 8px 0 0 #211b13',
      },
    },
  },
  plugins: [],
}
