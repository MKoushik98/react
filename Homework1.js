import React, { useState, useRef } from "react";
export default function Homework1() {
    const [data, setData] = useState([])
    const nmref = useRef()
    const mailref = useRef()
    const dptref = useRef()

    const change = (e) => {

        let datalist = { nm: nmref.current.value, mail: mailref.current.value, dpt: dptref.current.value }
        setData([...data, datalist])
        nmref.current.value = ''
        mailref.current.value = ''
        dptref.current.value = ''

    }
    return (
        <>

            <input type="text" ref={nmref} style={{ marginLeft: "600px", textAlign: "center", height: "30px" }} placeholder="Enter Name"></input><br></br><br></br>

            <input type="email" ref={mailref} style={{ marginLeft: "600px", textAlign: "center", height: "30px" }} placeholder="Enter Email"></input><br></br><br></br>

            <input type="text" ref={dptref} style={{ marginLeft: "600px", textAlign: "center", height: "30px" }} placeholder="Enter Dept"></input><br></br><br></br>
            <input type="button" onClick={change} value="Click Me!" style={{ marginLeft: "650px", backgroundColor: "Blue", color: "white" }}></input><br></br><br></br>

            <table style={{ backgroundColor: "black", color: "white", borderRadius: "10px", marginLeft: "590px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td style={{ border: "2px solid white", borderRadius: "10px", textAlign: "center" }}>{val.nm}</td>
                                    <td style={{ border: "2px solid white", borderRadius: "10px", textAlign: "center" }}>{val.mail}</td>
                                    <td style={{ border: "2px solid white", borderRadius: "10px", textAlign: "center" }}>{val.dpt}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>






        </>
    )

}