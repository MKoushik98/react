import { useState } from "react";
export default function Hooks5c() {
    const [data, setData] = useState({ nm: 'Koushik', age: '24', loc: 'Arambagh' })

    const valchng = (e) => {


        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    return (
        <>
            <ul>
                <li>{data.nm}</li>
                <input type="text" name="nm" onChange={valchng} placeholder="Type your name"></input>
                <li>{data.age}</li>
                <input type="number" name="age" onChange={valchng} placeholder="Type age"></input>
                <li>{data.loc}</li>
                <input type="text" name="loc" onChange={valchng} placeholder="Type location"></input>
            </ul>
        </>
    )
}