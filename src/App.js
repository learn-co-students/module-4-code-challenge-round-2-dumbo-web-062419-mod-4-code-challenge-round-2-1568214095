import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => this.setState({books}))
  }

  handleClickedBook = (book) => {
    if (this.state.bookShelf.includes(book)) {
      return;
    }
    this.setState({
      bookShelf: [...this.state.bookShelf, book]
    })
  }

  removeBookFromShelf = (bookOnShelf) => {
    const updatedBookShelf = this.state.bookShelf.filter(book => {
      return book !== bookOnShelf
    })
    this.setState({
      bookShelf: updatedBookShelf
    })
  }

  handleSubmitForm = (newBook) => {
    console.log(newBook);
    
    fetch("http://localhost:3005/books", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newBook.title,
        author: newBook.author,
        img: newBook.img
      })
    })
    this.setState({
      books: [...this.state.books, newBook]
    })
  }
  
  render() {
    return (
      <div className="book-container">
        <BookList
        handleSubmitForm={this.handleSubmitForm}
        handleClickedBook={this.handleClickedBook}
         books={this.state.books}/>
        <Bookshelf 
        handleClickedBook={this.removeBookFromShelf}
        books={this.state.bookShelf}
        />
      </div>
    );
  }
}

export default App;
