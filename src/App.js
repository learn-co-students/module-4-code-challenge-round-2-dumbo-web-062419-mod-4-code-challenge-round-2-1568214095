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
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(data => this.setState({books: data}))
  }

  addToBookShelf = (bookObj) => {
    if(!this.state.bookShelf.includes(bookObj)){
    this.setState({bookShelf: [...this.state.bookShelf, bookObj]})
    }
  }

  removeFromBookShelf = (bookObj) => {
    const filteredBooks = this.state.bookShelf.filter(book => book.id !== bookObj.id)
    this.setState({bookShelf: filteredBooks})
  }

  handleNewBookSubmit = (bookObj) => {
    // console.log(bookObj)
    this.setState({books: [...this.state.books, bookObj]})
  }

  render() {
    console.log(this.state)
    return (
      <div className="book-container">
        <BookList handleNewBookSubmit={this.handleNewBookSubmit} addToBookShelf={this.addToBookShelf} books={this.state.books}/>
        <Bookshelf books={this.state.bookShelf} removeFromBookShelf={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
