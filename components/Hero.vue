<template>
  <div class="relative bg-stuff">
    <div class="container">
      <div
        class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <HeroHeader />
        <main
          class="pt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 relative"
        >
          <div class="sm:text-center lg:text-left">
            <Greeting
              v-if="showGreeting"
              :name="greetingName"
              class="text-gray-200 absolute top-2 lg:top-4 xl:top-6 w-full lg:w-auto"
            />
            <h2
              class="lg:relative lg:-top-8 xl:-top-10 hero-text text-4xl leading-10 tracking-tight sm:tracking-normal font-extrabold text-gray-200 sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl h-20 sm:h-auto"
            >
              2023 Marketing Partnership Plan
            </h2>
            <Slogan class="lg:hidden" />
            <div
              class="relative mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <NuxtLink
                  :to="pathPrefix + 'go'"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-100 bg-brand-normal hover:bg-brand-light focus:outline-none focus:border-brand-dark focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </NuxtLink>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <NuxtLink
                  :to="pathPrefix + 'details'"
                  class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base leading-6 font-medium rounded-md text-gray-700 bg-gray-300 hover:text-brand-normal hover:bg-gray-100 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Slogan
      class="hidden lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
    />
  </div>
</template>

<script>
import Slogan from './Slogan.vue'

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
  components: { Slogan },
}
</script>
<style scoped>
.bg-stuff {
  background-color: #afafaf;
  background-image: linear-gradient(
      to bottom,
      rgba(10, 0, 0, 0.8),
      transparent 25%,
      transparent
    ),
    url('https://res.cloudinary.com/brycemco/image/upload/a_hflip/q_auto/f_auto/c_crop,g_center,h_0.50,w_0.70/e_sepia/e_saturation:-25/e_brightness:-15/temp/mid-city/mpp_2023_bg');
  background-size: 80rem;
  background-position-x: 70%;
  background-position-y: 50%;
}
@media (min-width: 640px) {
  .bg-stuff {
    background-size: 100rem;
  }
}
@media (min-width: 768px) {
  .bg-stuff {
    background-position-y: top;
  }
}
@media (min-width: 1024px) {
  .bg-stuff {
    background-size: 80rem;
    background-position-y: 40%;
  }
}
@media (min-width: 1536px) {
  .bg-stuff {
    background-size: cover;
    background-position-y: center;
  }
}
@media (min-width: 2170px) {
}
</style>
