import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const book = props.books.map(book => {
    return <Book bookSwitcheroo={props.bookSwitcheroo} book={book} />
  })

  return (
    <div>
      <h1>Book Shelf</h1>
      {book}
    </div>
  );
};

export default Bookshelf;
