<template>
  <div
    class="container mx-auto grid grid-cols-1 text-sm md:text-base mb-6 px-4"
  >
    <h2 class="pageHeading">Plan Details</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        class="downloads lg:hidden sm:flex sm:justify-around sm:items-center"
      >
        <div class="mb-4 sm:mb-0 px-8 sm:px-0">
          <p class="text-lg text-brand-normal my-2 ml-1 font-bold">Downloads</p>
          <a
            :href="docs.calendar"
            class="hover:underline focus:underline"
            target="_blank"
            rel="noopener"
            ><fa-icon
              :icon="['fas', 'calendar']"
              class="fa-fw fa-2x"
            />Marketing Calendar</a
          >
          <a
            :href="docs.programs"
            class="hover:underline focus:underline"
            target="_blank"
            rel="noopener"
            ><fa-icon :icon="['fas', 'file-alt']" class="fa-fw fa-2x" />Program
            Listing</a
          >
          <a
            :href="docs.expenses"
            class="hover:underline focus:underline"
            target="_blank"
            rel="noopener"
            ><fa-icon
              :icon="['fas', 'file-invoice-dollar']"
              class="fa-fw fa-2x"
            />Expenses</a
          >
        </div>
        <CtaBtn :url="pathPrefix + 'go'" class="flex-none hidden sm:block" />
      </div>
      <CtaBtn :url="pathPrefix + 'go'" class="sm:hidden" />
      <div class="prose max-w-none">
        <p>
          For over 15 years, Mid-City Supply has been partnering with vendors
          through our Marketing Partnership Plan (MPP) to help reach the
          ultimate destination for all parties involved – success!
        </p>
        <p>
          Vendors rely on distributors to promote and sell their products, and
          distributors rely on vendors to provide them with information,
          training and assistance to do so. Without all parties working
          together, achieving success could be more difficult. Mid-City Supply’s
          MPP is simple, transparent and efficient.
        </p>
        <p>
          For those of you that are new to our plan, we strongly believe in a
          partnership philosophy where both companies can grow, succeed and
          support their communities. In our plan, we expect vendors to not only
          participate financially, but to be an active participant in our
          campaigns. You will get more out of this plan than what you put into
          it!
        </p>

        <h3>Why Participate?</h3>
        <ul>
          <li>
            Build strong manufacturer, rep, distributor, contractor and consumer
            relationships
          </li>
          <li>Educate associates and customers on your products</li>
          <li>
            Increase product awareness, sales and market share through our sales
            and marketing strategy
          </li>
          <li>
            Add value to your products instead of just lowering the market price
          </li>
          <li>
            Invest in our contractor customers by providing business training
            courses
          </li>
          <li>
            Create a Partnership built on trust and mutual respect with our
            vendors and customers
          </li>
        </ul>

        <h3>How it Works</h3>

        <ul>
          <li>
            We ask for a one-time financial commitment up-front at the beginning
            of the year.
          </li>
          <li>
            That commitment allows you to participate in ANY marketing promotion
            all year long with no extra costs.
          </li>
          <li>
            If you are a multi-line rep agency, you also have an up-front
            commitment. This commitment creates a partnership where we can rely
            on you to be there when we need you, and you can rely on us to
            always have time for you and space for your products.
          </li>
          <li>
            After a commitment is given to our MPP, you will have access to any
            of our events as well as any of our nine classrooms for training.
          </li>
        </ul>

        <strong>The financial details of the plan are simple!</strong>
        <ul>
          <li>
            Your requested commitment amount is based on our purchase volume
            with you in 2021.
          </li>
          <li>
            The amount will be 1% of that total if we purchased over $100,000
            and 2% if we purchased less than $100,000.
          </li>
          <li>
            The only exception is if our purchases with you have declined for
            three consecutive years. If that is the case, you are in the plan
            for free until sales start growing again.
          </li>
        </ul>
      </div>

      <div>
        <div
          class="
            downloads
            hidden
            lg:flex
            font-bold
            py-4
            items-center
            justify-evenly
            flex-auto
          "
        >
          <div>
            <p class="text-lg text-brand-normal my-2 ml-1">Downloads</p>
            <a
              :href="docs.calendar"
              class="hover:underline focus:underline"
              target="_blank"
              rel="noopener"
              ><fa-icon
                :icon="['fas', 'calendar']"
                class="fa-fw fa-2x"
              />Marketing Calendar</a
            >
            <a
              :href="docs.programs"
              class="hover:underline focus:underline"
              target="_blank"
              rel="noopener"
              ><fa-icon
                :icon="['fas', 'file-alt']"
                class="fa-fw fa-2x"
              />Program Listing</a
            >
            <a
              :href="docs.expenses"
              class="hover:underline focus:underline"
              target="_blank"
              rel="noopener"
              ><fa-icon
                :icon="['fas', 'file-invoice-dollar']"
                class="fa-fw fa-2x"
              />Expenses</a
            >
          </div>
          <CtaBtn :url="pathPrefix + 'go'" />
        </div>

        <video controls class="w-full mx-auto my-4">
          <source
            src="https://res.cloudinary.com/mid-city/video/upload/v1630075672/MPP/promo_lji0ev.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/mid-city/video/upload/v1630075673/MPP/promo_wrw2cu.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.downloads {
  @apply bg-gray-200;
  @apply rounded-md;
  /* @apply px-8; */
  @apply border-2;
  @apply border-gray-200;
}
.downloads a {
  @apply flex;
  @apply text-gray-700;
  @apply items-center;
  @apply my-4;
}
.downloads svg {
  @apply mr-4;
}
</style>

<script>
export default {
  data() {
    return {
      docs: {
        calendar:
          'https://res.cloudinary.com/mid-city/image/upload/v1603397967/MPP/2021_Marketing_Calendar_l6yubb.pdf',
        programs:
          'https://res.cloudinary.com/mid-city/image/upload/v1603397969/MPP/2021_MPP_Manuf_Programs_sxtdxa.pdf',
        expenses:
          'https://res.cloudinary.com/mid-city/image/upload/v1603397962/MPP/2021_Marketing_Expenses_o2vrog.pdf',
      },
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
  head() {
    return {
      title: 'Plan Details',
    }
  },
}
</script>
