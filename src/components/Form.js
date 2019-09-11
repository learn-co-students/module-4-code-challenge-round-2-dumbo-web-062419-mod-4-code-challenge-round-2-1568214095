import React from "react";

class Form extends React.Component {
  state ={
    title: '',
    author: '',
    img: ''
  }

  titleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  authorChange = (e) => {
    this.setState({ author: e.target.value})
  }

  imgChange = (e) => {
    this.setState({ img: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newBook(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        title<input onChange={this.titleChange} type="text" name="title" value={this.state.title} />
        author<input onChange={this.authorChange} type="text" name="author" value={this.state.author}/>
        img<input onChange={this.imgChange} type="text" name="img" value={this.state.img}/>
        <input type="submit"  />
      </form>
    );
  }
}

export default Form;
