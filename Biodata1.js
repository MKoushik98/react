import React from "react";
export default class Biodata1 extends React.Component{
    state={
        name:'',
        age:'',
        loc:'',
        gen:''
    }
    update=(e)=>{
        setTimeout(()=>{
            this.setState({name:"Koushik",age:24,loc:"Arambagh",gen:"Male"})
        },5000)
        let a=document.getElementById('h3')
        setTimeout(()=>{
            a.innerHTML="Thank You Koushik"
        },5000)
    }
    

    render(){
        return(

            <>
            <h3 id="h3"></h3>
            <ul>
                <li>Name:{this.state.name}</li>
                <li>Age:{this.state.age}</li>
                <li>Loc:{this.state.loc}</li>
                <li>Gen:{this.state.gen}</li>


            </ul>
            <button onClick={this.update}>UPDATE</button>
            
            
            </>
        )
    }
}