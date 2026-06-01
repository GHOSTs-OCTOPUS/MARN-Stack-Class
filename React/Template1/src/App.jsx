import React from 'react'
import './App.css'


export default function App() {
  return (
   // App.jsx
    <div className="page-bg">
      <div className="website-container">
        {/* HEADER */}
        <header className="header">
          <div className="header-content">
            <div className="hero-text">
              <h1>Enter Site Title</h1>
              <p>Enter Site Slogan</p>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Business Team"
              />
            </div>
          </div>
        </header>
      

        {/* NAVBAR */}
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">New Page 1</a></li>
            <li><a href="#">New Page 2</a></li>
            <li><a href="#">New Page 3</a></li>
            <li><a href="#">New Page 4</a></li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <div className="content-wrapper">
          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <h3>» Main Menu</h3>
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
                <li>Menu Item 5</li>
                <li>Menu Item 6</li>
                <li>Menu Item 7</li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>» Block</h3>
              <p>Enter Block content here...</p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aenean commodo lorem ipsum dolor sit amet.
              </p>
            </div>
          </aside>

          {/* MAIN SECTION */}
          <main className="main-content">
            <section className="gallery-section">
              <h2>Gallery</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes.
              </p>

              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </section>

            {/* SERVICES */}
            <section className="services">
              <div className="service-card">
                <h2>Subscription</h2>

                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper
                  ultricies nisi. Nam eget dui.
                </p>

                <button>Read More</button>
              </div>

              <div className="service-card">
                <h2>Other Services</h2>

                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper
                  ultricies nisi. Nam eget dui.
                </p>

                <button>Read More</button>
              </div>
            </section>
          </main>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <p>Copyright © 2014</p>
        </footer>
      </div>
    </div>
  )
}

