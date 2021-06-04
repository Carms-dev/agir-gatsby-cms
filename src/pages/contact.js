import React from "react"
// import { graphql } from "gatsby"
// import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import Hero from "../components/Hero"

export default function ContactPage() {
  // { data: { wpPage: { title, contactPage } } }
  // const { hero } = contactPage

  return (
    <Layout>
      <Seo title="Contact" />
        {/* <Hero hero={hero}/> */}
        {/* Contact Form */}
        {/* Contact Info */}
        {/* Accordion */}
        {/* Stay Updated */}
        <AcoordionsIframeSectionStyles>
          {/* <Accordions
            heading={contactAccordion.heading}
            items={contactAccordion.accordionAccordionItem}
            /> */}
          {/* Map */}
          {/* <div className="wrapper-iframe">{ReactHtmlParser(map)}</div> */}
        </AcoordionsIframeSectionStyles>
        {/* Stay Updated */}
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
    grid-template-columns: 3fr 2fr;
    grid-gap: 3rem;
  }

  @media (min-width: 1280px) {
    grid-gap: 5rem;
  }
`
