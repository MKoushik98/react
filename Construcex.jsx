import React from "react";
export default class construcex extends React.Component
{
    constructor()
    {
        super()//use for call the componatnt
        this.state={
            id:10,
            email:'sk@gmail.com'
        }
        console.log('constructor is called.')
    }
    render()
    {
        return(
            <>
            <b>
                id is:{this.state.id}
                <br></br>
                email is:{this.state.email}
            </b>
            </>
        )
    }
}
