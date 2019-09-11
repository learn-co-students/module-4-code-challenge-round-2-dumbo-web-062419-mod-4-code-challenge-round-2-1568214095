import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  
const renderBooks = props.allBooks.map(book => <Book handleClick={props.handleClick} key={book.id} book={book}/>)  
  

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks}</ul>
    </div>
  );
};

export default Bookshelf;
