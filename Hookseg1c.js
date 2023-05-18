import { useState } from "react";
export default function Hookseg1c() {
    const [name, setName] = useState("Koushik")
    const [age, setAge] = useState(24)
    const [loc, setLoc] = useState("Arambagh")
    const valchng = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        }
        else if (e.target.name === "age") {
            setAge(e.target.value)
        }
        else if (e.target.name === "loc") {
            setLoc(e.target.value)
        }
    }
    return (
        <>
            <h3>My name is {name} my age is {age} and my location is {loc}</h3>
            <input type="text" name="name" onChange={valchng} placeholder="type name"></input><br></br>
            <input type="num" name="age" onChange={valchng} placeholder="type age"></input><br></br>
            {/* <input type="text" name="loc" onClick={valchng} placeholder="type loc"></input><br></br> */}
            <select name="loc" onChange={valchng}>
                <option value=""></option>
                <option value="Arambagh">Arambagh</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
            </select>
        </>
    )
}
