/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

const Layout = ({ children }) => (
  <div
    style={{
      margin: `20px auto 0 auto`,
      maxWidth: 250,
      padding: `0 18px`,
    }}
  >
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
