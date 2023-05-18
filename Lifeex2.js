import React,{Component} from 'react'
export default class Lifeex2 extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            name:'sourav',
            email:'sk123@gmail.com'

        }
    }
    render(){
        return(
            <>
            <p>{this.state.show? <Child nm={this.state.name} em={this.state.email}></Child>:null}</p>
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Click me to toggle</button>

            
            
            </>
        )
    }
}

//Child component
export class Child extends Component{
    componentWillMount(){
        alert("Child is loaded")
    }
    componentWillUnmount(){
        alert("child will unmount")
    }
    render(){
        return(
            <div>
                <h3>I am Child Component</h3>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.email}</li>
                </ul>
            </div>
        )
    }
}