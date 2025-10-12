import endpoints from '../constants/endpoints.constants.json'
import HomePage from "../pages/home.page"
import FooterComponent from "../pages/footer.component"


describe('Footer', () => {
    it('Verify Social media links in the footer',  () => {
        const homePage = new HomePage()
        const footerComponent = new FooterComponent()

        homePage.open()
        cy.url().should('eq', 'https://telnyx.com/')

        footerComponent.verifyLinkedin()
        footerComponent.verifyTwitter()
        footerComponent.verifyFacebook()
    })
})
