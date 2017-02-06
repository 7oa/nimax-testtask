class Counter {
    constructor() {
        this.el = document.getElementsByClassName('counter').map((item, key) => {
            return {
                block: item,
                input: item.getElementsByClassName('counter__value')[0],
                buttonPrev: item.getElementsByClassName('counter__action_minus')[0],
                buttonNext: item.getElementsByClassName('counter__action_plus')[0]
            }
        })

        this.el.map((item) => {
            item.block.addEventListener('click', (e) => {
                let parent = e.target.closest('.counter__action')
                if (parent) {
                    this.button(item, parent.classList.contains('counter__action_minus'))
                }
                e.preventDefault()
            })

            item.input.addEventListener('keyup', () => {
                this.key(item)
            })
        })
    }

    button(el, isMinus) {
        if (isMinus && el.buttonPrev.classList.contains('counter__action_disabled') || !isMinus && el.buttonNext.classList.contains('counter__action_disabled')) return

        let value = parseInt(el.input.value)
        if (!isNaN(value)) {
            value += isMinus ? -1 : 1
        } else {
            value = el.input.getAttribute('min')
        }


        this.updateValue(el, value)

        this.updateButton(el)
    }

    key(el) {
        let value = parseInt(el.input.value)

        if (isNaN(value)) {
            this.updateValue(el, el.input.getAttribute('min'))
        }

        this.updateButton(el)
    }

    updateButton(el) {
        let minValue = parseInt(el.input.getAttribute('min'))
        let maxValue = parseInt(el.input.getAttribute('max'))

        if (parseInt(el.input.value) <= minValue) {
            this.updateValue(el, minValue)
        } else if (parseInt(el.input.value) >= maxValue) {
            this.updateValue(el, maxValue)
        }
    }

    updateValue(el, value) {
        if (parseInt(el.input.value) !== parseInt(value)) {
            el.input.value = value
        }
    }
}

module.exports = new Counter()