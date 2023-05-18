import React from "react";

class Lifecycle extends React.Component{
    constructor(){
        super()
        this.state={hello:"welcome to kolkata"}
        console.log("constructor is called")
    }
    componentWillUnmount(){
        alert("component is loading now")
        console.log("componentwillmount() is called")
    }
    componentDidMount(){
console.log("componentDidMount() is called")
    }
    changeState=(e)=>{
        this.setState({hello:"EjobIndia"})
    }
    render(){
        return(
            <div>
                <h1>Welcome all,{this.state.hello}</h1>
                <h2><button onClick={this.changeState}>Click Here!</button></h2>
            </div>
        )
    }
    shouldComponentUpdate(){
        console.log("this.shouldComponentUpdate() is called")
        return true
    }
    componentWillUpdate(){
        alert("state value will be updated soon")
        console.log("ComponentwllUpdate() is called")
    
    }
    componentDidUpdate(){
        alert("state value is updated")
        console.log("componentdidUpdate is called...")
    }
}
export default Lifecycle