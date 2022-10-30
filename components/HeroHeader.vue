<template>
  <header>
    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav class="relative flex items-center justify-between lg:justify-start">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <!-- Logo -->
            <div class="w-28 sm:w-32 lg:w-40">
              <a
                href="https://www.mid-city.com/"
                target="_blank"
                rel="noopener"
              >
                <NuxtImg
                  src="Logos/MID-CITY_SUPPLY_Vector_White_dntt1t"
                  alt="Mid-City Logo"
                  width="698"
                  height="353"
                  sizes="xs:112px sm:128px lg:160px"
                />
              </a>
            </div>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  text-gray-300
                  hover:text-gray-600
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
        <div class="hidden md:block md:ml-10 md:pr-4">
          <NuxtLink
            :to="pathPrefix"
            aria-label="Home"
            class="
              font-medium
              text-gray-300
              hover:text-gray-100
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
              text-gray-300
              hover:text-gray-100
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
              text-gray-100
              hover:text-white
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
        md:hidden
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
  </header>
</template>

<script>
export default {
  name: 'HeroHeader',
  data() {
    return {
      menuClass: 'hidden opacity-0 scale-95 duration-150 ease-out',
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
  },
}
</script>
