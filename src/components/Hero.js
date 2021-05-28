import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({ hero: { heading, description, image } }) {
  return (
    <HeroStyles>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.altText}
        imgStyle={{ height: `auto` }} />
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </HeroStyles>
  )
}

const HeroStyles = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  text-align: center;

  & > * {
    margin-top: 20px;
    flex: 1;
  }
  h1 {
    margin-bottom: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row-reverse;
    align-items: center;
    text-align: left;

    div:last-child {
      margin-right: 5vw;
    }
  }

`
