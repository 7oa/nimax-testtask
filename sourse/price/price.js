function Price(number, options) {
    if (number >= 10000) {
        number = `${number}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').trim()
    }

    return number
}

export default Price