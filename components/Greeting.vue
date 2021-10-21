<template>
  <p class="text-gray-200 italic text-center text-sm">Welcome, {{ name }}!</p>
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
