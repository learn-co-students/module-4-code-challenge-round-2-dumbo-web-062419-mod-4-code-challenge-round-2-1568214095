import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleFormSubmission = (e) => {
    e.preventDefault()
    this.props.handleSubmitForm(this.state)
  }
  render() {
    
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input onChange={this.handleOnChange} value={this.state.title}type="text" placeholder="title" name="title"/>
        <input onChange={this.handleOnChange} value={this.state.author}type="text" placeholder="author" name="author"/>
        <input onChange={this.handleOnChange} value={this.state.img}type="text" placeholder="img" name="img"/>
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
