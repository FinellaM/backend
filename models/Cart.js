// Tutorial used: https://www.youtube.com/watch?v=_pVKGCzbMwg
// cart is recreated each time a new item is added
module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {}; // if it's undefined (ie. if no items in cart yet), use an empty object 
    this.totalQty = oldCart.totalQty; //|| 0; // if undefined (ie. if no items in cart yet), set qty and price to 0
    this.totalPrice = oldCart.totalPrice; //|| 0;

    // function to add new items to the Cart
    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) { // if product doesn't exist in cart already, create a new entry
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++; // increment by one
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++; // increment by one
        this.totalPrice += storedItem.price; // add new cart product price to total cart price
    }

    // transform object into an array (incase it needs to be outputted as a list etc)
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};