import SolutionsPage from "../pages/solutions.page";


describe('User Cases', () => {
    it('Verify that Search filter for user cases at solutions page works properly', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        })

        const solutionsPage = new SolutionsPage()

        solutionsPage.open()

        solutionsPage.checkSearchFilter("SMS")
        solutionsPage.checkSearchFilter("API")
    })
})