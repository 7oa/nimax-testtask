import Store from '../store/store'
import Cart from '../cart/cart'

class Api {
    constructor() {
    }

    addCart(productId) {
        Store.addCart(productId)
        Cart.addProduct(productId)
    }

    fetch() {
        // fetch()
    }
}


export default new Api()