import Price from '../price/price'
import Decl from '../decl/decl'

class CartFooter {
    constructor() {
        this.el = {
            block: document.getElementsByClassName('cart-footer__block_sum')[0],
            discountPrice: document.querySelector('.cart-footer__sum_discount .cart-sum_active .cart-sum__price'),
            discountOriginalPrice: document.querySelector('.cart-footer__sum_discount .cart-sum_small .cart-sum__price'),
            discountPercent: document.querySelector('.cart-footer__percent'),
            originalPrice: document.querySelector('.cart-footer__sum_original .cart-sum__price')
        }
    }

    update(countProducts, priceProducts, percentActive, originalPriceProducts) {
        if (percentActive) {
            this.el.block.classList.add('cart-footer__block_sum_discount')
            this.el.block.classList.remove('cart-footer__block_sum_original')

            this.el.discountPrice.innerHTML = Price(priceProducts, { isCurrency: true })
            this.el.discountOriginalPrice.innerHTML = Price(originalPriceProducts, { isCurrency: true })
            this.el.discountOriginalPrice.innerHTML = Price(originalPriceProducts, { isCurrency: true })
            this.el.discountPercent.innerHTML = percentActive
        } else {
            this.el.block.classList.add('cart-footer__block_sum_original')
            this.el.block.classList.remove('cart-footer__block_sum_discount')

            this.el.originalPrice.innerHTML = Price(priceProducts, { isCurrency: true })
        }
    }
}

export default new CartFooter()