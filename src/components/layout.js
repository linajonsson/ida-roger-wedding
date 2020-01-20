/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import "../styles/global.scss"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        background: "#dfdebb",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
        }}
      >
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
