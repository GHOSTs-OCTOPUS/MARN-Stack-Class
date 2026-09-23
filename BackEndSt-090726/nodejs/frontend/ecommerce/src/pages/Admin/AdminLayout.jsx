import React from 'react'
import AdminMenu from './AdminMenu'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
      <div className="container" style={{marginTop: "50px"}}>
        <div className="row">
            <div className="col-lg-3">
                <AdminMenu/>
            </div>
            <div className="col-lg-9">
                <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}
