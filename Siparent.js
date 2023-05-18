import React from "react";
export default function Siparent(props){
    let si=(props.p*props.r*props.t)/100
    let amt=parseInt(si)+parseInt(props.p)

    return(
        <>
        <h3>SI is:{si} and Amount is:{amt}</h3>
        
        </>
    )

}