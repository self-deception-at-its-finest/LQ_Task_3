import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class PricingPage extends BasePage {
    endpoint = endpoints.pricing

    open() {
        super.open(this.endpoint)
    }
}
export default PricingPage