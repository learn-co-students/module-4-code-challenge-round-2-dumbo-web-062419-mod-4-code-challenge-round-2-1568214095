import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  render() {
    console.log(this.props)
    const mappedBooks = this.props.books.map((book, index) => <Book key={`${book.id}-${index}`} book={book} handleClick={this.props.addToBookShelf} />)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleNewBookSubmit={this.props.handleNewBookSubmit}/>
        <ul>{mappedBooks}</ul>
      </div>
    );
  }
}

export default BookList;
