import Api from '../api/api'
import Cart from '../cart/cart'

class Product {
    constructor() {
        this.el = {
            buy: document.getElementsByClassName('product__button')
        }

        this.el.buy.map((item) => {
            item.addEventListener('click', (e) => {
                if (item.classList.contains('product__button_buy')) {
                    Cart.open()
                } else {
                    this.addCart(item)
                }

                e.preventDefault()
            })
        })
    }

    addCart(item) {
        const productId = item.hasAttribute('data-product-id')

        item.classList.remove('button_fill')
        item.classList.add('button_border', 'product__button_buy')
        item.innerText = "Товар в корзине"

        Api.addCart(productId)
    }
}

module.exports = new Product()