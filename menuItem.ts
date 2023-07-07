class Menuitem {
        constructor(public name :String,public description : String, public price : number){}
        
}

class Menu {

    private menuItems : Menuitem [] =[];

    constructor()
    {
        this.menuItems =[];
    }

    addItem(name : String,description : String, price : number)
    {
        const newItem = new Menuitem(name,description,price)
        this.menuItems.push(newItem);

    }
    editMenu(index :number,name : String,description : String,price : number)
    {
        if(index > 0 && index < this.menuItems.length)
        {
            this.menuItems[index].name=name;
            this.menuItems[index].description=description;
            this.menuItems[index].price=price;
        }
        else
        {
            console.log("invalid index number");     
        }
    }
    getMenudetails() :Menuitem []
    {
        return this.menuItems;
    }
    deleteMenu(index : number) : void
    {
        if(index > 0 && index < this.menuItems.length)
        {
            this.menuItems.splice(index,1)
        }
        else
        {
            console.log("invalid index number");     
        }
    }
}

const menu =new Menu();

menu.addItem("Burger", "Delicious beef burger", 10.99);
menu.addItem("Pizza", "Cheese and pepperoni pizza", 12.99);
menu.addItem("Salad", "Fresh garden salad", 8.99);


