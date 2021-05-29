import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import MissionSection from "../components/sections/MissionSection"
import BeliefSection from "../components/sections/BeliefSection"
import StorySection from "../components/sections/StorySection"

export default function AboutPage({ data: { wpPage: { title, aboutPage } } }) {
  const { hero, mission, belief, story } = aboutPage

  return (
    <Layout>
      <Seo title={title} />
      <Hero hero={hero} />
      <MissionSection mission={mission} />
      <BeliefSection belief={belief} />
      <StorySection story={story} />
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
                  width: 800
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
                  width: 800
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        approaches {
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
                    width: 800
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
      }
    }
  }

`

