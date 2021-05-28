import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import MainHero from "../components/MainHero"
import Accordions from "../components/Accordions"

export default function ContactPage({ data: { wpPage } }) {
  const { title, mainHero, contactPage: { contactAccordion , map} } = wpPage

  return (
    <Layout>
      <Seo title={title} />
        <MainHero hero={mainHero} />
        <AcoordionsIframeSectionStyles>
          <Accordions
            heading={contactAccordion.heading}
            items={contactAccordion.accordionAccordionItem}
          />
          <div className="wrapper-iframe">{ReactHtmlParser(map)}</div>
        </AcoordionsIframeSectionStyles>
    </Layout>
  )
}

const AcoordionsIframeSectionStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center center;

  .wrapper-iframe {
    margin: 20px;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 62.5%; /* 8:5 Aspect Ratio */
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (min-width: 640px) {
    grid-template-columns: 60% 40%;
  }

  @media (min-width: 1280px) {
  }
`

// Query contact page content
export const query = graphql`
  query {
    wpPage(title: {eq: "Contact"}) {
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
      contactPage {
        map
        contactAccordion {
          heading
          accordionAccordionItem {
            heading
            text
          }
        }
      }
    }
  }
`;
