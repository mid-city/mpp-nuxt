<template>
  <div>
    <Hero :show-greeting="true" :greeting-name="name" />
    <LazyJeffLetter />
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_id == $id][0].name`
export default {
  layout: 'landing',
  data() {
    return {
      name: '',
    }
  },
  async fetch() {
    const result = await this.$sanity.fetch(query, { id: this.$route.params.id })
    this.name = result
  },
  head() {
    return {
      title: `Mid-City MPP 2021 - ${this.name}`,
    }
  },
}
</script>
