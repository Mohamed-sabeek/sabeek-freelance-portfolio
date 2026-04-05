/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f7f6f5',
          100: '#ebe9e6',
          200: '#cec9c2',
          300: '#b1a99e',
          400: '#776956',
          500: '#3d2a0e',
          600: '#37260d',
          700: '#2e1f0b',
          800: '#251909',
          900: '#1e1407',
          950: '#110c04',
        },
        accent: {
          gold: '#c5a059',
          bronze: '#8c6239',
          cream: '#fdfcf0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, #3d2a0e 0%, #776956 50%, #3d2a0e 100%)',
      }
    },
  },
  plugins: [],
}
