<template>
  <footer>
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
      <h3>Let's Connect!</h3>

      <a href="https://www.facebook.com/midcitysupply" rel="noopener" target="_blank">
        <fa-icon :icon="['fab', 'facebook']" class="fa-2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/mid-city-supply-co.-inc/"
        rel="noopener"
        target="_blank"
      >
        <fa-icon :icon="['fab', 'linkedin']" class="fa-2x fa-fw" />
      </a>
      <a href="https://www.youtube.com/user/MidCitySupply" rel="noopener" target="_blank">
        <fa-icon :icon="['fab', 'youtube']" class="fa-2x fa-fw" />
      </a>
      <a href="https://www.instagram.com/midcitysupply/" rel="noopener" target="_blank">
        <fa-icon :icon="['fab', 'instagram']" class="fa-2x fa-fw" />
      </a>
    </div>
    <p class="copyright">Copyright &copy; 2020 Mid-City Supply Co., Inc.</p>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>

<style scoped>
footer {
  text-align: center;
  color: #fafafa;
  background: #1a1a1a;
  padding: 1rem;
  line-height: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* align-items: center; */
}
footer > * {
  flex-basis: 100%;
}
a {
  text-decoration: underline;
}
h3 {
  font-weight: bold;
  color: #fafafa;
}
.contact h3 {
  margin-bottom: 1rem;
}
.contact p {
  font-size: 0.8rem;
  line-height: 2;
}
.copyright {
  font-size: 0.7rem;
  flex-basis: 100%;
}

@media screen and (min-width: 640px) {
  .contact,
  .social {
    flex-basis: unset;
    text-align: left;
  }
}
</style>
