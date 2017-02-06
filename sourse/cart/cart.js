import Scroll from '../scroll/scroll'
import Counter from '../counter/counter'

class Cart {
    constructor() {
        this.el = {
            app: document.getElementsByClassName('app')[0],
            bg: document.getElementsByClassName('app__shadow')[0],
            close: document.getElementsByClassName('cart__close')[0],
        }

        this.el.bg.addEventListener('click', (e) => {
            this.close()
            e.preventDefault()
        })

        this.el.close.addEventListener('click', (e) => {
            this.close()
            e.preventDefault()
        })
    }

    open() {
        this.el.app.classList.add('app_cart')
        Scroll.disabled()
    }

    close() {
        this.el.app.classList.remove('app_cart')
        Scroll.enabled()
    }
}

module.exports = new Cart()