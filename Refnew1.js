import React from "react";
 class Refnew1 extends React.Component{
    constructor(){
        super()
        this.callref=React.createRef();
        this.callref2=React.createRef();
        this.callref3=React.createRef();
        this.callref4=React.createRef();
    }
    valuepd=()=>{
        this.callref.current.innerText="Thank you!Visit again...."
        this.callref2.current.innerText="This is a small city."
        alert("email:"+this.callref3.current.value)
        this.callref4.current.value="Punjab"
    }
    render(){
        return(
            <>
            <h1 ref={this.callref}>Welcome To Arambagh</h1>
            <p ref={this.callref2}>This is Netaji More</p>
            Email:
            <input type="text" ref={this.callref3}></input><br></br>
            LOCATION:
            <input type="text" ref={this.callref4} value="Arambagh"></input><br></br>
            <input type="button" onClick={this.valuepd} value="Click Me"></input>
            
            </>
        )
    }
}
export default Refnew1
