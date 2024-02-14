// Objects Creation
function createBook(title,author,genre,pagesCount){
    return {
        title: title,
        author: author,
        genre: genre,
        pagesCount: pagesCount
    }
}
const books = [
    createBook("Game of Thrones","Ahmed Elsa2a","Action",400),
    createBook("City of Clones","Ayman Elsha2a","Fantasy",300),
    createBook("Grain of Salt","Akram Hosny","Romance",200),
    createBook("Train of Drones","Youssef Abozeid","Action",500),
    createBook("Lane of Lones","Ahmed Elsa2a","Fantasy",100),
]

// Titles using map
const titles = books.map((b) => b.title)
console.log(titles)

// Short books using filter
function getShortBooks(thres){
    return books.filter((b) => b.pagesCount<thres)
}
const shortBooks = getShortBooks(250)
console.log(shortBooks)

// Books of author using filter
function getAuthorBooks(author){
    return books.filter((b) => b.author === author)
}
const sa2aBooks = getAuthorBooks("Ahmed Elsa2a")
console.log(sa2aBooks)

// Book of title using find
function getBook(title){
    return books.find((b) => b.title === title)
}
const b = getBook("Game of Thrones")
console.log(b)

// Total Number of pages
const totalPages = books.reduce((sum,b) => {
    sum += b.pagesCount
    return sum
},0)
console.log(totalPages)