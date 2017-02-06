import Scroll from '../scroll/scroll'
import Store from '../store/store'
import Counter from '../counter/counter'
import CartMini from '../cart/cart-mini'
import Price from '../price/price'

class Cart {
    constructor() {
        this.el = {
            app: document.getElementsByClassName('app')[0],
            bg: document.getElementsByClassName('app__shadow')[0],
            close: document.getElementsByClassName('cart__close')[0],
            list: document.getElementsByClassName('cart-list')[0]
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
            let product = products.filter((itemProduct) => {
                if (itemProduct.id == itemCart.productId) return itemProduct
            })[0]

            countProducts += itemCart.count
            priceProducts += itemCart.count * parseFloat(product.price)
        })

        CartMini.update(countProducts, priceProducts)
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
        template.getElementsByClassName('cart-item__price')[0].innerHTML = template.getElementsByClassName('cart-item__price')[1].innerHTML = Price(product.price)
        template.getElementsByClassName('counter__value')[0].value = 1
        template.querySelector('.cart-item__image img').setAttribute('src', product.image)

        Counter.build(template.getElementsByClassName('counter')[0])

        this.el.list.append(template)
    }

}

export default new Cart()