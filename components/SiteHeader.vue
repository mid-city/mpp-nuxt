<template>
  <!-- Modified version of header found in hero component, for use in default layout
-->
  <header class="inset-x-0 top-0 z-50">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 flex-wrap"
      aria-label="Global"
    >
      <div class="flex">
        <Logo />
      </div>
      <h1
        class="font-semibold text-gray-600 order-last sm:order-none w-full sm:w-auto mt-8 sm:m-auto md:text-lg xl:text-xl"
      >
        Marketing Partnership Plan 2024
      </h1>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="font-semibold leading-6 text-brand-normal"
          >{{ item.name }}</a
        >
      </nav>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div
      v-show="mobileMenuOpen"
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-60"></div>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <nav class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-normal hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',

  data() {
    return {
      mobileMenuOpen: false,
    }
  },

  computed: {
    pathPrefix() {
      if (this.$route.params.id) {
        return `/${this.$route.params.id}`
      } else {
        return ''
      }
    },
    navigation() {
      return [
        { name: 'MPP Home', href: this.pathPrefix + '/' },
        { name: 'Plan Details', href: this.pathPrefix + '/details' },
        { name: 'Get Started', href: this.pathPrefix + '/go' },
      ]
    },
  },
}
</script>
