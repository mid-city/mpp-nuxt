<template>
  <div class="container bg-hero-image bg-cover bg-top">
    <SiteHeader />
    <div class="h-96"></div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    showGreeting: {
      type: Boolean,
      required: true,
    },
    greetingName: {
      type: String,
      required: false,
    },
  },
  computed: {
    pathPrefix() {
      if (this.$route.params.id) {
        return `/${this.$route.params.id}/`
      } else {
        return '/'
      }
    },
  },
}
</script>
