module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dmmono': ['dm_mono']
    },
    maxWidth: {
      'container': '1600px'
    },
    extend: {
      margin: {
        'container': '0 auto'
      },
      padding: {
        'container': '0 56px'
      },
      colors: {
        'light-blue': '#22273C',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
