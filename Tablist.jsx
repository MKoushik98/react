import React from "react";
export default class Tablist extends React.Component {

    //copy of Todayass.jsx file component by using ref

    constructor() {
        super();
        this.state = {
            data: []
        }
        this.nmref = React.createRef();
        this.dptref = React.createRef();
    }
    addinfo = () => {
        let ob = { nm: this.nmref.current.value, dpt: this.dptref.current.value }
        this.setState({ data: [...this.state.data, ob] })
        // this.setState({data:this.state.data.push({
        //     nm:this.nmref,
        //     dep:this.dptref
        // })})
        this.nmref.current.value = '';
        this.dptref.current.value = '';

    }
    render() {
        return (
            <>
                Enter Name:
                <input type="text" ref={this.nmref}></input><br></br>
                Enter Dept:
                <input type="text" ref={this.dptref} /><br></br>
                <input type="button" value="ADD" onClick={this.addinfo} /><br></br>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                    {
                        this.state.data.map((val) => {
                            return (
                                <tr>
                                    <td>{val.nm}</td>
                                    <td>{val.dpt}</td>
                                </tr>
                            )
                        })
                    }
                </table>

            </>
        )
    }
}