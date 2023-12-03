/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF', // Purple
        secondary: '#F8F9FA', // Light gray
        accent: '#FFA500', // Orange
        background: '#FFFFFF', // White
        text: '#333333', // Dark gray text
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem', 
        base: '1rem', 
        lg: '1.125rem', 
        xl: '1.25rem', 
        '2xl': '1.5rem', 
        '3xl': '1.875rem', 
        '4xl': '2.25rem', 
        '5xl': '3rem', 
      },
      lineHeight: {
        snug: 1.2,
        normal: 1.5,
        relaxed: 1.75,
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
}
