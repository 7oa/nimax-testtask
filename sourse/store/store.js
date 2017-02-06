class Store {
    constructor() {
        this.actions = {}
        this.data = JSON.parse(document.getElementById('store').innerHTML)
    }

    get(key) {
        return this.data[key]
    }

    addCart(productId) {
        this.data.cart.push({
            productId: productId,
            count: 1
        })

        this.subscribeUpdate('cart')
    }

    subscribe(key, callback) {
        if (!(key in this.actions)) this.actions[key] = []
        this.actions[key].push(callback)
    }

    subscribeUpdate(key) {
        if (!(key in this.actions)) return
        this.actions[key].map((item) => {
            item()
        })
    }
}

export default new Store()