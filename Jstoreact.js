import React from "react";
//Listing the Array Names in the select tag using key
const city = [{ id: 0, city: "Kolkata" },
{ id: 1, city: "Mumbai" },
{ id: 2, city: "Chennai" },
{ id: 3, city: "Delhi" },
{ id: 4, city: "Bengalore" },
{ id: 5, city: "Hydrabad" }]
const newcity = city.map((user) => {
    return (<option key={user.id}>{user.city}</option>)
})
class Jstoreact extends React.Component {
    render() {
        return (
            <div>


                <select>{newcity}</select>



            </div>
        )
    }
}
export default Jstoreact;