import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Register from './Auth/Register'
import Login from './Auth/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/register' element={<Register/>}  />
          <Route path='/login' element={<Login/>}  />

         </Routes>
      </BrowserRouter>
    </div>
  )
}
