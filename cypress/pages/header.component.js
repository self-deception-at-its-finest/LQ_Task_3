class HeaderComponent {
    elements = {
        headerLogo: () => cy.get('header a[href="/"]')

    }
}

export default HeaderComponent