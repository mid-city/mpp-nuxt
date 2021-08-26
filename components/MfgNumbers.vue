<template>
  <div>
    <p class="mb-4 text-xl">Your purchase numbers to date:</p>
    <!-- Wrapper for Table, fill in bg corners -->
    <div class="border-2 border-brand-dark w-full md:w-auto rounded overflow-hidden bg-brand-dark">
      <table class="w-full">
        <thead class="bg-brand-dark text-gray-50 ">
          <tr>
            <th>Year</th>
            <th>Purchases</th>
          </tr>
        </thead>
        <tbody class="">
          <tr>
            <th>2016</th>
            <td>$ {{ vend.purch_2016 }}</td>
          </tr>
          <tr>
            <th>2017</th>
            <td>$ {{ vend.purch_2017 }}</td>
          </tr>
          <tr>
            <th>2018</th>
            <td>$ {{ vend.purch_2018 }}</td>
          </tr>
          <tr>
            <th>2019</th>
            <td>$ {{ vend.purch_2019 }}</td>
          </tr>
          <tr>
            <th>2020 (Thru Sept.)</th>
            <td>$ {{ vend.purch_2020_ytd }}</td>
          </tr>
          <!-- <tr>
              <th>2020 Projected</th>
              <td>$ {{ vend.purch_2020_projected }}</td>
            </tr> -->
        </tbody>
      </table>
    </div>
    <div class="my-4 prose">
      <p>
        If our purchases for 2020 are less than $100,000, your commitment amount is 2% of our total
        2020 purchases.
      </p>
      <p>
        If our purchases for 2020 are greater than $100,000, your commitment amount is 1% of our
        total 2020 purchases.
      </p>
      <p>
        If our purchases have declined for 3 consective years, you are in the plan for free.
      </p>
      <p>
        Your commitment to the program is due by <strong>December 31, 2020</strong>. Because we do
        not have final purchase numbers yet, we will send out the final commitment numbers in early
        January and the payment will be due by <strong>February 26, 2021</strong>.
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
  name: 'MfgNumbers',
  props: {
    vend: {
      type: Object,
      required: true,
    },
  },
}
</script>
