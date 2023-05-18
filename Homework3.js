import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState, useRef } from "react";
export default function Homework3() {
  const [info, setInfo] = useState([{ name: '', phone: '' }])
  const nmref = useRef();
  const phref = useRef();
  const tdref = useRef();
  const td1ref = useRef();
  const buttonref = useRef();
  const buttonref1 = useRef();
  const editref = useRef();
  const deleteref = useRef();
  const trref = useRef();
  // document.getElementById('td').innerHTML=''
  // document.getElementById('td1').innerHTML=''

  const addthis = (e) => {

    if (nmref.current.value === '' && phref.current.value === '') {
      alert("Field should not be blank")
   
    }
    else {
      let datalist = { name: nmref.current.value, phone: phref.current.value }
      setInfo([...info, datalist])
      nmref.current.value = ''
      phref.current.value = ''

    }

  }
  const deletenow = (e) => {
    // document.getElementById('first').value=''
    // document.getElementById('2nd').value=''
   if(click=true){
    tdref.current.innerText=''
    td1ref.current.innerText=''
    buttonref.current.innerText=''
    buttonref1.current.innerText=''
   }
    

   

  }

  return (
    <>
      <input type="text" id="first" name="name" ref={nmref} placeholder="Type Your Name"></input>
      <input type="tel" id="2nd" name="phone" ref={phref} placeholder="Type number"></input>
      <input type="button" onClick={addthis} value="Add Now"></input>
      <table>
        <thead>
          <tr>

            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>

          {
            info.map((val, index,id) => {
              return (
                <tr ref={trref} key={index+1}>
                  <td ref={tdref} >{val.name}</td>
                  <td ref={td1ref} >{val.phone}</td>
                  <td id="td" ref={buttonref} >{<button ref={editref} >Edit</button>}</td>
                  <td id="td1" ref={buttonref1}>{<button ref={deleteref}  onClick={deletenow}>Delete</button>}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
















