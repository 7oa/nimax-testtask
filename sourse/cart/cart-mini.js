import Price from '../price/price'

class CartMini {
    constructor() {
        this.el = {
            app: document.getElementsByClassName('app')[0],
            block: document.getElementsByClassName('cart-mini')[0],
            price: document.getElementsByClassName('cart-sum__price')[0]
        }
    }

    update(countProducts, priceProducts) {
        if (countProducts == 0) {
            this.el.block.classList.remove('cart-mini_open')
            this.el.app.classList.remove('app_cart-mini')
        } else {
            this.el.block.classList.add('cart-mini_open')
            this.el.app.classList.add('app_cart-mini')
        }

        this.el.price.innerHTML = Price(priceProducts)
    }
}

export default new CartMini()