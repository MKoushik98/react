import React from 'react'
//functional component
//message component
function Message(props){
    if(props.val)
    return <h1>Welcome back</h1>
    else
    return <h1>please login first</h1>
}
//login component
function Login(props){
    return(
        <button onClick={props.clickInfo}>Login</button>
    )
}
//logout component
function Logout(props){
    return <button onClick={props.clickout}>Logout</button>
}
//parent component
class Condrender extends React.Component{
    constructor(props){
        super(props)
        this.state={isLoggedIn:false}
    }
    handleLogin=(e)=>{
        this.setState({isLoggedIn:true})
    }
    handleLogout=(e)=>{
        this.setState({isLoggedIn:false})
    }
    render(){
        return(
            <div>
                <h1>Method passing in props example</h1>
                <Message val={this.state.isLoggedIn}></Message>
                {
                    (this.state.isLoggedIn)?(<Logout clickout={this.handleLogout}></Logout>):(<Login clickInfo={this.handleLogin}></Login>)
                }
            </div>
        )
    }
} 
export default Condrender
