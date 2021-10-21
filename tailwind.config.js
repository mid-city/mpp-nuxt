module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
  },
  // purge: {
  //   mode: 'all',
  // },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    backgroundColor: ['hover', 'focus'],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-image':
          "url('https://res.cloudinary.com/mid-city/image/upload/f_auto,q_auto/v1634066095/MPP/AdobeStock_192180956_t9gj61.jpg')",
      },
      colors: {
        brand: {
          normal: '#C1262E',
          light: '#CF2932',
          lightest: '#E6BCBE',
          dark: '#A82228',
          darkest: '#821A1F',
        },
      },
      inset: {
        '-1': '-0.25rem',
        '-44': '-11rem',
      },
    },
  },
}
