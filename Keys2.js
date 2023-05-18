import React from 'react';

//Parent Component

class Keys2 extends React.Component {
    constructor(props) {
        super(props);

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
    render() {
        return (
            <div>
                <h1>React Keys</h1>
                <div>
                    {this.state.employees.map((data, i) => <Employee key={i} empData={data} />)}
                </div>
            </div>
        );
    }
}
//Child Component 
class Employee extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li> {this.props.empData.empName}</li>
                    <li> {this.props.empData.id} </li>
                </ul>
            </div>
        );
    }
}
export default Keys2;