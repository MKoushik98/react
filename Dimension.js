import React from "react";
import Findsi from "./Findsi";
export default class Dimension extends React.Component
{
    state={
        prin:'',
        rate:'',
        time:'',
        status:false
    }
    valChng=(event)=>{
        this.setState({[event.target.name]:[event.target.value]})
    }
    find=(event)=>{
        this.setState({status:true})
    }
    resetval=(event)=>{
        this.setState({status:false})
        this.setState({prin:'',rate:'',time:''})

    }
    render(){
        return(
            <>
            <input type="number" name="prin" onChange={this.valChng} value={this.state.prin} ></input>
            <input type="number" name="rate" onChange={this.valChng} value={this.state.rate}></input>
            <input type="number" name="time" onChange={this.valChng} value={this.state.time}></input>

            <button onClick={this.find}>CALC</button>
            <button onClick={this.resetval}>RESET</button>
            {
                (this.state.status===true)?
                (<Findsi p={this.state.prin} r={this.state.rate} t={this.state.time}></Findsi>):
                (null)
            }
            </>
        )
    }
}