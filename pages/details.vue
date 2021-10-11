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
    <h2 class="pageHeading">Plan Details</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        class="downloads lg:hidden sm:flex sm:justify-around sm:items-center"
      >
        <div class="mb-4 sm:mb-0 px-8 sm:px-0">
          <p class="text-lg text-brand-normal my-2 ml-1 font-bold">Downloads</p>
          <a
            :href="docs.calendar"
            class="hover:underline focus:underline"
            target="_blank"
            rel="noopener"
            ><fa-icon
              :icon="['fas', 'calendar']"
              class="fa-fw fa-2x"
            />Marketing Calendar</a
          >
          <a
            :href="docs.programs"
            class="hover:underline focus:underline"
            target="_blank"
            rel="noopener"
            ><fa-icon :icon="['fas', 'file-alt']" class="fa-fw fa-2x" />Program
            Listing</a
          >
          <a
            :href="docs.expenses"
            class="hover:underline focus:underline"
            target="_blank"
            rel="noopener"
            ><fa-icon
              :icon="['fas', 'file-invoice-dollar']"
              class="fa-fw fa-2x"
            />Expenses</a
          >
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
              :href="docs.calendar"
              class="hover:underline focus:underline"
              target="_blank"
              rel="noopener"
              ><fa-icon
                :icon="['fas', 'calendar']"
                class="fa-fw fa-2x"
              />Marketing Calendar</a
            >
            <a
              :href="docs.programs"
              class="hover:underline focus:underline"
              target="_blank"
              rel="noopener"
              ><fa-icon
                :icon="['fas', 'file-alt']"
                class="fa-fw fa-2x"
              />Program Listing</a
            >
            <a
              :href="docs.expenses"
              class="hover:underline focus:underline"
              target="_blank"
              rel="noopener"
              ><fa-icon
                :icon="['fas', 'file-invoice-dollar']"
                class="fa-fw fa-2x"
              />Expenses</a
            >
          </div>
          <CtaBtn :url="pathPrefix + 'go'" />
        </div>

        <video controls class="w-full mx-auto my-4">
          <source
            src="https://res.cloudinary.com/mid-city/video/upload/v1630075672/MPP/promo_lji0ev.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/mid-city/video/upload/v1630075673/MPP/promo_wrw2cu.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.downloads {
  @apply bg-gray-200;
  @apply rounded-md;
  /* @apply px-8; */
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
const contentQuery = groq`{"content": *[_type == 'details'][0] | { body, downloads }}`
export default {
  data() {
    return {
      docs: {
        calendar:
          'https://res.cloudinary.com/mid-city/image/upload/v1603397967/MPP/2021_Marketing_Calendar_l6yubb.pdf',
        programs:
          'https://res.cloudinary.com/mid-city/image/upload/v1603397969/MPP/2021_MPP_Manuf_Programs_sxtdxa.pdf',
        expenses:
          'https://res.cloudinary.com/mid-city/image/upload/v1603397962/MPP/2021_Marketing_Expenses_o2vrog.pdf',
      },
    }
  },
  async asyncData({ $sanity }) {
    return await $sanity.fetch(contentQuery)
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
  head() {
    return {
      title: 'Plan Details',
    }
  },
}
</script>
