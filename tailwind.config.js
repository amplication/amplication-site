module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      dmmono: ['DM Mono'],
      poppins: ['poppins'],
      ubuntumono: ['Ubuntu Mono'],
      jetbrains: ['JetBrains Mono']
    },
    screens: {
      tablet: '640px',
      'max-tablet': {
        max: '639px',
      },
      laptop: '992px',
      'max-laptop': {
        max: '991px',
      },
      middle: '1080px',
      medium: '1200px',
      'max-medium': {
        max: '1199px',
      },
      desktop: '1280px',
      large: '1440px',
      xlg: '1920px',
    },
    maxWidth: {
      'container-desktop': '1712px',
      'container-desktop-blog': '1366px',
      'container-desktop-enlarged': '1920px',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        appear: 'appearing 0.5s ease-in-out',
        disappear: 'disappearing 0.5s ease-in-out',
      },
      keyframes: () => ({
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
          },
        },
        disappearing: {
          '100%': {
            transform: 'scale(0.5)',
            opacity: 0,
          },
          '0%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      }),
      fontSize: {
        tiny: '10px',
        base: ['15px', '1.4rem'],
        "4xl": ['2.25rem', '1.3'],
        "5xl": ['3rem', '1.2'],
      },
      gap: {
        7.5: '1.875rem',
      },
      margin: {
        'container-desktop': '0 auto',
      },
      padding: {
        container: '0 15px',
        'container-desktop': '0 56px',
        'container-desktop-enlarged': '0 34px',
        'container-desktop-smaller': '0 128px',
      },
      borderColor: {
        'dark-black-70': '#373D57',
        'light-turquoise': '#41CADD',
        lite: '#444B66',
        footer: '#fff3',
        purple: '#8D64FF',
        'purple-bright': '#7950ED',
        'purple-bright-hover': '#AA8BFF',

      },
      borderWidth: {
        3: '3px',
        1: '1px',
      },
      boxShadow: {
        hidden: 'initial',
        radio: '0 20px 26px -16px rgb(21 25 44 / 84%)',
        btn: '0px 8px 20px 0px rgba(19, 22, 36, 0.24)',
        'hover-post': '0px 28px 32px -14px rgba(9, 11, 20, .5)',
        'hot-post': '0px 44px 48px -24px rgba(9, 11, 20, 0.3)',
        'hover-card': '0px 24px 26px -16px rgba(21, 25, 44, 0.75)'

      },
      lineHeight: {
        tag: '1.2',
        input: '1.375rem',
      },
      colors: {
        'light-blue': '#22273C',
        'dark-black-70': '#373D57',
        'dark-black-70': '#444B66',
        'dark-black-surface': '#1F2336',
        'dark-black-100': '#15192C',
        'blue-dark': '#090979',
        purple: '#8D64FF',
        'purple-dark': '#15192C',
        'purple-bright': '#7950ED',
        'purple-light': '#2C3249',
        'purple-bright-hover': '#AA8BFF',
        pink: '#F85B6E',
        turquoise: '#48D4E9',
        'secondary-turquoise': '#53DBEE',
        gray: '#A3A8B8',
        'light-gray': '#DFE2EA',
        'error-red': '#f85b6e',
        'light-turquoise': '#41CADD',
        'light': '#f4f4f7',
      },
      aspectRatio: {
        thumbnail: '238 / 125',
        'thumbnail-normal': '328 / 200',
        'thumbnail-hero': '881 / 400',
        hot: '62 / 35',
        'hot-normal': '164 / 125',
      },
      textDecorationThickness: {
        3: '3px',
      },
      backgroundSize: {
        grid: '25px 25px',
        "80%": "80%",
        "reward-mobile": "1500px"
      },
      backgroundPosition: {
        "reward-mobile": "-850px"
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(circle, transparent 0%, transparent 30%, rgba(9,9,121,0.1) 30%, rgba(9,9,121,0.1) 70%, rgba(118,79,229,0) 70%)',
        'form-pattern-1-mobile': "url('/images/decor_1_mobile.svg')",
        'form-pattern-1-desktop': "url('/images/decor_1_desktop.svg')",
        'form-pattern-2-mobile': "url('/images/decor_2_mobile.svg')",
        'form-pattern-2-desktop': "url('/images/decor_2_desktop.svg')",
        'cta-1': "url('/images/bg/cta-bg-1.png')",
        'cta-2': "url('/images/bg/cta-bg-2.png')",
        'cta-1-small': "url('/images/bg/cta-bg-1-small.png')",
        'cta-2-small': "url('/images/bg/cta-bg-2-small.png')",
        noise: "url('/images/noise.png')",
        quote: "url('/images/bg/quotes.svg')",
        grid: 'linear-gradient(to right, #22273C 1px, transparent 1px), linear-gradient(to bottom, #22273C 1px, transparent 1px);',
        'reward-success': "url('/images/hacktoberfest/reward-success.svg')",
        'app-modernization': "url('/images/bg/bg-app-modernization.jpg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
