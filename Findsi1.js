import React from "react";
export default function Findsi1(props){
    let si=(props.p*props.r*props.t)/100
    let amt=parseInt(si)+parseInt(props.p)
    return(
        <>
        <h3> SI is:{si} + AMOUNT is:{amt}</h3>
        </>
    )
}