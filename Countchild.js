import React from "react";
export default class Countchild extends React.Component
{
    render(){
        return(
            <>
            Count is:{this.props.val}
            <input type="button" value="Increment" onClick={this.props.incrfunc}></input>
            
            
            </>
        )
    }
}