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
      <ContactPageStyles>
        <MainHero hero={mainHero} />
        <Accordions
          heading={contactAccordion.heading}
          items={contactAccordion.accordionAccordionItem} />
        {ReactHtmlParser(map)}
      </ContactPageStyles>
    </Layout>
  )
}

const ContactPageStyles = styled.div``

// Query for contact page content
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
