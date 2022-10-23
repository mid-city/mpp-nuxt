<template>
  <div>
    <Hero :show-greeting="true" :greeting-name="vendor.name" />
    <div
      class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-1"
      id="note-from-jeff"
    >
      <div class="relative">
        <article class="prose mx-auto md:ml-44 md:mr-0 px-4 my-16">
          <NuxtImg
            :src="content.portraitPubId"
            width="768"
            height="768"
            fit="thumbnail"
            sizes="xl:320px"
            alt="Jeff New"
            :modifiers="{ gravity: 'face', zoom: 0.85 }"
            class="
              block
              w-40
              h-40
              md:absolute
              md:-inset-y-1 md:-inset-x-1
              mx-auto
              md:m-0
              rounded-full
            "
          />
          <SanityContent :blocks="content.body" />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`{ 
	"vendor": *[_id == $id][0] | { name },
  "content": *[_type == 'landing'] | order(version desc) { body, portraitPubId }[0] 
}`
export default {
  layout: 'landing',
  async asyncData({ $sanity, route }) {
    return await $sanity.fetch(query, { id: route.params.id })
  },
  head() {
    return {
      title: `${this.vendor.name}`,
    }
  },
}
</script>
