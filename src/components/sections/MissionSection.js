import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import CardMission from "../CardMission"

export default function MissionSection({ mission: { heading, cards, description, callToAction } }) {
  const bgColor = ['#F8C7B4', '#FFE8C9', '#C6E1E2']

  return (
    <MissionSectionStyles>
      <h2>{heading}</h2>
      <div className="wrapper-cards">
        {cards.map((card, index) => (
          <CardMission key={card.text} card={card} bgColor={bgColor[index]}/>
        ))}
      </div>
      {/* Mission Cards */}
      <div className="wrapper-description">
        <p>{description}</p>
        {/* Call To Action */}
        <div className="wrapper-cta">
          <h3>{callToAction.heading}</h3>
          <Link className="btn btn-primary" to={callToAction.primaryPageLink.uri}>{callToAction.primaryPageLink.title}</Link>
          <Link className="btn btn-secondary" to={callToAction.secondaryPageLink.uri}>{callToAction.secondaryPageLink.title}</Link>
        </div>
      </div>
    </MissionSectionStyles>
  )
}

const MissionSectionStyles = styled.section`
  .wrapper-cards {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 20px;
  }
  .wrapper-description {
    margin: 2rem 0;
    display: grid;
    p {
      white-space: pre-wrap;
    }
  }
  .wrapper-cta {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem 0;
    text-align: center;
    & > * {
      margin: 0.5rem 0;
    }
  }

  @media (min-width: 640px) {
    .wrapper-cards {
      margin: 4rem 0;
      grid-gap: 3rem;
    }
    .wrapper-description {
      grid-template-columns: 2fr 1fr;
      grid-gap: 5rem;
    }
  }
`
