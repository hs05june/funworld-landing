/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-primary': 'linear-gradient(129.13deg, #FFCC00 22.43%, #FD1783 77.57%)'
      }),
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        "spartan":['League Spartan', 'sans-serif'],
      },
      screens:{
        'xs':'480px'
      }
    },

  },
  plugins: [],
}
