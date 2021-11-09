<template>
  <p class="italic text-center text-lg">Welcome, {{ name }}!</p>
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
