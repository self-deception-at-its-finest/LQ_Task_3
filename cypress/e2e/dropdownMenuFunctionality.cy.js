import HeaderComponent from "../pages/header.component"
import HomePage from "../pages/home.page";


describe('Main navigation menu', () => {
    it('Verify Dropdown Menu Appears When Clicking Header Sections',  () => {
        const headerComponent = new HeaderComponent()
        const homePage = new HomePage()

        homePage.open()

        headerComponent.elements.productsButton().click({ force: true })
        headerComponent.elements.productsButtonDropdown().should('be.visible')

        headerComponent.elements.solutionsButton().click({ force: true })
        headerComponent.elements.solutionsButtonDropdown().should('be.visible')

        headerComponent.elements.whyTelnyxButton().click({ force: true })
        headerComponent.elements.whyTelnyxButtonDropdown().should('be.visible')

        headerComponent.elements.resourcesButton().click({ force: true })
        headerComponent.elements.resourcesButtonDropdown().should('be.visible')

        headerComponent.elements.developersButton().click({ force: true })
        headerComponent.elements.developersButtonDropdown().should('be.visible')


    })
})
