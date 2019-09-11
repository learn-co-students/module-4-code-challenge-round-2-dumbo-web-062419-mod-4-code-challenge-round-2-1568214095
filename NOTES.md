1. ✅Fetch to `http://localhost:3005/books`. You should get a response that is an array of multiple book objects that look like this:
```
{ 
   "id": 1, 
   "title": "The Great Gatsby", 
   "author": "F. Scott Fitzgerald", 
   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg" 
}
```

2.  ✅ Render a list of books that show the book title and book image in the Book List
3.  ✅ Clicking on a book in the Book List should add it to the Bookshelf
4.  ✅ Clicking on a book in the Bookshelf should remove it from the Bookshelf
5.  ✅Create a controlled form that allows the user to add a book to the Book List (this should _NOT_ persist)
6. BONUS: Each book can only be added to Bookshelf once (Bookshelf should not have duplicate books)
7. BONUS: Allow newly added books to persist (optimistic rendering or pessimistic rendering)
