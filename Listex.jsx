import React from "react";
const name=["raj","seema","rajat","sourav","avishek"];
export default class Listex extends React.Component
{
    render()
    {
        return(
            <select>
            {
                name.map((value,index)=>{
                    return(
                        <option value={index}>{value}</option>
                    )

                })

            }
            </select>
        )
    }
}
