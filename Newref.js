import React from "react";
export default class Newref extends React.Component
{
    constructor(){
        super()
        this.callRef=React.createRef()
        this.callRef2=React.createRef()
        this.callRef3=React.createRef()
        this.callRef4=React.createRef()
    }
    valupd=(e)=>{
        this.callRef.current.innertext="thank you!Visit again"
        this.callRef2.current.innertext="this is a good class"
        alert("email:"+this.callRef3.current.value)
        this.callRef4.current.innertext="panjab"

    }
    render(){
        return(
            <>
            <h3 ref={this.callRef}>Welcome to react app</h3>
            <p ref={this.callRef2}>This is my react class</p>
            <br></br>
            email:
            <input type="email" ref={this.callRef3}></input>
            <br></br>


            {/* //incomplete */}
            
            </>
        )
    }
}