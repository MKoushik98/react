import React from "react";

const data = [ 
    {id:0,  title :'Default',content:'select content'} ,
    {id: 1, title: 'First', content: 'Welcome to JavaTpoint!!'},  
    {id: 2, title: 'Second', content: 'It is the best ReactJS Tutorial!!'},  
    {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS topics!!'}  
  ];

  let newdata=data.map((user)=>{
    return <li key={user.id}>{user.title}</li>
  })



class Keys2 extends React.Component{
    render(){
        return(
            <div>
                <ul>{newdata}</ul>
                <br></br><br /><br />
                <ol>{newdata}</ol>
            </div>
        )
    }
}
export default Keys2
