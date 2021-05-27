import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "./Logo"
import SideDrawer from "./SideDrawer"

import { AppBar, Toolbar } from "@material-ui/core"
import { IconButton, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    color: `black`
  }
});

const Header = () => {
  const classes = useStyles();

  const { wpMenu: { menuItems } } = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu(slug: {eq: "main-menu"}) {
        menuItems {
          nodes {
            id
            label
            path
            parentId
          }
        }
      }
    }
  `)

  const navLinks = menuItems.nodes

  return (
    <AppBar position="static" style={{ background: `var(--off-white)` }}>
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home" href="/home">
            <Logo />
          </IconButton>
          <Hidden mdDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ id, label, path }) => (
                <a href={path} key={id} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={label} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>

          <Hidden lgUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>

      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
