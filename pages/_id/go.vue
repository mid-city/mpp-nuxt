<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <Greeting :name="vendor.name" class="text-brand-dark py-4" />
    <h2 class="pageHeading">Get Started</h2>

    <div class="grid lg:grid-cols-10 lg:gap-6 xl:gap-8 my-4">
      <!-- Wrapper for table + text -->
      <div class="col-span-5 lg:col-span-4">
        <RepNumbers :vend="vendor" v-if="vendor._type === 'Rep'" />
        <MfgNumbers :vend="vendor" v-if="vendor._type === 'Manufacturer'" />
        <SanityContent :blocks="content.bodyVend" class="prose my-4" />
      </div>
      <div class="border-brand-dark border-2 rounded col-span-5 lg:col-span-6">
        <ResponseForm :vendId="vendor._id" :vendName="vendor.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`{ 
	"vendor": *[_id == $id][0],
  "content": *[_type == 'getStarted'][0] | { bodyVend }
}`
export default {
  async asyncData({ $sanity, route }) {
    return await $sanity.fetch(query, { id: route.params.id })
  },
  head() {
    return {
      title: `Get Started - ${this.vendor.name}`,
    }
  },
}
</script>
