import React from "react"
import Siparent from "./Siparent"
export default class Sicalculator extends React.Component{
    state={
        prin:'',
        rate:'',
        time:'',
        status:false
    }
    change=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
    valchng=(e)=>{
        this.setState({status:true})
    }
    reset=(e)=>{
         this.setState({status:false})
         this.setState({prin:'',rate:'',time:''})
    }




    render(){
        return(
            <>
            <input type="number" name="prin" value={this.state.prin} onChange={this.change} placeholder="type principle"></input>
            <input type="number" name="rate" value={this.state.rate} onChange={this.change} placeholder="type rate"></input>
            <input type="number" name="time" value={this.state.time} onChange={this.change} placeholder="type time"></input>
            <button type="button" onClick={this.valchng}>Calculation</button>
            <button type="button" onClick={this.reset}>Reset</button>

            {
                (this.state.status===true)?
                (<Siparent p={this.state.prin} r={this.state.rate} t={this.state.time}></Siparent>):(null)
            }
            
            
            
            </>
        )
    }

}