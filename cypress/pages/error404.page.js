class Error404Page  {
    elements = {
        errorMessage: () => cy.get('section>div>div>h1'),
        errorSubMessage: () => cy.get('section>div>div>p'),
        backToHomeButton: () => cy.get('[data-content="Back to home"]'),
    }
}
export default Error404Page