import * as React from "react"
import PropTypes from "prop-types"

import Header from "../../organisms/header/Header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Melodyfy" />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
