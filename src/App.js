import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state ={
    books: [],
    bookShelf: false,
    currentBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res=>res.json())
      .then(books => this.setState({ books }))
  }

  bookSwitcheroo = (book) => {
    this.setState({ bookShelf: true, currentBooks: [...this.state.currentBooks, book] })
  }

  removeBook = (book) => {
    const booksNotBeingRemoved = this.state.currentBooks.filter(currentBook => {
      if (book !== currentBook) {
        return currentBook
      }
    })
    this.setState({ currentBooks: booksNotBeingRemoved })
  }

  newBook = (book) => {
    this.setState({books: [...this.state.books, book]})
  }

  render() {
    return (
      <div className="book-container">
        <BookList newBook={this.newBook} bookSwitcheroo={this.bookSwitcheroo} books={this.state.books} />
        <Bookshelf bookSwitcheroo={this.removeBook} books={this.state.currentBooks}/>
      </div>
    );
  }
}

export default App;
