import React from 'react'

export default function Sidebar() {
  return (
    <div>
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
    </div>
  )
}
