import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Navbar from './components/Navbar'
import AdminRoute from './Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import PrivateRoute from './Routes/PrivateRoute'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './pages/Admin/AdminLayout'
import Products from './pages/Admin/Products'
import Users from './pages/Admin/Users'
import UserLayout from "./pages/User/UserLayout"
import MyOrder from './pages/User/MyOrder'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/register' element={<Register/>}  />
          <Route path='/login' element={<Login/>}  />
          
          <Route path="/dashboard/admin" element={
            <AdminRoute>
              <AdminLayout/>
            </AdminRoute>
          } >
            <Route index element={<AdminDashboard/>} />
            <Route path='products' element={<Products/>} />
            <Route path='users' element={<Users/>} />
          </Route>

          <Route path="/dashboard/user" element={
            <PrivateRoute>
              <UserLayout/>
            </PrivateRoute>
          } >
            <Route index  element={<UserDashboard/>}/>
            <Route path='myorder' element={<MyOrder/>}/>
          </Route>

         </Routes>
      </BrowserRouter>
    </div>
  )
}
