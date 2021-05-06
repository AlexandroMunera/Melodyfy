import React from "react"
import "./navbar.scss"
import menuIcon from "../../../images/menu.svg"
import { Link } from "gatsby"

export default function Navbar() {
  const onClickMenuIcon = () => {
    document.getElementById("navbar").classList.toggle("show")
  }

  return (
    <>
      <button className="hamburger" onClick={onClickMenuIcon}>
        <img src={menuIcon} alt="menu" />
      </button>

      <nav id="navbar" className="m-Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
