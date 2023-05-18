import React from "react";
const names=['Sachin','Sourav','Youvi','Dhoni','Virat']
export default class Listtheelement extends React.Component
{
    
    render(){
        return(
            <select name="" id="">
                {
                    names.map((value)=>{
                        return(
                            <option>{value}</option>
                        )

                    })
                }
         
            </select>


        )
    }
}