import Price from '../price/price'
import Decl from '../decl/decl'

class CartMini {
    constructor() {
        this.el = {
            app: document.getElementsByClassName('app')[0],
            block: document.getElementsByClassName('cart-mini')[0],
            price: document.querySelector('.cart-mini .cart-sum__price'),
            count: document.getElementsByClassName('cart-mini__count')[0],
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

        this.el.price.innerHTML = Price(priceProducts, { isCurrency: true })
        this.el.count.innerHTML = `${countProducts}&nbsp;${Decl(countProducts, [ 'товар', 'товара', 'товаров' ])}`
    }
}

export default new CartMini()