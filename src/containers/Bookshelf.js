import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
   
  const mapBooks = props.shelfBooks.map((books,index)=>{
    return <Book handleClick={props.removeBook} book={books} key={`${books.id}-${index}`}/>
  })

  return (

    <div>
      <h1>Book Shelf</h1>
      <ul>{mapBooks}</ul>
    </div>
  );
};

export default Bookshelf;
