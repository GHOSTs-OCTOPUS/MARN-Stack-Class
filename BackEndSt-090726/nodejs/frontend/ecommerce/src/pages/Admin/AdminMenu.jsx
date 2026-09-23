import React from 'react'
import {NavLink} from "react-router-dom"

export default function AdminMenu() {
  return (
    <div>
      <div className="card">
        <div className="card-header">
            <h5>Admin Panel</h5>
        </div>
        <div className="list">
            <NavLink to="/dashboard/admin" className="list-group-item">
            Dashboard</NavLink>
            <NavLink to="/dashboard/admin/users" className="list-group-item">
            Users</NavLink>
            <NavLink to="/dashboard/admin/products" className="list-group-item">
            Products</NavLink>
        </div>
      </div>
    </div>
  )
}
