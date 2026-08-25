import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../redux/authSlice'

export default function UserDashboard() {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState(user?.name || "")
  const [phone, setPhone] = useState(user?.phone || "")
  const [address, setAddress] = useState(user?.address || "")
  const [editing, setEditing] = useState(false)

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [changingPassword, setChangingPassword] = useState(false)

  const handleLogout = () => {
    dispatch(logOut())
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate("/")
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const token = JSON.parse(localStorage.getItem("token"))
      const res = await axios.put(
        `${import.meta.env.VITE_API}/update-profile`,
        { name, phone, address },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user))
        alert(res.data.message)
        setEditing(false)
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong")
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match")
      return
    }
    try {
      const token = JSON.parse(localStorage.getItem("token"))
      const res = await axios.put(
        `${import.meta.env.VITE_API}/change-password`,
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (res.data.success) {
        alert(res.data.message)
        setOldPassword("")
        setNewPassword("")
        setConfirmPassword("")
        setChangingPassword(false)
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome, {user?.name}</h5>
              <p className="card-text">Email: {user?.email}</p>
              <p className="card-text">Phone: {user?.phone}</p>
              <p className="card-text">Address: {user?.address}</p>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {/* Profile Section */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">My Profile</h5>
                {!editing && (
                  <button className="btn btn-primary btn-sm" onClick={() => setEditing(true)}>
                    Edit Profile
                  </button>
                )}
              </div>
              {editing ? (
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-success me-2">Save</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
                </form>
              ) : (
                <div>
                  <p><strong>Name:</strong> {user?.name}</p>
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>Phone:</strong> {user?.phone}</p>
                  <p><strong>Address:</strong> {user?.address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Change Password Section */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Change Password</h5>
                {!changingPassword && (
                  <button className="btn btn-warning btn-sm" onClick={() => setChangingPassword(true)}>
                    Change Password
                  </button>
                )}
              </div>
              {changingPassword ? (
                <form onSubmit={handleChangePassword}>
                  <div className="mb-3">
                    <label className="form-label">Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success me-2">Update Password</button>
                  <button type="button" className="btn btn-secondary" onClick={() => {
                    setChangingPassword(false)
                    setOldPassword("")
                    setNewPassword("")
                    setConfirmPassword("")
                  }}>Cancel</button>
                </form>
              ) : (
                <p className="text-muted">Click "Change Password" to update your password.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}