/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'root': '15px',
        'sm': '0.875rem',
      },
      colors: {
        'line': '#ddd',
      },
      animation: {
        'grow': 'grow 0.5s ease-in',
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      spacing: {
        'duration': '7.1rem',
        'duration-padding': '0.4rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

