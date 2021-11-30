<template>
  <div class="p-4 relative rounded m-1">
    <noscript class="text-red-700 mb-8 inline-block"
      >It looks like you have JavaScript disabled. This form will not work
      properly unless JavaScript is enabled.</noscript
    >
    <h3 class="text-brand-normal font-bold">Your Information:</h3>
    <!-- Live Form -->
    <FormulateForm
      name="responseForm"
      @submit="submitResponse"
      #default="context"
      id="responseForm"
    >
      <FormulateInput
        v-model="form.address"
        type="text"
        name="address"
        autocomplete="off"
        class="hidden fixed -l-80 -t-80"
      />

      <FormulateInput
        v-model="form.name"
        type="text"
        name="name"
        validation="bail|required"
        label="Full Name:"
      />

      <FormulateInput
        v-model="form.email"
        type="email"
        name="email"
        label="Email:"
        validation="bail|required|email"
        :validation-messages="{
          required: 'Email is required.',
          email: 'This doesn\'t look like a valid email address.',
        }"
      />

      <FormulateInput
        v-model="form.phone"
        type="tel"
        name="phone"
        label="Daytime Phone:"
        validation="required"
      />

      <FormulateInput
        type="select"
        v-model="form.response"
        name="response"
        label="Your Response:"
        autocomplete="off"
        validation="required"
        :validation-messages="{
          required: 'Please choose a response.',
        }"
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
        key="invoicePreference"
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
        v-if="form.response === 'maybe'"
        v-model="contactPreference"
        type="select"
        name="contactPreference"
        label="Contact Preference:"
        autocomplete="off"
        :options="[
          { value: 'any', label: 'No Preference' },
          { value: 'call', label: 'Conference Call' },
          { value: 'email', label: 'Email' },
        ]"
      />

      <FormulateInput
        v-if="form.response === 'maybe'"
        v-model="form.questions"
        type="textarea"
        name="questions"
        label="What questions do you have?"
        rows="5"
        autocomplete="off"
      />

      <FormulateInput
        type="textarea"
        v-model="form.comments"
        label="Additional Comments:"
        name="comments"
        rows="5"
        autocomplete="off"
      />

      <FormulateErrors class="text-center" />

      <div class="mb-8 text-center" v-if="success">
        Thanks for your response! You should receive a confirmation email soon.
      </div>

      <FormulateInput
        type="submit"
        :disabled="context.hasErrors || context.isLoading"
        :name="context.isLoading ? 'Processing...' : 'Submit'"
      />
    </FormulateForm>
  </div>
</template>
<script>
const apiEndpoint = '/response'
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
      form: {
        name: '',
        email: '',
        phone: '',
        response: '',
        questions: '',
        contactPreference: '',
        invoice: '',
        comments: '',
        address: '',
      },
      initialForm: {
        name: '',
        email: '',
        phone: '',
        response: '',
        questions: '',
        contactPreference: '',
        invoice: '',
        comments: '',
        address: '',
      },
      success: false,
    }
  },
  methods: {
    async submitResponse(data) {
      try {
        await this.$axios({
          method: 'post',
          url: apiEndpoint,
          data: {
            vendorId: this.vendId,
            vendorName: this.vendName,
            ...data,
          },
          headers: {
            Accept: 'application/json; charset=utf-8',
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })

        this.success = true
        this.form = this.initialForm
      } catch (err) {
        this.$formulate.handle(err, 'responseForm')
      }
    },
  },
}
</script>
<style>
.formulate-input {
  margin-bottom: 1.5em;
}
.formulate-input[data-classification='text'] .formulate-input-wrapper {
  @apply sm:flex flex-wrap items-center justify-between;
}
.formulate-input[data-classification='select'] .formulate-input-wrapper {
  @apply md:flex lg:block xl:flex flex-wrap items-center justify-between;
}
.formulate-input[data-classification='select'] .formulate-input-element {
  @apply w-full md:w-8/12 lg:w-full xl:w-8/12;
}
.formulate-input-element--submit {
  @apply text-center mx-auto;
}
.formulate-input-element--submit--label {
  @apply w-full;
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
  /*max-width: 20em;*/
  @apply sm:w-9/12;
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
.formulate-input[data-classification='textarea'] .formulate-input-element {
  @apply w-full;
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
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  @apply w-40;
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
