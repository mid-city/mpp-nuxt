<template>
  <p class="mb-8 text-brand-dark italic text-xl">Welcome, {{ name }}!</p>
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
