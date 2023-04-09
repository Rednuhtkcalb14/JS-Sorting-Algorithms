const books = require("./bookList")

function insertionSort(list) {
    list.forEach((element, index) => {
        while (index > 0 && element.price < list[index - 1].price) {
            let lowerElement = list[index - 1]
            let actualElement = element

            list[index-1] = actualElement
            list[index] = lowerElement

            index--
        }
    })
    console.log(list)
}

insertionSort(books)
