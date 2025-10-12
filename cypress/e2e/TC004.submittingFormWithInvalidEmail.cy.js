import ContactUsPage from "../pages/contactUs.page"
import { faker } from '@faker-js/faker'


describe('Contact Us Form', () => {
    it('Submitting of the “Contact Us” form with invalid email',  () => {
        const contactUsPage = new ContactUsPage()

        const username = faker.internet.username()
        const invalidEmails = [
            `${username}example.com`,
            `${username}@`,
            `${username}?example`,
            `${username}@@example.com`,
            `${username} @example.com`
            ]

        contactUsPage.open()
        contactUsPage.elements.selectDropdown().select("Support")
        contactUsPage.elements.firstnameInput().type(faker.person.firstName())
        contactUsPage.elements.lastnameInput().type(faker.person.lastName())
        contactUsPage.elements.emailInput().type(faker.helpers.arrayElement(invalidEmails))
        contactUsPage.elements.websiteInput().type(faker.internet.domainName())
        contactUsPage.elements.additionalInfoInput().type(faker.lorem.paragraph(5))
        contactUsPage.elements.hearAboutInput().type(faker.lorem.paragraph(5))

        contactUsPage.submitButtonClick()   

        contactUsPage.elements.emailInput()
            .should('have.css', 'border-color', 'rgb(235, 0, 0)')

        contactUsPage.elements.invalidEmailMessage()
            .should('be.visible')
    })
})
