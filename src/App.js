import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from './components/Form';

class App extends Component {

  constructor(){
    super()
    this.state = {
      books: [],
      bookShelf: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(data => this.setState({books: data}))
  }

  addToBookShelf = (returnedBook) => {
    if(this.state.bookShelf.includes(returnedBook)){
      return;
    }
    else {
      this.setState({
        bookShelf: [...this.state.bookShelf, returnedBook]
      })
    }
  }

  handleRemove = (returnedBook) => {
    let updatedShelf = this.state.bookShelf.filter(book =>
      book !== returnedBook
    )

    this.setState({
      bookShelf: updatedShelf
    })
  }

  addNewBook = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  render() {

    return (
      <div className="book-container">
        <Form
          addNewBook={this.addNewBook}
        /><br />
        <BookList
          books={this.state.books}
          addToBookShelf={this.addToBookShelf}
        />
        <Bookshelf
          books={this.state.bookShelf}
          removeFromBookShelf={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
