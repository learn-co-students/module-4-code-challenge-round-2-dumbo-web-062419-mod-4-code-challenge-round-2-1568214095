import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={() => props.bookSwitcheroo(props.book)} src={props.book.img} alt='wut' />
    </div>
  );
};

export default Book;
