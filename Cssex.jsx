import React from "react";
import './style.css' 
export default class Cssex extends React.Component
{
    render()
    {
        const mystyle={
            color:'green',
            backgroundcolor:'lightblue',
            border:'5px solid red',
            textAlign:'center'

        }
        return(

            <>
            <h3 style={{color:'red',backgroundColor:'lightblue',textAlign:'center'}}>Welcome to css example</h3>
            <p style={mystyle}>hello this is the paragraph</p>
            <h3 style={mystyle}>thank you</h3>
            <div id="d1">
            <ol>
            <li>hello kolkata</li>
            <li>hello asam</li>
            <li>hello goa</li>
            </ol>
            </div>
            </>
        )
    }
}