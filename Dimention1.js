import React from "react";
import Findsi1 from "./Findsi1";
export default class Dimension1 extends React.Component {


    state = {
        prin: '',
        rate: '',
        time: '',
        status: false
    }
    valchng = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
    }
    check = (e) => {
        this.setState({ status: true })

    }
    uncheck = (e) => {
        this.setState({ status: false })
        this.setState({ prin: '', rate: '', time: '' })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.prin} onChange={this.valchng} name="prin" placeholder="Type Principle"></input>
                <input type="text" value={this.state.rate} onChange={this.valchng} name="rate" placeholder="Type Rate"></input>
                <input type="text" value={this.state.time} onChange={this.valchng} name="time" placeholder="Type Time"></input>
                <br></br><br></br>
                <input type="button" value="Calc" onClick={this.check}></input>
                <input type="button" value="Reset" onClick={this.uncheck}></input>
                {
                    (this.state.status === true) ?
                        (<Findsi1 p={this.state.prin} r={this.state.rate} t={this.state.time}></Findsi1>) : (null)
                }





            </>
        )
    }
}