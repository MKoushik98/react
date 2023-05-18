import React from "react";
export default class Refnew2 extends React.Component{
    constructor(){
        super()
    this.hdref=React.createRef()
    this.pref=React.createRef()
    this.mailref=React.createRef()
    this.locref=React.createRef()
}
change=(e)=>{
    alert(this.mailref.current.value)
    this.hdref.current.innerText="Thank you visit again"
    this.pref.current.innerText="This is  good class"
    this.locref.current.value="Arambagh"


}









    render(){
        return(
            <>
            <h2 ref={this.hdref}>Welcome to React App</h2>
            <p ref={this.pref}>This is a React Class</p>
            Enter email:
            <input type="email" ref={this.mailref} placeholder="type email id"></input><br></br>
            Enter location:
            <input type="text" ref={this.locref} value="Kolkata" placeholder="type location"></input><br></br>
            <input type="button" onClick={this.change} value="Show"></input>
            
            
            
            
            </>
        )
    }
}