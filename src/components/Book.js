import React from "react";

const Book = props => {
  // console.log(props)
  // const bookPic = props.book.map(book => <img src="props.book.img"/>)
  return (
    <div onClick={() => props.handleClick(props.book)}>
      <h2>{props.book.title}</h2>
      {<img src={props.book.img} alt="bookcover" />}
    </div>
  );
};


export default Book;
