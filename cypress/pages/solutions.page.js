import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class SolutionsPage extends BasePage {
    endpoint = endpoints.solutions
    elements = {
        filterSearch: () => cy.get('#search'),
        searchResults: () => cy.get('li>div>div>h3')

    }

    /**
     * Checks the search filter functionality
     * @param {string} message - Search query to enter into the filter
     * @returns {void}
     *
     * @example
     * // Check search for the word "SMS"
     * checkSearchFilter("SMS")
     *
     * @description
     * Function performs the following actions:
     * 1. Waits for 5 seconds
     * 2. Scrolls to the search element
     * 3. Clears the search field
     * 4. Verifies the field is not disabled
     * 5. Enters the search query and presses Enter
     * 6. Waits 5 seconds for the filter to be applied
     * 7. Verifies the search field displays the entered query
     * 8. Verifies that search results are present
     * 9. Verifies that each result contains the search text
     */
    checkSearchFilter(message) {
        cy.wait(5000)

        this.elements.filterSearch()
            .scrollIntoView()
            .clear()
            .should('not.be.disabled')
            .type(`${message}{enter}`,  { force: true })

        cy.wait(5000)

        this.elements.filterSearch().should('have.value', message )

        this.elements.searchResults()
            .should('have.length.greaterThan', 0)
            .each(($element) => {
                cy.wrap($element)
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.include(message.toLowerCase())
                    })

            })
    }


    open() {
        super.open(this.endpoint);
    }
}
export default SolutionsPage