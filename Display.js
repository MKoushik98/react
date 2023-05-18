import React,{useState,useRef} from 'react';
export default function Display(){
    const[data,setData]=useState({name:'',email:'',age:''})
    const testref=useRef();
    const valchng=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const showinfo=(e)=>{
        let info='hello'+data.name+'email is'+data.email+'age is'+data.age
        testref.current.innerText=info;

    }
    return(
        <>
        <input type="text" name="name" onChange={valchng} value={data.name}></input>
        <br></br>
        <input type="text" name="email" onChange={valchng}value={data.email}></input>
        <br></br>
        <input type="text" name="age" onChange={valchng}value={data.age}></input>
        <br></br>
        <input type="button" name="name" onClick={showinfo}></input>
        <br></br>
        <h3 ref={testref}>Comming soon</h3>
        
        </>
    )

}