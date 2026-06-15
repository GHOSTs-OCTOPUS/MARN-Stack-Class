import React from 'react'
import Nav from './componants/Nav'
import Header from './componants/Header'
import Footer from './componants/Footer'
import "./componants/Style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprops from './props/Myprops'
import MyState from './use State/MyState'
import Mymap from './map/Mymap'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Header/>
      
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>

      <Myprops/>
      <MyState />

      <hr />
      <Mymap />

      <hr />
      <hr />

      

      <Footer/>
      </BrowserRouter>
    </div>
  )
}
