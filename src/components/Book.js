import React from "react";

const Book = props => {
  // console.log("book", props)
  return (
    <div onClick = {()=> props.handleClick(props.book)}>
      <h3>{props.book.title}</h3>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
