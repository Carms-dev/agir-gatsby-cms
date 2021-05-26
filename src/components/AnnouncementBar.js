import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)

  return (
    <AnnouncementBarStyles style={ { display: open ? `block` : `none` } }>
      {/* TODO: Content to be fetched thru GraphQL */}
      <Link to="/">Covid-19 Service Update</Link>
      <CloseIcon onClick={() => setOpen(false)} />
    </AnnouncementBarStyles>
  )
}

const AnnouncementBarStyles = styled.div`
  background: var(--primary-light);
  position: relative;
  text-align: center;
  padding: 12px;

  svg {
    position: absolute;
    right: 20px;
  }
`
