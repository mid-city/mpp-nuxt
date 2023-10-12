const sanityClient = require('@sanity/client')
const sanityOpts = {
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-10-11',
  useCdn: false,
}
const sanity = sanityClient({
  token: process.env.SANITY_TOKEN,
  ...sanityOpts,
})

const old_webFontUrl =
  'https://fonts.googleapis.com/css2?family=Andada+Pro:wght@600&family=Convergence&family=Source+Sans+Pro:wght@600&display=swap&text=TRUSANPENCY%26'

const webFontUrl =
  'https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap&text=LONGEVITY'

let dynamicRoutes = () => {
  return sanity
    .fetch('*[_type == "Manufacturer" || _type == "Rep"]._id')
    .then((res) => {
      return res.flatMap((id) => [`/${id}`, `/${id}/details`, `/${id}/go`])
    })
}

export default {
  target: 'static',

  components: true,

  modules: ['@nuxtjs/axios'],

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    '@nuxtjs/sanity/module',
    '@braid/vue-formulate/nuxt',
    '@nuxt/image',
  ],

  plugins: ['~/plugins/vue-gtag.js'],

  css: ['~/assets/css/main.css'],

  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} - Mid-City MPP 2024`
        : 'Mid-City MPP 2024'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],

    link: [
      {
        rel: 'stylesheet',
        href: webFontUrl,
        media: 'print',
        onload: "this.media='all'",
      },
    ],
  },

  generate: {
    routes: dynamicRoutes,
  },

  server: {
    host: 'localhost',
  },

  sanity: sanityOpts,

  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/mid-city/image/upload/',
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseUrl: process.env.BROWSER_BASE_URL,
    },
  },
  privateRuntimeConfig: {
    sanity: {
      token: process.env.SANITY_TOKEN,
    },
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: [
        'faBars',
        'faTimes',
        'faFileAlt',
        'faCalendar',
        'faFileInvoiceDollar',
        'faChevronDown',
      ],
      brands: ['faFacebook', 'faLinkedin', 'faYoutube', 'faInstagram'],
    },
  },
}
