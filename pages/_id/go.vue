<template>
  <div class="container mx-auto px-4">
    <Greeting :name="vend.name" class="py-4" />
    <h2 class="pageHeading">Get Started</h2>

    <div class="grid lg:grid-cols-10 lg:gap-6 xl:gap-8 my-4">
      <!-- Wrapper for table + text -->
      <div class="col-span-5 lg:col-span-4">
        <RepNumbers :vend="vend" v-if="vend._type === 'Rep'" />
        <MfgNumbers :vend="vend" v-if="vend._type === 'Manufacturer'" />
      </div>
      <div class="border-brand-dark border-2 rounded col-span-5 lg:col-span-6">
        <ResponseForm :vendId="vend._id" :vendName="vend.name" />
      </div>
    </div>
  </div>
</template>

<script>
// for sanity fetch
import { groq } from '@nuxtjs/sanity'
export default {
  data() {
    return {
      vend: {},
    }
  },
  async fetch() {
    const query = groq`*[_id == $id][0]`
    const result = await this.$sanity.fetch(query, { id: this.$route.params.id })
    this.vend = result
  },
  head() {
    return {
      title: `Get Started | Mid-City MPP 2021 - ${this.vend.name}`,
    }
  },
}
</script>
