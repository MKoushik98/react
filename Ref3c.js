import React from 'react';

export default class Ref3c extends React.Component {

    state = {
        data: []
    }

    valchng = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })


    }
    mysubmit = (e) => {
        const a = document.getElementById('name')
        e.preventDefault();
        this.state.data.push(a.value)
        this.setState({ data: this.state.data })
        a.value = "";

    }



    render() {
        return (
            <>

                <ol type='i'>
                    {
                        this.state.data.map((val, index) => {
                            return <li key={index + 1}>{val}</li>
                        })
                    }


                </ol>
                <form onSubmit={this.mysubmit}>
                    Enter Name:
                    <input type="text" name="name" id="name" onChange={this.valchng}></input>
                    <button>Submit</button>




                </form>



            </>
        )
    }
}