import React from "react";
import Childc from "./Childc";
export default class parentc extends React.Component{
    state={
        isloggedin:true
    }




    render(){
        return(
            <>
            <h1>Props passing the React concept</h1>
            <Childc x={this.state.isloggedin}></Childc>
            
            
            
            </>
        )
    }
}

