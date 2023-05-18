import React from 'react'

const data = [ 
    {id:0,  title :'Default',content:'select content'} ,
    {id: 1, title: 'First', content: 'Welcome to JavaTpoint!!'},  
    {id: 2, title: 'Second', content: 'It is the best ReactJS Tutorial!!'},  
    {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS topics!!'}  
  ];     //array of objects 

//Make sure every item in the list has a unique key.
//Keys are necessary to improve performance of your React app

const showlist=data.map((item)=>{
   return <li key={item.id}>{item.title}</li>;
});

class Keys extends React.Component
{
    render(){
        return(
          <div>
              <ul>{showlist}</ul>
              <br></br><br></br>
              <ol>{showlist}</ol>
          </div>
        );
    }

}

export default Keys;