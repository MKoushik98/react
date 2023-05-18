import React from 'react'

// functional component
const AuthButton = (props) => {
  
    switch (props.x) {
      case true:
        return <button>Logout</button>;
      case false:
        return <button>Login</button>;
      default:
        return <h3>Sorry invalid case!</h3>;
    }
  };
  
  export default AuthButton;