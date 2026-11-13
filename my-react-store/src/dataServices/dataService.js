

const catalog = [
{
    "title":"Chocolate",
    "category":"Candy",
    "price":"20",
    "image":"placeholder",
    "_id":"1" // This is the unique identifier for the product

},
{
    "title":"Chocolate",
    "category":"Candy",
    "price":"20",
    "image":"placeholder",
    "_id":"2"

}

];

class DataService { //object and method, function that belongs to an object
    getProducts() {
        return catalog;
    }
}

export default new DataService();