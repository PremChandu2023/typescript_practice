"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderForm = /** @class */ (function () {
    function OrderForm() {
        this.orderItems = [];
    }
    OrderForm.prototype.addOrder = function (orderNo, orderItem, orderQuantity) {
        var newOrder = {
            sno: orderNo,
            item: orderItem,
            Quantity: orderQuantity
        };
        this.orderItems.push(newOrder);
    };
    OrderForm.prototype.removeOrder = function (index) {
        if (index > 0 && index < this.orderItems.length) {
            this.orderItems.splice(index - 1, 1);
        }
        else {
            alert("give index in invalid");
        }
    };
    OrderForm.prototype.getOrdersList = function () {
        return this.orderItems;
    };
    OrderForm.prototype.getOrderPrice = function () {
        var amount = 0;
        for (var _i = 0, _a = this.orderItems; _i < _a.length; _i++) {
            var orders = _a[_i];
            orders.Quantity * orders.item.price;
        }
        console.log(amount);
    };
    return OrderForm;
}());
var order1 = new OrderForm();
var menuitem1 = new Menuitems(1, "Burger", "Delicious beef burger", 10.9);
order1.addOrder(1, menuitem1, 3);
order1.getOrderPrice();
