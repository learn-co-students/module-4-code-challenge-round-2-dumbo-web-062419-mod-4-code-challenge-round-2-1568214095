import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    // console.log(this.props.allBooks)

    const mapBooks= this.props.allBooks.map((books)=>{
      return <Book handleClick={this.props.addBook} book={books} key={books.id} />
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{mapBooks}</ul>
      </div>
    );
  }
}

export default BookList;
