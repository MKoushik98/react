import React from 'react'
const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa','raja','seema'];   
const listItems  = myList.map((val,index)=>{   
        return <li key={index+1}>{val}</li>;   
    });     
// const mydata=myList.map((val,index)=>{
//     return  <option value={index}>{val}</option>
// })

class List extends React.Component
{
    render(){
        return(
           <div>
               <h2>Unordered List :</h2>  
            <ul>{listItems}</ul>
            <br></br>
            <h2>Ordered List :</h2>
            <ol>{listItems}</ol>
            {/* <br></br>
            <select multiple>
                {mydata}
            </select> */}
           </div>
        );

    }
     
}
export default List;