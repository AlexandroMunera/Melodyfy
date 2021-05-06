import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"
import { Typography } from "../../atoms/typography/Typography"
import Navbar from "../../molecules/navbar/navbar"

const Header = ({ siteTitle }) => (
  <header className="o-header">
    <div className="o-header__container">
      <Link to="/" className="o-header__link-home">
        <Typography variant="h1">{siteTitle}</Typography>
      </Link>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Melodyfy",
}

export default Header
