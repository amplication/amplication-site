module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dmmono': ['dm_mono']
    },
    screens: {
      'tablet': '640px',
      'laptop': '992px',
      'desktop': '1280px',
      'extra_large': '1920px',
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
