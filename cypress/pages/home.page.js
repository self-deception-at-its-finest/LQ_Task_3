import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class HomePage extends BasePage {
    endpoint = endpoints.home


    open() {
        super.open(this.endpoint)
    }
}
export default HomePage