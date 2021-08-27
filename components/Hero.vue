<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-2xl mx-auto">
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
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

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
              <br class="" />
              <span
                class="
                  text-brand-normal
                  uppercase
                  mt-10
                  inline-block
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                "
                >Agility</span
              >
            </h2>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5
                sm:text-lg
                sm:max-w-xl
                sm:mx-auto
                md:mt-5
                md:text-xl
                lg:mx-0
              "
            >
              <strong>Agility a·gil·i·ty</strong>
              <strong>/əˈjilədē/ (noun)</strong>
              The capability to respond to challenges, to explore and change
              direction, to take advantage of opportunities.
            </p>
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
        <div
          class="w-full text-center mt-6 text-brand-normal lg:relative lg:top-8"
        >
          <FaIcon :icon="['fas', 'chevron-down']" class="fa-fw" />
          <a href="#note-from-jeff" class="underline">
            Read Jeff's Introduction</a
          >
          <FaIcon :icon="['fas', 'chevron-down']" class="fa-fw" />
        </div>
      </div>
    </div>
    <LazyHeroImage />
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
