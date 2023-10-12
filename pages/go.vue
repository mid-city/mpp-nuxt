<template>
  <div class="mb-6">
    <h2 class="pageHeading">Get Started</h2>
    <SanityContent :blocks="content.body" class="prose" />
  </div>
</template>
<script>
import { groq } from '@nuxtjs/sanity'

const contentQuery = groq`{ 
  "content": *[_type == 'getStarted'] | order(version desc) { body }[0] 
}`

export default {
  async asyncData({ $sanity }) {
    return await $sanity.fetch(contentQuery)
  },

  head() {
    return {
      title: 'Get Started',
    }
  },
}
</script>
