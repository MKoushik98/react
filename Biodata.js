import React from 'react'
class Biodata extends React.Component{
    state={
        name:'',
        age:'',
        loc:'',
        gen:''
    }
    componentDidMount(){
       
        setTimeout(()=>{
            this.setState({name:'Sourav',age:20,loc:'Kolkata',gen:'male'})
        },5000)
        
    }
    componentDidUpdate(){
        

        document.getElementById('msg').innerHTML="Thank you ,Good Bye"
      

    }
    render(){
        return(
            <>
            <h3>Biodata</h3>
            <ul type="circle">
                <li>Name:{this.state.name}</li>
                <li>Age:{this.state.age}</li>
                <li>Loc:{this.state.loc}</li>
                <li>Gen:{this.state.gen}</li>
                <br></br>
                <h3 id='msg'>Wait for 5 sec...</h3>




            </ul>
            
            
            
            </>
        )
    }
}
export default Biodata