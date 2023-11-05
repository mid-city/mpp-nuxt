<template>
  <div
    class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 bg-white bg-opacity-60"
  >
    <p class="italic text-center text-lg">Welcome, {{ name }}!</p>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
