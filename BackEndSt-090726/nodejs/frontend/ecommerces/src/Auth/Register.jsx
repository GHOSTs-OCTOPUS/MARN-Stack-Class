import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
          e.preventDefault()
        try {
          const res = await axios.post(`${import.meta.env.VITE_API}/register`,{
            name,email,password,address,phone
          })
          if(res.data.success){
            console.log(res.data.message)
            alert(res.data.message)
            navigate("/login")
          }
          else{
            alert(res.data.message)
          }
        } catch (error) {
            console.log(error)
            alert(error.response?.data?.message || "something went wrong")
        }
    }
  return (
    <div className='text-center' >
        <h1>Register form</h1>
  <form onSubmit={handleSubmit} className=' mx-auto' style={{width:"400px"}}>
     <div className="mb-3">
    
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"  placeholder='plz enter your name' />
   
  </div>
  <div className="mb-3">
    
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='plz enter your email' />
   
  </div>
  <div className="mb-3">
   
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='plz enter your pass' />
  </div>
   <div className="mb-3">
    
    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control"  placeholder='plz enter your address' />
   
  </div>

   <div className="mb-3">
    
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder='plz enter your phone number' />
   
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
