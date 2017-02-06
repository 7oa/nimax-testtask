class Api {
    constructor() {
        console.log('constructor')
    }

    addCart(productId) {
        console.log('addCart')
    }
}


module.exports = new Api()