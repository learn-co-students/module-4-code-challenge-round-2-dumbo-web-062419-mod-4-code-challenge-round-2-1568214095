import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const books = this.props.books.map(book => {
      return <Book handleClickedBook={this.props.handleClickedBook} book={book}/>
    })
    
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmitForm={this.props.handleSubmitForm}/>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
