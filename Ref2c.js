import React from "react";
export default class Ref2c extends React.Component {
    constructor() {
        super()
        this.text = React.createRef();
        this.state = {
            data: []
        }
    }
    chngsub = (e) => {
        e.preventDefault();
        this.state.data.push(this.text.current.value)
        this.setState({ data: this.state.data })
        this.text.current.value = "";
    }
    render() {
        return (
            <>    <ol type="I">
                {
                    this.state.data.map((val, index) => {
                        return <li key={index + 1}>{val}</li>
                    })
                }   </ol>
                <form onSubmit={this.chngsub}>
                    Enter Name:
                    <input type="text" ref={this.text}></input>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}