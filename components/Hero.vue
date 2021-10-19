<template>
  <div class="wrapper bg-hero-image bg-top">
    <SiteHeader />
    <div class="container flex flex-row justify-end">
      <div
        class="
          h-72
          flex flex-col
          items-center
          justify-between
          text-6xl
          uppercase
          mb-10
          mr-10
        "
      >
        <span class="trust text-8xl">Trust</span>
        <span class="and text-white">&amp;</span>
        <span class="transparency text-white">Transparency</span>
      </div>
    </div>
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
<style scoped>
.wrapper {
  background-size: 140rem;
}
.trust {
  font-family: 'Andada Pro', serif;
}
.and {
  font-family: 'Convergence', sans-serif;
}
.transparency {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
