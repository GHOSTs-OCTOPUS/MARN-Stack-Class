import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><Link to="home">home</Link></li>
        <li><Link to="about">about</Link></li>
        <li><Link to="contact">contact</Link></li>
      </ul>
    </div>
 )
}
