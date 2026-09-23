import React from 'react'
import {NavLink} from "react-router-dom"

export default function UserMenu() {
  return (
    <div>
     <br/>
      <div className="card">
        <div className="card-header">
            <h5>User Panel</h5>
        </div>
        <div className="list">
            <NavLink to="/dashboard/user" className="list-group-item">
            Dashboard</NavLink>
            <NavLink to="/dashboard/user/myorder" className="list-group-item">
            Myorder</NavLink>
        </div>
      </div>
    </div>
   
  )
}
