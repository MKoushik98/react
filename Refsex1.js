import React from "react";
export default class Refsex1 extends React.Component
{
    constructor(){
        super()
        this.nameref=React.createRef()
        this.dateref=React.createRef()
        this.changeref=React.createRef()
    }
    show=(e)=>{
        alert(this.nameref.current.value+" "+this.dateref.current.value)
    }
    click=(e)=>{
        this.nameref.current.value="Have a nice day"
        this.changeref.current.innerText="Thank you visit again."

    }







    render(){
        return(
            <>
            <input type="text" ref={this.nameref} placeholder="Enter your name"></input><br></br>
            <input type="date" ref={this.dateref}></input><br></br>
            <button type="button" onClick={this.show}>Show!</button>
            <button type="button" onClick={this.click}>Click!</button>
            <h3 ref={this.changeref}></h3>
            
            
            
            </>
        )
    }
}