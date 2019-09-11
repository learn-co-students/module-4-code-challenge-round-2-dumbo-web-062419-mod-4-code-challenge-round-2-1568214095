import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const books = this.props.books.map(book => {
      return <Book key={book.id} bookSwitcheroo={this.props.bookSwitcheroo} book={book} />
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newBook={this.props.newBook} />
        {books}
      </div>
    );
  }
}

export default BookList;
