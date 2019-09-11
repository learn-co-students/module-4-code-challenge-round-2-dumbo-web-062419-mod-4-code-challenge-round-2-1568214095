import React from "react";

const Book = props => {
  

  const handleClick = (book) => (props.handleClick(props.book)) 

  return (
    <div onClick={handleClick}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.title}/>
    </div>
  );
};

export default Book;