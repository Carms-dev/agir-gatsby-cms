import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
// import MissionSection from "../components/sections/MissionSection"
// import BeliefSection from "../components/sections/BeliefSection"
// import StorySection from "../components/sections/StorySection"
// import ApproachSection from "../components/sections/ApproachSection"
// import EthicsSection from "../components/sections/EthicsSection"
// import LogoGarden from "../components/sections/LogoGarden"
// import ReportSection from "../components/sections/ReportSection"

export default function AboutPage({ data: { file: { childMarkdownRemark: { frontmatter } } }}) {
  // const { hero, mission, belief, story, approach, codeOfEthics, logoGarden, report } = aboutPage
  const { title, hero } = frontmatter

  return (
    <Layout>
      <Seo title={title} />
      <Hero hero={hero} />
      {/* <MissionSection mission={mission} />
      <BeliefSection belief={belief} />
      <StorySection story={story} />
      <ApproachSection approach={approach} />
      <EthicsSection ethics={codeOfEthics} />
      <LogoGarden logoGarden={logoGarden} />
      <ReportSection report={report} /> */}
    </Layout>
  )
}

export const data = graphql`
  query {
    file(name: {eq: "about"}) {
      childMarkdownRemark {
        frontmatter {
          title
          hero {
            heading
            description
            image {
              alt
              imageFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 590
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`