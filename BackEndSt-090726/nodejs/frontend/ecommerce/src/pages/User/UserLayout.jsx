import React from 'react'
import { Outlet } from 'react-router-dom'
import UserMenu from './UserMenu'

export default function UserLayout() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <UserMenu/>
            </div>
            <div className="col-lg-9">
                <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}
