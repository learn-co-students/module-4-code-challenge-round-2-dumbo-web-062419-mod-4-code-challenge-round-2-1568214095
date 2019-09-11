import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form"

class App extends Component {

  state={
    allBooks : [],
    shelfBooks: [],
  
  }
  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(resp=> resp.json())
    .then(allBooks => {
      this.setState({allBooks})
    })
  }

  addBook=(book)=>{
    // console.log(book)
    this.setState({shelfBooks: [...this.state.shelfBooks, book]})
    
  }

  removeBook=(removeBook)=>{
    // console.log(removeBook)
   const newBook= this.state.shelfBooks.filter((books)=> books !==removeBook)
      this.setState({ shelfBooks: newBook})
    
  }
  
  render() {
    // console.log(this.state.allBooks)
    console.log(this.state.shelfBooks)
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} addBook={this.addBook}/>
        <Bookshelf shelfBooks={this.state.shelfBooks} removeBook={this.removeBook} />
        <Form />
      </div>
    );
  }
}

export default App;
