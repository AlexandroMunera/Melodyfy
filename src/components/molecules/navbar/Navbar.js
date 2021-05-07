import { Link, navigate } from "gatsby"
import React from "react"
import menuIcon from "../../../images/menu.svg"
import * as styles from "./navbar.module.scss"

export default function Navbar() {
  const onClickMenuIcon = () => {
    console.log("click ")
    document.getElementById("navbar").classList.toggle(styles.showNavbar)
  }

  const handlerExit = () => {
    const isBrowser = typeof window !== "undefined"

    if (isBrowser) {
      localStorage.setItem("tokenSpotify", null)
      navigate("/Login")
    }
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
          <li>
            <button onClick={handlerExit}>Exit</button>
          </li>
        </ul>
      </nav>
    </>
  )
}
