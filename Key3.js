import React from "react";
export default function Key3(props){
    switch(props.x){
        case true:
        return <button>Login</button>
        case false:
        return <button>Logout</button>
        default:
            return <h3>Sorry try again...</h3>

        

    }
       
    
}