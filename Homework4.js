import React from "react";
import { useState } from "react";
export default function Homework4(){
    const[table,setTable]=useState([])
    const [data,setData]=useState({Name:'',Description:'',Date:''})
    const[status,setStatus]=useState(false)
    const[id,setId]=useState()
    const updatevalue=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const tableupdate=(e)=>{
        if(data.Name==""||data.Description==""||data.Date=="")
        alert("please fill required filds")
        else {
            let info={
                tr_name:data.Name,
                tr_description:data.Description,
                tr_data:data.Date
            }
            setTable({...table,info})
            setData({Name:'',Description:'',Date:''})
        }
    }
    const deleterow=(index)=>{
        setTable(table.filter((value,i)=>i!==index))
    }
    const editrow=(index)=>{
        const copy=table.filter((value,i)=>i===index)
        copy.forEach((item)=>{
            setData({
                data:item.tr_date,
                name:item.tr_name,
                description:item.tr_description
            })
        })
    }
  
}