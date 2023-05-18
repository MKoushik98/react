import React from "react";
export default function Childc(props){
    
        switch(props.x){
            case true:{
               return <button>Login</button>
            }
            case false:
                {
                    return <button>Logout</button>

                }
                default:{
                    return <p>Try Again</p>
                }

        }

}
