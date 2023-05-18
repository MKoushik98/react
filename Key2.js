// import React, { Component } from "react";
import React from "react"

//parent Component
class Key2 extends React.Component{

constructor(props){
    super(props)
    this.state={
        employees:[
            {
                empname:'john',
                id:1

            },
            {
                empname:'stave',
                id:2
            },
            {
                empname:'alex',
                id:3
            }
        ]
    }
}
render(){
    return(
        <div>
            <h1>React Keys</h1>
            <div>
                {this.state.employees.map((data,i)=>{
                    <Employee key={i} empData={data}></Employee>

                })}
            </div>
        </div>
    )
}
}

//Clild componant
class Employee extends React.Component
{
    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.empdata.empname}</li>
                    <li>{this.props.empdata.id}</li>
                </ul>
            </div>
        )
    }
}
export default Key2;