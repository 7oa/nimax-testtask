class Store {
    constructor() {
        this.actions = {}
        this.data = JSON.parse(document.getElementById('store').innerHTML)
    }

    get(key) {
        return this.data[key]
    }

    getProduct(productId) {
        return this.get('products').filter((item) => {
            if (item.id == productId) return item
        })[0]
    }

    addCart(productId) {
        this.data.cart.push({
            productId: productId,
            count: 1
        })

        this.subscribeUpdate('cart')
    }

    editCart(productId, count) {
        this.data.cart.map((item) => {
            if (item.productId == productId) {
                item.count = count
            }
        })
    }

    deleteCart(productId) {
        this.data.cart.map((item, key) => {
            if (item.productId == productId) {
                delete this.data.cart[key]
            }
        })
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