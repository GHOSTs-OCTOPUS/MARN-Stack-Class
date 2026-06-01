import React from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Gallery from './Components/Gallery'
import Services from './Components/Services'
import Footer from './Components/Footer'


export default function App() {
  return (
   // App.jsx
    <div className="page-bg">
      <div className="website-container">
        {/* HEADER */}
        <Header />  {/* HEADER export from component */}
      
        {/* NAVBAR */}
        <Navbar />  {/* NAVBAR export from component */}

        {/* MAIN CONTENT */}
        <div className="content-wrapper">
          {/* SIDEBAR */}
          <Sidebar />  {/* SIDEBAR export from component */}

          {/* MAIN SECTION */}
          <main className="main-content">
            {/* GALLERY */}
            <Gallery />  {/* GALLERY export from component */}

            {/* SERVICES */}
            <Services /> {/* SERVICES export from component */}
          </main>
        </div>

        {/* FOOTER */}
        <Footer /> {/* FOOTER export from component */}
      </div>
    </div>
  )
}



