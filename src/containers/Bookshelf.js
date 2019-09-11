import React, { Component } from "react";
import Book from "../components/Book";


class Bookshelf extends Component {
  

  render() {
    console.log("bookshelf",this.props)
    let book = this.props.favBooks.map(book => {
      return <Book 
      book = {book}
      handleClick = {this.props.removeBook}
      />
    })
    // console.log("book", book)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{book}</ul>
    </div>
  );
  }
};

export default Bookshelf;
