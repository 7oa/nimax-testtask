class Scroll {
    constructor() {
        this.scrollWidth = window.innerWidth - document.body.scrollWidth

        this.el = {
            body: document.children[0],
            cart: document.getElementsByClassName('app__window')[0]
        }
    }

    disabled() {
        this.el.body.classList.add('disabled-scroll')
        this.el.body.style.paddingRight = `${this.scrollWidth}px`

        this.el.cart.style.right = ''
    }

    enabled() {
        this.el.body.classList.remove('disabled-scroll')
        this.el.body.style.paddingRight = ''

        this.el.cart.style.right = `-${this.scrollWidth / 2}px`
    }
}

module.exports = new Scroll()