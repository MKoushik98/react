import React  from "react";
export default class Lifecycle3 extends React.Component
{
    state={
        name:'Sourav'
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"Avishek"})
        },5000)
    }
    componentDidUpdate(){
        document.getElementById('head3').innerText="Thank You"
    }
    render(){
        return(
            <>
            name:{this.state.name}
            <h3 id='head3'>Please wait for 5 sec...</h3>
            
            
            </>
        )
    }
}