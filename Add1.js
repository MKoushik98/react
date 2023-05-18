import React from "react";
export default class extends React.Component {
    state = {
        name: '',
        list: []
    }
    valchng = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    change = (e) => {
        let newlist = this.state.list;
        newlist.push(this.state.name)
        this.setState({ list: newlist })
        this.setState({ name: '' })
    }





    render() {
        return (
            <>
                Enter Name:
                <input type="text" name="name" onChange={this.valchng} value={this.state.name}></input>
                <input type="button" onClick={this.change} value="Change"></input>
                <ol>
                    {
                        this.state.list.map((value)=>{
                            return <li>{value}</li>

                        })
                    }
                </ol>


            </>
        )
    }
}