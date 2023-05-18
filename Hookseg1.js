import React,{useState} from "react";
function Hookseg1(){
    const[age,setAge]=useState(30)
    const[loc,setLoc]=useState('patna')
    const[name,setName]=useState('Avishek')
    const valueChange=(e)=>{
        if(e.target.name==='name'){
            setName(e.target.value)
        }
    
    else if(e.target.name==='age'){
        setAge(e.target.value)
    }
    else if(e.target.name==='loc'){
        setLoc(e.target.value)
    }
}

return(
    <>
    <h3>I am {age} years old.My name is {name}. I stay in {loc}</h3>
    ENTER NAME:
    <input type="text" name="name" onChange={valueChange}></input>
    <input type="number" name="age" onChange={valueChange}></input>
    <input type="text" name="loc" onCanPlay={valueChange}></input>
    <select name="loc" onChange={valueChange}>
        <option value=""></option>
        <option value="kolkata">Kolkata</option>
        <option value="howrah">Howrah</option>
        <option value="sehaldah">sehaldah</option>
        <option value="new jalpaiguri">NGP</option>
        <option value="darjeling">Darjeling</option>

    </select>
    
    </>
)
}
export default Hookseg1