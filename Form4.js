import React from "react";
class Form4 extends React.Component {
    state = {
        username: '',
        age: null,
        errormessage: ''
    }
    myChangeHandler = (e) => {                           //validation concept
        let nam = e.target.name;//alias
        let val = e.target.value;//alias
        let err = '';
        this.setState({ [nam]: [val] })//for state update
        //validation codeing
        if (nam === "age") {
            if (val === "" || val == null) {
                err = <strong>Your age must not be empty</strong>
            }
            else if (val < 18 || val > 25) {
                err = <strong>Your age must be in range 18 to 25</strong>
            }
        }
        if (nam === "username") {
            if (val === "" || val == null) {
                err = <strong>Your name must not be empty</strong>
            }
            else if (val.length < 6) {
                err = <strong>your name should be more then 5 cherecters</strong>
            }
        }
        this.setState({ errormessage: err })
    }
    render() {
        return (
            <form>
                <p>Enter your name</p>
                <input type="text" name="username" onChange={this.myChangeHandler}></input>
                <p>Enter your age:</p>
                <input type="number" name="age" onChange={this.myChangeHandler}></input>
                <br></br>
                <p style={{ color: 'red' }}>{this.state.errormessage}</p>
            </form>
        )

    }
}
export default Form4
