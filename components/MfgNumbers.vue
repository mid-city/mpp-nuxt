<template>
  <div>
    <p class="mb-4 text-xl">Your purchase numbers to date:</p>
    <!-- Wrapper for Table, fill in bg corners -->
    <div
      class="border-2 border-brand-dark w-full md:w-auto rounded overflow-hidden bg-brand-dark"
    >
      <table class="w-full">
        <thead class="bg-brand-dark text-gray-50">
          <tr>
            <th>Year</th>
            <th>Purchases</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableRows" :key="row.year">
            <th>{{ row.year }}</th>
            <td>{{ row.purchases }}</td>
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
const currentYear = 2023

export default {
  name: 'MfgNumbers',

  props: {
    vend: {
      type: Object,
      required: true,
    },
  },

  computed: {
    tableRows() {
      return [
        {
          year: String(currentYear - 4),
          purchases: String(this.vend.purch_prev_year_minus_3),
        },
        {
          year: String(currentYear - 3),
          purchases: String(this.vend.purch_prev_year_minus_2),
        },
        {
          year: String(currentYear - 2),
          purchases: String(this.vend.purch_prev_year_minus_1),
        },
        {
          year: String(currentYear - 1),
          purchases: String(this.vend.purch_prev_year),
        },
        {
          year: String(currentYear) + ' (Thru Oct. 1)',
          purchases: String(this.vend.purch_current_year_ytd),
        },
      ]
    },
  },
}
</script>
