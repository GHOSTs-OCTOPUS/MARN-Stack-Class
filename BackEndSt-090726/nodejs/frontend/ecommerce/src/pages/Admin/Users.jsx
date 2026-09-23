import React from 'react'
import {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"

export default function Users() {
  const [users,setUsers]=useState([])
  const {token}= useSelector((state)=>state.auth)
  
  const getAllUsers = async()=>{
      try{
      const {data} = await axios.get(`${import.meta.env.VITE_API}/users`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      if(data.success){
        setUsers(data.users)
      }
      }
      catch(error){
        console.log(error)
      }
    };

  useEffect(()=>{

    if(token){
      getAllUsers()
    }
  },[token]);

  const handleDelete = async (userId) => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data.success) {
        getAllUsers(); // Refresh the user list
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Role</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user , index)=>(
        <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>{user.role === 1 ? "Admin" : "User"}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
          Delete
        </button>
      </td>
    </tr>
      ))
    }
  
  </tbody>
</table>
    </div>
  )
}
