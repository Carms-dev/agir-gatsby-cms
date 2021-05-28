import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import MainHero from "../components/MainHero"

export default function HomePage() {
  const { title, wpPage: { mainHero }} = useStaticQuery(
    graphql`
      query {
        wpPage(title: {eq: "Home"}) {
          title
          mainHero {
            heroHeading
            heroDescription
            heroImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 800,
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    `
  );


  return (
    <Layout>
      <Seo title={title} />
      <MainHero hero={mainHero}/>
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}


