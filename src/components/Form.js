import React from "react";

class Form extends React.Component {

  formHandler = () => (this.props.formHandler)

  render() {

    return <h1>{

    <form>
      <input type="text"onChange={this.formHandler} />
    </form>
    
    
    }</h1>;
  }
}

export default Form;
