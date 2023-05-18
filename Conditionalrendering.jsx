import React from "react";
export default class Conditionalrendering extends React.Component {

     //Conditional Rendering
     
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    namechng = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })


    }
    render() {
        let header = 0;
        if (this.state.username) {
            header = <h1>Hello Welcome,{this.state.username}</h1>

        }
        else {
            header = '';
        }
        return (
            <>
            {header}
                Enter Name:
                <input type="text" onChange={this.namechng} name="username"></input>


            </>
        )
    }
}