import React from "react";
import Findsicopy from "Findsicopy";
import Findsi from "./Findsi";
export default class Dimensioncopy extends React.Component
{
   state={
    prin:'',
    rate:'',
    time:'',
    status:false
   }

   valchng=(e)=>{
    this.setState({[e.target.name]:[e.target.value]})
   }
   calc=()=>{
    this.setState({status:true})
   }
   reset=()=>{
    this.setState({status:false})
    this.setState({prin:''})
    this.setState({rate:''})
    this.setState({time:''})
   }

   render(){
    return(
        <>
        <input type="text" name="prin" id="" onChange={this.valchng} /><br />
        <input type="text" name="rate" onChange={this.valchng} /><br></br>
        <input type="text" name="time" onChange={this.valchng} /><br></br>
        <input type="button" onClick={this.update} value="Calc" />
        <input type="button" name="" id="" onClick={this.reseted} value="Reset" />

        {
            (this.state.status==true)?
            (<Findsi p={this.state.prin} r={this.state.rate} t={this.state.time}></Findsi>):(null)
        }

        
        
        </>
    )
   }
}