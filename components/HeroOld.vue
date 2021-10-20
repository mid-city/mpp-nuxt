<template>
  <div class="relative bg-gray-100 overflow-hidden">
    <div class="max-w-screen-2xl mx-auto bg-gray-300">
      <div
        class="
          relative
          z-10
          pb-8
          bg-white
          sm:pb-16
          md:pb-20
          lg:max-w-2xl
          lg:w-full
          lg:pb-28
          xl:pb-32
        "
      >
        <HeroHeader />

        <main
          class="
            mt-10
            mx-auto
            max-w-screen-xl
            px-4
            sm:mt-12
            sm:px-6
            md:mt-16
            lg:mt-20
            lg:px-8
            xl:mt-28
          "
        >
          <Greeting v-if="showGreeting" :name="greetingName" />
          <div class="sm:text-center lg:text-left">
            <h2
              class="
                text-4xl
                tracking-tight
                leading-10
                font-extrabold
                text-gray-900
                sm:text-5xl
                sm:leading-none
                md:text-6xl
              "
            >
              2022 Marketing Partnership Plan
            </h2>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <NuxtLink
                  :to="pathPrefix + 'go'"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-white
                    bg-brand-normal
                    hover:bg-brand-light
                    focus:outline-none
                    focus:border-brand-dark
                    focus:shadow-outline-indigo
                    transition
                    duration-150
                    ease-in-out
                    md:py-4
                    md:text-lg
                    md:px-10
                  "
                >
                  Get started
                </NuxtLink>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <NuxtLink
                  :to="pathPrefix + 'details'"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-brand-normal
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-brand-dark
                    bg-gray-100
                    hover:text-brand-normal
                    hover:bg-indigo-50
                    focus:outline-none
                    focus:shadow-outline-indigo
                    focus:border-indigo-300
                    transition
                    duration-150
                    ease-in-out
                    md:py-4
                    md:text-lg
                    md:px-10
                  "
                >
                  Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </main>
        <!--
        <div
          class="w-full text-center mt-6 text-brand-normal lg:relative lg:top-8"
        >
          <FaIcon :icon="['fas', 'chevron-down']" class="fa-fw" />
          <a href="#note-from-jeff" class="underline">
            Read Jeff's Introduction</a
          >
          <FaIcon :icon="['fas', 'chevron-down']" class="fa-fw" />
        </div> -->
      </div>
    </div>
    <TrustTransparencyText
      class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
    />
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
