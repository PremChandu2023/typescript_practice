var Menuitem = /** @class */ (function () {
    function Menuitem(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    return Menuitem;
}());
var Menu = /** @class */ (function () {
    function Menu() {
        this.menuItems = [];
        this.menuItems = [];
    }
    Menu.prototype.addItem = function (name, description, price) {
        var newItem = new Menuitem(name, description, price);
        this.menuItems.push(newItem);
    };
    Menu.prototype.editMenu = function (index, name, description, price) {
        if (index > 0 && index < this.menuItems.length) {
            this.menuItems[index].name = name;
            this.menuItems[index].description = description;
            this.menuItems[index].price = price;
        }
        else {
            console.log("invalid index number");
        }
    };
    Menu.prototype.getMenudetails = function () {
        return this.menuItems;
    };
    Menu.prototype.deleteMenu = function (index) {
        if (index > 0 && index < this.menuItems.length) {
            this.menuItems.splice(index, 1);
        }
        else {
            console.log("invalid index number");
        }
    };
    return Menu;
}());
var menu = new Menu();
menu.addItem("Burger", "Delicious beef burger", 10.99);
menu.addItem("Pizza", "Cheese and pepperoni pizza", 12.99);
menu.addItem("Salad", "Fresh garden salad", 8.99);
