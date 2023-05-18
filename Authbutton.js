import React from "react";
const Authbutton=(props)=>{
    switch(props.x){
        case true:
            return <button>Logout</button>
            case false:
                return<button>Login</button>
                default:
                    return <h3>Sorry invalid case</h3>
    }

}
export default Authbutton;