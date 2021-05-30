import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import MissionSection from "../components/sections/MissionSection"
import BeliefSection from "../components/sections/BeliefSection"
import StorySection from "../components/sections/StorySection"
import ApproachSection from "../components/sections/ApproachSection"
import EthicsSection from "../components/sections/EthicsSection"
import LogoGarden from "../components/sections/LogoGarden"
import ReportSection from "../components/sections/ReportSection"

export default function AboutPage({ data: { wpPage: { title, aboutPage } } }) {
  const { hero, mission, belief, story, approach, codeOfEthics, logoGarden, report } = aboutPage

  return (
    <Layout>
      <Seo title={title} />
      <Hero hero={hero} />
      <MissionSection mission={mission} />
      <BeliefSection belief={belief} />
      <StorySection story={story} />
      <ApproachSection approach={approach} />
      <EthicsSection ethics={codeOfEthics} />
      <LogoGarden logoGarden={logoGarden} />
      <ReportSection report={report} />
    </Layout>
  )
}

export const data = graphql`
  query {
    wpPage(slug: {eq: "about"}) {
      title
      aboutPage {
        hero {
          description
          heading
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        mission {
          heading
          description
          cards {
            text
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 100
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
          callToAction {
            heading
            primaryPageLink {
              ... on WpPage {
                id
                uri
                title
              }
            }
            secondaryPageLink {
              ... on WpPage {
                id
                uri
                title
              }
            }
          }
        }
        belief {
          heading
          cards {
            description
            isLong
          }
        }
        story {
          heading
          description
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        approach {
          heading
          accordion {
            heading
            description
          }
          callToAction {
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 600
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
            heading
            description
            linkText
            pageLink {
              ... on WpPage {
                id
                title
                uri
              }
            }
          }
        }
        codeOfEthics {
          heading
          description
          linkText
          linkUrl
        }
        logoGarden {
          heading
          logos {
            id
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        report {
          heading
          files {
            file {
              id
              mediaItemUrl
              title
            }
          }
        }
      }
    }
  }

`

