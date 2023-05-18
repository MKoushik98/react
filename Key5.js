import React from 'react';
class Key5 extends React.Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {
                    empName: 'John',
                    id: 1
                },
                {
                    empName: 'Steve',
                    id: 2
                },
                {
                    empName: 'Alex',
                    id: 3
                }
            ]
        }
    }
    change=(e)=>{
        this.setState({employees:this.state.employees})


    }
    render() {
        return (
            <div>
                <h1>React Keys</h1>
                <ul>
                    {/* {this.state.employees.map((data, i) => <li>{data}</li>)} */}
                    {/* {this.state.employees.map((data,i)=>{
                        <li>{data}</li>

                    })} */}
                    <li>{this.state.employees.empName}</li>
                    <li>{this.state.employees.id}</li>
                </ul>
                <button onClick={this.change}>Click To Fetch</button>
            </div>
        );
    }
}
export default Key5