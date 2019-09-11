import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = ("http://localhost:3005/books")

class App extends Component {
  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(booksData => this.setState({
        books: booksData
      }))
  }

  addToBookShelf = (bookTBADDED) => {
    this.setState({
      bookShelf: [...this.state.bookShelf, bookTBADDED]
    })
    
  }

  removeFromBookShelf = (bookTBRemoved) => {
    const newBookArray = this.state.bookShelf.filter(book => book !== bookTBRemoved )
    this.setState({
      bookShelf: newBookArray
    })
  }
  

  handleNewBook = (data) => {

    const formatedData = {
      "title": data.title,
      "author": data.author,
      "img": data.image
    }

    // this.setState({
    //   books: [...this.state.book,formatedData]
    // })


    this.setState({
      books: [...this.state.books,formatedData]
    })
    console.log(formatedData)
}




  render() {
    // console.log(this.state)
    return (
      <div className="book-container">
        <BookList handleNewBook={this.handleNewBook}   books={this.state.books} addToBookShelf={this.addToBookShelf}  />
        <Bookshelf books={this.state.bookShelf} removeFromBookShelf={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
