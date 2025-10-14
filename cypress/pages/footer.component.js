class FooterComponent {
    elements = {
        // Social links loactors
        linkedinIcon: () => cy.get('a[href*="linkedin.com"]').invoke('removeAttr', 'target'),
        twitterIcon: () => cy.get('a[href="https://x.com/telnyx"]').invoke('removeAttr', 'target'),
        facebookIcon: () => cy.get('a[href*="facebook.com"]').invoke('removeAttr', 'target'),
        logoIcon: () => cy.get('html > body > div:nth-of-type(1) > div > footer > div:nth-of-type(1) > div:nth-of-type(1) > a > svg')
    }

    verifyLinkedin() {
        this.elements.linkedinIcon().click()
        cy.url().should('include', 'linkedin.com')
        cy.go(-1)
    }

    verifyTwitter() {
        this.elements.twitterIcon().click()
        cy.url().should('include', 'x.com')
        cy.go(-1)
    }

    verifyFacebook() {
        this.elements.facebookIcon().click()
        cy.url().should('include', 'facebook.com')
        cy.go(-1)
    }
}

export default FooterComponent