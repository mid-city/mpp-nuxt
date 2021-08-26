<template>
  <div>
    <!-- Wrapper for Table, fill in bg corners -->
    <!-- <div class="border-2 border-brand-dark w-full md:w-auto rounded overflow-hidden bg-brand-dark">
      
    </div> -->
    <div class="my-4 prose">
      <p>
        As a manufacturer's rep, your commitment is a flat
        <span class="text-brand-darkest font-bold">${{ vend.due }}</span
        >.
      </p>
      <p>
        Your commitment to the program is due by <strong>December 31, 2020</strong>. Payment will be
        due by <strong>February 26, 2021</strong>.
      </p>
      <p>
        Questions? Please contact Leah Cooper at
        <a href="mailto:lcooper@mid-city.com">lcooper@mid-city.com</a> or
        <a href="tel:574-294-5551">(574) 294-5551</a>.
      </p>
      <p>Thank you for partnering with Mid-City!</p>
    </div>
  </div>
</template>

<style scoped>
td,
th {
  padding: 0.5rem 1rem;
  text-align: left;
}

tbody tr:nth-of-type(2n) {
  @apply bg-gray-200;
}
tbody tr:nth-of-type(2n + 1) {
  @apply bg-white;
}
</style>

<script>
export default {
  name: 'RepNumbers',
  props: {
    vend: {
      type: Object,
      required: true,
    },
  },
}
</script>
