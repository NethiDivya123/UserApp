import React, {useState,useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
const Edituser=()=>{
    let navigate =useNavigate();
    const{id}=useParams();
    const[user,setUser]=useState({
        name:"  ",
        username:" ",
        email:" ",
        phone:" ",
    });
    const {name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    };
        useEffect(()=>{
          loadUser()
    },[])
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/users/${id}` ,user);
        navigate.push("/")
    }
    const loadUser=async()=>{
      
     const result= await axios.get(`http://localhost:3004/users/${id}`)
      setUser(result.data);
    }
    return(
        <div className="container">
 <Link className="btn btn-primary mt-4" to="/home" >Back to Home</Link>
 <form class="input-group mb-3 p-5" onSubmit={e=>onSubmit(e)}>
   <table class="table shadow table-borderless" >
     <thead>
       
         <tr>
           <th class="text-center fs-5 fw-" colspan="2">Edit User Details</th>
           </tr>
           </thead>
           <tbody>
             <tr>
           <td class="text-center">Name</td>
           <td><input type="text" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} /></td>
           </tr>
           <tr>
           <td class="text-center">UserName</td>
           <td><input type="text" class="form-control" name="username" value={username} onChange={e=>onInputChange(e)} /></td>
           </tr>
           <tr>
           <td class="text-center">Email</td>
           <td><input type="text" class="form-control" name="email" value={email} onChange={e=>onInputChange(e)} /></td>
           </tr>
           <tr>
           <td class="text-center">Phone</td>
           <td><input type="text" class="form-control" name="phone" value={phone} onChange={e=>onInputChange(e)} /></td>
           </tr>
       </tbody>
   </table>
   <div class="d-grid gap-2 col-6 mx-auto">
     <button className="btn btn-center btn-primary">Update</button>
   </div>
 </form>
 </div>
    )
}
export default Edituser;