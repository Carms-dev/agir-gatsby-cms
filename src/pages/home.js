import React from "react"
import { Link } from "gatsby"
// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import Hero from "../components/Hero"

export default function HomePage() {
  // { data: { wpPage: { title, homePage } } }
  // const { hero } = homePage

  return (
    <Layout>
      <Seo title="Home" />
      {/* <Hero hero={hero}/> */}
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
