import React from "react";
export default class Ref4c extends React.Component {
    state = {
        name: '',
        data: []
    }
    valchng = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }
    mysubmit = (e) => {
        e.preventDefault();
        let newdata = this.state.data
        newdata.push({
            name: this.state.name
        })
        this.setState({ data: newdata })
        this.setState({
            name: ''
        })
    }
    render() {
        return (
            <>
                <ol type="I">
                    {
                        this.state.data.map((val, index) => {
                            return <li key={index}>{val}</li>
                        })
                    }
                </ol>
                <form onSubmit={this.mysubmit}>
                    Enter Name:
                    <input type="text" name="name" onChange={this.valchng} value={this.state.name}></input>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}