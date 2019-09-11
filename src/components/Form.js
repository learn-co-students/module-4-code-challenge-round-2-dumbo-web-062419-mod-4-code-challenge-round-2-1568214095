import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    image: ''
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleNewBook(this.state)
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleChange} placeholder="title" name="title"></input>
          <input type="text" value={this.state.author} onChange={this.handleChange} placeholder="author" name="author"></input>
          <input type="text" value={this.state.image} onChange={this.handleChange} placeholder="image" name="image"></input>
          <button type="submit">Add book</button>
        </form>
      </div>
    )
  }
}

export default Form;
