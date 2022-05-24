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
      'medium': '1200px',
      'max-medium': {
        max: '1199px'
      },
      'desktop': '1280px',
      'large': '1440px',
      'extra_large': '1920px',
    },
    maxWidth: {
      'container-desktop': '1600px',
      'container-desktop-enlarged': '1920px',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        appear: 'appearing 0.5s ease-in-out',
        disappear: 'disappearing 0.5s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '100%': {
            opacity: 1,
          },
          '0%': {
            opacity: 0,
          },
        },
        appearing: {
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
          '0%': {
            transform: 'scale(0.5)',
            opacity: 0,
          }
        },
        disappearing: {
          '100%': {
            transform: 'scale(0.5)',
            opacity: 0,
          },
          '0%': {
            transform: 'scale(1)',
            opacity: 1,
          }
        }
      }),
      fontSize: {
        'tiny': '10px',
        'base': ['15px', '1.4rem'],
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
      },
      borderColor: {
        'dark-black-70': '#373D57',
        'light-turquoise': '#41CADD',
        'lite': '#444B66',
        'footer': '#fff3',
        'purple': '#8D64FF',
      },
      boxShadow: {
        'hidden': 'initial',
        'btn': '0px 8px 20px 0px rgba(19, 22, 36, 0.24)',
        'hover-post': '0px 28px 32px -14px rgba(9, 11, 20, .5)',
        'hot-post': '0px 44px 48px -24px rgba(9, 11, 20, 0.3)',
      },
      lineHeight: {
        'tag': '1.2',
        'input': '1.375rem',
      },
      colors: {
        'light-blue': '#22273C',
        'dark-black-70': '#373D57',
        'dark-black-100': '#15192C',
        'blue-dark': '#090979',
        'purple': '#8D64FF',
        'purple-dark': '#15192C',
        'purple-bright': '#7950ED',
        'purple-light': '#2C3249',
        'purple-bright-hover': '#AA8BFF',
        'pink': '#F85B6E',
        'turquoise': '#48D4E9',
        'secondary-turquoise': '#53DBEE',
        'gray': '#A3A8B8',
        'light-gray': '#DFE2EA',
        'error-red': '#CC2C3F',
        'light-turquoise': '#41CADD',
      },
      aspectRatio: {
        'thumbnail': '238 / 125',
        'thumbnail-normal': '328 / 200',
        'thumbnail-hero': '881 / 400',
        'hot': '62 / 35',
        'hot-normal': '164 / 125',
      },
      textDecorationThickness: {
        3: '3px',
      },
      backgroundImage: ({
        'radial-gradient': 'radial-gradient(circle, transparent 0%, transparent 30%, rgba(9,9,121,0.1) 30%, rgba(9,9,121,0.1) 70%, rgba(118,79,229,0) 70%)',
        'form-pattern-1-mobile': "url('/images/decor_1_mobile.svg')",
        'form-pattern-1-desktop': "url('/images/decor_1_desktop.svg')",
        'form-pattern-2-mobile': "url('/images/decor_2_mobile.svg')",
        'form-pattern-2-desktop': "url('/images/decor_2_desktop.svg')",
        'noise': "url('/images/noise.png')",
      })
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
