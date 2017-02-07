import Store from '../store/store'
import Cart from '../cart/cart'

class Api {
    constructor() {
        this.API_URL = Store.get('API_URL')
    }

    addCart(productId) {
        Store.addCart(productId)
        Cart.addProduct(productId)

        this.fetch('add', { product_id: productId })
    }

    editCart(productId, count) {
        Store.editCart(productId, count)
        Cart.updateSum(productId, count)
        Cart.updatePrice()
        this.fetch('edit', { product_id: productId, count: count })
    }

    deleteCart(productId) {
        Store.deleteCart(productId)
        Cart.updatePrice()
        this.fetch('delete', { product_id: productId })
    }

    fetch(name, data) {
        data = Object.keys(data).map((name) => {
            return `${name}=${data[name]}`
        }).join("&")

        fetch(`${this.API_URL}&name=${name}&${data}`, {
            method: "GET",
            credentials: "include",
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
        })
    }
}


export default new Api()