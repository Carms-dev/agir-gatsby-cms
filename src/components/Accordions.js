import React from 'react'
import styled from 'styled-components'

import ControlledAccordions from './ControlledAccordions'

export default function Accordions({ heading, items }) {
  return (
    <AccordionsStyles>
      <h2>{heading}</h2>
      <ControlledAccordions items={items} />
    </AccordionsStyles>
  )
}

const AccordionsStyles = styled.div`
  margin-bottom: 3rem;
  h2 {
    margin-bottom: 1rem;
  }

  @media (min-width: 640px) {
    margin-bottom: 0;
    margin-right: 5vw;
    h2 {
      margin-bottom: 2rem;
    }
  }

`
