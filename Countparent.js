import React from "react";
import Countchild from "./Countchild";
export default class Countparent extends React.Component
{
    constructor(props){
        super(props)
            this.state={
                count:0
            
        }

    }
    updcount=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <>
            <Countchild val={this.state.count} incrfunc={this.updcount}></Countchild>
            
            </>
        )
    }
}