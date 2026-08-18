import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

export default function App() {
  return (
    // App.jsx
    <div className="page-bg">
      <div className="website-container">
        {/* HEADER */}
        <Header /> {/* Composing Header components */}
        {/* NAVBAR */}
        <Navbar /> {/* Composing Navbar components */}
        {/* MAIN CONTENT */}
        <div className="content-wrapper">
          {/* SIDEBAR */}
          <Sidebar /> {/* Composing Sidebar components */}
          {/* MAIN SECTION */}
          <main className="main-content">
            {/* GALLERY */}
            <Gallery /> {/* Composing Gallery components */}
            {/* SERVICES */}
            <Services /> {/* Composing Services components */}
          </main>
        </div>
        {/* FOOTER */}
        <Footer /> {/* Composing Footer components */}
      </div>
    </div>
  );
}
