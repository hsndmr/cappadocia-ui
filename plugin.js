const plugin = require('tailwindcss/plugin');

module.exports = plugin(function () {}, {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '0.5lg': ['1.0625rem', '1.375rem'],
      },
      borderRadius: {
        '1.5xl': '.875rem',
      },
      colors: {
        gray: {
          50: '#fdfdfd',
          100: '#F2F2F7',
          200: '#D1D1D6',
          300: '#C7C7CC',
          400: '#BCBCC0',
          500: '#AEAEB2',
          600: '#8E8E93',
          700: '#636366',
          800: '#48484A',
          900: '#3A3A3C',
          950: '#1C1C1E',
          dark: '#2C2C2E',
          light: '#F2F2F7',
          DEFAULT: '#8E8E93',
        },
        primary: {
          50: '#edfaff',
          100: '#d6f2ff',
          200: '#b5eaff',
          300: '#83dfff',
          400: '#48cbff',
          500: '#1eacff',
          600: '#068eff',
          700: '#007aff',
          800: '#085dc5',
          900: '#0d519b',
          950: '#0e315d',
          light: '#1eacff',
          dark: '#0d519b',
          DEFAULT: '#007aff',
        },
      },
    },
  },
});
