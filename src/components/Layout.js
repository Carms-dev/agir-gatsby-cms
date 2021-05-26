import * as React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../styles/GlobalStyles"
import AnnouncementBars from "./AnnouncementBars"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <AnnouncementBars />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
