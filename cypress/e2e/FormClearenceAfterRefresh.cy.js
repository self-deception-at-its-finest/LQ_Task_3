import ContactUsPage from "../pages/contactUs.page"


describe('Contact Us Form', () => {
    it('Verify Contact Form Fields Are Cleared After Page Refresh',  () => {
        const contactUsPage = new ContactUsPage()

        contactUsPage.open()
        contactUsPage.formValidInput()

        cy.reload()

        contactUsPage.elements.selectDropdown().should('have.value', '')
        contactUsPage.elements.firstnameInput().should('have.value', '')
        contactUsPage.elements.lastnameInput().should('have.value', '')
        contactUsPage.elements.emailInput().should('have.value', '')
        contactUsPage.elements.websiteInput().should('have.value', '')
        contactUsPage.elements.hearAboutInput().should('have.value', '')

    })
})