<template>
  <!-- Modified version of header found in hero component, for use in default layout
-->
  <div class="lg:container lg:mx-auto sm:mb-6">
    <div class="relative pt-4 lg:pt-6 px-4 sm:px-6 lg:px-8">
      <nav class="relative flex items-center justify-between">
        <div class="flex items-center flex-grow lg:flex-grow-0">
          <div
            class="flex items-center justify-between w-full lg:w-auto flex-wrap"
          >
            <Logo class="order-1" />
            <NuxtLink
              :to="pathPrefix"
              class="
                mt-2
                md:mt-0
                w-full
                sm:w-auto
                block
                order-last
                sm:order-2
                lg:hidden
                font-bold
                text-lg
                md:text-xl
                text-brand-normal
              "
            >
              <h1 class="py-2">2022 Marketing Partnership Plan</h1>
            </NuxtLink>
            <div class="-mr-2 flex items-center lg:hidden order-3">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  text-gray-400
                  hover:text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:bg-gray-100
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                "
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                @click="openMenu"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <NuxtLink
          to="./"
          class="
            heading
            hidden
            lg:block
            font-bold
            text-sm
            lg:text-lg
            xl:text-xl
            text-brand-normal
          "
        >
          <h1>2022 Marketing Partnership Plan</h1>
        </NuxtLink>
        <div class="hidden lg:block md:ml-10 md:pr-4 md:order-3">
          <NuxtLink
            :to="pathPrefix"
            aria-label="Home"
            class="
              font-medium
              text-gray-500
              hover:text-gray-900
              transition
              duration-150
              ease-in-out
            "
            >MPP Home</NuxtLink
          >
          <NuxtLink
            :to="pathPrefix + 'details'"
            class="
              ml-8
              font-medium
              text-gray-500
              hover:text-gray-900
              transition
              duration-150
              ease-in-out
            "
            >Details</NuxtLink
          >
          <NuxtLink
            :to="pathPrefix + 'go'"
            class="
              ml-8
              font-medium
              text-brand-normal
              hover:text-brand-darkest
              transition
              duration-150
              ease-in-out
            "
            >Get Started</NuxtLink
          >
        </div>
      </nav>
    </div>
    <!--
          Mobile menu, show/hide based on menu open state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
    <div
      class="
        absolute
        top-0
        inset-x-0
        p-2
        transition
        transform
        origin-top-right
        lg:hidden
      "
      :class="menuClass"
    >
      <div class="rounded-lg shadow-md">
        <div
          class="rounded-lg bg-white shadow-xs overflow-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <Logo />
            <div class="-mr-2">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  text-gray-400
                  hover:text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:bg-gray-100
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                "
                aria-label="Close menu"
                @click="closeMenu"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <NuxtLink
              :to="pathPrefix"
              aria-label="Home"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:bg-gray-50
                focus:outline-none
                focus:text-gray-900
                focus:bg-gray-50
                transition
                duration-150
                ease-in-out
              "
              role="menuitem"
              >MPP Home</NuxtLink
            >
            <NuxtLink
              :to="pathPrefix + 'details'"
              class="
                mt-1
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:bg-gray-50
                focus:outline-none
                focus:text-gray-900
                focus:bg-gray-50
                transition
                duration-150
                ease-in-out
              "
              role="menuitem"
              >Details</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              :to="pathPrefix + 'go'"
              class="
                block
                w-full
                px-5
                py-3
                text-center
                font-medium
                text-brand-normal
                bg-gray-50
                hover:bg-gray-100
                hover:text-brand-dark
                focus:outline-none
                focus:bg-gray-100
                focus:text-brand-dark
                transition
                duration-150
                ease-in-out
              "
              role="menuitem"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      menuClass: 'hidden opacity-0 scale-95 duration-150 ease-out',
      logoUrl:
        'https://res.cloudinary.com/mid-city/image/upload/c_scale,f_auto,q_auto:best,w_200/v1634048833/Logos/MID-CITY_SUPPLY_75TH_red-black_voslqb.png',
    }
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
  methods: {
    openMenu() {
      this.menuClass = 'opacity-100 scale-100 duration-150 ease-out'
    },
    closeMenu() {
      this.menuClass = 'opacity-0 scale-95 duration-100 ease-in'
      setTimeout(() => {
        this.menuClass = 'hidden opacity-0 scale-95 duration-150 ease-out'
      }, 150)
    },
    hideMenu() {
      this.menuClass = 'hidden opacity-0 scale-95 duration-150 ease-out'
    },
  },
  watch: {
    $route(to, from) {
      this.hideMenu()
    },
  },
}
</script>
