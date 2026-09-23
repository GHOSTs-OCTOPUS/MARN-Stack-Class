import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AdminRoute({children}) {

    const {user,token} = useSelector((state)=>state.auth)

    if(!token){
        return <Navigate to="/login" replace />
    }

    if(user?.role !== 1){
        return <Navigate to="/" replace />
    }
  return children
}
