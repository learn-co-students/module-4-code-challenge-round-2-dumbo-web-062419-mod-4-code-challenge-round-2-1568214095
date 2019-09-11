import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks:[],
    favBooks:[]

  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(obj => this.setState({allBooks:obj}))
  }



  addBook = (obj) =>{
    const newBook = {...obj}
    this.setState({
      favBooks: [...this.state.favBooks, newBook]
    })
  }

  removeBook = (obj) => {
    let index = this.state.favBooks.indexOf(obj)
    let books = [...this.state.favBooks]
    books.splice(index, 1)
    this.setState({
      favBooks: books
    })
  }



  render() {
    return (
      <div className="book-container">
        <BookList allBooks = {this.state.allBooks} addBook={this.addBook}/>
        <Bookshelf favBooks = {this.state.favBooks} removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;
