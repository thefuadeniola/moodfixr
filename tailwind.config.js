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
          100: "5ACCCC",
          200: "#3988C8",

        },
        grey: "#747A88",
        gradient: "#C4E271"
      },
      backgroundImage: {
        'hero-bg': "url('/assets/bg.jpg')",
        'pattern': "url('/pattern.png')",
      }

    },
  },
  plugins: [],
}
// #5DC5DE