<template>
  <div>
    <p class="mb-4 text-xl">Your purchase numbers to date:</p>
    <!-- Wrapper for Table, fill in bg corners -->
    <div
      class="
        border-2 border-brand-dark
        w-full
        md:w-auto
        rounded
        overflow-hidden
        bg-brand-dark
      "
    >
      <table class="w-full">
        <thead class="bg-brand-dark text-gray-50">
          <tr>
            <th>Year</th>
            <th>Purchases</th>
          </tr>
        </thead>
        <tbody class="">
          <tr>
            <th>2017</th>
            <td>{{ vend.purch_2017 }}</td>
          </tr>
          <tr>
            <th>2018</th>
            <td>{{ vend.purch_2018 }}</td>
          </tr>
          <tr>
            <th>2019</th>
            <td>{{ vend.purch_2019 }}</td>
          </tr>
          <tr>
            <th>2020</th>
            <td>{{ vend.purch_2020 }}</td>
          </tr>
          <tr>
            <th>2021 (Thru Oct. 1)</th>
            <td>{{ vend.purch_2021_ytd }}</td>
          </tr>
        </tbody>
      </table>
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
  name: 'MfgNumbers',
  props: {
    vend: {
      type: Object,
      required: true,
    },
  },
}
</script>
