import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import SocialMediaIcons from './SocialMediaIcons'

export default function Footer() {
  // get contact info from contact page
  const { allWpPage: { nodes } } = useStaticQuery(graphql`
    query {
      allWpPage(filter: {title: {eq: "Contact"}}) {
        nodes {
          contactInfo {
            address
            socialMedia {
              icon {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 30,
                      placeholder: BLURRED
                      layout: CONSTRAINED
                    )
                  }
                }
              }
              url
            }
          }
        }
      }
    }
  `)

  const { contactInfo: { address, socialMedia } } = nodes[0]

  return (
    <FooterStyles>
      <Logo />
      <p>{address}</p>
      {/* TODO: add switcher */}
      <LanguageSwitcher />
      <Link to="/contact">Contact us</Link>
      <SocialMediaIcons socialMedia={socialMedia}/>
      <p>
        <span>© AGIR, {new Date().getFullYear()}.{` `}</span>
        <Link to="/privacy">Privacy policy</Link>
      </p>
    </FooterStyles>
  )
}


const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding: 20px 0;

  div:first-child {
    grid-column: 1 / 1;
  }
  p:nth-child(2) {
    grid-column: 2 / -1;
    align-self: center
  }
  div:nth-child(3) {
    grid-column: 1 / -1;
  }
  a:nth-child(4) {
    grid-column: 1 / -1;
    text-align: center;
    background: var(--primary-alt);
    color: #fff;
    padding: 10px 30px;
    border-radius: 4px;
  }
  div:nth-child(5) {
    grid-column: 1 / -1;
    text-align: center;
  }
  p:last-child {
    grid-column: 1 / -1;
    a {
      padding: 2px 0;
      border-bottom: 1px solid black;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px 100px;
    place-items: center center;
    
    & > * {
      max-width: 240px;
    }
    div:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    p:nth-child(2) {
      grid-column: 2 / 3;
    }
    div:nth-child(3) {
      grid-column: 3 / -1;
    }
    a:nth-child(4) {
      grid-column: 2 / 3;
      grid-row: 2 / 3
    }
    div:nth-child(5) {
      grid-column: 3 / -1;
      grid-row: 2 / 3;
    }
    p:last-child {
      grid-column: 1 / -1;
      justify-self: start;
    }
    
  }
`
