import React from "react";

class Form extends React.Component {

  state ={
    title: '',
    img: '',
    author: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) => {
     event.preventDefault()
    this.props.addNewBook(this.state)
  }


  render() {
    console.log(this.state)
    return (
        <div>
          <h1>Add Book</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            <label>Author</label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
            <label>Image</label>
            <input type="text" name="img" value={this.state.img} onChange={this.handleChange} />

            <input type="submit" />
          </form>
        </div>
    )
  }
}

export default Form;
