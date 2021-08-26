// Must generate dynamic routes
// Query Sanity for list of Vendor IDs, generate paths based on response.
// Set sanity options in one place, for use in nuxt config and dynamicRoutes
const sanityClient = require('@sanity/client')
const sanityOpts = {
  projectId: 'hxed9pbn',
  dataset: 'prod',
  token:
    'skXdaQLTMgIqJElbOVXo3Ox8BuIsseBlgL40cnuEfWIckicqHT41Zh1C8jvwvgIWKN5P0lAo0SOlKmoyTZOoPDsEhmYw891H0AJ75dUiU7rHefQO0RfSc5iJq3bhFekOODUynCyU2a9jqHgSJs6npBYCLVcw4NcSZoUKKFJpCQfdlyZwX691',
  useCdn: false,
}
const sanity = sanityClient(sanityOpts)

// generates array of dynamic routes for generate.routes
let dynamicRoutes = () => {
  return sanity.fetch('*[]._id').then((res) => {
    return res.flatMap((id) => [`/${id}`, `/${id}/details`, `/${id}/go`])
  })
}

// rest of config
export default {
  target: 'static',
  components: true,
  modules: ['@nuxtjs/axios'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/fontawesome', '@nuxtjs/sanity'],
  plugins: ['~/plugins/vue-gtag.js'],
  css: ['~/assets/css/main.css'],
  head: {
    title: 'Mid-City MPP 2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  generate: {
    routes: dynamicRoutes,
  },

  sanity: { minimal: true, ...sanityOpts },
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
