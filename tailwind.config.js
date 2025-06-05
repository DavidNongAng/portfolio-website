// tailwind.config.js (rename from .ts to .js)
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#134074',
          secondary: '#13315C',
          tertiary: '#0B2545',
          accent: '#8DA9C4',
          light: '#EEF4ED',
        },
      },
    },
    plugins: [],
  }