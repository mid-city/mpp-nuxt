<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="mx-auto flex flex-wrap max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex">
          <Logo />
        </div>
        <Greeting
          v-if="showGreeting"
          :name="greetingName"
          class="order-last w-full mt-6 sm:order-none sm:w-auto sm:mt-0"
        />
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
            class="text-sm font-semibold leading-6 text-gray-900"
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
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="relative isolate">
        <!-- <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style="
              clip-path: polygon(
                63.1% 29.5%,
                100% 17.1%,
                76.6% 3%,
                48.4% 0%,
                44.6% 4.7%,
                54.5% 25.3%,
                59.8% 49%,
                55.2% 57.8%,
                44.4% 57.2%,
                27.8% 47.9%,
                35.1% 81.5%,
                0% 97.7%,
                39.2% 100%,
                35.2% 81.4%,
                97.2% 52.8%,
                63.1% 29.5%
              );
            "
          ></div>
        </div> -->
        <div class="overflow-hidden">
          <div
            class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32"
          >
            <div
              class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            >
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1
                  class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                >
                  Marketing Partnership Plan 2024
                </h1>
                <p
                  class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
                >
                  Perhaps something regarding resilliance theme. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    :href="pathPrefix + '/go'"
                    class="rounded-md bg-brand-normal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-normal"
                    >Get started</a
                  >
                  <a
                    :href="pathPrefix + '/details'"
                    class="text-sm font-semibold leading-6 text-gray-900"
                    >Plan Details <span aria-hidden="true">→</span></a
                  >
                </div>
              </div>
              <div
                class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
              >
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                >
                  <div class="relative">
                    <img
                      src="/tree.jpg"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                </div>
                <div
                  class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
                >
                  <div class="relative">
                    <img
                      src="/man_stretching.jpg"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                  <div class="relative">
                    <img
                      src="/flower_desert.jpg"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img
                      src="/lighthouse.jpg"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                  <div class="relative">
                    <img
                      src="/wood_tree.jpg"
                      alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Hero2',

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
