/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '478px',
      // => @media (min-width: 478px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '991px',
      // => @media (min-width: 991px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'full': '100% 100%',
    },
    fontSize: {
      '17px':'17px',
      half: '18px',
      ten: '0.625rem',
      ssc: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      vs: '0.5rem',
      ll: '1.875rem',
      ql: '2.5rem',
      me: '1.375rem',
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        fontWeight: '700',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.5rem',
        fontWeight: '700',
      }],
      '5xl': '3.052rem',
      '7xl':'4.5rem',
    },
    extend: {
      fontFamily: {
        'Archivo': ['Archivo', 'sans-serif'],
      },
      colors: {
        'Mine-orange': '#e74630',
        'light-orange': '#f09340',
        'nowhite': 'hsla(0, 0%, 100%, 0.5)',
        'one': '#e74630',
        'tow':'rgba(41, 39, 39, 0.8)',
        'three':'hsla(0, 0%, 100%, 0.8)',
        'fore':'hsla(0, 0%, 0%, 0.9)',
        'five':'#f09340',
      },
      spacing: {
        '20%': '20%',
        '40%': '40%',
        '51%': '51%',
        '5%': '5%',
        '7%': '7%',
        '3%': '3%',
        '95%':'95%',
        '50%': '50%',
        '90%': '90%',
        '80%': '80%',
        '30%': '30%',
        '10%': '10%',
        '47%':'47%',
      },
      boxShadow: {
        'mine': '1px 1px 63.08px 0 rgb(0 0 0 5%)',
      }
    },
  },
  plugins: [],
}
