class HeaderComponent {
    elements = {
        headerLogo: () => cy.get('header a[href="/"]'),

        // main navigation menu sections locators
        productsButton: () => cy.get('#radix-_R_4b9eivb_'),
        solutionsButton: () => cy.get('#radix-_R_4j9eivb_'),
        whyTelnyxButton: () => cy.get('#radix-_R_539eivb_'),
        resourcesButton: () => cy.get('#radix-_R_5b9eivb_'),
        developersButton: () => cy.get('#radix-_R_5j9eivb_'),

        //main navigation menu sections dropdowns locators
        productsButtonDropdown: () => cy.get('#radix-_R_4b9eivbH1_'),
        solutionsButtonDropdown: () => cy.get('#radix-_R_4j9eivbH1_'),
        whyTelnyxButtonDropdown: () => cy.get('#radix-_R_539eivbH1_'),
        resourcesButtonDropdown: () => cy.get('#radix-_R_5b9eivbH1_'),
        developersButtonDropdown: () => cy.get('#radix-_R_5j9eivbH1_')
    }
}

export default HeaderComponent