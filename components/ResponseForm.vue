<template>
  <div class="p-4 relative rounded m-1">
    <noscript class="text-red-700 mb-8 inline-block"
      >It looks like you have JavaScript disabled. This form will not work
      properly unless JavaScript is enabled.</noscript
    >
    <h3>Your Information:</h3>
    <!-- Live Form -->
    <FormulateForm @submit="handleSubmit">
      <FormulateInput
        v-model="form.address"
        type="text"
        name="address20"
        autocomplete="off"
        class="hidden absolute -l-80 -t-80"
      />

      <!-- auto-filled per url param -->
      <FormulateInput
        v-model="form.vendorId"
        type="hidden"
        name="vendorId"
        validation="required"
      />
      <FormulateInput
        v-model="form.vendorName"
        type="hidden"
        name="vendorName"
        validation="required"
      />

      <!-- user-filled fields  -->

      <FormulateInput
        v-model="form.name"
        type="text"
        name="name"
        validation="required"
        label="Full Name"
      />

      <FormulateInput
        v-model="form.email710"
        type="email"
        name="email710"
        label="Email"
        validation="required|email"
      />

      <FormulateInput
        v-model="form.phone"
        type="tel"
        name="phone"
        label="Daytime Phone"
        validation="required"
      />

      <FormulateInput
        type="select"
        v-model="form.response"
        name="response"
        label="Your Response:"
        id="response"
        autocomplete="off"
        validation="required"
        :options="[
          { value: '', label: '-- Choose One --' },
          {
            value: 'yes',
            label: 'Yes, we are committed to partnering with Mid-City Supply.',
          },
          {
            value: 'maybe',
            label:
              'Please contact us. We would like to discuss further before we decide.',
          },
        ]"
      />
      <FormulateInput
        v-if="form.response === 'yes'"
        v-model="form.invoice"
        id="select-invoice"
        label="Would you like an invoice?"
        type="select"
        name="invoice"
        autocomplete="off"
        :options="[
          { value: '', label: '-- Choose One --' },
          { value: 'yes', label: 'Yes, please send us an invoice.' },
          {
            value: 'no',
            label: 'No, we will remit a check, credit memo, or free goods.',
          },
        ]"
      />
      <FormulateInput
        type="textarea"
        v-model="form.comments"
        label="Additional Comments"
        name="comments"
        id="comments"
        cols="30"
        rows="5"
        autocomplete="off"
      />

      <FormulateInput
        v-if="!submissionStatus"
        type="submit"
        :name="loading ? 'Processing...' : 'Submit'"
      />
      <div class="text-center">
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
    </FormulateForm>
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
        phone: '',
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
        phone: this.form.phone,
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
<style>
.formulate-input {
  margin-bottom: 1.5em;
}
.formulate-input .formulate-input-label {
  display: block;
  line-height: 1.5;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 0.1em;
}
.formulate-input
  .formulate-input-label--before
  + .formulate-input-help--before {
  margin-top: -0.25em;
  margin-bottom: 0.75em;
}
.formulate-input .formulate-input-element {
  max-width: 20em;
  margin-bottom: 0.1em;
}
.formulate-input .formulate-input-help {
  color: #6d6d6d;
  font-size: 0.7em;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.25em;
}
.formulate-input .formulate-input-errors {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.formulate-input .formulate-file-upload-error,
.formulate-input .formulate-input-error {
  color: #d93921;
  font-size: 0.8em;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0.25em;
}
.formulate-input:last-child {
  margin-bottom: 0;
}
.formulate-input[data-classification='text'] input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 0.9em;
  padding: 0.75em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
}
.formulate-input[data-classification='text'] input::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='text'] input:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='text'] input::placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='text'] input:focus {
  outline: 0;
  border: 1px solid #821a1f;
}
.formulate-input[data-classification='text']
  .formulate-input-element--date
  input,
.formulate-input[data-classification='text']
  .formulate-input-element--datetime-local
  input,
.formulate-input[data-classification='text']
  .formulate-input-element--month
  input,
.formulate-input[data-classification='text']
  .formulate-input-element--week
  input {
  min-height: 2.2em;
}
.formulate-input[data-classification='textarea'] textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 0.9em;
  padding: 0.75em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
}
.formulate-input[data-classification='textarea'] textarea::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='textarea']
  textarea:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='textarea'] textarea::placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='textarea'] textarea:focus {
  outline: 0;
  border: 1px solid #821a1f;
}
.formulate-input[data-classification='button'] button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3em;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 0.9em;
  padding: 0.75em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  border: 1px solid #c1262e;
  background-color: #c1262e;
  color: #fff;
  min-width: 0;
  width: auto;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.formulate-input[data-classification='button'] button::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='button'] button:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='button'] button::placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='button'] button:focus {
  outline: 0;
  border: 1px solid #c1262e;
}
.formulate-input[data-classification='button'] button[disabled],
.formulate-input[data-classification='button'] button[disabled]:active {
  background-color: #cecece;
  border-color: #cecece;
}
.formulate-input[data-classification='button'] button[data-ghost] {
  color: #c1262e;
  background-color: transparent;
  border-color: currentColor;
}
.formulate-input[data-classification='button'] button[data-minor] {
  font-size: 0.75em;
  display: inline-block;
}
.formulate-input[data-classification='button'] button[data-danger] {
  background-color: #d93921;
  border-color: #d93921;
}
.formulate-input[data-classification='button'] button[data-danger][data-ghost] {
  color: #d93921;
  background-color: transparent;
}
.formulate-input[data-classification='button'] button:active {
  background-color: #cc666b;
  border-color: #cc666b;
}
.formulate-input[data-classification='select'] .formulate-input-element {
  position: relative;
}
.formulate-input[data-classification='select'] .formulate-input-element:before {
  content: '';
  width: 0;
  height: 0;
  border-color: #cecece transparent transparent;
  border-style: solid;
  border-width: 0.3em 0.3em 0;
  top: 50%;
  margin-top: -0.1em;
  right: 1em;
  position: absolute;
}
.formulate-input[data-classification='select']
  .formulate-input-element[data-multiple]:before {
  display: none;
}
.formulate-input[data-classification='select'] select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 0.9em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  padding: 0.75em 2em 0.75em 0.75em;
}
.formulate-input[data-classification='select'] select::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='select'] select:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='select'] select::placeholder {
  color: #a8a8a8;
  line-height: normal;
}
.formulate-input[data-classification='select'] select:focus {
  outline: 0;
  border: 1px solid #821a1f;
}
.formulate-input[data-classification='select'] select option {
  color: #000;
}
.formulate-input[data-classification='select'] select option:disabled {
  color: #a8a8a8;
}
.formulate-input[data-classification='select'] select[multiple] {
  padding: 0;
  overflow-y: auto;
}
.formulate-input[data-classification='select'] select[multiple] option {
  padding: 0.75em;
}
.formulate-input[data-classification='select']
  select[data-placeholder-selected] {
  color: #a8a8a8;
}
.formulate-form-errors {
  margin: 0.75em 0;
  padding: 0;
  list-style-type: none;
}
.formulate-form-errors:first-child {
  margin-top: 0;
}
.formulate-form-errors:last-child {
  margin-bottom: 0;
}
.formulate-form-errors .formulate-form-error {
  color: #d93921;
  font-size: 0.9em;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0.25em;
}
</style>
