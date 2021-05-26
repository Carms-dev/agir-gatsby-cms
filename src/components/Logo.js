import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Logo() {
  const { wp: { siteLogo } } = useStaticQuery(
    graphql`
      query {
        wp {
          siteLogo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 100,
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }        
    `
  );

  return (
      <GatsbyImage
        image={siteLogo.localFile.childImageSharp.gatsbyImageData}
        alt={siteLogo.altText} />
  )
}
