import React from "react"
import "./navbar.scss"
import menuIcon from '../../../images/menu.svg';

export default function Navbar() {

  const onClickMenuIcon = () => {
    document.getElementById('navbar').classList.toggle('show')
  }

  return (
    <div>
      <button className="hamburger" onClick={onClickMenuIcon}>
        <img src={menuIcon} alt="menu" />
      </button>

      <nav id="navbar" className="m-Navbar">
        <ul>
          <li>Home</li>
          <li>Favorites</li>
          <li>Favorites</li>
        </ul>
      </nav>
    </div>
  )
}
