import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

export default function HomePage({ data: { file: { childMarkdownRemark: { frontmatter }} } }) {
  const { title, hero } = frontmatter

  return (
    <Layout>
      <Seo title={title} />
      <Hero hero={hero}/>
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}

export const data = graphql`
  query {
    file(name: {eq: "home"}) {
      childMarkdownRemark {
        frontmatter {
          title
          hero {
            heading
            description
            image {
              alt
              imageFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 590
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`