import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

export default function SocialMediaIcons({ socialMedia }) {
  return (
    <SmIconsStyle>
      {socialMedia.map(media => (
        <a href={media.url} key={media.url}>
          <GatsbyImage
            image={media.icon.localFile.childImageSharp.gatsbyImageData}
            alt={media.icon.altText}
          />
        </a>
      ))}
    </SmIconsStyle>
  )
}

const SmIconsStyle = styled.div``
