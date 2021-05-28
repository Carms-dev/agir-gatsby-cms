import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export default function MainHero({ hero: { heroHeading, heroDescription, heroImage } }) {
  return (
    <MainHeroStyles>
      <GatsbyImage
        image={heroImage.localFile.childImageSharp.gatsbyImageData}
        alt={heroImage.altText}
        imgStyle={{ height: `auto` }} />
      <div>
        <h1>{heroHeading}</h1>
        <p>{heroDescription}</p>
      </div>
    </MainHeroStyles>
  )
}

const MainHeroStyles = styled.div`
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
      margin-right: 5vw; // TODO: adjust based on css strategy.
    }
  }

`
