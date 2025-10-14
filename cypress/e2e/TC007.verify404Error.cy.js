import { faker } from '@faker-js/faker'
import Error404Page from "../pages/error404.page"
import errorMessages from '../constants/errors.constants.json'


describe('Invalid endpoints', () => {
    it('Verify 404 Error Page Handling for Non-Existent endpoints',  () => {
        const error404Page = new Error404Page()

        const fakePage = '/' + faker.lorem.word() + '/' + faker.lorem.word()

        //intercept HTTP GET request to the randomly generated page
        cy.intercept('GET', fakePage).as('404Page')

        //visit the non-existent page without failing test
        cy.visit(fakePage, { failOnStatusCode: false })

        //verify that the response status code is 404 (Not Found)
        cy.wait('@404Page').its('response.statusCode').should('eq', 404)

        error404Page.elements.errorMessage()
            .should("be.visible")
            .and("have.text", errorMessages.error404Message)

        error404Page.elements.errorSubMessage()
            .should("be.visible")
            .and("have.text", errorMessages.error404SubMessage)

        error404Page.elements.backToHomeButton()
            .should("be.visible")
    })
})
