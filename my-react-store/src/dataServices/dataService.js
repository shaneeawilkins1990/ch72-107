

const catalog = [
    {
    "title":"Coffee",
    "category":"Beverage",
    "price":"15",
    "image":"coffe.png",
    "_id":"1" // This is the unique identifier for the product

},
    {
    "title":"Milk",
    "category":"Beverage",
    "price":"10",
    "image":"milk.png",
    "_id":"2"

},
    {
    "title":"Oranges",
    "category":"Fruit",
    "price":"5",
    "image":"oranges.png",
    "_id":"3"
},
    {
    "title":"Chocolate",
    "category":"Food",
    "price":"15",
    "image":"choco (1).png",
    "_id":"4"
}




];

class DataService { //object and method, function that belongs to an object
    getProducts() {
        return catalog;
    }
}

export default DataService;