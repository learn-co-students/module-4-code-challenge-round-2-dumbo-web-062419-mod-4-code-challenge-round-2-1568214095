import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    const allBooks = this.props.books.map(book =>
      <Book
        key={book.id}
        book={book}
        handleClick={this.props.addToBookShelf}
      />
    )

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
