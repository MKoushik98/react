import React from "react";

export default class Refex2 extends React.Component {
  constructor(props) {
    super(props)

    // Create the ref
    this.textInput = React.createRef();
    this.state = {
      value: []
    }
  }
  // Set the state for the ref
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.value.push(this.textInput.current.value);
    this.setState({ value: this.state.value });
    this.textInput.current.value = "";
  };
  render() {
    return (
      <div>
        <ol type="I">
          {
            this.state.value.map((val, index) => { return <li key={index + 1}>{val}</li> })
          }
        </ol>
        <br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          ENTER NAME :<input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}