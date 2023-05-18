import React, { useState, useRef } from "react";
export default function Homework() {
    const [data, setData] = useState({ name: '', email: '', dept: '' })
    const testref1 = useRef()
    const testref2 = useRef()
    const testref3 = useRef()
    const valchng = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const change = (e) => {
        let info = data.name;
        let info1 = data.email;
        let info3 = data.dept;
         testref1.current.innerText =info;
        testref2.current.innerText = info1;
        testref3.current.innerText =info3;
    //   setData({name:'',email:'',dept:''})
    testref1.current.value=''
    testref2.current.value=''
    testref3.current.value=''
 }
    return (
        <>
            Enter Name:
            <input type="text" name="name" onChange={valchng} ></input>
            <br></br>
            Enter Email:
            <input type="email" name="email" onChange={valchng}  ></input>
            <br></br>
            Enter Department:
            <input type="text" name="dept" onChange={valchng}  ></input>
            <br></br>
            <input type="button" onClick={change} value="Click to fetch"></input>
            <table>

                <tbody>
                    <tr>

                        <td ref={testref1}></td>
                        <td ref={testref2}></td>
                        <td ref={testref3}></td>
                    </tr>
                </tbody>   
            </table>
        </>
    )
}

