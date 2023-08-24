/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "white": "#FFFFFF",
        "primary-blue": {
          DEFAULT: "#046380",
          100: "#F5F8FF",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'hero-bg': "url('/assets/bg.jpg')",
        'pattern': "url('/pattern.png')",
      }

    },
  },
  plugins: [],
}
