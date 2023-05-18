import React from "react";
import Authbutton from "./Authbutton";
class Condrend2 extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            isLoggedin:'hello'
        }
    }
    render(){
        return(
            <div>
                <h1>Props passing the concept in react</h1>
            <Authbutton x={this.state.isLoggedin}></Authbutton>
    
            </div>
        )
    }
}
export default Condrend2;