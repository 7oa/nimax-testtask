import Scroll from '../scroll/scroll'
import Store from '../store/store'
import Counter from '../counter/counter'
import CartMini from '../cart/cart-mini'
import Price from '../price/price'
import Api from '../api/api'
import CartFooter from '../cart/cart-footer'

class Cart {
    constructor() {
        this.el = {
            app: document.getElementsByClassName('app')[0],
            bg: document.getElementsByClassName('app__shadow')[0],
            close: document.getElementsByClassName('cart__close')[0],
            list: document.getElementsByClassName('cart-list')[0],
            cartMiniButton: document.querySelector('.cart-mini .button'),
            submitLink: document.querySelector('.cart-footer__block_submit .link')
        }

        this.data = {
            productTemplate: document.getElementById('cart-product-template').innerHTML
        }

        this.el.bg.addEventListener('click', (e) => {
            this.close()
            e.preventDefault()
        })

        this.el.close.addEventListener('click', (e) => {
            this.close()
            e.preventDefault()
        })

        this.el.submitLink.addEventListener('click', (e) => {
            this.close()
            e.preventDefault()
        })

        this.el.cartMiniButton.addEventListener('click', (e) => {
            this.open()
            e.preventDefault()
        })

        this.el.list.addEventListener('click', (e) => {
            if (e.target.closest('.cart-item__col_right')) {
                this.deleteProductAction(e)
                e.preventDefault()
            }
        })


        Store.subscribe('cart', this.updatePrice)
    }

    /*
     Открываю корзину
     */
    open() {
        this.el.app.classList.add('app_cart')
        Scroll.disabled()
    }

    /*
     Закрываю корзину
     */
    close() {
        this.el.app.classList.remove('app_cart')
        Scroll.enabled()
    }

    /*
     Пересчёт количества
     */
    updatePrice() {
        let cartProducts = Store.get('cart')
        let products = Store.get('products')

        let countProducts = 0
        let priceProducts = 0

        cartProducts.map((itemCart) => {
            if (!itemCart) return
            let product = products.filter((itemProduct) => {
                if (itemProduct.id == itemCart.productId) return itemProduct
            })[0]
            if (product) {
                countProducts += itemCart.count
                priceProducts += itemCart.count * parseFloat(product.price)
            }
        })


        if (countProducts == 0) this.close()

        let percentActive = 0

        Store.get('discounts').map((item) => {
            if (percentActive < parseInt(item.percent) && priceProducts > parseInt(item.sum)) {
                percentActive = parseInt(item.percent)
            }
        })

        let originalPrice = 0
        if (percentActive) {
            originalPrice = priceProducts
            priceProducts *= (100 - percentActive) / 100
        }

        CartMini.update(countProducts, priceProducts)
        CartFooter.update(countProducts, priceProducts, percentActive, originalPrice)
    }

    updateSum(productId, count) {
        let product = Store.getProduct(productId)

        let cartItem = document.querySelector(`.cart-item[data-id='${productId}'] .cart-item__price_sum`)
        if (cartItem) {
            cartItem.innerHTML = Price(product.price * count, { isTrace: true })
        }
    }

    deleteProductAction(e) {
        let block = e.target.closest('.cart-item')
        let productId = parseInt(block.getAttribute('data-id'))

        this.deleteProduct(block, productId)

        Api.deleteCart(productId)
    }

    /*
     Добавляю товар в корзину
     */
    addProduct(productId) {
        let template = document.createElement('div')
        template.innerHTML = this.data.productTemplate
        template = template.children[0]

        let product = Store.get('products').filter((item) => {
            if (item.id == productId) return item
        })[0]

        template.setAttribute('data-id', product.id)
        template.getElementsByClassName('cart-item__name')[0].innerHTML = product.name
        template.getElementsByClassName('cart-item__price')[0].innerHTML = template.getElementsByClassName('cart-item__price')[1].innerHTML = Price(product.price, { isTrace: true })
        template.getElementsByClassName('counter__value')[0].value = 1
        template.querySelector('.cart-item__image img').setAttribute('src', product.image)

        Counter.build(template.getElementsByClassName('counter')[0])
        Counter.subscribe(template.getElementsByClassName('counter')[0], this.editProduct)

        template.getElementsByClassName('cart-item__remove')[0].addEventListener('click', (e) => {
            this.deleteProductAction(e)
            e.preventDefault()
        })

        this.el.list.append(template)
    }

    editProduct(id, value) {
        Api.editCart(id, value)
    }

    deleteProduct(block, productId) {
        block.classList.add('cart-item_delete')

        let button = document.querySelector(`.product__button[data-product-id='${productId}']`)

        button.classList.add('button_fill')
        button.classList.remove('button_border', 'product__button_buy')

        button.innerHTML = Price(Store.getProduct(productId).price, { isCurrency: true })
    }

}

export default new Cart()