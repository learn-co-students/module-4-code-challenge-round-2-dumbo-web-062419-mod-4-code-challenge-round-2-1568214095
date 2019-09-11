import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("trying to submit my book.....")
    this.props.handleNewBookSubmit(this.state)
  }

  render() {
    console.log(this.state)
    return <div><h1>Add New Book: </h1>
    {<form onSubmit={(e) => this.handleSubmit(e)}>
      <label>Title: </label>
      <input value={this.state.title} onChange={this.handleChange} type="text" name="title" />
      <label>Author: </label>
      <input value={this.state.author} onChange={this.handleChange} type="text" name="author" />
      <label>Img: </label>
      <input value={this.state.img} onChange={this.handleChange} type="text" name="img" />
      <input type="submit" value="Submit" />
    </form>}</div>;
  }
}

export default Form;

