import React from "react";
export default class Fourth extends React.Component {
    state = {
        id: 10,
        name: 'Raj',
        loc: 'Kolkata',
        email: 'sk123@gmail.com'
}
valupd=()=>{
    this.setState({name:'Avijit',loc:'pune',email:'av12@gmail.com'})
}
render()
{
    return (
            < div >
        <ul>
            <li>id is:{this.state.id}</li>
            <li>name is:{this.state.name}</li>
            <li>loc is:{this.state.loc}</li>
            <li>email is:{this.state.email}</li>
        </ul>
        <br></br>
        <input type="button" value='update' onClick={this.valupd} />
            </div >
            
        )
    }
}