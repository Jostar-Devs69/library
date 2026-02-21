document.addEventListener("DOMContentLoaded", function() {
    // List of books (PDFs must be in a "books" folder)
    const books = [
        { 
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            cover: "images/gr b.jpg", 
            file: "books/the-great-gatsby.pdf" 
        },
        { 
            title: "A Brief History of Time", 
            author: "Stephen Hawking", 
            cover: "images/history.jpg", 
            file: "books/a-brief-history-of-time.pdf" 
        },
        { 
            title: "Becoming", 
            author: "Michelle Obama", 
            cover: "images/becoming.jpg", 
            file: "books/becoming.pdf" 
        },
        { 
            title: "The Hobbit", 
            author: "J.R.R. Tolkien", 
            cover: "images/TheHobbit_FirstEdition.jpg", 
            file: "books/the-hobbit.pdf" 
        }
    ];

    // Display books in the "Featured Books" section
    const bookList = document.querySelector("#books .grid");
    books.forEach(book => {
        const bookCard = `
            <div class="book-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}" class="w-full h-64 object-cover">
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">${book.title}</h3>
                    <p class="text-gray-600 mb-3">${book.author}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Fiction</span>
                        <a href="${book.file}" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium">Read</a>
                    </div>
                </div>
            </div>
        `;
        bookList.innerHTML += bookCard;
    });

    // Remove the upload section (since GitHub Pages can't handle it)
    document.querySelector(".file-upload").remove();
});
const books = [
       // ...previous books
       { 
           title: "New Book", 
           author: "Author Name", 
           cover: "images/new-cover.jpg", 
           file: "books/new-book.pdf" 
       }
   ];
