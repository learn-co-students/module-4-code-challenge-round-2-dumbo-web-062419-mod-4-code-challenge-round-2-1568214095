import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log(props)
  const mappedBooks = props.books.map((book, index) => <Book key={`${book.id}-${index}`} book={book} handleClick={props.removeFromBookShelf} />)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{mappedBooks}</ul>
    </div>
  );
};

export default Bookshelf;
