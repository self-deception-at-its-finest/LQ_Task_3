import ContactUsPage from "../pages/contactUs.page"


describe('Contact Us Form', () => {
    it('Required fields validation in the “Contact Us” form',  () => {
        const contactUsPage = new ContactUsPage()

        contactUsPage.open()
        contactUsPage.submitButtonClick()

        contactUsPage.elements.selectDropdown()
            .should('have.css', 'border-color', 'rgb(235, 0, 0)')

        contactUsPage.elements.invalidDropdownSelectMessage()
            .should('be.visible')
            .and('contain.text', 'This field is required.')

    })
})
