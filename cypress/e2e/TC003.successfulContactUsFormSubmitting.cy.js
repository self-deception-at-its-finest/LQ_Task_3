import ContactUsPage from "../pages/contactUs.page"
import { faker } from '@faker-js/faker'


describe('Contact Us Form', () => {
    it('Successful submitting of the “Contact Us” form with valid required fields',  () => {
        const contactUsPage = new ContactUsPage()

        contactUsPage.open()
        contactUsPage.formValidInput()
        contactUsPage.submitButtonClick()

        cy.url().should('include', '/thank-you-support')

    })
})
