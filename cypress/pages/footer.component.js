class FooterComponent {
    elements = {
        // Social links loactors
        linkedinIcon: () => cy.get('a[href*="linkedin.com"]'),
        twitterIcon: () => cy.get('a[href*="x.com"]'),
        facebookIcon: () => cy.get('a[href*="facebook.com"]'),
        logoIcon: () => cy.get('html > body > div:nth-of-type(1) > div > footer > div:nth-of-type(1) > div:nth-of-type(1) > a > svg')
    }

    verifyLinkedin() {
        this.elements.linkedinIcon().should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx')
    }

    verifyTwitter() {
        this.elements.twitterIcon().should('have.attr', 'href', 'https://x.com/telnyx')
    }

    verifyFacebook() {
        this.elements.facebookIcon().should('have.attr', 'href', 'https://www.facebook.com/Telnyx/')
    }
}

export default FooterComponent