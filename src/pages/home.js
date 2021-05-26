import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import MainHero from "../components/main-hero"

export default function HomePage() {
  const { wpPage: { mainHero : { heroHeading, heroDescription, heroImage }}} = useStaticQuery(
    graphql`
      query {
        wpPage(title: {eq: "Home"}) {
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
      <Seo title="Home | AGIR Montreal" />
      <MainHero 
        heroHeading={heroHeading} 
        heroDescription={heroDescription}
        heroImage={heroImage} />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}


