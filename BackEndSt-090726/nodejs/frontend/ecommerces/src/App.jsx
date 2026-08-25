import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Register from './Auth/Register'
import Login from './Auth/Login'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/register' element={<Register/>}  />
          <Route path='/login' element={<Login/>}  />
          <Route path='/dashboard' element={<UserDashboard/>}  />
          <Route path='/admin/dashboard' element={<AdminDashboard/>}  />
         </Routes>
      </BrowserRouter>
    </div>
  )
}
