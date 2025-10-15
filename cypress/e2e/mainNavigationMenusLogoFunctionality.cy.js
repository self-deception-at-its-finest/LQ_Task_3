import ContactUsPage from "../pages/contactUs.page"
import HeaderComponent from "../pages/header.component";


describe('Main navigation menu', () => {
    it('Verify Header Logo Click redirect',  () => {
        const contactUsPage = new ContactUsPage()
        const headerComponent = new HeaderComponent()

        contactUsPage.open()

        headerComponent.elements.headerLogo().click()
        cy.url().should('eq', Cypress.config().baseUrl)
    })
})
