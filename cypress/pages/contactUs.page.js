import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"
import {faker} from "@faker-js/faker"


class ContactUsPage extends BasePage {
    endpoint = endpoints.contactUs
    elements = {
        selectDropdown: () => cy.get('select[name="Reason_for_Contact__c"]'),
        firstnameInput: () => cy.get('input[name="FirstName"]'),
        lastnameInput: () => cy.get('input[name="LastName"]'),
        emailInput: () => cy.get('input[name="Email"]'),
        phoneInput: () => cy.get('input[name="Phone_Number_Base__c"]'),
        websiteInput: () => cy.get('input[name="Website"]'),
        additionalInfoInput: () => cy.get('textarea[name="Form_Additional_Information__c"]'),
        hearAboutInput: () => cy.get('input[name="How_did_you_hear_about_Telnyx_Open__c"]'),
        submitButton: () => cy.get('button[type="submit"]'),
        invalidDropdownSelectMessage: () => cy.get('#ValidMsgReason_for_Contact__c'),
        invalidEmailMessage: () => cy.contains('Must be valid email. ')
    }

    submitButtonClick() {
        this.elements.submitButton().click()
    }
    formValidInput() {
        this.elements.selectDropdown().select("Support")
        this.elements.firstnameInput().type(faker.person.firstName())
        this.elements.lastnameInput().type(faker.person.lastName())
        this.elements.emailInput().type(faker.internet.email())
        this.elements.websiteInput().type(faker.internet.domainName())
        this.elements.additionalInfoInput().type(faker.lorem.paragraph(5))
        this.elements.hearAboutInput().type(faker.lorem.paragraph(5))
    }

    open() {
        super.open(this.endpoint)
    }
}
export default ContactUsPage