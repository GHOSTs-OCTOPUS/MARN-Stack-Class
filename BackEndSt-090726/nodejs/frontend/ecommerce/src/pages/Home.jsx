import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const {user,token} = useSelector((state)=>state.auth)
  return (
    <div>
      <h1>Home Page</h1>

      {
        token ? (
          <>
           <h3>Welcome {user?.name}</h3>
           <p>Email:{user?.email}</p>
          </>
        ):(
          <>
             <h3>Plz login</h3>
          </>
        )
      }
    </div>
  )
}
