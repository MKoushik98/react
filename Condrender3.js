import React from "react"; 
import Key3 from './Key3'
export default class Condrender3 extends React.Component{
    state={
        isloggedin:true
    }

    render(){
        return(
            <>
            <h3>Props passed the react concept</h3>
            <Key3 x={this.state.isloggedin}></Key3>
            
            
            </>
        )
    }
}