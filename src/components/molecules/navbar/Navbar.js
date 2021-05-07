import React from "react"
import * as styles from "./navbar.module.scss"
import menuIcon from "../../../images/menu.svg"
import { Link } from "gatsby"

export default function Navbar() {
  const onClickMenuIcon = () => {
    document.getElementById("navbar").classList.toggle("show")
  }

  return (
    <>
      <button className={styles.hamburger} onClick={onClickMenuIcon}>
        <img src={menuIcon} alt="menu" />
      </button>

      <nav id="navbar" className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
