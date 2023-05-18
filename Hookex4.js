import React from "react";
import { useState,useMemo } from "react";
export default function Hookex4(){
    const[count,setCount]=useState(0)
    const[todos,setTodos]=useState([])
    const calculation=useMemo(()=>
        expensiveCalculation(count),[count])
        const increment=()=>{
            setCount((count)=>count+1)
        }
        const addTodo=()=>{
            setTodos((todos)=>[...todos,"New task added"])
        }
        return(
            <div>
                <div>
                    <h2>My Todos</h2>
                    {todos.map((todo,index)=>{return <p key={index}>{todo}</p>})}
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <hr></hr>
                <div>
                    count:{count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
                </div>
            </div>
            
        )
    
}
//User define function
const expensiveCalculation=(num)=>{
    console.log("calculating...")
    for(let i=0;i<100;i++){
        num++
    }
    return num
}