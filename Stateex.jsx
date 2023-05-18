import React from "react";
export default class Stateex extends React.Component
{
    state={
        name:'',
        job:'',
        dept:''
    }
    valchng=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
    render()
    {
        return(
            <>
            <ul>
                <li>name:{this.state.name}</li>
                <li>job role:{this.state.job}</li>
                <li>dept:{this.state.dept}</li>
            </ul>
            <br></br>
            Name:
            <input type="text" name="name" onChange={this.valchng}/>
            <br></br>
            select job role:
            <select name="job" id="" onChange={this.valchng}>
                <option value="">select job role</option>
                <option value="it/ites">software</option>
                <option value="bank">banking</option>
                <option value="education">feculty</option>
                <option value="helth">doctor</option>
            </select>
            <br></br>
            dept:
            <input type="text" name="dept" onChange={this.valchng} />
            </>
        )
    }
}