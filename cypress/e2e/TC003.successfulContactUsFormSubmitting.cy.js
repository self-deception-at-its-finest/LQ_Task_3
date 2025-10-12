import ContactUsPage from "../pages/contactUs.page"
import { faker } from '@faker-js/faker'


describe('Contact Us Form', () => {
    it('Successful submitting of the “Contact Us” form with valid required fields',  () => {
        const contactUsPage = new ContactUsPage()

        contactUsPage.open()
        contactUsPage.elements.selectDropdown().select("Support")
        contactUsPage.elements.firstnameInput().type(faker.person.firstName())
        contactUsPage.elements.lastnameInput().type(faker.person.lastName())
        contactUsPage.elements.emailInput().type(faker.internet.email())
        contactUsPage.elements.websiteInput().type(faker.internet.domainName())
        contactUsPage.elements.additionalInfoInput().type(faker.lorem.paragraph(5))
        contactUsPage.elements.hearAboutInput().type(faker.lorem.paragraph(5))
        contactUsPage.submitButtonClick()

        cy.url().should('include', '/thank-you-support')

    })
})
