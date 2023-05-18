import React from "react";
export default class Change extends React.Component
{
    state={
        name:'',
        loc:'',
        gender:''
    }
    valch=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
    render()
    {
        return(
            <>
            <input type="text" name="name" />
            <br></br>
            <input type="text" name="loc"/>
            <br></br>
            <input type="text" name="dept" />
            <br></br>
            <input type="button" name="btn" value="show" onChange={this.valch}/>
            </>
        )
    }
    
}

