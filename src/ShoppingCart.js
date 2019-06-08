module.exports = class ShoppingCart {
    constructor() {
        this.cartContents = []
        this.item = {}
    }
    getItems() {
        return this.cartContents
    }
    addItem(itemName, quantity, price) {}
    clear(){}
}



console.log(module.exports)

