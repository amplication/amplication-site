module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dmmono': ['dm_mono'],
      'poppins': ['poppins'],
      'ubuntumono': ['ubuntu_mono'],
    },
    screens: {
      'tablet': '640px',
      'laptop': '992px',
      'desktop': '1280px',
      'extra_large': '1920px',
    },
    maxWidth: {
      'container-desktop': '1600px',
      'container-desktop-enlarged': '1920px',
    },
    extend: {
      fontSize: {
        'tiny': '10px',
        'base': '15px',
      },
      gap: {
        '7.5': '1.875rem',
      },
      margin: {
        'container-desktop': '0 auto'
      },
      padding: {
        'container': '0 15px',
        'container-desktop': '0 56px',
        'container-desktop-enlarged': '0 34px',
        'card': '0 0 61px 0',
      },
      borderColor: {
        'light-turquoise': '#41CADD',
        'lite': '#444B66',
      },
      lineHeight: {
        'tag': '1.2',
      },
      colors: {
        'light-blue': '#22273C',
        'blue-dark': '#090979',
        'purple': '#8D64FF',
        'purple-dark': '#15192C',
        'purple-light': '#2C3249',
        'turquoise': '#48D4E9',
        'gray': '#A3A8B8',
        'dark-black-100': '#15192C',
        'blue-dark': '#090979',
        'purple': '#8D64FF',
        'purple-dark': '#15192C',
        'purple-bright': '#7950ED',
        'purple-light': '#2C3249',
        'pink': '#F85B6E',
        'turquoise': '#48D4E9',
        'gray': '#A3A8B8',
      },
      aspectRatio: {
        'thumbnail': '238 / 125',
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