import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home=()=>{
    const[users,setUsers]=useState([])
    useEffect(()=>{
console.log("From Use Effect")
loadUsers();
    },[]);

const loadUsers=async()=>{
    const result=await axios.get("http://localhost:3004/users" );
//console.log(result);
setUsers(result.data.reverse());
}

const deleteUsers=async id=>{
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
}
    return(

        <div className="container">
            <div className="py-4">
                <h1>USERS INFORMATION</h1>
<table className="table border shadow">
<thead className="table-dark">
        <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
                    </tr>
    </thead>
    <tbody>
        {
          users.map((user,index)=>(
              <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                 <td>
                     <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                     <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                     <button class="btn btn-danger mr-2"onClick={()=>deleteUsers(user.id)}>Delete</button>
                 </td>
                                     
              </tr>
          )
          )
}
</tbody>
</table>
            </div>
          
        </div>
    )
}
export default Home;
