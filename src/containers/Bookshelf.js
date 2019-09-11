import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const books = props.books.map(book => {
    return <Book handleClickedBook={props.handleClickedBook} book={book}/>
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
  );
};

export default Bookshelf;
