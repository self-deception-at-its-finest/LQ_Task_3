import FooterComponent from "../pages/footer.component"
import PricingPage from "../pages/pricing.page"


describe('Footer', () => {
    it('Verify Logo redirect in the footer',  () => {
        const pricingPage = new PricingPage()
        const footerComponent = new FooterComponent()

        pricingPage.open()
        footerComponent.elements.logoIcon().click()

        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
})
