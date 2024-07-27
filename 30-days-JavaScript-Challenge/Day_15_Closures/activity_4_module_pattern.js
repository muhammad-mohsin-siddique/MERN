// Task 6: Use a Closures to create simple module for managing a collection of items. Implement method to add, remove, and list items

function createItem() {
    let items = [];
    function addItem(item) {
        items.push(item);
    }
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }
    function listItems() {
        return items;
    }
    return {
        addItem,
        removeItem,
        listItems
    };
}

const myItemManager = createItemManager();

myItemManager.addItem("Item 1");
myItemManager.addItem("Item 2");


console.log(myItemManager.listItems()); // Output: ["Item 1", "Item 2"]


myItemManager.removeItem("Item 1");


console.log(myItemManager.listItems()); // Output: ["Item 2"]


myItemManager.addItem("Item 3");


console.log(myItemManager.listItems()); // Output: ["Item 2", "Item 3"]