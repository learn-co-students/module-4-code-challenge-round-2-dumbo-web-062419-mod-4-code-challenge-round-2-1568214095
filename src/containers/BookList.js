import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBook = () => (this.props.allBooks.map(book => <Book handleClick={this.props.handleClick} key={book.id} book={book}/>));

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form formhandler={this.props.formHandler}/>
        <ul>{this.renderBook()}</ul>
      </div>
    );
  }
}

export default BookList;
