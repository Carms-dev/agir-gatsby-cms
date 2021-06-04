import React from "react"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function LandingPage() {

  return (
    <Layout>
      <Seo title="Welcome" />
      <h1>Welcome</h1>
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/support">support</Link></li>
        <ul>
          <li><Link to="/support/outside-montreal">Outside Montreal</Link></li>
        </ul>
        <li><Link to="/get-involved">get-involved</Link></li>
        <ul>
          <li><Link to="/get-involved/training">Organizational Training</Link></li>
          <li><Link to="/get-involved/advocacy">Advocacy</Link></li>
        </ul>

        <li><Link to="/about">about</Link></li>
        <li><Link to="/donate">donate</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/privacy">privacy</Link></li>
      </ul>
    </Layout>
  )
}
