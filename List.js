import React from "react";
const myList=['petar','sachin','kelvin','dhoni','alisha','raja','seema']
const listItems=myList.map((val,index)=>{return <li key={index+1}>{val} </li>})
class List extends React.Component
{
    render(){
        return(
            <div>
                <h2>Unordered list</h2>
                <ul>{listItems}</ul>
                <h2>Ordered List</h2>
                <ol>{listItems}</ol>
            </div>
        )
    }
}