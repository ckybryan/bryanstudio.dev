/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF7',
        'paper-2': '#F1F1EC',
        rule: '#E4E4DE',
        ink: '#0E0F12',
        muted: '#6B6B66',
        accent: '#2A6F5A',
        petcrew: '#7C4DFF',
        snapsell: '#21A593',
        candlepost: '#4A7A3D',
        'candlepost-clay': '#C05C39',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
