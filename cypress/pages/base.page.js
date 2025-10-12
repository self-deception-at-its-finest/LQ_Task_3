class Base {














     open(path = '') {
        cy.visit('/' + path)
    }
}
export default Base