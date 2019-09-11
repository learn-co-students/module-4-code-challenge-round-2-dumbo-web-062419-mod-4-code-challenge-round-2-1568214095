import React from "react";

class Form extends React.Component {
  
  state={
    input: "",
    submit: ""

  }

  handleChange = (e)=>{
    this.setState({input: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit = (e)=>{
    // console.log(e)
    e.preventDefault()
    // this.setState({submit: e.state.input})
 //since It was breaking when setting state I have alerted you with the book title :)
    alert('BookTitle is : ' + this.state.input);
    console.log(this.state.input)
    // upon submit just render the dispaly on the page

  }

  render() {
    console.log(this.state.submit)
    return (

    <form onSubmit={this.handleSubmit}>
        <label>
          Book Title:
          <input  type="text" value={this.state.input} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
   
    )}
}

export default Form;
