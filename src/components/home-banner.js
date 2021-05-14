import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function HomeBanner() {
  const { wpPage: { homeBannerFields : { header, text, image }}} = useStaticQuery(
    graphql`
      query MyQuery {
        wpPage(title: {eq: "Home"}) {
          homeBannerFields {
            header
            text
            image {
              altText
              sourceUrl
              localFile {
                publicURL
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
    <>
      <h1>{header}</h1>
      <p>{text}</p>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.altText} />
    </>
  )
}
