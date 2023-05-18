import React from "react";
class Practice extends React.Component

{
state={
    name:'',
    loc:'',
    age:'',
    gen:'',
    result:''
}
change=(e)=>{
this.setState({[e.target.name]:[e.target.value]})
}
update=(e)=>{
    let ans='Your name is '+this.state.name+' Your location is '+this.state.loc+' Your gender is '+this.state.gen;
    this.setState({result:ans})

}

render(){
    return(
        <div style={{color:"black",backgroundColor:"lightblue"}}>
            Name:
            <input type="text" name="name" onChange={this.change}></input>
            <br></br>
            Location:
            <input type="text" name="loc" onChange={this.change} />
            <br></br>
            Age:
            <input type="number" name="age" onChange={this.change} />
            <br></br>
            Gender:
            <input type="radio" name="gen" onChange={this.change} />male
            <input type="radio" name="gen" onChange={this.change} />female
            <br></br>
            <input type="button" value="SHOW" onClick={this.update}></input>

            <h2>{this.state.result}</h2>

        </div>
    )
}
}

export default Practice