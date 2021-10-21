<template>
  <div
    class="
      container
      mx-auto
      grid grid-cols-1
      text-sm
      md:text-base
      mb-6
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <Greeting :name="vendor.name" class="text-brand-dark py-4" />
    <h2 class="pageHeading">Plan Details</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        class="downloads lg:hidden sm:flex sm:justify-around sm:items-center"
      >
        <div class="mb-4 sm:mb-0 px-8 sm:px-0">
          <p class="text-lg text-brand-normal my-2 ml-1 font-bold">Downloads</p>

          <a
            v-for="link in content.downloads"
            :key="link._key"
            :href="link.fileUrl"
            target="_blank"
            rel="noopener"
            class="hover:underline focus:underline"
          >
            <FaIcon :icon="['fas', link.icon]" class="fa-fw fa-2x" />
            {{ link.title }}
          </a>
        </div>
        <CtaBtn :url="pathPrefix + 'go'" class="flex-none hidden sm:block" />
      </div>
      <CtaBtn :url="pathPrefix + 'go'" class="sm:hidden" />
      <SanityContent :blocks="content.body" class="prose max-w-none" />

      <div>
        <div
          class="
            downloads
            hidden
            lg:flex
            font-bold
            py-4
            items-center
            justify-evenly
            flex-auto
          "
        >
          <div>
            <p class="text-lg text-brand-normal my-2 ml-1">Downloads</p>
            <a
              v-for="link in content.downloads"
              :key="link._key"
              :href="link.fileUrl"
              target="_blank"
              rel="noopener"
              class="hover:underline focus:underline"
            >
              <FaIcon :icon="['fas', link.icon]" class="fa-fw fa-2x" />
              {{ link.title }}
            </a>
          </div>
          <CtaBtn :url="pathPrefix + 'go'" />
        </div>

        <video controls class="w-full mx-auto my-4">
          <source :src="content.videoUrlMp4" type="video/mp4" />
          <source :src="content.videoUrlWebm" type="video/webm" />
        </video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.downloads {
  @apply bg-gray-200;
  @apply rounded;
  @apply px-8;
  @apply border-2;
  @apply border-gray-200;
}
.downloads a {
  @apply flex;
  @apply text-gray-700;
  @apply items-center;
  @apply my-4;
}
.downloads svg {
  @apply mr-4;
}
</style>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`{
	"vendor": *[_id == $id][0] | { name },
	"content": *[_type == 'details'][0] | { body, downloads, videoUrlMp4, videoUrlWebm }
}`
export default {
  computed: {
    pathPrefix() {
      if (this.$route.params.id) {
        return `/${this.$route.params.id}/`
      } else {
        return '/'
      }
    },
  },
  async asyncData({ $sanity, route }) {
    return await $sanity.fetch(query, { id: route.params.id })
  },
  head() {
    return {
      title: `Plan Details - ${this.vendor.name}`,
    }
  },
}
</script>
