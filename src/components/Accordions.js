import React from 'react'
import ControlledAccordions from './ControlledAccordions'

export default function Accordions({ heading, items }) {
  return (
    <>
      <h2>{heading}</h2>
      <ControlledAccordions items={items} />
    </>
  )
}
