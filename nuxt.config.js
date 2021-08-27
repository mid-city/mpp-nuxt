// Must generate dynamic routes
// Query Sanity for list of Vendor IDs, generate paths based on response.
// Set sanity options in one place, for use in nuxt config and dynamicRoutes
const sanityClient = require('@sanity/client')
const sanityOpts = {
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
}
const sanity = sanityClient({
  token: process.env.SANITY_TOKEN,
  ...sanityOpts,
})

// generates array of dynamic routes for generate.routes
let dynamicRoutes = () => {
  return sanity.fetch('*[]._id').then(res => {
    return res.flatMap(id => [`/${id}`, `/${id}/details`, `/${id}/go`])
  })
}

// rest of config
export default {
  target: 'static',

  components: true,

  modules: ['@nuxtjs/axios'],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/sanity/module',
  ],

  plugins: ['~/plugins/vue-gtag.js'],

  css: ['~/assets/css/main.css'],

  head: {
    title: 'Mid-City MPP 2022',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  generate: {
    routes: dynamicRoutes,
  },

  server: {
    host: '10.34.1.49',
  },

  sanity: sanityOpts,

  privateRuntimeConfig: {
    sanity: {
      token: process.env.SANITY_TOKEN,
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
