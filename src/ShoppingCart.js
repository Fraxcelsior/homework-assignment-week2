module.exports = class ShoppingCart {
    constructor() {
        this.cartContents = []
    }
    addItem(itemName, quantity, price) {
        const item = {name: itemName, quantity: quantity, pricePerUnit: price }
        return this.cartContents.push(item)
    }
    getItems() {
        return this.cartContents
    }
    clear() {
        this.cartContents.splice(0, this.cartContents.length)
    }
    total() {
        return this.cartContents.reduce((totalPrice, currentItem) => {
                return totalPrice + (currentItem.quantity * currentItem.pricePerUnit)
        }, 0)
    }

}

