<template>
  <footer class="py-4 text-white text-center bg-brand-normal">
    <div
      class="flex flex-wrap justify-evenly container px-4 sm:px-6 lg:px-8 mx-auto"
    >
      <div class="contact">
        <h3>Contact Information</h3>
        <p>
          <a href="tel:5742945551">574.294.5551</a><br />
          574.295.4675 (FAX)<br />
          Leah Cooper, Marketing Manager<br />
          <a href="mailto:lcooper@mid-city.com">lcooper@mid-city.com</a>
        </p>
      </div>
      <div class="social">
        <h3 class="mt-8 sm:mt-auto">Let's Connect!</h3>

        <a
          href="https://www.facebook.com/midcitysupply"
          rel="noopener"
          target="_blank"
        >
          <fa-icon :icon="['fab', 'facebook']" class="fa-2x h-8 w-8" />
        </a>
        <a
          href="https://www.linkedin.com/company/mid-city-supply-co.-inc/"
          rel="noopener"
          target="_blank"
        >
          <fa-icon :icon="['fab', 'linkedin']" class="fa-2x fa-fw h-8 w-8" />
        </a>
        <a
          href="https://www.youtube.com/user/MidCitySupply"
          rel="noopener"
          target="_blank"
        >
          <fa-icon :icon="['fab', 'youtube']" class="fa-2x fa-fw h-8 w-8" />
        </a>
        <a
          href="https://www.instagram.com/midcitysupply/"
          rel="noopener"
          target="_blank"
        >
          <fa-icon :icon="['fab', 'instagram']" class="fa-2x fa-fw h-8 w-8" />
        </a>
      </div>
      <p class="copyright mt-8">
        Copyright &copy; {{ year }} Mid-City Supply Co., Inc.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
footer {
  line-height: 2;
}
.contact,
.social {
  flex-basis: 100%;
  @apply sm:text-left;
}
a {
  @apply underline;
}
h3 {
  @apply font-bold;
  @apply mb-4;
}
.contact p {
  font-size: 0.8rem;
}
.copyright {
  font-size: 0.7rem;
  flex-basis: 100%;
}

@media screen and (min-width: 640px) {
  .contact,
  .social {
    flex-basis: unset;
  }
}
</style>
