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

// export const pageQuery = graphql`
//   query {
//     allWpPage(sort: { fields: [date] }) {
//       nodes {
//         title
//         slug
//       }
//     }
//   }
// `

// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/Layout"
// import Seo from "../components/Seo"

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage
