module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
  },
  // purge: {
  //   mode: 'all',
  // },
  plugins: [require("@tailwindcss/typography")],
  variants: {
    backgroundColor: ["hover", "focus"],
  },
  theme: {
    extend: {
      colors: {
        brand: {
          normal: "#C1262E",
          light: "#CF2932",
          lightest: "#E6BCBE",
          dark: "#A82228",
          darkest: "#821A1F",
        },
      },
      fontSize: {
        "7xl": "6rem",
      },
      inset: {
        "-1": "-0.25rem",
        "-44": "-11rem",
      },
    },
  },
};
