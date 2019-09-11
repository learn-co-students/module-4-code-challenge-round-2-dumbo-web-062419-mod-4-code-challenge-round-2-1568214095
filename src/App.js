import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    bookShelf: [],
    keyword: ''
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(allBooks => this.setState({allBooks}))
  }

  addToBookshelf = book => (
    this.state.bookShelf.includes(book) ? null : this.setState({bookShelf: [...this.state.bookShelf, book]})
  );

  removeFromBookshelf = book => {
    const newBookshelf = this.state.bookShelf.filter(function(newArray){
      return newArray !== book;
    });
    this.setState({bookShelf: newBookshelf});
  }

  formHandler = event => {
    event.preventDefault();
    this.setState({keyword: event.target.value})    
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleClick={this.addToBookshelf} allBooks={this.state.allBooks} formHandler={this.formHandler}/>
        <Bookshelf handleClick={this.removeFromBookshelf} allBooks={this.state.bookShelf} />
      </div>
    );
  }
}

export default App;