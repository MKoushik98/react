import React from "react";
class Form3 extends React.Component
{
    constructor(){
        super()
        this.state={username:''}
    }
    mySubmitHandler=(event)=>{
        event.preventDefault();
        if(this.state.username){
            alert("You are submiting "+this.state.username)
        }
        else{
            alert("username is required")
        }
    }
    myChangeHandler=(e)=>{
        this.setState({username:e.target.value})
    }
    render(){
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h1 style={{color:"green"}}>Hello welcome to my page<strong style={{color:"blue"}}> {this.state.username}</strong></h1>
                <p>Enter your name and submit </p>
                <input type="text" onChange={this.myChangeHandler}></input>
                <input type="submit" value="Ragister"></input>



            </form>
        );
    }
}
export default Form3