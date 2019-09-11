import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  

  render() {
    // console.log(this.props)
    const book = this.props.allBooks.map(book => 
      {return <Book 
      book={book} 
      key={book.id} 
      handleClick={this.props.addBook}
      />}
    )
    // console.log("book", book)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul> {book}</ul>
      </div>
    );
  }
}

export default BookList;
