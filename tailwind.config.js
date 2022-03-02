module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dmmono': ['dm_mono'],
      'poppins': ['poppins'],
    },
    screens: {
      'tablet': '640px',
      'laptop': '992px',
      'desktop': '1280px',
      'extra_large': '1920px',
    },
    maxWidth: {
      'container-desktop': '1600px'
    },
    extend: {
      margin: {
        'container-desktop': '0 auto'
      },
      padding: {
        'container': '0 15px',
        'container-desktop': '0 56px',
      },
      colors: {
        'light-blue': '#22273C',
        'blue-dark': '#090979',
        'purple': '#8D64FF',
        'purple-dark': '#15192C',
        'purple-light': '#2C3249',
        'turquoise': '#48D4E9',
        'gray': '#A3A8B8',
      },
      backgroundImage: ({
        'radial-gradient': 'radial-gradient(circle, transparent 0%, transparent 30%, rgba(9,9,121,0.1) 30%, rgba(9,9,121,0.1) 70%, rgba(118,79,229,0) 70%)',
      })
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}