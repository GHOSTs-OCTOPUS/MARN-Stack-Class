import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../redux/authSlice'

export default function AdminDashboard() {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className="container mt-4">
      <div className="row">
        
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Admin Panel</h5>
              <p className="card-text">Welcome, {user?.name}</p>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <div className="row text-center">
                <div className="col-md-4">
                  <div className="card bg-primary text-white mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Users</h5>
                      <p className="card-text display-6">0</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-success text-white mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Products</h5>
                      <p className="card-text display-6">0</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-warning text-white mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Orders</h5>
                      <p className="card-text display-6">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}