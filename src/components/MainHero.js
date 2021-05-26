import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function MainHero({ heroHeading, heroDescription, heroImage }) {
  
  return (
    <>
      <h1>{heroHeading}</h1>
      <p>{heroDescription}</p>
      <GatsbyImage
        image={heroImage.localFile.childImageSharp.gatsbyImageData}
        alt={heroImage.altText} />
    </>
  )
}
