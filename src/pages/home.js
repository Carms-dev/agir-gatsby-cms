import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

// import Hero from "../components/Hero"

export default function HomePage() {
  // TODO: replace staticQuery
  const { wpPage: { title }} = useStaticQuery(
    graphql`
      query {
        wpPage(title: {eq: "Home"}) {
          title
        }
      }
    `
  );


  return (
    <Layout>
      <Seo title={title} />
      {/* <Hero hero={hero}/> */}
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}


