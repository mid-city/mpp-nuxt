<template>
  <div class="p-4 relative rounded m-1">
    <noscript class="text-red-700 mb-8 inline-block"
      >It looks like you have JavaScript disabled. This form will not work
      properly unless JavaScript is enabled.</noscript
    >
    <!-- Live Form -->
    <form method="post" @submit.prevent="handleSubmit" id="responseForm">
      <div class="deetdoot">
        <input
          v-model="form.address"
          type="text"
          name="address20"
          autocomplete="off"
        />
      </div>

      <!-- auto-filled per url param -->
      <input v-model="form.vendorId" type="hidden" name="vendorId" />
      <input v-model="form.vendorName" type="hidden" name="vendorName" />

      <!-- user-filled fields  -->
      <fieldset class="personalInfo">
        <legend>Your Information:</legend>

        <div class="flex-wrap sm:flex-no-wrap">
          <label for="name">Your Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            required
            autocomplete="name"
          />
        </div>

        <div class="flex-wrap sm:flex-no-wrap">
          <label for="email">Email Address</label>
          <input
            v-model="form.email710"
            type="email"
            id="email"
            name="email710"
            required
            autocomplete="email"
          />
        </div>

        <div class="flex-wrap sm:flex-no-wrap">
          <label for="phone">Daytime Phone</label>
          <input
            v-model="form.phone710"
            type="tel"
            id="phone"
            name="phone710"
            required
            autocomplete="tel"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend><label for="response">Your Response:</label></legend>

        <select
          v-model="form.response"
          name="response"
          id="response"
          required
          autocomplete="off"
        >
          <option value="">-- Choose One --</option>
          <option value="yes">
            Yes, we are committed to partnering with Mid-City Supply.
          </option>

          <option value="maybe">
            Please contact us. We would like to discuss further before we
            decide.
          </option>
        </select>
        <div v-if="showInvoiceOpt" class="invoiceOpt">
          <label for="select-invoice" class="mb-2 mt-6 font-bold block"
            >Would you like an invoice?</label
          >

          <select
            v-model="form.invoice"
            name="invoice"
            id="select-invoice"
            autocomplete="off"
          >
            <option value="">-- Choose One --</option>
            <option value="yes">Yes, please send us an invoice</option>
            <option value="no">
              No, we will remit a check, credit memo, or free goods
            </option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend><label for="comments">Additional Comments</label></legend>
        <textarea
          v-model="form.comments"
          name="comments"
          id="comments"
          cols="30"
          rows="5"
          class="p-4"
          autocomplete="off"
        ></textarea>
      </fieldset>
      <div class="text-center">
        <button
          v-if="!submissionStatus"
          type="submit"
          class="
            px-16
            py-2
            bg-brand-dark
            text-gray-50
            rounded
            text-lg
            w-full
            sm:w-auto
            hover:bg-brand-light
            hover:text-white
            cursor-pointer
          "
        >
          {{ loading ? 'Processing...' : 'Submit' }}
        </button>

        <!-- submission message -->
        <div
          v-if="submissionStatus"
          class="
            absolute
            top-0
            left-0
            w-full
            h-full
            z-10
            bg-white
            flex
            justify-evenly
            items-center
          "
        >
          <p>
            {{ submitMessage }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const apiEndpoint =
  'https://elwa6hcow0.execute-api.us-east-1.amazonaws.com/dev/response'
export default {
  name: 'ResponseForm',
  props: {
    vendId: {
      type: String,
      required: true,
    },
    vendName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      submissionStatus: null,
      loading: false,
      form: {
        name: '',
        email10: '',
        phone710: '',
        response: '',
        invoice: '',
        comments: '',
        vendorId: this.vendId,
        vendorName: this.vendName,
        address: '',
      },
    }
  },
  computed: {
    showInvoiceOpt() {
      if (this.form.response === 'yes') {
        return true
      } else {
        return false
      }
    },
    submitMessage() {
      if (this.submissionStatus === 'success') {
        return 'Thank you for your submission. Your response has been received, and you will receive a confirmation email shortly.'
      } else if (this.submissionStatus === 'error') {
        return 'Sorry! There was a problem when trying to submit your response. Please contact webmaster@mid-city.com for assistance.'
      }
    },
  },
  methods: {
    handleSubmit() {
      this.submissionStatus = 'processing'
      // Validation
      const regName = /[A-Za-z]{1}[A-Za-z]/
      const regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/
      if (!regName.test(this.form.name)) {
        alert('Name must be at least 2 characters long.')
        return
      }
      if (!regEmail.test(this.form.email710)) {
        alert('Please enter a valid email.')
        return
      }

      const submission = {
        name: this.form.name,
        email710: this.form.email710,
        phone710: this.form.phone710,
        response: this.form.response,
        invoice: this.form.invoice,
        comments: this.form.comments,
        vendorId: this.vendId,
        vendorName: this.vendName,
        address: this.form.address,
      }

      this.$axios({
        method: 'post',
        url: apiEndpoint,
        data: submission,
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          this.submissionStatus = 'success'
          this.loading = false
        })
        .catch((err) => {
          this.submissionStatus = 'error'
          console.error(err)
        })
    },
  },
}
</script>

<style scoped>
fieldset input,
textarea,
select {
  @apply border-2;
  @apply border-gray-400;
  @apply rounded;
}

fieldset {
  @apply mb-4;
  @apply rounded;
  @apply py-4;
}
fieldset > div {
  @apply my-2;
}
.personalInfo > div {
  @apply flex;
  @apply justify-between;
  @apply items-center;
}
.personalInfo label {
  @apply w-48;
}
.personalInfo input,
select {
  @apply w-full;
  @apply px-4;
  @apply py-2;
}
legend {
  @apply font-bold;
  @apply mt-4;
}
textarea {
  @apply w-full;
}
.invoiceOpt input {
  @apply my-2;
}
.deetdoot {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>
