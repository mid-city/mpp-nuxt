<template>
  <div class="rounded-md shadow">
    <NuxtLink
      :to="url"
      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-normal hover:bg-brand-light focus:outline-none focus:border-brand-dark focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
    >
      Get started
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'CtaBtn',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
