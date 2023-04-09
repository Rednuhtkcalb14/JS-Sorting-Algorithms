const books = require("./bookList.js")


function lowerValue(products, initial) {
    let cheapest = initial;
    
    for (let current = initial; current < products.length; current++) {
        if (products[current].price < products[cheapest].price) {
            cheapest = current
        }
    }
    return cheapest
}

//console.log(`The title of most cheapest book is ${books[cheapest].title} and your price is ${books[cheapest].price}`)

module.exports = lowerValue
