import ContactUsPage from "../pages/contactUs.page"
import endpoints from '../constants/endpoints.constants.json'

describe('Contact Us Form', () => {
    it('Successful submitting of the “Contact Us” form with valid required fields',  () => {
        const contactUsPage = new ContactUsPage()

        contactUsPage.open()
        contactUsPage.formValidInput()
        contactUsPage.submitButtonClick()

        cy.url().should('include', `/${endpoints.successfulSubmitting}`)

    })
})
