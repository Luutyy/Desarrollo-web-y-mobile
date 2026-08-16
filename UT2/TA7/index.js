const books = [
    {title: "Book", author: "Name"},
    {title: "Book2", author: "Name2"},
    {title: "El Principito", author: "Antoine de Saint-Exupéry"},
    {title: "Don Quijote", author: "Miguel de Cervantes"}
];

function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log(titles);
}

getTheTitles(books);