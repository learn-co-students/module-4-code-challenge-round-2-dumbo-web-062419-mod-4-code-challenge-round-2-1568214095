import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleClickedBook(props.book)}>
      <img src={props.book.img}/>
      <h2>{props.book.title}</h2>
      
    </div>
  );
};

export default Book;
