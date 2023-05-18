import React from "react";
class Form1 extends React.component

        //Conditional Rendering
{
    constructor(){
        super();
        this.state={ username:''}
    }
    myChangeHandler=(e)=>{
        this.setState({username:e.target.value})
    }
    render(){
        let header=0;
        if(this.state.username){
            header=<h1>Hello welcome,{this.state.username}</h1>
        }
        else{
            header=''
        }
        return(
            <div>
                {header}
                <p>Enter your name</p>
                <input type="text" onChange={this.myChangeHandler}></input>
            </div>
        )
    }
    

}
export default Form1