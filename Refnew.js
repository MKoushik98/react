import React from "react";
export default class Refnew extends React.Component {
  constructor() {
    super();
    this.callRef = React.createRef();
    this.callRef2 = React.createRef();
    this.callRef3 = React.createRef();
    this.callRef4 = React.createRef();
  }

  valupd = (e) => {
    this.callRef.current.innerText = 'THNAK YOU  ! VISIT AGAIN.'
    this.callRef2.current.innerText = 'this is a good class'
    alert("EMAIL :" + this.callRef3.current.value)
    this.callRef4.current.value = 'punjab'
  }
  render() {
    return (
      <>
        <h3 ref={this.callRef}>WELCOME TO REACT APP</h3>
        <p ref={this.callRef2}>this is my react class</p>
        <br></br>
        EMAIL:
        <input type='email' ref={this.callRef3} />
        <br></br>
        LOCATION:
        <input type='text' value='KOLKATA' ref={this.callRef4} />
        <br></br>
        <input type='button' value='CHANGE' onClick={this.valupd} />
      </>
    )
  }
}