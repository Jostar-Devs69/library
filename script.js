document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            fetch(`/search?query=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.results.length > 0) {
                        alert(`Found ${data.results.length} book(s): ${data.results.map(b => b.title).join(', ')}`);
                    } else {
                        alert('No books found.');
                    }
                })
                .catch(error => {
                    alert('Error searching books.');
                });
        } else {
            alert('Please enter a search term.');
        }
    });
});
document.getElementById('uploadFile').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            alert('Error uploading file.');
        });
    } else {
        alert("Please select a file to upload.");
    }

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
