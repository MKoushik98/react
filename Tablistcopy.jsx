import React from "react";
export default class Tablistcopy extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.nmref = React.createRef()
        this.dptref = React.createRef()
    }
    change = () => {
        let ob = { nm: this.nmref.current.value, dpt: this.dptref.current.value }
        this.setState({ data: [...this.state.data, ob] })
        this.nmref.current.value = '';
        this.dptref.current.value = ''
    }

    render() {
        return (
            <>

                <input type="text" ref={this.nmref} placeholder="Enter Your Name" /><br></br>
                <input type="text" ref={this.dptref} placeholder="Enter Department" /><br></br>
                <button type="btn" onClick={this.change}>Changes!</button>
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