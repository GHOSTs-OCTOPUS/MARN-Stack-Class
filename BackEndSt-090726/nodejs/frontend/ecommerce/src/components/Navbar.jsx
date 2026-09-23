import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, useNavigate} from "react-router-dom"
import { logOut } from '../redux/authSlice'

export default function Navbar() {
    const {user} = useSelector((state)=>state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () =>{
      dispatch(logOut())
      navigate("/login")
    }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
       {
        !user ? (
          <>
           <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
          </>
        ):(
          <>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.name}
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={user.role === 1 ? "/dashboard/admin" : "/dashboard/user"}>Dashboard</NavLink></li>
            <li><button className="dropdown-item" onClick={handleLogOut}>LogOut </button></li>
            
          </ul>
        </li>
          </>
        )
       }
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
