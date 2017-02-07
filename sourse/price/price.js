function Price(number, options = {}) {
    number = parseFloat(number)

    let ceil = parseInt(number)
    console.log(number)
    console.log(ceil)
    if (ceil >= 10000) {
        ceil = `${parseInt(ceil)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').trim().replace(' ', "&thinsp;")
    }

    let penny = Math.round(number.toFixed(2) % 1 * 100)
    if (penny) {
        if (penny < 10) penny = `0${penny}`
        penny = `<div class="price__comma">,</div><div class="price__penny">&nbsp;${penny}</div>`
    } else {
        penny = (options.isTrace) ? `<div class="price__trace">.&mdash;</div>` : ''
    }

    let isCurrency = ''
    if (options.isCurrency) {
        isCurrency = `&nbsp;<div class="price__currency">₽</div>`
    }

    return `<div class="price">
        <div class="price__ceil">${ceil}</div>
        ${penny}
        ${isCurrency}
    </div>`
}

export default Price