NodeList.prototype.map = HTMLCollection.prototype.map = Array.prototype.map
NodeList.prototype.filter = HTMLCollection.prototype.filter = Array.prototype.filter

Element.prototype.offset =  function() {
    let bodyRect = document.body.getBoundingClientRect(),
        elemRect = this.getBoundingClientRect()

    return {
        top: elemRect.top - bodyRect.top,
        left: elemRect.left - bodyRect.left
    }
}

Array.prototype.remove = function(value) {
    let idx = this.indexOf(value);
    if (idx != -1) {
        // Второй параметр - число элементов, которые необходимо удалить
        return this.splice(idx, 1);
    }
    return false;
}