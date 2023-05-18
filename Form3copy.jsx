import React from "react";
class From3copy extends React.Component {
    state = {
        username: ""
    }
    change = (e) => {
        let num = e.target.name
        let val = e.target.value
        this.setState({ [num]: [val] })
        if (num == "username") {
            if (val === "" || val == null) {
                alert("Username must not be empty")
            }

        }

    }
    submitted = (e) => {
        if (this.state.username === "" || this.state.username == null) {
            alert("Plese give the required details")

        }
        else {
            alert("You are submitting " + this.state.username)

        }

    }
    render() {
        return (

            <div>
                <h1 style={{ color: "green" }}>Hello welcome to this page <strong style={{ color: "red" }}>{this.state.username}</strong></h1>
                <p>Please enter your name:-</p>

                <input type="text" name="username" onChange={this.change} />
                <br></br>
                <input type="submit" onClick={this.submitted} />



            </div>

        )
    }
}
export default From3copy;