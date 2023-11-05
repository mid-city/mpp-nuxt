<template>
  <div class="mb-6">
    <div class="flex justify-center mb-10">
      <Greeting :name="vendor.name" />
    </div>

    <h2 class="pageHeading">Get Started</h2>

    <div class="grid lg:grid-cols-10 lg:gap-6 xl:gap-8 my-4">
      <!-- Wrapper for table + text -->
      <div class="col-span-5 lg:col-span-4">
        <div v-if="isRep">
          <RepNumbers :vend="vendor" />
          <SanityContent :blocks="content.bodyRep" class="prose my-4" />
        </div>
        <div v-if="isMfg">
          <MfgNumbers :vend="vendor" />
          <SanityContent :blocks="content.bodyVend" class="prose my-4" />
        </div>
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
  "content": *[_type == 'getStarted'] | order(version desc) { bodyVend, bodyRep }[0]
}`
export default {
  async asyncData({ $sanity, route }) {
    return await $sanity.fetch(query, { id: route.params.id })
  },
  computed: {
    isRep() {
      return this.vendor._type === 'Rep' ? true : false
    },
    isMfg() {
      return this.vendor._type === 'Manufacturer' ? true : false
    },
  },
  head() {
    return {
      title: `Get Started - ${this.vendor.name}`,
    }
  },
}
</script>
<style scoped>
.prose a {
  display: inline-block;
}
</style>
