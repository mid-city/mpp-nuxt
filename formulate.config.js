export default {
  errorHandler: err => {
    const unknownErrorMessage =
      'Sorry, there was a problem submitting your response. Please contact bmiller@mid-city.com for assistance.'

    const resErrorMessage =
      'The server was unable to process your response. Please contact bmiller@mid-city.com for assistance.'

    if (err.response) {
      return {
        inputErrors: {},
        formErrors: [resErrorMessage, 'Error: ' + err.response.data.message],
      }
    } else {
      return {
        inputErrors: {},
        formErrors: [unknownErrorMessage],
      }
    }
  },
}
