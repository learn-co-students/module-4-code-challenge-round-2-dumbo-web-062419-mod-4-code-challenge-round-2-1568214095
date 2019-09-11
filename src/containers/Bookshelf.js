import React, { Component } from "react";
import Book from "../components/Book";

class Bookshelf extends Component {


  render(){
    const allBooks = this.props.books.map(book =>
      <Book
        key={book.id}
        book={book}
        handleClick={this.props.removeFromBookShelf}
      />
    )


    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default Bookshelf;
