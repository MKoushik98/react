import React from "react";
export default class Add extends React.Component
{
    state={
        list:[],
        nm:''
    }
    valchng=(e)=>{
        this.setState({nm:e.target.value})
    }
    addnm=(e)=>{
        this.setState({list:[...this.state.list,this.state.nm]})
        this.setState({nm:''})
    }
    render(){
        return(
            <>
            enter name:
            <input type="text" name="nm" onChange={this.valchng} value={this.state.nm}></input>
            <br></br>
            <input type="button" value="add" onClick={this.addnm}></input>
            <ol>
                {
                this.state.list.map((val)=>{
                    return <li>{val}</li>

                })
            }
            </ol>
            </>
        )
    }
}